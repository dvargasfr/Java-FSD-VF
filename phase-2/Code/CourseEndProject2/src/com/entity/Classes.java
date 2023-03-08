package com.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Classes {
	@Id
	private int classid;
	private String classsection;
	@OneToMany 
	@JoinColumn(name = "studentclass")
	private List<Students> liststudents;
	@OneToMany
	@JoinColumn(name = "subjectclass")
	private List<Subjects> listsubjects;
	
	public int getClassid() {
		return classid;
	}
	public void setClassid(int classid) {
		this.classid = classid;
	}
	public String getClasssection() {
		return classsection;
	}
	public void setClasssection(String classsection) {
		this.classsection = classsection;
	}
	public List<Students> getStudentslist() {
		return liststudents;
	}
	public void setStudentslist(List<Students> studentslist) {
		this.liststudents = studentslist;
	}
	public List<Subjects> getSubjectslist() {
		return listsubjects;
	}
	public void setSubjectslist(List<Subjects> subjectslist) {
		this.listsubjects = subjectslist;
	}
	@Override
	public String toString() {
		return "Classes [classid=" + classid + ", classsection=" + classsection + ", liststudents=" + liststudents
				+ ", listsubjects=" + listsubjects + "]";
	}
}
