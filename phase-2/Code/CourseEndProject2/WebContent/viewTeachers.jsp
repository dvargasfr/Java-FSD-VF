<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Teachers"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List of Teachers</title>
</head>
<body>
	<h1>View Teachers here!</h1>
	<%
	Object obj = request.getAttribute("listOfTeachers");
	List<Teachers> ls = (List)obj;
	Iterator<Teachers> li = ls.iterator();
	while(li.hasNext()){
		Teachers t = li.next();
		%>
		<div>
			<span> Teacher ID: <%=t.getTid()%> Teacher name: <%=t.getTname()%> </span>
		</div>
		<% 
	}
	%>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>