<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Teachers</title>
</head>
<body>
	<h2>Add Teachers</h2>
	<form action="TeachersController" method="post">
		<label>Teacher ID</label>
		<input type="number" name="teacherid"><br/>
		<label>Teacher Name</label>
		<input type="text" name="teachername"><br/>
		<input type="submit" value="Add Teacher">
		<input type="reset" value="Reset">
	</form>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>