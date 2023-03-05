package com.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Subjects {
	@Id
	private Integer subjectid;
	private String subjectname;
	private Integer subjectclass;
	private Integer subjectteacher;
	
	public Integer getSubjectclass() {
		return subjectclass;
	}
	public void setSubjectclass(Integer subjectclass) {
		this.subjectclass = subjectclass;
	}
	public int getSubjectid() {
		return subjectid;
	}
	public void setSubjectid(int subjectid) {
		this.subjectid = subjectid;
	}
	public String getSubjectname() {
		return subjectname;
	}
	public void setSubjectname(String subjectname) {
		this.subjectname = subjectname;
	}
	public Integer getSubjectteacher() {
		return subjectteacher;
	}
	public void setSubjectteacher(Integer subjectteacher) {
		this.subjectteacher = subjectteacher;
	}
	@Override
	public String toString() {
		return "Subjects [subjectid=" + subjectid + ", subjectname=" + subjectname + ", subjectclass=" + subjectclass
				+ ", subjectteacher=" + subjectteacher + "]";
	}
	
	
}
