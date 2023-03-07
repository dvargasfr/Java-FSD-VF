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

import com.entity.Teachers;
import com.service.TeachersService;

@WebServlet("/TeachersController")
public class TeachersController extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public TeachersController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		String classparam = request.getParameter("param");
		System.out.println(classparam);
		if(classparam.equals("view")) {
			TeachersService ts = new TeachersService();
			List<Teachers> listOfTeachers = ts.findAllTeachers();
			request.setAttribute("listOfTeachers", listOfTeachers);
			RequestDispatcher rd = request.getRequestDispatcher("viewTeachers.jsp");
			rd.include(request, response);
		} else {
			if(classparam.equals("edit")) {
				RequestDispatcher rd = request.getRequestDispatcher("addTeachers.jsp");
				rd.include(request, response);
			}
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter pw = response.getWriter();
		response.setContentType("text/html");
		
		int teacherid = Integer.parseInt(request.getParameter("teacherid"));
		String teachername = request.getParameter("teachername");
		
		Teachers t = new Teachers();
		t.setTid(teacherid);
		t.setTname(teachername);
		
		TeachersService ts = new TeachersService();
		String result  = ts.saveTeachers(t);
		pw.println(result);
		
		RequestDispatcher rd = request.getRequestDispatcher("addTeachers.jsp");
		rd.include(request, response);
	}

}
