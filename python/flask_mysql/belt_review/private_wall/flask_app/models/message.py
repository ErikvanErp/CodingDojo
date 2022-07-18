from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

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

    @classmethod
    def get_by_sent_to_user_id(cls, data):
        # select messages with given receiver user_id
        # join to the user data for the sender 
        # since the reciever is known, ignore this
        query = "SELECT * FROM messages LEFT JOIN users ON from_user_id = users.id WHERE to_user_id = %(to_user_id)s;"

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

