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
	<title>Dashboard</title>
</head>
<body>
	<div class="container p-3">
		<div class="navbar">
			<nav>
				<h1>Welcome ${ user.getUserName() }!</h1>
				<p>Join our growing community.</p>
			</nav>
			<nav>
			<a href="/" class="btn btn-outline-secondary">Logout</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-5">
				${ user.id }
			
			</div>
		</div>
	</div>
</body>
</html>