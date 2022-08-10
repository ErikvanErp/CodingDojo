<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<title>Books</title>
</head>
<body>

<div class="container mt-3">
	<div class="row">
		<div class="col">
			<h1><c:out value="${book.title}"/></h1>
			<p>Description: <c:out value="${book.description}"/></p>
			<p>Language: <c:out value="${book.language}"/></p>
			<p>Description: <c:out value="${book.numberOfPages}"/></p>
		</div>
		<div>
			<form action="/books" method="GET">
				<button type=submit" class="btn btn-primary">Back</button>
			</form>
		</div>
		
	</div>
</div>



</body>
</html>