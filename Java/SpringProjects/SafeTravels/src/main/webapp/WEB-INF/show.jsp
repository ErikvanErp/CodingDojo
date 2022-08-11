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
	<title>Save Travels</title>
</head>
<body>

<div class="container mt-3">
		<div class="navbar col col-6">
			<nav>
				<h1>Expense Details</h1>
			</nav>
			<nav>
				<a href="/expenses" class="btn btn-outline-primary">Go Back</a>
			</nav>
		</div>

		<div class="row">
			<div class="col col-6">
								
				<table class="table">
					<tr>
						<td>Expense Name:</td>
						<td><c:out value="${expense.expenseName}"/></td>
					</tr>
					<tr>
						<td>Expense Description:</td>
						<td><c:out value="${expense.description}"/></td>
					</tr>
					<tr>
						<td>Vendor:</td>
						<td><c:out value="${expense.vendor}"/></td>
					</tr>
					<tr>
						<td>Amount Spent:</td>
						<td><c:out value="${expense.formatAmount()}"/></td>
					</tr>
				
				</table>

			</div>
		</div>
	</div>


</body>
</html>