<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%! String user,password; %>
	
	<%
	user = request.getParameter("user");
	password = request.getParameter("pwd");
	if(user.equals("admin") && password.equals("admin")){
		out.println("successfully login");
		%>
		<jsp:forward page="addClasses.jsp"></jsp:forward>
		<%
	}else {
		out.println("failure try once again");
		%>
		<jsp:include page="login.jsp"></jsp:include>		
		<%
	}
	%>
</body>
</html>