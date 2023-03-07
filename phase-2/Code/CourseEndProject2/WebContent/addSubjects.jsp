<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Subjects</title>
</head>
<body>
	<h2>Add Subjects</h2>
	<form action="SubjectsController" method="post">
		<label>Subject ID</label>
		<input type="number" name="subjectid"><br/>
		<label>Subject Class</label>
		<input type="number" name="subjectclass"><br/>
		<label>Subject Name</label>
		<input type="text" name="subjectname"><br/>
		<label>Subject Teacher</label>
		<input type="number" name="subjectteacher"><br/>
		
		<input type="submit" value="Add Subject">
		<input type="reset" value="Reset">
	</form>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>