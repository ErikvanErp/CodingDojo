from flask import Flask, request, render_template, redirect, session
from flask_app import app
from flask_app.models import survey

@app.route('/')
def index():
    return render_template("index.html")
    
@app.route('/survey/add', methods=['POST'])
def survey_add():
    print(request.form)

    # save form items in database format
    data = {
        "name" : request.form['name'],
        "location" : request.form['location'],
        "language" : request.form['language'],
        "comment" : request.form['comment']
    }
    # comment is optional
    if data['comment'] == "":
        data["comment"] = None

    # if data is invalid: 
    # save data to session
    # redirect to the data entry form
    session.clear()
    if(not survey.Survey.validate(data)):
        for key in data:
            session[key] = data[key]
        return redirect('/')

    # if data is valid:
    # create a new survey
    # save new survey.id in session for use in survey/show
    
    session['survey_id'] = survey.Survey.create(data)
    
    return redirect('/survey/show') 


@app.route('/survey/show')
def survey_show():
    this_survey = survey.Survey.get_by_id(session['survey_id'])
    return render_template("survey_show.html", this_survey=this_survey)
