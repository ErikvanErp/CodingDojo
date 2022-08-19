<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page isErrorPage="true" %> 

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
	<title>Project Manager</title>
</head>
<body>
	<div class="container col-8 mx-auto p-3">
		<div class="navbar">
			<nav>
				<h1>Project Details</h1>
			</nav>
			<nav>
				<a href="/dashboard" class="btn btn-outline-secondary mx-1">Dashboard</a>
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-8">
			
				<table class="table">
					<tbody>
						<tr>
							<td>Project:</td>
							<td><c:out value="${ project.title }"/><td>
						</tr>
						<tr>
							<td>Description:</td>
							<td><c:out value="${ project.description }"/><td>
						</tr>
						<tr>
							<td>Due date:</td>
							<td><fmt:formatDate type="date" value="${ project.dueDate }"/></td>
						</tr>
					</tbody>
				</table>
				<c:if test="${ user.id == project.user.id }">
					<a href="/projects/${ project.id }/delete" class="btn btn-outline-danger mt-3">Delete Project</a>
				</c:if>
					
			</div>		
		</div>
		
	</div>
</body>
</html>