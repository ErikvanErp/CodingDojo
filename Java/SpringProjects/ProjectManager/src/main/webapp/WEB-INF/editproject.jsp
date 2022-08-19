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
	<title>Project Manager</title>
</head>
<body>
	<div class="container col-8 mx-auto p-3">
		<div class="navbar">
			<nav>
				<h1>Edit Project</h1>
			</nav>
			<nav>
				<a href="/dashboard" class="btn btn-outline-danger">Cancel</a>
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-6">
						
				<form:form action="/projects/${ project.id }/edit" method="POST" modelAttribute="project">
					<form:input type="hidden" path="user" value="${ user.id }"/>
									
					<div class="form-group">
						<form:label path="title">Title</form:label>
						<form:input type="text" path="title" class="form-control"/>
						<form:errors path="title" class="text-danger"/>		
					</div>
					
					<div class="form-group">
						<form:label path="description">Description</form:label>
						<form:textarea type="text" path="description" class="form-control" rows="4"/>
						<form:errors path="description" class="text-danger"/>		
					</div>
				
					<div class="form-group">
						<form:label path="dueDate">Due Date</form:label>
						<form:input type="date" path="dueDate" class="form-control"/>
						<form:errors path="dueDate" class="text-danger"/>		
					</div>

					<button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form:form>		
					
			</div>
		
		</div>
	</div>
</body>
</html>