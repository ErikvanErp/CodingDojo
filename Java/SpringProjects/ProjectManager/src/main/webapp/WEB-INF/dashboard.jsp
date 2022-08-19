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
		
		<div class="row">
			<div class="col">
				<h2>All Projects</h2>
				<table class="table table-striped">
					<thead>
						<tr>
							<td>Project</td>
							<td>Team Lead</td>
							<td>Due Date</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="project" items="${ allprojects }">
							<tr>
								<td>
									<a href="/projects/${ project.id }/show">
										<c:out value="${ project.title }"/>
									</a>
								</td>
								<td><c:out value="${ project.user.userName }"/></td>
								<td><fmt:formatDate type="date" value="${ project.dueDate }"/></td>
								<td>
									<form action="/projects/${ project.id }/addmember" method="POST">
										<input type="hidden" name="user_id" value="${ user.id }">
										<button type="submit" class="btn btn-outline-secondary">Join Team</button>
									</form>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
				
			</div>
		</div>

		<div class="row">
			<div class="col">
				<h2>Your Projects</h2>
				<table class="table table-striped">
					<thead>
						<tr>
							<td>Project</td>
							<td>Team Lead</td>
							<td>Due Date</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="project" items="${ myprojects }">
							<tr>
								<td>
									<a href="/projects/${ project.id }/show">
										<c:out value="${ project.title }"/>
									</a>
								</td>
								<td><c:out value="${ project.user.userName }"/></td>
								<td><fmt:formatDate type="date" value="${ project.dueDate }"/></td>
								<td>
									<c:if test="${ user.id != project.user.id }">
										<form action="/projects/${ project.id }/removemember" method="POST">
											<input type="hidden" name="user_id" value="${ user.id }">
											<button type="submit" class="btn btn-outline-secondary">Leave Team</button>
										</form>
									</c:if>
									<c:if test="${ user.id == project.user.id }">
										<form action="/projects/${ project.id }/edit" method="GET">
											<button type="submit" class="btn btn-outline-secondary">Edit</button>
										</form>
									</c:if>
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