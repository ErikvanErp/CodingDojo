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
	<title>Languages</title>
</head>
<body>

<div class="container p-3">

	<div class="navbar col-6">
		<nav>
			<form action="/language/${ language.id }/delete" method="POST">
				<input type="hidden" name="_method" value="DELETE">
				<button type="submit" class="btn btn-outline-primary">Delete</button>
			</form>
		</nav>
		<nav>
			<a href="/languages" class="btn btn-outline-primary">Dashboard</a>
		</nav>
	</div>
	<div class="row">
		<div class="col col-4">
	
			<form:form action="/language/${ language.id }/update" method="POST" modelAttribute="language">
			<input type="hidden" name="_method" value="PUT">
			
				<div class="form-group">
					<form:label path="name">Name</form:label>
					<form:input type="text" path="name" class="form-control"/>
					<form:errors path="name" class="text-danger"/>		
				</div>
				
				<div class="form-group">
					<form:label path="creator">Creator</form:label>
					<form:input type="text" path="creator" class="form-control"/>
					<form:errors path="creator" class="text-danger"/>		
				</div>
			
				<div class="form-group">
					<form:label path="version">Version</form:label>
					<form:input type="text" path="version" class="form-control"/>
					<form:errors path="version" class="text-danger"/>		
				</div>
			
				<button type="submit" class="btn btn-primary mt-3">Submit</button>
			
			</form:form>

		</div>
	</div>
</div>

</body>
</html>