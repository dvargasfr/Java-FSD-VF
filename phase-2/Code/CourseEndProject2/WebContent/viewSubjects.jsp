<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Subjects"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List of Subjects</title>
</head>
<body>
	<h1>View Subjects here!</h1>
	<%
	Object obj = request.getAttribute("listOfSubjects");
	List<Subjects> ls = (List)obj;
	Iterator<Subjects> li = ls.iterator();
	while(li.hasNext()){
		Subjects s = li.next();
		%>
		<div>
			<span> Subject ID: <%=s.getSubjectid()%> Subject name: <%=s.getSubjectname()%> Subject class: <%=s.getSubjectclass()%> Subject teacher: <%=s.getSubjectteacher()%></span>
		</div>
		<% 
	}
	%>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>