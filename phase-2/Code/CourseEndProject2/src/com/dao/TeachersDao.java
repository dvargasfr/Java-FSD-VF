package com.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.entity.Teachers;
import com.resource.DbResource;

public class TeachersDao {
	SessionFactory sf;
	public TeachersDao() {
		sf = DbResource.getSessionFactory();
	}
	
	public int saveTeachers(Teachers teacher) {
		try {
			Session session = sf.openSession();
			Transaction tran = session.getTransaction();
			tran.begin();
			session.save(teacher);
			tran.commit();
			return 1;
		}catch(Exception e) {
			System.out.println(e);
			return 0;
		}
	}
	
	public Teachers findTeacherById(int teacherid) {
		Session session = sf.openSession();
		Teachers t = session.get(Teachers.class, teacherid);
		return t;	
	}
	
	public List<Teachers> findAllTeachers() {
		Session session = sf.openSession();
		TypedQuery<Teachers> tq = session.createQuery("from Teachers");
		List<Teachers> listOfTeachers = tq.getResultList();
		return listOfTeachers;
	}
}
