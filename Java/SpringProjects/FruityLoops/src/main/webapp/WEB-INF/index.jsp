<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Fruity Loops</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>

<body>

<div class="row mt-3">
	<div class="col-10 mx-auto">

	<h1>Fruit Store</h1>

	<table class="table table-striped">
		<tr>
			<th>Name</th>
			<th>Price</th>
		</tr>
	
		<c:forEach var="fruit" items="${fruits}">
		<tr>
			<td><c:out value="${fruit.name}"/></td>
			<td><c:out value="${fruit.price}"/></td>
		</tr>
		</c:forEach>
	</table>


</body>
</html>