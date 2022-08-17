<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<title>Book Club</title>
</head>
<body>
	<div class="container col-8 mx-auto p-3">
		<div class="navbar">
			<nav>
				<h1>Add a Book to Your Shelf.</h1>
			</nav>
			<nav>
				<a href="/home" class="btn btn-outline-secondary">Dashboard</a>
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-6">
						
				<form:form action="/books/new" method="POST" modelAttribute="book">
					<form:input type="hidden" path="user" value="${ user.id }"/>
									
					<div class="form-group">
						<form:label path="title">Title</form:label>
						<form:input type="text" path="title" class="form-control"/>
						<form:errors path="title" class="text-danger"/>		
					</div>
					
					<div class="form-group">
						<form:label path="author">Author</form:label>
						<form:input type="text" path="author" class="form-control"/>
						<form:errors path="author" class="text-danger"/>		
					</div>
				
					<div class="form-group">
						<form:label path="thoughts">My Thoughts</form:label>
						<form:textarea type="text" path="thoughts" class="form-control" rows="5"/>
						<form:errors path="thoughts" class="text-danger"/>		
					</div>

					<button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form:form>
					
			</div>
		
		</div>
	</div>
</body>
</html>