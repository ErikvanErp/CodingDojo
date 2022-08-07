package com.codingdojo.daikichi.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {

	@RequestMapping("")
	public String Daikichi() {
		return "Welcome!";
	}
	@RequestMapping("/today")
	public String DaikichiToday() {
		return "Today you will find luck!";
	}

	@RequestMapping("/tomorrow")
	public String DaikichiTomorrow() {
		return "Tomorrow, and opportunity will arise";
	}


}
