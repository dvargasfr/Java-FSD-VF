package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Account;
import com.entity.Login;
import com.repository.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	AccountService accountService;
	
	public String signIn(Login login) {
		Optional<Login> result = loginRepository.findById(login.getEmailid());
		if(result.isPresent()) {
			Login ll = result.get();
			if(ll.getPassword().equals(login.getPassword())) {
				if(ll.getTypeofuser().equals("admin")) {
					return "Admin success";
				}else {
					return "Customer success";
				}
			}else {
				return "Password is wrong";
			}
		}else {
			return "Email ID is wrong";
		}
	}
	
	public String signUp(Login login) {
		if(login.getTypeofuser().equals("admin")) {
			return "Sorry, you can't create admin account";
		}else {
			Optional<Login> result = loginRepository.findById(login.getEmailid());
			if(result.isPresent()) {
				return "Account already exists";
			}else {
				Account acc = new Account();
				acc.setAmount(1000);
				acc.setEmailid(login.getEmailid());
				loginRepository.save(login);
				accountService.craeteAccount(acc);
				return "Account created succesfully";
			}
		}
	}
}
