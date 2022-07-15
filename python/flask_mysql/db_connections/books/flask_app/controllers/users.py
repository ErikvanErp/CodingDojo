from flask import render_template, request, redirect, session
from flask_app import app
from flask_app.models import user, book

@app.route('/')
def users_get_all():
    return render_template("users.html", users=user.User.get_all())

@app.route('/user/add', methods=['POST'])
def dojos_create():
    data = {
        'name' : request.form['name']
        }
    user.User.create(data)

    return redirect('/')


@app.route('/user/show/<int:user_id>')
def dojos_show(user_id):
    this_user=user.User.get_by_id(user_id)
    all_books=book.Book.get_all()
    
    fav_book_ids = []
    for fav_book in this_user.books:
        fav_book_ids.append(fav_book.id)

    books = []
    for this_book in all_books:
        if this_book.id in fav_book_ids:
            continue
        else:    
            books.append(this_book)

    return render_template("user_detail.html", 
        user=this_user, 
        books=books)


@app.route('/user/add_fav/<user_id>', methods=['POST'])
def add_favorite(user_id):
    for x in request.form:
        print("in request form: ", x)
    print(request.form['book_id'])

    user.User.add_favorite(user_id, request.form['book_id'])
    
    return redirect(f'/user/show/user_id/{user_id}')