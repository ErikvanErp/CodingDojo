# pymysql connection 
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

class Friendship():
    # class variable: schema name
    db = "friendships" 

    def __init__(self, data):
        self.user_id = data['user_id']
        self.friend_id = data['friend_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = None  # a User object
        self.friend = None  # a User object


    @classmethod
    def create(cls, data):
        query = "INSERT INTO friendships (user_id, friend_id) VALUES (%(user_id)s, %(friend_id)s);"
        return connectToMySQL(cls.db).query_db(query, data)


    @classmethod 
    def get_all(cls):
        # get all friendships, as well as the users associated with user_id and friend_id
        # because there are 2 joins to the same users table, the 2nd join is to a derived table
        query = "SELECT * FROM friendships LEFT JOIN users ON user_id = users.id LEFT JOIN (SElECT * FROM users) d ON friend_id = d.id;"
        rows = connectToMySQL(cls.db).query_db(query)

        # the result of the query is converted to a list of Friendship objects
        # each Friendship object has two attributes that are User objects

        result = []
        for row in rows:
            this_friendship = cls(row)
            user_data = {
                "id" : row['id'],
                "first_name" : row['first_name'],
                "last_name" : row['last_name'],
                "created_at" : row['users.created_at'],
                "updated_at" : row['users.updated_at']
            }
            this_friendship.user = user.User(user_data)
            friend_data = {
                "id" : row['d.id'],
                "first_name" : row['d.first_name'],
                "last_name" : row['d.last_name'],
                "created_at" : row['d.created_at'],
                "updated_at" : row['d.updated_at']
            }
            this_friendship.friend = user.User(friend_data)
            result.append( this_friendship ) 

        return result


    @staticmethod
    def is_valid(data):
        is_valid = True

        query = "SELECT * FROM friendships LEFT JOIN users ON user_id = users.id LEFT JOIN (SElECT * FROM users) d ON friend_id = d.id WHERE user_id = %(user_id)s AND friend_id = %(friend_id)s;"

        rows = connectToMySQL(Friendship.db).query_db(query, data)

        if(data['user_id'] == "-1"):
            flash("Please select a user")
            is_valid = False
        if(data['friend_id'] == "-1"):
            flash("Please select a friend")
            is_valid = False
        if(data['user_id'] == data['friend_id'] and data['user_id'] != "-1"):
            flash("User and friend should not be the same person")
            is_valid = False
        if(len(rows) > 0):
            flash("This friendship already exists")
            is_valid = False

        return is_valid







    