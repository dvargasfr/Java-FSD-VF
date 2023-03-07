<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Students</title>
</head>
<body>
	<h2>Add Students</h2>
	<form action="StudentsController" method="post">
		<label>Student ID</label>
		<input type="number" name="studentid"><br/>
		<label>Student Name</label>
		<input type="text" name="studentname"><br/>
		<label>Student Class</label>
		<input type="number" name="studentclass"><br/>
		<input type="submit" value="Add Student">
		<input type="reset" value="Reset">
	</form>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>