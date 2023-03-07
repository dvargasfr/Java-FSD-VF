package com.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.entity.Subjects;
import com.resource.DbResource;

public class SubjectsDao {
	SessionFactory sf;
	public SubjectsDao() {
		sf = DbResource.getSessionFactory();
	}
	
	public int saveSubject(Subjects subject) {
		try {
			Session session = sf.openSession();
			Transaction tran = session.getTransaction();
			tran.begin();
			session.save(subject);
			tran.commit();
			return 1;
		}catch(Exception e) {
			System.out.println(e);
			return 0;
		}
	}
	
	public List<Subjects> findAllSubjects() {
		Session session = sf.openSession();
		TypedQuery<Subjects> tq = session.createQuery("from Subjects");
		List<Subjects> listOfSubjects = tq.getResultList();
		return listOfSubjects;
	}
}
