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

	<div class="container">
		<div class="navbar col col-6">
			<nav>
				<h1>Edit Expense</h1>
			</nav>
			<nav>
				<a href="/expenses" class="btn btn-outline-primary">Go Back</a>
			</nav>
		</div>

		<div class="row">
			<div class="col col-4">
				
				<h2>Edit an Expense</h2>
				
				<form:form action="/expense/${ expense.id }/edit" method="POST" modelAttribute="expense">
					<input type="hidden" name="_method" value="PUT"/>
				
					<div class="form-group">
						<form:label path="expenseName">Expense Name</form:label>
						<form:input type="text" path="expenseName" class="form-control"/>
						<form:errors path="expenseName" class="text-danger"/>		
					</div>
					
					<div class="form-group">
						<form:label path="vendor">Vendor</form:label>
						<form:input type="text" path="vendor" class="form-control"/>
						<form:errors path="vendor" class="text-danger"/>		
					</div>
				
					<div class="form-group">
						<form:label path="amount">Amount</form:label>
						<form:input type="number" path="amount" step="0.01" class="form-control"/>
						<form:errors path="amount" class="text-danger"/>		
					</div>

					<div class="form-group">
						<form:label path="description">Description</form:label>
						<form:textarea type="number" path="description" class="form-control" rows="3"/>
						<form:errors path="description" class="text-danger"/>		
					</div>

					<button type="submit" class="btn btn-primary mt-3">Submit</button>
				</form:form>
					
			</div>
		</div>
	</div>


</body>
</html>