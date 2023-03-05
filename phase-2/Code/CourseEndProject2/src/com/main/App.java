package com.main;

import com.entity.Classes;
import com.entity.Students;
import com.entity.Subjects;
import com.entity.Teachers;
import com.service.ClassesService;
import com.service.StudentsService;
import com.service.SubjectsService;
import com.service.TeachersService;;

public class App {

	public static void main(String[] args) {
		
		/*
		SubjectsService subsrv = new SubjectsService();
		Subjects sub1 = new Subjects();
		Subjects sub2 = new Subjects();
		Subjects sub3 = new Subjects();
		Subjects sub4 = new Subjects();
		Subjects sub5 = new Subjects();
		Subjects sub6 = new Subjects();
		sub1.setSubjectid(1);
		sub2.setSubjectid(2);
		sub3.setSubjectid(3);
		sub4.setSubjectid(4);
		sub5.setSubjectid(5);
		sub6.setSubjectid(6);
		sub1.setSubjectname("s11");
		sub2.setSubjectname("s12");
		sub3.setSubjectname("s21");
		sub4.setSubjectname("s22");
		sub5.setSubjectname("s31");
		sub6.setSubjectname("s32");
		sub1.setSubjectclass(1);
		sub2.setSubjectclass(1);
		sub3.setSubjectclass(2);
		sub4.setSubjectclass(2);
		sub5.setSubjectclass(3);
		sub6.setSubjectclass(3);
		System.out.println(subsrv.saveSubjects(sub1));
		System.out.println(subsrv.saveSubjects(sub2));
		System.out.println(subsrv.saveSubjects(sub3));
		System.out.println(subsrv.saveSubjects(sub4));
		System.out.println(subsrv.saveSubjects(sub5));
		System.out.println(subsrv.saveSubjects(sub6));
		*/
		
		/*
		StudentsService ss = new StudentsService();
		Students s = new Students();
		s.setStudentid(3);
		s.setStudentname("user1");
		s.setStudentclass(2);
		String res = ss.saveStudents(s);
		System.out.println(res);
		Students s2 = new Students();
		s2.setStudentid(4);
		s2.setStudentname("user2");
		s2.setStudentclass(3);
		String res2 = ss.saveStudents(s2);
		System.out.println(res2);
		*/
		
		/*
		TeachersService ts = new TeachersService();
		Teachers t = new Teachers();
		t.setTid(2);
		t.setTname("t1");
		System.out.println(ts.saveTeachers(t));
		*/
		
		/*
		ClassesService cs = new ClassesService();
		System.out.println(cs.findAllClasses());
		*/
	}

}
