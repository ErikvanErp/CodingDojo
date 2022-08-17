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
				<h1><c:out value="${ product.name }"/></h1>
			</nav>
			<nav>
				<a href="/" class="btn btn-outline-secondary">Home</a>
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-6">
				<h2>Categories</h2>
				<ul>
					<c:forEach var="category" items="${ product.categories }">
						<li>
							<c:out value="${ category.name }"/>
						</li>
					</c:forEach>
				</ul>
			</div>		
		</div>
		
		<div class="row">
			<div class="col col-6">
				<h2>Add Category:</h2>
				<form action="/products/${ product.id }/addcategory" method="POST">
					<select name="category_id">
						<c:forEach var="category" items="${ otherCategories }">
							<option value="${ category.id }"><c:out value="${ category.name }"/></option>
						</c:forEach>
					<select>
					<button type="submit" class="btn btn-primary">Add</button>
				</form>
			</div>		
		</div>
		
		
		
		
		
	</div>
</body>
</html>