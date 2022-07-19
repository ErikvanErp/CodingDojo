from flask import render_template, request, redirect, session, flash
from flask_app import app
from flask_app.models import user, message

# route for succcesful login
@app.route('/messages')
def messages_root():
    # redirect if user has not yet logged in
    if not session or not session['is_logged_in']:
        return redirect('/')

    # get messages sent to this user
 
    received_messages = message.Message.get_by_sent_to_user_id(session["user_id"])
    number_sent_msgs = message.Message.number_of_sent_messages_by_id(session["user_id"])
    all_users = user.User.get_all()

    return render_template("messages.html", received = received_messages, number_sent_msgs=number_sent_msgs, all_users=all_users)

@app.route('/message/send', methods=['POST'])
def message_send():
    # redirect if user has not yet logged in
    if not session or not session['is_logged_in']:
        return redirect('/')

    data = {
        "from_user_id": session["user_id"],
        "to_user_id": request.form['to_user_id'],
        "message_text": request.form['message_text']
    }

    if message.Message.is_valid(data):
        flash("Message sent")
        message.Message.send(data)
        
    return redirect('/messages')

@app.route('/message/<int:message_id>/delete')
def message_delete(message_id):
    # redirect if user has not yet logged in
    if not session or not session['is_logged_in']:
        return redirect('/')

    message.Message.delete({"message_id" : message_id})

    return redirect('/messages')