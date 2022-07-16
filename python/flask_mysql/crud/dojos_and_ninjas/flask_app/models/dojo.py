from unittest import result
from urllib.parse import quote_from_bytes
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja

class Dojo():
    def __init__(self, db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos"
        rows = connectToMySQL('dojos_and_ninjas').query_db(query)
        
        dojos = []
        for row in rows:
            dojos.append(cls(row))

        return dojos
    
    @classmethod
    def get_by_id(cls, dojo_id):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(dojo2_id)s; "
        data = {
            "dojo2_id" : dojo_id
        }
        rows = connectToMySQL('dojos_and_ninjas').query_db(query, data)
        
        dojo = cls(rows[0])
        
        for row in rows:
            ninja_data = {
                "id" : row['ninjas.id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "age" : row['age'],
                "created_at" : row['ninjas.created_at'],
                "updated_at" : row['ninjas.updated_at']
            }
            if ninja_data["id"] != None:
                dojo.ninjas.append(ninja.Ninja(ninja_data))
        
        return dojo



    @classmethod
    def create(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        new_id = connectToMySQL('dojos_and_ninjas').query_db(query, data)
        


