<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Classes"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>view Classes here!</h1>
	<%
	Object obj = request.getAttribute("listOfProduct");
	List<Classes> ll = (List)obj;
	Iterator<Classes> li = ll.iterator();
	while(li.hasNext()){
		Classes c = li.next();
		%>
		<div>
			<span><%=c.getClass()%></span>
		</div>
		<% 
	}
	%>
</body>
</html>