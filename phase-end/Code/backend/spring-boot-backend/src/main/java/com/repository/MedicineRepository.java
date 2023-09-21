package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, String>{
	Medicine findByMedname(String medname);
}
