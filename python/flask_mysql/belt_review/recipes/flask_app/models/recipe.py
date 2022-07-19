# pymysql connection 
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
from flask_app.models import user

import datetime


class Recipe():
    # class variable: schema name for this app
    db = "recipes_schema"

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under_30min = data['under_30min']
        self.date_cooked = data['date_cooked']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users_id = data['users_id'] # who posted the recipe
        self.user = "" # user object for users_id


    # get all recipes from database; 
    # JOIN: every recipe has a user who posted the recipe
    @classmethod 
    def get_all(cls):
        query = "SELECT * FROM recipes JOIN users ON recipes.users_id = users.id;"
        rows = connectToMySQL(cls.db).query_db(query)

        all_recipes = []
        for row in rows:
            this_recipe = cls(row)
            data = {
                "id" : row['users.id'],
                "first_name":  row['first_name'],
                "last_name" : row['last_name'],
                "email" : row['email'],
                "hashed_pwd": row['hashed_pwd'],
                "created_at":  row['users.created_at'],
                "updated_at" : row['users.updated_at']
            }
            this_recipe.user = user.User(data)
            all_recipes.append(this_recipe)

        return all_recipes

    # read recipe from database by id
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM recipes JOIN users ON recipes.users_id = users.id WHERE recipes.id = %(id)s;"

        rows = connectToMySQL(cls.db).query_db(query, data)
        if len(rows) == 0:
            return None
        else:
            row = rows[0]

        this_recipe = cls(row)
        data = {
            "id" : row['users.id'],
            "first_name":  row['first_name'],
            "last_name" : row['last_name'],
            "email" : row['email'],
            "hashed_pwd": row['hashed_pwd'],
            "created_at":  row['users.created_at'],
            "updated_at" : row['users.updated_at']
        }
        this_recipe.user = user.User(data)

        return this_recipe 

    # save recipe in database
    @classmethod
    def save(cls, data):
        query = "INSERT INTO recipes (name, under_30min, description, instructions, date_cooked,  users_id) VALUES (%(name)s, %(under_30min)s, %(description)s, %(instructions)s, %(date_cooked)s,  %(users_id)s);"

        return connectToMySQL(cls.db).query_db(query, data)

    # update recipe in database
    @classmethod
    def update(cls, data):
        query = "UPDATE recipes SET name = %(name)s, under_30min = %(under_30min)s, description = %(description)s, instructions = %(instructions)s, date_cooked = %(date_cooked)s WHERE id = %(id)s;"

        connectToMySQL(cls.db).query_db(query, data)

        return

    # delete recipe from database
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        connectToMySQL(cls.db).query_db(query, data)

        return

    # validate recipe data (for creation or update)
    @classmethod
    def is_valid(cls,data):
        is_valid = True

        # name, description, instructions must be 3 characters
        if len(data['name']) < 3:
            flash("name must be at least 3 characters")
            is_valid = False
        if len(data['description']) < 3:
            flash("description must be at least 3 characters")
            is_valid = False
        if len(data['instructions']) < 3:
            flash("instructions must be at least 3 characters")
            is_valid = False

        # date validation
        try:
            datetime.datetime.strptime(data['date_cooked'], '%Y-%m-%d')
        except:
            flash("please provide a valid Date Cooked/Made")
            is_valid = False

        return is_valid

