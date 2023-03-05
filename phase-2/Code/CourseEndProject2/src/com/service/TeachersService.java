package com.service;

import java.util.List;

import com.dao.TeachersDao;
import com.entity.Teachers;


public class TeachersService {

	TeachersDao td = new TeachersDao();
	
	public String saveTeachers(Teachers teachers) {
		if(td.saveTeachers(teachers) > 0) {
			return "Teacher saved successfully";
		} else {
			return "Teacher not saved";
		}
	}
	
	public String findAllTeachers() {
		List<Teachers> listTeachers = td.findAllTeachers();
		if(listTeachers != null) {
			return listTeachers.toString();
		} else {
			return "No teachers found";
		}
	}
}
