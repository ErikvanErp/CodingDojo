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
	<title>Dojos and Ninjas</title>
</head>
<body>
	<div class="container p-3">
		<div class="row">
			<div class="col col-4">
			
				<h2>New Ninja</h2>
				<form:form action="/ninjas/new" method="POST" modelAttribute="ninja">
					<div class="form-group">
						<form:label path="dojo">Dojo</form:label>
						<form:select path="dojo">
							<c:forEach var="dojo" items="${ dojos }">
							<form:option value="${ dojo }">
								<c:out value="${ dojo.name }"/>
							</form:option>
							</c:forEach>
						</form:select>
					</div>
					<div class="form-group">
						<form:label path="firstName">First Name</form:label>
						<form:input path="firstName" type="text" class="form-input"/>
						<form:errors path="firstName" class="text-danger"/>
					</div>
					<div class="form-group">
						<form:label path="lastName">Last Name</form:label>
						<form:input path="lastName" type="text" class="form-input"/>
						<form:errors path="lastName" class="text-danger"/>
					</div>
						<div class="form-group">
						<form:label path="age">Age</form:label>
						<form:input path="age" type="number" class="form-input"/>
						<form:errors path="age" class="text-danger"/>
					</div>
					<button type="submit" class="btn btn-primary mt-3">Create</button>
				</form:form>
			
			</div>
		</div>
	</div>		
</body>
</html>