package com.service;

import com.dao.StudentsDao;
import com.entity.Students;

public class StudentsService {
	
	StudentsDao sd = new StudentsDao();
	
	public String saveStudents(Students students) {
		if(sd.saveStudent(students) > 0) {
			return "Student saved successfully";
		}else {
			return "Student not saved";
		}
	}
}
