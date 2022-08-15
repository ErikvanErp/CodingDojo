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
	<title>Languages</title>
</head>
<body>

<div class="container p-3">

	<div class="navbar col-6">
		<nav>
			<form action="/language/${ language.id }/edit" method="GET">
				<button type="submit" class="btn btn-outline-primary">Edit</button>
			</form>
		</nav>
		<nav>
			<form action="/language/${ language.id }/delete" method="POST">
				<input type="hidden" name="_method" value="DELETE">
				<button type="submit" class="btn btn-outline-primary">Delete</button>
			</form>
		</nav>
		<nav>
			<a href="/languages" class="btn btn-outline-primary">Dashboard</a>
		</nav>
	</div>
	<div class="row">
		<div class="col col-4">

			<table class="table">
				<tbody>
					<tr>
						<td>Name</td>
						<td><c:out value="${ language.name }"/></td>
					</tr>
					<tr>
						<td>Creator</td>
						<td><c:out value="${ language.creator }"/></td>
					</tr>
					<tr>
						<td>Version</td>
						<td><c:out value="${ language.version }"/></td>
					</tr>
				
				</tbody>
			</table>	

		</div>
	</div>
</div>

</body>
</html>