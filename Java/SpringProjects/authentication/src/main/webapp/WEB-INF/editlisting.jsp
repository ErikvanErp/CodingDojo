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
	<title>Java Belt Exam</title>
</head>
<body>
	<div class="container p-3 col-8 mx-auto">
		<div class="navbar">
			<nav>
				<h1>Edit Listing</h1>
			</nav>
			<nav>
				<a href="/dashboard" class="btn btn-outline-secondary mx-1">Dashboard</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-8">
							
				<form:form action="/listings/${ listing.id }/edit" method="POST" modelAttribute="listing">
					<input type="hidden" name="_method" value="PUT"/>
					<form:input type="hidden" path="user" value="${ user.id }"/>
									
					<div class="form-group">
						<form:label path="address">Address</form:label>
						<form:input type="text" path="address" class="form-control"/>
						<form:errors path="address" class="text-danger"/>		
					</div>
					
					<div class="form-group">
						<form:label path="price">Price</form:label>
						<form:textarea type="number" path="price" class="form-control"/>
						<form:errors path="price" class="text-danger"/>		
					</div>
				
					<div class="form-group">
						<form:label path="listingDate">Listing Date</form:label>
						<form:input type="date" path="listingDate" class="form-control"/>
						<form:errors path="listingDate" class="text-danger"/>		
					</div>

					<button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form:form>	
				
				<form action="/listings/${ listing.id }/delete" method="POST">
					<input type="hidden" name="_method" value="DELETE"/>
					<button type="submit" class="btn btn-outline-danger">Delete</button>
				</form>	
				
			</div>
		</div>
	</div>
</body>
</html>