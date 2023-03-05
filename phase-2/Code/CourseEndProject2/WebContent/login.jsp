<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
</head>
<body>
	<form action="checkLogin.jsp" method="post">
	
	<label>User</label>
	<input type="text" name="user"><br/>
	
	<label>Password</label>
	<input type="password" name="pwd"><br/>
	
	<input type="submit" value="SignIn">
	<input type="reset" value="reset">
	</form>
</body>
</html>