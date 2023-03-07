<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Classes"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List of Classes</title>
</head>
<body>
	<h1>View Classes here!</h1>
	<%
	Object obj = request.getAttribute("listOfClasses");
	List<Classes> lc = (List)obj;
	Iterator<Classes> li = lc.iterator();
	while(li.hasNext()){
		Classes c = li.next();
		%>
		<div>
			<span> Class ID: <%=c.getClassid()%> Class Section: <%=c.getClasssection()%> </span>
		</div>
		<% 
	}
	%>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>