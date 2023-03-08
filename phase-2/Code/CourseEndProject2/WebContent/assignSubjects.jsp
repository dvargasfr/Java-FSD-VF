<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Subjects"%>
<%@page import="com.entity.Classes"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Assign Subjects to Class</title>
</head>
<body>
	<h1>Assign Subjects to Class here!</h1>
	<%
	Object objSubjects = request.getAttribute("listOfSubjects");
	Object objClasses = request.getAttribute("listOfClasses");
	List<Subjects> listSubjects = (List)objSubjects;
	List<Classes> listClasses = (List)objClasses;
	Iterator<Subjects> subjectsIt = listSubjects.iterator();
	while(subjectsIt.hasNext()){
		Subjects s = subjectsIt.next();
		%>
		<form action="SubjectsController" method="post" id="subjectclassassign">
			<input type="hidden" name="subjectid" value="<%=s.getSubjectid()%>" />
			<input type="hidden" name="subjectname" value="<%=s.getSubjectname()%>" />
			<input type="hidden" name="subjectteacher" value="<%=s.getSubjectteacher()%>" />
			
			Subject ID: <%=s.getSubjectid()%> Subject name: <%=s.getSubjectname()%> Subject Class: 
			<select id="class" name="subjectclass" form="subjectclassassign">
			<%
			Iterator<Classes> classesIt = listClasses.iterator();
			while(classesIt.hasNext()){
				Classes c = classesIt.next();
				%>
				<option value="<%=c.getClassid()%>"><%=c.getClasssection()%></option>
				<%
			}
			%>
			</select>
			<input type="submit" value="Assign">
		</form>
		<br/>
		<% 
	}
	%>
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
</body>
</html>