package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Category;
import com.repository.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	
	public String storeCategory(Category category) {
		System.out.println("categoryService.storeCategory: "+category);
		if(categoryRepository.existsByCname(category.getCname())) {
			return "Category not stored. It already exists.";
		}else {
			categoryRepository.save(category);
			return "Category details stored";
		}
		
	}
	
	public List<Category> findAllCategory() {
		System.out.println("findAll: "+categoryRepository.findAll());
		return categoryRepository.findAll();
	}
}
