package com.service;

import java.util.List;

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
	
	public List<Students> findAllStudents() {
		return sd.findAllStudents();
	}
}
