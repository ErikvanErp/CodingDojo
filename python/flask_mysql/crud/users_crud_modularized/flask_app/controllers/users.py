from flask import render_template, request, redirect
from flask_app import app
from flask_app.models.user import User

@app.route("/")
def readall():
    return render_template("readall.html", users=User.read_all())

@app.route("/user/add")
def add_user():
    return render_template("create.html")

@app.route("/user/insert", methods=['POST'])
def insert_user():
    new_id = User.insert(request.form)
    return redirect(f"/user/show/{new_id}")

@app.route('/user/show/<int:user_id>')
def show_user(user_id):
    return render_template("readone.html", user=User.read(user_id))

@app.route('/user/edit/<int:user_id>')
def edit_user(user_id):
    return render_template("edit.html", user=User.read(user_id))

@app.route('/user/update', methods=['POST'])
def update_user():
    User.update(request.form)
    return redirect(f"/user/show/{request.form['user_id']}")

@app.route("/user/delete/<int:user_id>")
def delete_user(user_id):
    User.delete(user_id)
    return redirect('/')