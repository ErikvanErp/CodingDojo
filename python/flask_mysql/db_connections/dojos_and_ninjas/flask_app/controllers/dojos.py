from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models import dojo, ninja

@app.route('/')
def dojos_get_all():
    return render_template("dojos.html", dojos=dojo.Dojo.get_all())

@app.route('/dojo/add', methods=['POST'])
def dojos_create():
    data = {
        'name' : request.form['name']
        }
    dojo.Dojo.create(data)

    return redirect('/')

@app.route('/dojo/show/<int:dojo_id>')
def dojos_show(dojo_id):
    return render_template("dojo_detail", dojo=dojo.Dojo.get_by_id(dojo_id))