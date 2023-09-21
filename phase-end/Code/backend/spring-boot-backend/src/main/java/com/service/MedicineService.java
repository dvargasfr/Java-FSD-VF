package com.service;

import java.util.Objects;

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

}
