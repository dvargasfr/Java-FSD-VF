<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Students"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List of Students</title>
</head>
<body>
	<h1>View Students here!</h1>
	<%
	Object obj = request.getAttribute("listOfStudents");
	List<Students> ls = (List)obj;
	Iterator<Students> li = ls.iterator();
	while(li.hasNext()){
		Students s = li.next();
		%>
		<div>
			<span> Student ID: <%=s.getStudentid()%> Student name: <%=s.getStudentname()%> Student class: <%=s.getStudentclass()%> </span>
		</div>
		<% 
	}
	%>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>