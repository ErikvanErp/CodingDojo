<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Forms in Java</title>
</head>
<body>
<p>Your email: <c:out value="${email}"/></p>
<p>Your password: <c:out value="${password}"/> (Ooops...)</p>
</body>
</html>