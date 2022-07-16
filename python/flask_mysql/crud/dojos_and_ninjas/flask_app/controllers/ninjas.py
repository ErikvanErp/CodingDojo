from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models import dojo, ninja

@app.route('/ninja/add')
def ninjas_add():
    return render_template("ninja.html", dojos=dojo.Dojo.get_all())

@app.route('/ninja/create', methods=['POST'])
def ninja_create():
    data = {
        'dojo_id' : request.form['dojo_id'],
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'age' : request.form['age']
        }
    ninja.Ninja.create(data)

    return redirect(f"/dojo/show/{data['dojo_id']}")


