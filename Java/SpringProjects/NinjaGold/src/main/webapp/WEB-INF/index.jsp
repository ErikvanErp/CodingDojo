<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Ninja Gold Game</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" >
</head>
<body>

<div class="container p-4">
	
	<div class="navbar col-8">
		<nav>
			<h1>Your Gold: <c:out value="${totalAmount}"/></h1>
		</nav>
		<nav>
			<a href="/reset" class="btn btn-outline-primary">Reset</a>
		</nav>	
	</div>
	
	<div class="row g-3 mt-3">
		<div class="col col-2 border border-primary p-3 mx-3">
			<form action="/findgold" method="POST">
				<h3>Farm</h3>
				<p>(earns 10-20 gold)</p>
				<input type="hidden" name="place" value="farm">
				<button type="submit" class="btn btn-primary">Find Gold!</button>			
			</form>
		</div>
		
		<div class="col col-2 border border-primary p-3 mx-3">	
			<form action="/findgold" method="POST">
				<h3>Cave</h3>
				<p>(earns 5-10 gold)</p>
				<input type="hidden" name="place" value="cave">
				<button type="submit" class="btn btn-primary">Find Gold!</button>			
			</form>
		</div>
		
		<div class="col col-2 border border-primary p-3 mx-3">
			<form action="/findgold" method="POST">
				<h3>House</h3>
				<p>(earns 2-5 gold)</p>
				<input type="hidden" name="place" value="house">
				<button type="submit" class="btn btn-primary">Find Gold!</button>			
			</form>
		</div>
		
		<div class="col col-2 border border-primary p-3 mx-3">
			<form action="/findgold" method="POST">
				<h3>Quest</h3>
				<p>(earns/takes 0-50 gold)</p>
				<input type="hidden" name="place" value="quest">
				<button type="submit" class="btn btn-primary">Find Gold!</button>			
			</form>
		</div>		
		
	</div>
	
	<div class="row g-3 mt-3">
		<h2>Activities:</h2>
		<div class="col col-8 border border-primary p-3 mx-3">
			<c:forEach var="logEntry" items="${activityLog}">
			<c:choose>
				
				<c:when test="${logEntry.charAt(0) == 112}">
					<p style="color:green"><c:out value="${logEntry.substring(1)}"/></p>
				</c:when>
				<c:when test="${logEntry.charAt(0) == 110}">
					<p style="color:red"><c:out value="${logEntry.substring(1)}"/></p>
				</c:when>
				
			</c:choose>
			</c:forEach>
		</div>
	</div>
</div>

</body>
</html>