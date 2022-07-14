from flask_app.config.mysqlconnection import connectToMySQL

class User():
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name'];
        self.last_name = data['last_name'];
        self.email = data['email'];
        self.created_at = data['created_at'];
        self.updated_at = data['updated_at'];

    @classmethod
    def read_all(cls):
        query = "SELECT * FROM users";
        results = connectToMySQL('users').query_db(query)

        users = []
        for row in results:
            users.append(cls(row))
        return users

    @classmethod
    def insert(cls, form):
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES ( %(fname)s, %(lname)s, %(email)s, NOW(), NOW() );"
                
        return connectToMySQL('users').query_db(query, form)

    @classmethod
    def read(cls, user_id):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"

        return connectToMySQL('users').query_db(query, {"user_id" : user_id})[0]

    @classmethod
    def update(cls, data):
        query = "UPDATE users SET first_name=%(fname)s, last_name=%(lname)s, email=%(email)s, updated_at=NOW() WHERE id=%(user_id)s;"

        return connectToMySQL('users').query_db(query, data)

    @classmethod
    def delete(cls, user_id):
        query = "DELETE FROM users WHERE id = %(user_id)s"
        
        return connectToMySQL('users').query_db(query, {"user_id" : user_id})

    @property
    def full_name(self):
        return self.first_name + " " + self.last_name