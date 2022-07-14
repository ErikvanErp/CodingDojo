from mysqlconnection import connectToMySQL

class Friend:
    def __init__(self, data):
        self.id = data['id'];
        self.first_name = data['first_name'];
        self.last_name = data['last_name'];
        self.created_at = data['created_at'];
        self.updated_at = data['updated_at'];
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM friends;"
        results = connectToMySQL('first_flask').query_db(query)
        friends = []
        for row in results:
            friends.append(cls(row))
        return friends

    @classmethod
    def create(cls, data):
        # prepared statement
        query = "INSERT INTO friends (first_name, last_name, created_at, updated_at) VALUES ( %(fname)s, %(lname)s, NOW(), NOW())"

        return connectToMySQL('first_flask').query_db(query, data)

