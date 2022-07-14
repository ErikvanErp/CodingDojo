from mysqlconnection import connectToMySQL

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
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES ( %(fname)s, %(lname)s, %(email)s, NOW(), NOW() )"
                
        return connectToMySQL('users').query_db(query, form)

    @property
    def full_name(self):
        return self.first_name + " " + self.last_name