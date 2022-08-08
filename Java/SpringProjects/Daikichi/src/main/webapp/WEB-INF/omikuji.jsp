<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Omikuji</title>
</head>
<body>
<h1>Send an Omikuji!</h1>

	<form action="/omikuji/submit" method="POST">
		<label for="selectedNumber">Pick any number from 5 to 25</label>
		<select name="selectedNumber" id="selectedNumber">
			<c:forEach var="i" begin="5" end ="25">
			<option value="${i}"><c:out value="${i}"/></option>
			</c:forEach>
		</select>
		<br>
		
		<label for="city">Enter the name of any city</label>
		<input type="text" name="city" id="city">
		<br>
		
		<label for="realPerson">Enter the name of any real person</label>
		<input type="text" name="realPerson" id="realPerson">
		<br>
		
		<label for="hobby">Enter professional endeavor or hobby</label>
		<input type="text" name="hobby" id="hobby">
		<br>
		
		<label for="livingThing">Enter any type of living thing</label>
		<input type="text" name="livingThing" id="livingThing">
		<br>
		
		<label for="somethingNice">Say something nice to someone</label>
		<textarea name="somethingNice" id="somethingNice" rows="4"></textarea>
		<br>
		<br>
		<label for="submitButtom">Send and show to a friend</label>
		<button type="submit" id="submitButton">Send</button>
		
		
		
	</form>
</body>
</html>