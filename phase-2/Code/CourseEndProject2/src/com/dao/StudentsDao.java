package com.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.entity.Classes;
import com.entity.Students;
import com.resource.DbResource;

public class StudentsDao {
	SessionFactory sf;
	public StudentsDao() {
		sf = DbResource.getSessionFactory();
	}
	
	public int saveStudent(Students student) {
		try {
			Session session = sf.openSession();
			Transaction tran = session.getTransaction();
			tran.begin();
			session.save(student);
			tran.commit();
			return 1;
		}catch(Exception e) {
			System.out.println(e);
			return 0;
		}
	}
	
	public List<Students> findAllStudents() {
		Session session = sf.openSession();
		TypedQuery<Students> tq = session.createQuery("from Students");
		List<Students> listOfStudents = tq.getResultList();
		return listOfStudents;
	}
}
