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
	<title>Dojos and Ninjas</title>
</head>
<body>
	<div class="container p-3">
		<div class="row">
			<div class="col col-4">
			
				<h2>New Dojo</h2>
				<form:form action="/dojos/new" method="POST" modelAttribute="dojo">
					<div class="form-group">
						<form:label path="name">Name</form:label>
						<form:input path="name" type="text" class="form-input"/><br>
						<form:errors path="name" class="text-danger"/>
					</div>
					<button type="submit" class="btn btn-primary mt-3">Create</button>
				</form:form>
			
			</div>
		</div>
	</div>		
</body>
</html>