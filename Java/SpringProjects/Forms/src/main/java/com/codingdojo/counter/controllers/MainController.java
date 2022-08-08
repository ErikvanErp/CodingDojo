package com.codingdojo.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@PostMapping("/login")
	public String login(
			@RequestParam(value="email") String email,
			@RequestParam(value="password") String password,
			HttpSession session) {
		
		session.setAttribute("email", email);
		session.setAttribute("password", password);
	    	    	
	    return "redirect:/home";
	}
	
	@RequestMapping("/home")
	public String home() {
		
		return "results.jsp";
	}
	    
	    

}
