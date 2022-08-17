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
	<div class="container p-3 col-8 mx-auto">
		<div class="navbar">
			<nav>
				<h1>Welcome ${ user.getUserName() }!</h1>
				
			</nav>
			
			<nav class="d-flex">
				<a href="/books/new" class="btn btn-outline-secondary mx-1">Add to my shelf</a>
				<a href="/bookmarket" class="btn btn-outline-secondary mx-1">Book Broker</a>
				<a href="/logout" class="btn btn-outline-secondary mx-1">Logout</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-8">
				<p>Books from everyone's shelves.</p>
				<table class="table table-striped">
				<thead>
					<tr>
						<td>Id</td>
						<td>Title</td>
						<td>Author</td>
						<td>Posted By</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="book" items="${ books }">
						<tr>
							<td><c:out value="${ book.id }"/></td>
							<td>
								<a href="/books/${ book.id }/show">
									<c:out value="${ book.title }"/></td>
								</a>
							<td><c:out value="${ book.author }"/></td>
							<td><c:out value="${ book.user.userName }"/></td>
						</tr>
					</c:forEach>				
				</tbody>				
				</table>
			
			</div>
		</div>
	</div>
</body>
</html>