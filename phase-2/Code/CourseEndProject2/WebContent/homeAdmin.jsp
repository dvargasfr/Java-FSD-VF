<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Admin page</title>
</head>
<body>
	<h1>Welcome to Admin page</h1>
	<br/>
	<h3>Set up</h3>
	<a href="StudentsController?param=edit">Set up Students list</a><br/>
	<a href="SubjectsController?param=edit">Set up Subjects list</a><br/>
	<a href="TeachersController?param=edit">Set up Teachers list</a><br/>
	<a href="ClassesController?param=edit">Set up Classes list</a><br/>
	<h3>Assignment</h3>
	<a href="SubjectsController?param=assign">Assign Subjects to Class</a><br/>
	<a href="TeachersController?param=assign">Assign Teachers to Class for Subject</a><br/>
	<h3>View</h3>
	<a href="StudentsController?param=view">Show Students list</a><br/>
	<a href="SubjectsController?param=view">Show Subjects list</a><br/>
	<a href="TeachersController?param=view">Show Teachers list</a><br/>
	<a href="ClassesController?param=view">Show Classes Report</a><br/>
	
</body>
</html>