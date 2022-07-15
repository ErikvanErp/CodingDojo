from flask_app.config.mysqlconnection import connectToMySQL

class Book():
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books"
        rows = connectToMySQL('books').query_db(query)
        
        books = []
        for row in rows:
            books.append(cls(row))

        return books
    

    @classmethod
    def create(cls, data):
        query = "INSERT INTO books (title, num_of_pages) VALUES (%(title)s, %(num_of_pages)s);"
        return connectToMySQL('books').query_db(query, data)
        
