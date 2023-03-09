package com.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.entity.Classes;
import com.entity.Subjects;
import com.service.ClassesService;
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
			// Retrieve attribute with the subjects list to view
			SubjectsService ss = new SubjectsService();
			List<Subjects> listOfSubjects = ss.findAllSubjects();
			request.setAttribute("listOfSubjects", listOfSubjects);
			RequestDispatcher rd = request.getRequestDispatcher("viewSubjects.jsp");
			rd.include(request, response);
		} 
		if(classparam.equals("edit")) {
			// Dispatch jsp with form to add subjects
			RequestDispatcher rd = request.getRequestDispatcher("addSubjects.jsp");
			rd.include(request, response);
		}
		if(classparam.equals("assign")) {
			// Retrieve attribute with subjects list and classes list to update class assignment
			SubjectsService ss = new SubjectsService();
			ClassesService cs = new ClassesService();
			List<Subjects> listOfSubjects = ss.findAllSubjects();
			List<Classes> listOfClasses = cs.findAllClasses();
			request.setAttribute("listOfSubjects", listOfSubjects);
			request.setAttribute("listOfClasses", listOfClasses);
			RequestDispatcher rd = request.getRequestDispatcher("assignSubjects.jsp");
			rd.include(request, response);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter();
		response.setContentType("text/html");
		Subjects s = new Subjects();
		
		// param subjectinfo = {id, name, class} from assign op
		if(request.getParameter("subjectinfo") != null) {
			String subjectinfo = request.getParameter("subjectinfo");
			List<String> subjectinfoList = new ArrayList<String>(Arrays.asList(subjectinfo.split(",")));
			System.out.println("subjectinfo "+subjectinfoList);
			
			int subjectid = Integer.parseInt(subjectinfoList.get(0));
			System.out.println("subjectid "+subjectid);
			s.setSubjectid(subjectid);
			
			int subjectclass = Integer.parseInt(subjectinfoList.get(2));
			System.out.println("subjectclass "+subjectclass);
			s.setSubjectclass(subjectclass);
				
			String subjectname = subjectinfoList.get(1);
			System.out.println("subjectname "+subjectname);
			s.setSubjectname(subjectname);
			
			int subjectteacher = Integer.parseInt(request.getParameter("subjectteacher"));
			System.out.println("subjectteacher "+subjectteacher);
			s.setSubjectteacher(subjectteacher);
		}else {
			int subjectid = Integer.parseInt(request.getParameter("subjectid"));
			System.out.println("subjectid "+subjectid);
			s.setSubjectid(subjectid);
			
			int subjectclass = Integer.parseInt(request.getParameter("subjectclass"));
			System.out.println("subjectclass "+subjectclass);
			s.setSubjectclass(subjectclass);
				
			String subjectname = request.getParameter("subjectname");
			System.out.println("subjectname "+subjectname);
			s.setSubjectname(subjectname);
			
			int subjectteacher = Integer.parseInt(request.getParameter("subjectteacher"));
			System.out.println("subjectteacher "+subjectteacher);
			s.setSubjectteacher(subjectteacher);
		}
		
		SubjectsService ss = new SubjectsService();
		String result = ss.saveSubjects(s);
		pw.println(result);
		
		RequestDispatcher rd = request.getRequestDispatcher("homeAdmin.jsp");
		rd.include(request, response);
	}
}
