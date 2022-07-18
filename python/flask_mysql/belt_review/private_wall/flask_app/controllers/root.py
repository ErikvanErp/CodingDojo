from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models.user import User
from flask_app.controllers import messages_controller

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user/register', methods=['POST'])
def user_register():
    data = {
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'email' : request.form['email'],
        'password' : request.form['password'],
        'password_confirm' : request.form['password_confirm'],
    }

    # validate form data
    # if invalid: redirect back to root
    # if valid: create new user, then login
    if not User.is_valid(data):
        return redirect('/')
    
    new_id = User.create(data)
    
    # on successful registration, create new session
    session.clear()
    session['user_id'] = new_id
    session['first_name'] = data["first_name"]
    session['last_name'] = data["last_name"]
    session['is_logged_in'] = True
    
    return redirect('/messages')

@app.route('/user/login', methods=['POST'])
def user_login():
    data = {
        'email' : request.form['email'],
        'password' : request.form['password']
    }
    
    # verify login credentials
    is_valid_login, this_user = User.is_valid_login(data)
    if not is_valid_login:
        return redirect('/')

    # on succesful login: create new session    
    session.clear()
    session['user_id'] = this_user.id
    session['first_name'] = this_user.first_name
    session['last_name'] = this_user.last_name
    session['is_logged_in'] = True
    
    return redirect('/messages')
        

@app.route('/user/logout')
def user_logout():
    session.clear()
    return redirect('/')





