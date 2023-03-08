<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Teachers"%>
<%@page import="com.entity.Subjects"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Assign Teachers to Class for Subject</title>
</head>
<body>
	<h1>Assign Teachers to Class for Subject here!</h1>
	<%
	Object objTeachers = request.getAttribute("listOfTeachers");
	Object objSubjects = request.getAttribute("listOfSubjects");
	List<Teachers> listTeachers = (List)objTeachers;
	List<Subjects> listSubjects = (List)objSubjects;
	%>
	<form action="SubjectsController" method="post" id="teachersubjectassign">
		<select name="subjectteacher" form="teachersubjectassign">
		<%
		Iterator<Teachers> teachersIt = listTeachers.iterator();
		while(teachersIt.hasNext()){
			Teachers t = teachersIt.next();
			%>
			<option value="<%=t.getTid()%>"><%=t.getTname()%></option>
			<%
		}
		%>
		</select>
		
		<select name="subjectinfo" form="teachersubjectassign">
		<%
		Iterator<Subjects> subjectsIt = listSubjects.iterator();
		while(subjectsIt.hasNext()){
			Subjects s = subjectsIt.next();
			%>
			<option value="<%=s.getSubjectid()%>,<%=s.getSubjectname()%>,<%=s.getSubjectclass()%>"><%=s.getSubjectname()%> Class: <%= s.getSubjectclass() %></option>
			<%
		}
		%>
		</select>
		
		<input type="submit" value="Assign">
	</form>
	
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>