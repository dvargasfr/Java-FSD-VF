package com.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Teachers {
	@Id
	private int teacherid;
	private String teachername;
	@OneToMany
	@JoinColumn(name = "subjectteacher")
	List<Subjects> teachersubjects;
	/*
	@OneToMany
	@JoinColumn(name = "classid")
	List<Classes> teacherclasses;
	*/
	
	public int getTid() {
		return teacherid;
	}
	public void setTid(int tid) {
		this.teacherid = tid;
	}
	public String getTname() {
		return teachername;
	}
	public void setTname(String tname) {
		this.teachername = tname;
	}
	public List<Subjects> getTeachersubjects() {
		return teachersubjects;
	}
	public void setTeachersubjects(List<Subjects> teachersubjects) {
		this.teachersubjects = teachersubjects;
	}
	@Override
	public String toString() {
		return "Teachers [teacherid=" + teacherid + ", teachername=" + teachername + ", teachersubjects="
				+ teachersubjects + "]";
	}

}
