<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Demo.jsp</title>
</head>
<body>
<h1> Hello again!</h1>

<% for (int i = 0; i < 5; i++) {%>
<h5><%=i %></h5>
<% } %>

<p>The time and date: <%= new Date() %></p>

<p>Two plus two equal <c:out value="${2+2}"/></p>
</body>
</html>