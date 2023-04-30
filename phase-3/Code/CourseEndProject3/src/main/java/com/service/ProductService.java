package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Product;
import com.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public List<Product> findAllProducts() {
		return productRepository.findAll();
	}
	
	public String storeProduct(Product product) {
		productRepository.save(product);
		return "Product details stored successfully";
	}
	
	public String updateProduct(Product product) {
		Optional<Product> result = productRepository.findById(product.getPid());
		if(result.isPresent()) {
			Product p = result.get();
			p.setPrice(product.getPrice());
			p.setPname(product.getPname());
			p.setQty(product.getQty());
			p.setProductimage(product.getProductimage());
			productRepository.saveAndFlush(p);
			System.out.println("Product updated successfully");
			return "Product updated successfully";
		}else {
			System.out.println("Product not present");
			return "Product not present";
		}
	}
	
	public Product findProductById(int pid) {
		Optional<Product> result = productRepository.findById(pid);
		if(result.isPresent()) {
			Product p = result.get();
			return p;
		}else {
			return null;
		}
		
	}
	
	// Same as updateProduct but increase the qty
	public String orderProduct(Product product) {
		Optional<Product> result = productRepository.findById(product.getPid());
		if(result.isPresent()) {
			Product p = result.get();
			p.setPrice(product.getPrice());
			p.setPname(product.getPname());
			p.setQty(p.getQty() + product.getQty());
			p.setProductimage(product.getProductimage());
			productRepository.saveAndFlush(p);
			System.out.println("Product ordered successfully");
			return "Product ordered successfully";
		}else {
			System.out.println("Product not ordered");
			return "Product not ordered";
		}
	}
	
	public String deleteProduct(int pid) {
		Optional<Product> result = productRepository.findById(pid);
		if(result.isPresent()) {
			Product p = result.get();
			productRepository.delete(p);
			return "Product deleted successfully";
		}else {
			return "Product not present";
		}
	}
}
