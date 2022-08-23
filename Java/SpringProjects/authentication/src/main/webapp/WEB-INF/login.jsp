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
	<div class="container p-3">
		<div class="navbar">
			<nav>
				<h1>Welcome, House Hunter!</h1>
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-5">
				
				<h2>Register</h2>
				
				<form:form action="/register" method="POST" modelAttribute="newUser">
				
					<div class="form-group">
						<form:label path="userName">Name</form:label>
						<form:input type="text" path="userName" class="form-control"/>
						<form:errors path="userName" class="text-danger"/>		
					</div>
					
					<div class="form-group">
						<form:label path="email">Email</form:label>
						<form:input type="text" path="email" class="form-control"/>
						<form:errors path="email" class="text-danger"/>		
					</div>
				
					<div class="form-group">
						<form:label path="password">Password</form:label>
						<form:input type="password" path="password" class="form-control"/>
						<form:errors path="password" class="text-danger"/>		
					</div>

					<div class="form-group">
						<form:label path="confirm">Confirm Password</form:label>
						<form:input type="password" path="confirm" class="form-control"/>
						<form:errors path="confirm" class="text-danger"/>		
					</div>

					<button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form:form>
					
			</div>
		
			<div class="col col-5">
				
				<h2>Log in</h2>
				
				<form:form action="/login" method="POST" modelAttribute="newLogin">
									
					<div class="form-group">
						<form:label path="email">Email</form:label>
						<form:input type="text" path="email" class="form-control"/>
						<form:errors path="email" class="text-danger"/>		
					</div>
				
					<div class="form-group">
						<form:label path="password">Password</form:label>
						<form:input type="password" path="password" class="form-control"/>
						<form:errors path="password" class="text-danger"/>		
					</div>

					<button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form:form>
					
			</div>
		</div>
	</div>
</body>
</html>