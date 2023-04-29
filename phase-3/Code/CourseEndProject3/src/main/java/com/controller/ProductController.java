package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bean.Category;
import com.bean.Product;
import com.service.CategoryService;
import com.service.ProductService;

@Controller
public class ProductController {

	@Autowired
	ProductService productService;
	@Autowired 
	CategoryService categoryService;
	
	@RequestMapping(value = "/viewProductsCustomer", method = RequestMethod.GET)
	public String viewProductsCustomer(Model mm, Product pp){
		List<Product> listOfProducts = productService.findAllProducts();
		mm.addAttribute("products", listOfProducts);
		
		return "viewProductsCustomer";
	}
	
	@RequestMapping(value = "/viewProductsAdmin",method = RequestMethod.GET)
	public String viewProductsAdmin(Model mm, Product pp){
		List<Product> listOfProducts = productService.findAllProducts();
		mm.addAttribute("products", listOfProducts);
		
		return "viewProductsAdmin";
	}
	
	@RequestMapping(value = "/addProductPage",method = RequestMethod.GET)
	public String openAddProductPage(Model mm, Product pp) {
		mm.addAttribute("product", pp);
		List<Category> listOfCategory = categoryService.findAllCategory();
		mm.addAttribute("category",listOfCategory);
		return "addProduct";
	}
	
	@RequestMapping(value = "/storeProductInfo",method = RequestMethod.POST)
	public String storeProductData(Model mm,Product pp) {
		String result = productService.storeProduct(pp);
		mm.addAttribute("product", pp);
		mm.addAttribute("msg", result);
		List<Category> listOfCategory = categoryService.findAllCategory();
		mm.addAttribute("category",listOfCategory);
		System.out.println(pp);  
		return "addProduct";
	}
	
	@RequestMapping(value = "/updateProductPage/{pid}",method = RequestMethod.GET)
	public String openUpdateProductPage(@PathVariable("pid") int pid, Model mm) {
		Product product = productService.findProductById(pid);
		System.out.println("openUpdateProductPage: " + product);
		mm.addAttribute("product", product);
		return "updateProduct";
	}
	
	@RequestMapping(value = "/updateProduct",method = RequestMethod.POST)
	public String updateProduct(Model mm,Product product) {
		String result = productService.updateProduct(product);
		List<Product> listOfProduct = productService.findAllProducts();
		mm.addAttribute("msg", result);
		mm.addAttribute("products", listOfProduct);
		mm.addAttribute("product", product);
		return "viewProductsAdmin";
	}
	
	@RequestMapping(value = "/orderProductPage/{pid}",method = RequestMethod.GET)
	public String openOrderProductPage(@PathVariable("pid") int pid, Model mm) {
		Product product = productService.findProductById(pid);
		System.out.println("openOrderProductPage: " + product);
		mm.addAttribute("product", product);
		return "orderProduct";
	}
	
	@RequestMapping(value = "/orderProduct",method = RequestMethod.POST)
	public String orderProduct(Model mm,Product product) {
		String result = productService.orderProduct(product);
		System.out.println("orderProduct: " + product);
		List<Product> listOfProduct = productService.findAllProducts();
		mm.addAttribute("msg", result);
		mm.addAttribute("products", listOfProduct);
		mm.addAttribute("product", product);
		return "viewProductsCustomer";
	}
}
