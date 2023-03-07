package com.service;

import java.util.List;

import com.dao.ClassesDao;
import com.entity.Classes;

public class ClassesService {

	ClassesDao cd = new ClassesDao();
	
	public String saveClasses(Classes classes) {
		if(cd.saveClasses(classes) > 0) {
			return "Class saved successfully";
		} else {
			return "Class not saved";
		}
	}
	
	public List<Classes> findAllClasses() {
		return cd.findAllClasses();
	}
}
