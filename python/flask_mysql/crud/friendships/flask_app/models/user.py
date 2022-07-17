# pymysql connection 
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import friendship

class User():
    # class variable: schema name
    db = "friendships" 

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name, last_name) VALUES (%(first_name)s, %(last_name)s);"
        new_id = connectToMySQL(cls.db).query_db(query, data)
        return new_id 

    @classmethod 
    def get_all(cls):
        query = "SELECT * FROM users;"
        rows = connectToMySQL(cls.db).query_db(query)

        result = []
        for row in rows:
            result.append( cls(row) ) 

        return result

    @staticmethod
    def is_valid(data):
        is_valid = True

        #if(data['first_name']):
        #     flash("..")
        #     is_valid = False

        return is_valid







    