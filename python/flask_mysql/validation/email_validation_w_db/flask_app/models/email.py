# pymysql connection 
from asyncio import format_helpers
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

class Email():
    def __init__(self, data):
        self.id = data['id']
        self.email_address = data['email_address']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        # data is a dictionary {"email_address": ..}
        query = "INSERT INTO emails (email_address) VALUES (%(email_address)s);"
        new_id = connectToMySQL('emails_schema').query_db(query, data)
        return new_id 

    @classmethod 
    def get_by_email_address(cls, data):
        query = "SELECT * FROM emails WHERE email_address = %(email_address)s;"
        rows = connectToMySQL('emails_schema').query_db(query, data)
        if rows:
            return cls( rows[0] )
        else:
             return None

    @classmethod 
    def get_all(cls):
        query = "SELECT * FROM emails"
        rows = connectToMySQL('emails_schema').query_db(query)

        result = []
        for row in rows:
            result.append( Email(row) ) 

        return result

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM emails WHERE emails.id = %(email_id)s"
        connectToMySQL('emails_schema').query_db(query, data)



    @staticmethod
    def validate(data):
        is_valid = True

        email_regex = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

        if len(data['email_address']) > 320:
            flash("email cannot be more than 320 characters long")
            is_valid = False
        if not email_regex.match(data['email_address']):
            flash("Invalid email address")
            is_valid = False
        if Email.get_by_email_address(data):
            flash("Email adress already exists")
            is_valid = False
            
        return is_valid

