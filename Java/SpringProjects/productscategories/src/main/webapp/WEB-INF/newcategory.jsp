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
	<title>Products and Categories</title>
</head>
<body>
	<div class="container col-8 mx-auto">
		<div class="navbar">
			<nav>
				<h1>New Category</h1>
			</nav>
			<nav>
				<a href="/" class="btn btn-outline-secondary">Home</a>
			</nav>
		</div>
		<div class="row">
			<div class="col col-6">
			
				<form:form action="/categories/create" method="POST" modelAttribute="category">
					<div class="form-group">
						<form:label path="name">Name</form:label>
						<form:input path="name" type="text"/>
						<form:errors path="name" class="text-danger"/>
					</div>
				
					<button type="submit" class="btn btn-primary">Submit</button>
				</form:form>
				
			</div>
		</div>		
		
	</div>
</body>
</html>