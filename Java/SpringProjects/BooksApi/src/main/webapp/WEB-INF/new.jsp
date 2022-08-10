<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<title>Books</title>
</head>
<body>
<div class="container mt-3">
	<div class="row">
		<div class="col col-4">
			
			<form action="/book/create", method="POST">
			
				<div class="form-group">
					<label for="title">Title</label>
					<input type="text" class="form-control" id="title" name="title">
				</div>
				<div class="form-group">
					<label for="description">Description</label>
					<textarea class="form-control" id="description" name="description" rows="4"></textarea>
				</div>
				<div class="form-group">
					<label for="language">Language</label>
					<input type="text" class="form-control" id="language" name="language">
				</div>
				<div class="form-group">
					<label for="title">Pages</label>
					<input type="text" class="form-control" id="pages" name="pages">
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>

			</form>
			
		</div>		
	</div>
</div>



</body>
</html>