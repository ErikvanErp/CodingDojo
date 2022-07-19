from datetime import datetime
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

import math
from datetime import date, time, datetime, timedelta


class Message():
    db = "private_wall_schema"  # schema name for this app

    def __init__(self, data):
        self.id = data['id']
        self.from_user_id = data['from_user_id']
        self.to_user_id = data['to_user_id']
        self.message_text = data['message_text']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.from_user = ""  # sender
        self.to_user = ""  # receiver

    @property
    def time_posted_text(self):
        # difference (in microsecs) between now and created_at
        delta = datetime.now() - self.created_at
        days =  delta.days
        years = math.floor(days / 365)
        months = math.floor(days * 12/ 365)
        seconds = delta.seconds
        minutes = math.floor(seconds / 60)
        hours = math.floor(seconds / 3600)

        if years > 0:
            result = f"more than 1 yea ago"
        elif months > 0:
            result = f"{months} months ago"
        elif days > 1:
            result = f"{days} days ago"
        elif days > 0:
            result = "1 day ago"
        elif hours > 1:
            result = f"{hours} hours ago"
        elif hours > 0:
            result = "1 hour ago"
        elif minutes > 1:
            result = f"{minutes} minutes ago"
        elif minutes > 0:
            result = "1 minute ago"
        else:
            result = "just now"

        return result

    @classmethod
    def send(cls, data):
        query = "INSERT INTO messages (from_user_id, to_user_id, message_text) VALUES (%(from_user_id)s, %(to_user_id)s, %(message_text)s);"
        
        return connectToMySQL(cls.db).query_db(query, data)


    @classmethod
    def get_by_sent_to_user_id(cls, user_id):
        # select messages with given receiver user_id
        # join to the user data for the sender 
        # since the reciever is known, ignore this
        query = "SELECT * FROM messages LEFT JOIN users ON from_user_id = users.id WHERE to_user_id = %(to_user_id)s;"
        data = {
            "to_user_id" : user_id 
        }   

        rows = connectToMySQL(cls.db).query_db(query, data)
        if len(rows) < 1:
            return None
        
        received_messages = []
        for row in rows:
            this_msg = cls(row)
            from_data = {
                "id": row['users.id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "email": row['email'],
                "hashed_pwd": None,  # hide pwd info
                "created_at": row['users.created_at'],
                "updated_at": row['users.updated_at']
            }
            this_msg.from_user = user.User(from_data)
            received_messages.append( this_msg )


        return received_messages

    @classmethod
    def number_of_sent_messages_by_id(cls, user_id):
        # count the number of messages sent from user_id
        query = "SELECT COUNT(*) AS count FROM messages WHERE from_user_id = %(from_user_id)s GROUP BY from_user_id;"
        data = {
            "from_user_id" : user_id
        }
        result = connectToMySQL(cls.db).query_db(query, data)

        if len(result) == 0:
            number_of_msgs = 0
        else:
            number_of_msgs = result[0]['count']

        return number_of_msgs

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM messages WHERE messages.id = %(message_id)s;"
        connectToMySQL(cls.db).query_db(query, data)

    @staticmethod
    def is_valid(data):

        is_valid = True

        if data['to_user_id'] == "-1":
            flash("Please select a recipient")
            is_valid = False
        if len(data['message_text']) == 0:
            flash("Message text is empty")
            is_valid = False
        if len(data['message_text']) > 300:
            flash("Message text cannot exceed 300 characters")
            is_valid = False

        return is_valid