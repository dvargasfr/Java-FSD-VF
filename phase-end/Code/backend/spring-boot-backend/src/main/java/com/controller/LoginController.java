package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Login;
import com.service.LoginService;

@RestController
@RequestMapping("login")
@CrossOrigin
public class LoginController {
	@Autowired
	LoginService loginService;
	
	@PostMapping(value = "signIn", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String singIn(@RequestBody Login login) {
		return loginService.signIn(login);
	}
	
	@PostMapping(value = "signUp", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String singUp(@RequestBody Login login) {
		System.out.print("LoginController: ");
		System.out.print(login.getEmailid());
		System.out.print(login.getPassword());
		System.out.println(login.getTypeofuser());
		return loginService.signUp(login);
	}
}
