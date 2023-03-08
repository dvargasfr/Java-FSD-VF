<%@page import="java.util.Iterator"%>
<%@page import="com.entity.Classes"%>
<%@page import="com.entity.Subjects"%>
<%@page import="com.entity.Students"%>
<%@page import="com.entity.Teachers"%>
<%@page import="com.service.TeachersService"%>
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
	<form action="homeAdmin.jsp">
		<input type="submit" value="Go Back to Admin Home">
	</form>
	<%
	Object obj = request.getAttribute("listOfClasses");
	List<Classes> classesList = (List)obj;
	Iterator<Classes> classesIt = classesList.iterator();
	while(classesIt.hasNext()){
		Classes c = classesIt.next();
		%>
		<div>
			<h1> Class <%=c.getClasssection()%> (ID: <%=c.getClassid()%>)</h1>
			
			<h2>Subjects</h2>
			<% 
			List<Subjects> subjectsList = c.getSubjectslist();
			Iterator<Subjects> subjectsIt = subjectsList.iterator();
			while(subjectsIt.hasNext()){
				Subjects s = subjectsIt.next();
				%>
				<span><%=s.getSubjectname()%> (ID: <%=s.getSubjectid()%>)</span><br/>
				<%
				TeachersService ts = new TeachersService();
				Teachers t = ts.findTeacherById(s.getSubjectteacher());
				%>
				<span> Teacher: <%=t.getTname()%> (ID: <%=t.getTid()%>)</span><br/><br/>
				<%
			}
			%>
			
			<h2>Students</h2>
			<% 
			List<Students> studentsList = c.getStudentslist();
			Iterator<Students> studentsIt = studentsList.iterator();
			while(studentsIt.hasNext()){
				Students st = studentsIt.next();
				%>
				<span> <%=st.getStudentname()%> (ID: <%=st.getStudentid()%>)</span><br/>
				<%
			}
			%>
		</div>
		<% 
	}
	%>
	
</body>
</html>