from flask import Flask
from flask import render_template, session
from flask import request, redirect

from flask_app import app
# import models, as necessary
from flask_app.models import email


@app.route('/email/add', methods=['POST'])
def email_add():
    data = {
        "email_address" : request.form['email_address']
    }
    if(not email.Email.validate(data)):
        return redirect('/')

    email.Email.create(data)
    session['action'] = 'create'
    
    return redirect('/email/show_all')


@app.route('/email/show_all')
def email_show_all():
    return render_template("emails.html", all_emails=email.Email.get_all())

@app.route('/email/<int:email_id>/delete')
def email_delete(email_id):
    data = {
        "email_id": email_id
    }
    email.Email.delete(data)
    session['action'] = 'delete'

    return render_template("emails.html", all_emails=email.Email.get_all())







