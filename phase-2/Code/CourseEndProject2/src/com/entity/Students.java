package com.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Students {
	@Id
	private int studentid;
	private String studentname;

	private Integer studentclass;
	
	public int getStudentid() {
		return studentid;
	}
	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}
	public Integer getStudentclass() {
		return studentclass;
	}
	public void setStudentclass(Integer studentclass) {
		this.studentclass = studentclass;
	}
	@Override
	public String toString() {
		return "Students [studentid=" + studentid + ", studentname=" + studentname + ", studentclass=" + studentclass
				+ "]";
	}
}
