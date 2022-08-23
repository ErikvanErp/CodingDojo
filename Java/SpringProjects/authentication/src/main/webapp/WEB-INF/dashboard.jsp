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
	<div class="container p-3 col-8 mx-auto">
		<div class="navbar">
			<nav>
				<h1>Welcome ${ user.getUserName() }!</h1>
			</nav>
			<nav>
				<a href="/logout" class="btn btn-outline-secondary mx-1">Logout</a> 
			</nav>
		</div>
		
		<div class="row">
			<div class="col col-12">
			
				<table class="table table-striped">
					<thead>
						<tr>
							<td>Address</td>
							<td>Listed On</td>
							<td>Added By</td>
							<td>Price</td>
						</tr>
					</thead>
					<tbody>
						<c:forEach var="listing" items="${ listings }">
							<tr>
								<td>
									<a href="/listings/${ listing.id }/show">
										<c:out value="${ listing.address }"/>
									</a>
								</td>
								<td><fmt:formatDate type="date" value="${ listing.listingDate }"/></td>
								<td><c:out value="${ listing.user.userName }"/></td>
								<td><fmt:formatNumber type="CURRENCY" value="${ listing.price }"/></td>
							</tr>
						</c:forEach>
					</tbody>
				
				</table>
				 
				
				<a href="listings/new" class="btn btn-primary mt-3">Add Listing</a>
		
			</div>
		</div>
	</div>
</body>
</html>