package com.codingdojo.daikichi.controllers;

import org.springframework.web.bind.annotation.PathVariable;
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
	
	@RequestMapping("/travel/{city}")
	public String DaikichiTravel(@PathVariable("city") String city) {
		return "Congratulations! You are traveling to " + city;	
	}

	@RequestMapping("/lotto/{lottoNumber}")
	public String DaikichiLotto(@PathVariable("lottoNumber") Integer lottoNumber) {
		if (lottoNumber % 2 == 0) {
			return "You will take a grand journey in the near future.";	
		} else {
			return "Now is a great time to spend with family and friends.";
		}
	}

}
