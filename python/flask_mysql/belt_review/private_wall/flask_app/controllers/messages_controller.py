from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models import user, message

# route for succcesful login
@app.route('/messages')
def messages_root():
    # redirect if user has not yet logged in
    if not session or not session['is_logged_in']:
        return redirect('/')

    # get messages sent to this user
    data = {
        "to_user_id" : session["user_id"]
    }
    received_messages = message.Message.get_by_sent_to_user_id(data)


    return render_template("messages.html", received = received_messages)

