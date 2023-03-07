package com.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.entity.Students;
import com.service.StudentsService;

@WebServlet("/StudentsController")
public class StudentsController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public StudentsController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		String classparam = request.getParameter("param");
		System.out.println(classparam);
		if(classparam.equals("view")) {
			StudentsService ss = new StudentsService();
			List<Students> listOfStudents = ss.findAllStudents();
			request.setAttribute("listOfStudents", listOfStudents);
			RequestDispatcher rd = request.getRequestDispatcher("viewStudents.jsp");
			rd.include(request, response);
		} else {
			if(classparam.equals("edit")) {
				RequestDispatcher rd = request.getRequestDispatcher("addStudents.jsp");
				rd.include(request, response);
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter();
		response.setContentType("text/html");
		
		int studentid = Integer.parseInt(request.getParameter("studentid"));
		int studentclass = Integer.parseInt(request.getParameter("studentclass"));
		String studentname = request.getParameter("studentname");
		
		Students s = new Students();
		s.setStudentid(studentid);
		s.setStudentclass(studentclass);
		s.setStudentname(studentname);
		
		StudentsService ss = new StudentsService();
		String result  = ss.saveStudents(s);
		pw.println(result);
		
		RequestDispatcher rd = request.getRequestDispatcher("addStudents.jsp");
		rd.include(request, response);
	}

}
