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

	<div class="container  col-10 mx-auto p-3">
		<div class="navbar">
			<nav>
				<h1>Welcome ${ user.userName }!</h1>
			</nav>
			<nav>
				<a href="/projects/new" class="btn btn-outline-secondary">New Project</a>
				<a href="/logout" class="btn btn-outline-secondary">Logout</a>
			</nav>
		</div>
	
	</div>
</body>
</html>