# pymysql connection 
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

class Survey():
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO surveys (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"

        survey_id = connectToMySQL('dojo_survey_schema').query_db(query, data)
        return survey_id

    @classmethod
    def get_by_id(cls, survey_id):
        query = "SELECT * FROM surveys WHERE surveys.id = %(survey_id)s ;"
        data = {
            "survey_id": survey_id
        }

        rows = connectToMySQL('dojo_survey_schema').query_db(query, data)
        return Survey( rows[0] )

    @staticmethod
    def validate(data):
        is_valid = True

        if (len(data['name']) == 0):
            flash("Please enter your name")
            is_valid = False
        if (len(data['name']) == 1):
            flash("Name must be at least 2 characters long")
            is_valid = False
        if (len(data['name']) > 45):
            flash("Name cannot exceed 45 characters")
            is_valid = False
        if (data['location'] == "-1"):
            flash("Please select a location")
            is_valid = False
        if (data['language'] == "-1"):
            flash("Please select a language")
            is_valid = False
        
        return is_valid








