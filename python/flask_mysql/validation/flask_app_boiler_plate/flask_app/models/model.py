# pymysql connection 
from dataclasses import field
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
# from flask_app.models import ...

class Object():
    def __init__(self, data):
        self.field = data['field']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO .. (.., ..) VALUES (%(..)s, %(..)s);"
        new_id = connectToMySQL('..schema..').query_db(query, data)
        return new_id 

    @classmethod 
    def get_by_id(cls, this_id):
        query = "SELECT * FROM .. WHERE .. .id = %(id)s;"
        data = {
            "id": this_id
        }
        rows = connectToMySQL('..schema..').query_db(query, data)
        return cls( rows[0] )

    @classmethod 
    def get_all(cls):
        query = "SELECT * FROM .. "
        rows = connectToMySQL('..schema..').query_db(query)

        result = []
        for row in rows:
            result.append( cls(row) ) 

        return result

    @staticmethod
    def validate(data):
        is_valid = True

        # if(..):
        #     flash("..")
        #     is_valid = False

        return is_valid







    