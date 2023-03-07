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

import com.entity.Subjects;
import com.service.SubjectsService;

@WebServlet("/SubjectsController")
public class SubjectsController extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public SubjectsController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		String classparam = request.getParameter("param");
		System.out.println(classparam);
		if(classparam.equals("view")) {
			SubjectsService ss = new SubjectsService();
			List<Subjects> listOfSubjects = ss.findAllSubjects();
			request.setAttribute("listOfSubjects", listOfSubjects);
			RequestDispatcher rd = request.getRequestDispatcher("viewSubjects.jsp");
			rd.include(request, response);
		} else {
			if(classparam.equals("edit")) {
				RequestDispatcher rd = request.getRequestDispatcher("addSubjects.jsp");
				rd.include(request, response);
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter();
		response.setContentType("text/html");
		
		int subjectid = Integer.parseInt(request.getParameter("subjectid"));
		int subjectclass = Integer.parseInt(request.getParameter("subjectclass"));
		String subjectname = request.getParameter("subjectname");
		int subjectteacher = Integer.parseInt(request.getParameter("subjectteacher"));
		
		Subjects s = new Subjects();
		s.setSubjectid(subjectid);
		s.setSubjectclass(subjectclass);
		s.setSubjectname(subjectname);
		s.setSubjectteacher(subjectteacher);
		
		SubjectsService ss = new SubjectsService();
		String result  = ss.saveSubjects(s);
		pw.println(result);
		
		RequestDispatcher rd = request.getRequestDispatcher("addSubjects.jsp");
		rd.include(request, response);
	}

}
