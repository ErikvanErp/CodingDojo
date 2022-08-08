<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Forms in Java</title>
</head>
<body>
    <h3>Login</h3>
    <form action='/login' method='POST'>
	<label>Email:</label>
    	<input type="text" name='email'>
	<label>Password:</label>
    	<input type='password' name='password'>
    	<input type='submit' value='login'>
    </form>
</body>
</html>