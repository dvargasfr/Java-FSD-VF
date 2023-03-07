package com.service;

import java.util.List;

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
	
	public List<Subjects> findAllSubjects() {
		return sd.findAllSubjects();
	}
}
