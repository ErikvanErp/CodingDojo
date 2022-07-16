from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import book

class User():
    def __init__(self, db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']
        self.books = []


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        rows = connectToMySQL('books').query_db(query)
        
        users = []
        for row in rows:
            users.append(cls(row))

        return users
    
    # get user data for one user by user.id, 
    # complete with all favorited books
    @classmethod
    def get_by_id(cls, user_id):
        query = "SELECT * FROM users LEFT JOIN favorites ON users.id = favorites.user_id LEFT JOIN books ON favorites.book_id = books.id WHERE users.id = %(user_id)s ORDER BY title;"
        data = {
            "user_id" : user_id
        }
        rows = connectToMySQL('books').query_db(query, data)
        
        user = cls(rows[0])
        
        for row in rows:
            data = {
                "id" : row['books.id'],
                "title" : row['title'],
                "num_of_pages" : row['num_of_pages'],
                "created_at" : row['books.created_at'],
                "updated_at" : row['books.updated_at']
            }
            print(data)
            if data["id"] != None:
                user.books.append(book.Book(data))
        
        return user


    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (name) VALUES (%(name)s);"
        new_id = connectToMySQL('books').query_db(query, data)
        

    @staticmethod
    def add_favorite(user_id, book_id):
        query = "INSERT INTO favorites (user_id, book_id) VALUES (%(user_id)s, %(book_id)s);"
        data = {
            'user_id' : user_id,
            'book_id': book_id
        }
        connectToMySQL('books').query_db(query, data)




