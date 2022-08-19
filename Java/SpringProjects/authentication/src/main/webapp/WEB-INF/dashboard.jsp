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
				<h1>Welcome ${ user.getUserName() }!</h1>
			</nav>
			<nav>
				<a href="/logout" class="btn btn-outline-secondary mx-1">Logout</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-8">
				
				<p>Here it begins ... </p>
			
			</div>
		</div>
	</div>
</body>
</html>