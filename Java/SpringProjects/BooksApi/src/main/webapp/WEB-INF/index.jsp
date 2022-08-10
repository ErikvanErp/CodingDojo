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
			
			<h1>All Books</h1>
			<table class="table table-striped">
			    <thead>
			        <tr>
			            <th>ID</th>
			            <th>Title</th>
			            <th>Language</th>
			            <th>Number of Pages</th>
			        </tr>
			    </thead>
			    <tbody>
			    	<c:forEach var="book" items="${books}">
			    	<tr>
			    		<td><c:out value="${book.id}"/></td>
			    		<td><a href="/book/${book.id}"><c:out value="${book.title}"/></a></td>
			    		<td><c:out value="${book.language}"/></td>
			    		<td><c:out value="${book.numberOfPages}"/></td>
			    	</tr>

			    	</c:forEach>
			    </tbody>
			</table>
			
			<a href="/book/new" class="btn btn-primary">Add a book</a>
						
		</div>
	</div>
</div>

</body>
</html>