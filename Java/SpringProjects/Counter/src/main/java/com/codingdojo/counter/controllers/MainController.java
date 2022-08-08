package com.codingdojo.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index(HttpSession session) {
		if (session.getAttribute("counter") == null) {
			session.setAttribute("counter", 1);
		} else {
			int counter = (int) session.getAttribute("counter");
			session.setAttribute("counter", counter + 1);
		}
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter(HttpSession session) {
		if (session.getAttribute("counter") == null) {
			session.setAttribute("counter", 0);
		}	
		return "counter.jsp";
	}

}
