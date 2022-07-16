from flask import Flask
from flask import render_template, session
#from flask import request, redirect

from flask_app import app
# import models, as necessary
# from flask_app.models import 

@app.route('/')
def index():
    return render_template("index.html")









