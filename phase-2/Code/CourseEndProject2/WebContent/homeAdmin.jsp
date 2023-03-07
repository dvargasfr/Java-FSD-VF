<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Admin page</title>
</head>
<body>
	<%
	out.println("Welcome to Admin page");
	%>
	<br/>
	<a href="ClassesController?param=edit">Set up Classes list</a><br/>
	<a href="TeachersController?param=edit">Set up Teachers list</a><br/>
	<a href="SubjectsController?param=edit">Set up Subjects list</a><br/>
	<a href="StudentsController?param=edit">Set up Students list</a><br/>
	<a href="#">Assign Subjects to Class</a><br/>
	<a href="#">(PENDING) Set up Teachers of a Subject</a><br/>
	<a href="ClassesController?param=view">Show Classes list</a><br/>
	<a href="TeachersController?param=view">Show Teachers list</a><br/>
	<a href="StudentsController?param=view">Show Students list</a><br/>
	<a href="SubjectsController?param=view">Show Subjects list</a><br/>
	<a href="#">(PENDING) Show full Classes Report</a><br/>
	
</body>
</html>