from flask import render_template, request, redirect, session

from flask_app import app
# import models, as necessary
from flask_app.models.user import User
from flask_app.models.friendship import Friendship

@app.route('/')
def index():
    return render_template("index.html", friendships=Friendship.get_all(), users=User.get_all())

@app.route('/user/add', methods=['POST'])
def user_add():
    data = {
        "first_name" : request.form['first_name'],
        "last_name" : request.form['last_name']
    }
    new_id = User.create(data)
    return redirect('/')

@app.route('/friendship/add', methods=['POST'])
def friendship_add():
    data = {
        "user_id" : request.form['user_id'],
        "friend_id" : request.form['friend_id'] 
    }
    if Friendship.is_valid(data):
        Friendship.create(data)

    return redirect('/')









