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
<h1>Here's Your Omikuji!</h1>

<div style="border:1px solid black; width:100px; background-color:rgb(162,195,246)">
	In 
	<c:out value="${selectedNumber}"/> years, you will live in
	<c:out value="${city}"/> with
	<c:out value="${realPerson}"/> as your roommate, selling
	<c:out value="${hobby}"/> for a living.
	The next time you see a
	<c:out value="${livingThing}"/>, you will have good luck.
	Also, 
	<c:out value="${somethingNice}"/>.
</div>

<a href="/omikuji">Go Back</a>



</body>
</html>
		