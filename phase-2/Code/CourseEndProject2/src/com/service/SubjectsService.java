package com.service;

import com.dao.SubjectsDao;
import com.entity.Subjects;

public class SubjectsService {

	SubjectsDao sd = new SubjectsDao();
	
	public String saveSubjects(Subjects subjects) {
		if(sd.saveSubject(subjects) > 0) {
			return "Student saved successfully";
		}else {
			return "Student not saved";
		}
	}
}
