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
	<div class="container p-3 col-9 mx-auto">
		<div class="navbar">
			<nav>
				<p>Hello ${ user.getUserName() }. Welcome to..</p>
				<h1>The Book Broker!</h1>
			</nav>
			
			<nav class="d-flex">
				<a href="/home" class="btn btn-outline-secondary mx-1">Dashboard</a> 
				<a href="/logout" class="btn btn-outline-secondary mx-1">Logout</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-9">
				<p>Available Books to Borrow</p>
				<table class="table table-striped">
					<thead>
						<tr>
							<td>Id</td>
							<td>Title</td>
							<td>Author</td>
							<td>Owner</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="book" items="${ availableBooks }">
							<tr>
								<td><c:out value="${ book.id }"/></td>
								<td>
									<a href="/books/${ book.id }/show">
										<c:out value="${ book.title }"/></td>
									</a>
								<td><c:out value="${ book.author }"/></td>
								<td><c:out value="${ book.user.userName }"/></td>
								<td>
									<c:if test="${ book.user.id != user.id }">
										<a href="/books/${ book.id }/borrow" class="btn btn-outline-secondary">
											Borrow
										</a>
									</c:if>
								</td>
							</tr>
						</c:forEach>		
					</tbody>				
				</table>
			
			</div>
		</div>
		
		<div class="row">
			<div class="col col-8">
				<p>Books I'm Borrowing</p>
				<table class="table table-striped">
					<thead>
						<tr>
							<td>Id</td>
							<td>Title</td>
							<td>Author</td>
							<td>Owner</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="book" items="${ borrowedBooks }">
							<tr>
								<td><c:out value="${ book.id }"/></td>
								<td>
									<a href="/books/${ book.id }/show">
										<c:out value="${ book.title }"/></td>
									</a>
								<td><c:out value="${ book.author }"/></td>
								<td><c:out value="${ book.user.userName }"/></td>
								<td>
									<a href="/books/${ book.id }/return" class="btn btn-outline-secondary">
										Return
									</a>
								</td>
							</tr>
						</c:forEach>		
					</tbody>				
				</table>
			
			</div>
		</div>
	</div>
</body>
</html>