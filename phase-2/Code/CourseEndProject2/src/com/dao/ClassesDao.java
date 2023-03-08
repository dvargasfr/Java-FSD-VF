package com.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.entity.Classes;
import com.entity.Subjects;
import com.resource.DbResource;

public class ClassesDao {
	SessionFactory sf;
	public ClassesDao() {
		sf = DbResource.getSessionFactory();
	}
	
	public int saveClasses(Classes classes) {
		try {
			Session session = sf.openSession();
			Transaction tran = session.getTransaction();
			tran.begin();
			session.save(classes);
			tran.commit();
			return 1;
		}catch(Exception e) {
			System.out.println(e);
			return 0;
		}
	}
	
	public Classes findClassById(int classid) {
		Session session = sf.openSession();
		Classes c = session.get(Classes.class, classid);
		return c;	
	}
	
	public List<Classes> findAllClasses() {
		Session session = sf.openSession();
		TypedQuery<Classes> tq = session.createQuery("from Classes");
		List<Classes> listOfClasses = tq.getResultList();
		return listOfClasses;
	}
	
	public List<Subjects> findAllSubjectsOfClass(int classid) {
		Session session = sf.openSession();
		Classes c = session.get(Classes.class, classid);
		List<Subjects> listOfSubjects = c.getSubjectslist();
		return listOfSubjects;
	}
}
