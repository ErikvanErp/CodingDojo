from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user

class Book():
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users = []


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books ORDER BY title"
        rows = connectToMySQL('books').query_db(query)
        
        books = []
        for row in rows:
            books.append(cls(row))

        return books
    
    # get book data for one book by id, 
    # complete with all users who favorit it
    @classmethod
    def get_by_id(cls, book_id):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN users ON favorites.user_id = users.id WHERE books.id = %(book_id)s;"
        data = {
            "book_id" : book_id
        }
        rows = connectToMySQL('books').query_db(query, data)
        
        # create book object
        book = cls(rows[0])
        
        # save book.users who favorite this book 
        for row in rows:
            data = {
                "id" : row['users.id'],
                "name" : row['name'],
                "created_at" : row['users.created_at'],
                "updated_at" : row['users.updated_at']
            }
            print(data)
            if data["id"] != None:
                book.users.append(user.User(data))
        
        return book


    @classmethod
    def create(cls, data):
        query = "INSERT INTO books (title, num_of_pages) VALUES (%(title)s, %(num_of_pages)s);"
        return connectToMySQL('books').query_db(query, data)
        
