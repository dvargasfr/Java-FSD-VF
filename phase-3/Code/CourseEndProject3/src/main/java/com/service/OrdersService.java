package com.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Orders;
import com.repository.OrdersRepository;

@Service
public class OrdersService {

	@Autowired
	OrdersRepository ordersRepository;
	
	public String placeOrder(Orders order) {
		ordersRepository.save(order);
		return "Order placed successfully";
	}
	
	public List<Orders> viewAllOrderDetails() {
		return ordersRepository.findAll();
	}
	
	public List<Orders> findByCustomer(String key){
		return ordersRepository.findByEmailid(key);
	}
	
	public List<Orders> findByDate(LocalDate key){
		return ordersRepository.findByOrderplaced(key);
	}
}