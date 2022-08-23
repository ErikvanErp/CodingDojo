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
	<title>Java Belt Exam</title>
</head>
<body>
	<div class="container p-3 mx-auto">
		<div class="navbar">
			<nav>
				<h1>${ listing.address }	</h1>
			</nav>
			<nav>
				<a href="/dashboard" class="btn btn-outline-secondary mx-1">Dashboard</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-8">
							
				<p>
				Address: <c:out value="${ listing.address }"/> <br>
				Listing Date: <fmt:formatDate type="date" value="${ listing.listingDate }"/> <br>	
				Price: <fmt:formatNumber type="CURRENCY" value="${ listing.price }"/>
				</p>		
				
			</div>
		</div>

		<div class="row">
			<div class="col col-12">
				<h3>Notes:</h3>
				<c:forEach  var="note" items="${ listing.notes }">
					<p>
						Added by <c:out value="${ note.noteUser.userName }"/><br>
						- <c:out value="${ note.noteText }"/>
					</p>
				</c:forEach>						
			</div>
		</div>

		<div class="row">
			<div class="col col-12">
				<h3>Add Note:</h3>
			
				<form:form action="/notes/new" method="POST" modelAttribute="note">
					<form:input type="hidden" path="noteUser" value="${ user.id }"/>
					<form:input type="hidden" path="listing" value="${ listing.id }"/>
					<div class="form-group">
						<form:label path="noteText">Note</form:label>
						<form:input type="text" path="noteText" class="form-control"/>
						<form:errors path="noteText" class="text-danger"/>		
					</div>
					<button type="submit" class="btn btn-primary my-3">Add Note</button>
				</form:form>				
				
			</div>
		</div>
		
		<c:if test="${ user.id == listing.user.id }">
			<div class="row">
				<div class="col">
					<a href="/listings/${ listing.id }/edit" class="btn btn-outline-primary my-1">Edit Listing</a>
					<form action="/listings/${ listing.id }/delete" method="POST">
						<input type="hidden" name="_method" value="DELETE"/>
						<button type="submit" class="btn btn-outline-danger my-1">Delete Listing</button>
					</form>
				</div>
			</div>		
		</c:if>
		
	</div>
</body>
</html>