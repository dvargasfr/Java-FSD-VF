package com.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Medicine;
import com.repository.MedicineRepository;

@Service
public class MedicineService {
	@Autowired
	MedicineRepository medicineRepository;
	
	public String addMedicine(Medicine medicine) {
		medicineRepository.save(medicine);
		return "Medicine added";
	}
	
	public String updateMedicine(Medicine medicine) {
		Medicine m = medicineRepository.findByMedname(medicine.getMedname());
		if(Objects.nonNull(m)){
			m.setMedprice(medicine.getMedprice());
			m.setMedseller(medicine.getMedseller());
			m.setMeddescription(medicine.getMeddescription());
			medicineRepository.saveAndFlush(m);
			return "Medicine updated";
		}else {
			System.out.println("Medicine not present");
			return "Medicine not present";
		}
	}
	
	public String deleteMedicine(String medicineName) {
		System.out.println("MedicineService - deleteMedicine");
		Medicine result = medicineRepository.findByMedname(medicineName);
		System.out.println(result);
		if(Objects.nonNull(result)) {
			System.out.println("MedicineService - deleteMedicine deleting");
			medicineRepository.delete(result);
			return "Medicine deleted successfully";
		}else {
			return "Medicine not present";
		}
	}
	
	public List<Medicine> listMedicine() {
		return medicineRepository.findAll();
	}

}
