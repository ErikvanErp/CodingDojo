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
	<title>Book Club</title>
</head>
<body>
	<div class="container col-8 mx-auto p-3">
		<div class="navbar">
			<nav>
				<h1><c:out value="${ book.title }"/></h1>
			</nav>
			<nav>
				<a href="/home" class="btn btn-outline-secondary">Dashboard</a>
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-6">
			
				<c:choose>
					<c:when test = "${ user.id == book.user.id }">
						<p> 
							You read <c:out value="${ book.title }"/>
							by <c:out value="${ book.author }" />.
						</p>
						<p>
							Here are your thoughts:
						</p>
					</c:when>
					<c:otherwise>
						<p>
							<c:out value="${ book.user.userName }"/>
							read <c:out value="${ book.title }"/>
							by <c:out value="${ book.author }" />.
						</p>
						<p>
							Here are <c:out value="${ book.user.userName }"/>'s thoughts:
						</p>
					</c:otherwise>
				</c:choose>
									
				<div style="width:300px">
					<i>
						<c:out value="${ book.thoughts }"/>
					</i>
				</div>
				
				<c:if test="${ user.id == book.user.id }">
					<a href="/books/${ book.id }/edit" class="btn btn-primary">Edit</a>
				</c:if>			
				
			</div>
		</div>
		
	</div>
</body>
</html>