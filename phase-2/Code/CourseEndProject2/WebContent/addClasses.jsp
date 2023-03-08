<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Classes</title>
</head>
<body>
	<h2>Add Classes</h2>
	<form action="ClassesController" method="post">
		<label>Class ID</label>
		<input type="number" name="classid"><br/>
		<label>Class section</label>
		<input type="text" name="classsection"><br/>
		<input type="submit" value="Add Class">
		<input type="reset" value="Reset">
	</form>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>