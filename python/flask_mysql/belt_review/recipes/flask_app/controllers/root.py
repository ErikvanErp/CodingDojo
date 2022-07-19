from flask import render_template, request, redirect, session
from flask import flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models import recipe


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/user/register', methods=['POST'])
def user_register():
    # save posted form input as data dictionary in User object format
    data = {
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'email' : request.form['email'],
        'password' : request.form['password'],
        'password_confirm' : request.form['password_confirm'],
    }

    # check if form data are valid
    # register and login if valid
    # redirect back to root if invalid
    if User.is_valid(data):
        session.clear()
        session['user_id'] = User.create(data)
        session['first_name'] = data["first_name"]
        session['is_logged_in'] = True
        return redirect('/user/success')
    else:
        return redirect('/')

@app.route('/user/login', methods=['POST'])
def user_login():
    # save posted form input as data dictionary in User object format
    data = {
        'email' : request.form['email'],
        'password' : request.form['password']
    }
    
    # flash category 'is_valid_login'
    # tells the template where to display the messages
    if len(data['email']) < 1 or len(data['password']) < 1:
        flash("Please provide an email and password", 'is_valid_login')
        return redirect('/')

    if not User.check_email_and_password(data):
        flash("invalid email/password", 'is_valid_login')
        return redirect('/')
    
    # on valid login: store user data in session
    this_user = User.get_by_email(data)
    session.clear()
    session["user_id"] = this_user.id 
    session['first_name'] = this_user.first_name
    session['is_logged_in'] = True
    return redirect('/user/success')
        
# route for succcesful login
@app.route('/user/success')
def user_success():
    if not session or not session['is_logged_in']:
        return redirect('/')

    all_recipes = recipe.Recipe.get_all()

    return render_template("recipes.html", all_recipes=all_recipes)

@app.route('/user/logout')
def user_logout():
    session.clear()
    return redirect('/')









