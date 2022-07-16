from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models import user, book

@app.route('/books')
def books_get_all():
    return render_template("books.html", books=book.Book.get_all())

@app.route('/book/add', methods=['POST'])
def books_create():
    data = {
        'title' : request.form['title'],
        'num_of_pages' : request.form['num_of_pages']
        }
    book.Book.create(data)

    return redirect('/books')


@app.route('/book/show/<int:book_id>')
def books_show(book_id):
    # get one book 
    this_book=book.Book.get_by_id(book_id)
    
    # first get all users
    all_users=user.User.get_all()
    
    # then select users that DO NOT favorite this book
    # by comparing user_id's
    fav_user_ids = []
    for fav_user in this_book.users:
        fav_user_ids.append(fav_user.id)

    users = []
    for this_user in all_users:
        if this_user.id in fav_user_ids:
            continue
        else:    
            users.append(this_user)

    # pas this book and all users that do NOT favorite it to the template
    return render_template("book_detail.html", 
        book=this_book, 
        users=users)


@app.route('/book/add_fav/<book_id>', methods=['POST'])
def books_add_favorite(book_id):

    # the add_favorite static method only exists in the user module 
    user.User.add_favorite(request.form['user_id'], book_id)
    
    return redirect(f'/book/show/{book_id}')