package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Medicine;
import com.service.MedicineService;

@RestController
@RequestMapping("medicine")
@CrossOrigin
public class MedicineController {
	@Autowired
	MedicineService medicineService;
	
	@PostMapping(value = "addMedicine", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String addMedicine(@RequestBody Medicine medicine) {
		return medicineService.addMedicine(medicine);
	}
	
	@PostMapping(value = "deleteMedicine", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String deleteMedicine(@RequestBody Medicine medicine) {
		return medicineService.deleteMedicine(medicine.getMedname());
	}
	
	@RequestMapping(value = "listMedicine", method = RequestMethod.GET)
	public List<Medicine> listMedicine() {
		System.out.println("MedicineController - listMedicine()");
		System.out.println(medicineService.listMedicine());
		return medicineService.listMedicine();
	}
}
