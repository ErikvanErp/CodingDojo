from flask import render_template, request, redirect, session
from flask import flash
from flask_app import app
from flask_app.models import recipe, user

@app.route('/recipe/add')
def recipe_add():
    if not session or not session['is_logged_in']:
        return redirect('/')

    return render_template("recipe_add.html")

@app.route('/recipe/save', methods=['POST'])
def recipe_create():
    if not session or not session['is_logged_in']:
        return redirect('/')

    print(request.form)
    data = {
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_cooked": request.form["date_cooked"],
        "under_30min": int(request.form["under_30min"]),
        "users_id": int(session['user_id'])
    }

    if not recipe.Recipe.is_valid(data):
        return redirect('/recipe/add')

    recipe.Recipe.save(data)

    return redirect('/user/success')

# route for viewing recipe details
# get recipe data and render the recipe view template
@app.route('/recipe/<int:recipe_id>/view')
def recipe_view(recipe_id):
    if not session or not session['is_logged_in']:
        return redirect('/')

    this_recipe = recipe.Recipe.get_by_id({"id": recipe_id})

    return render_template("recipe_view.html", recipe=this_recipe)

# route for editing a recipe
# get recipe data and render the recipe edit template
@app.route('/recipe/<int:recipe_id>/edit')
def recipe_edit(recipe_id):
    if not session or not session['is_logged_in']:
        return redirect('/')

    this_recipe = recipe.Recipe.get_by_id({"id": recipe_id})
    
    return render_template("recipe_edit.html", recipe=this_recipe)

# route that updates the recipes table in the database
@app.route('/recipe/update', methods=['POST'])
def recipe_update():
    if not session or not session['is_logged_in']:
        return redirect('/')

    print(request.form)
    data = {
        "id": request.form["id"],
        "name": request.form["name"],
        "description": request.form["description"],
        "instructions": request.form["instructions"],
        "date_cooked": request.form["date_cooked"],
        "under_30min": int(request.form["under_30min"]),
        "users_id": int(session['user_id'])
    }

    if not recipe.Recipe.is_valid(data):
        return redirect(f"/recipe/{request.form['id']}/edit")

    recipe.Recipe.update(data)

    return redirect('/user/success')

@app.route('/recipe/<int:recipe_id>/delete')
def recipe_delete(recipe_id):
    if not session or not session['is_logged_in']:
        return redirect('/')

    recipe.Recipe.delete({"id": recipe_id})
    return redirect('/user/success')

    

    



