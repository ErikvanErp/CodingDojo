package com.codingdojo.hellohuman.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@RequestMapping("/")
	public String index(@RequestParam(value="name", required=false) String name,
						@RequestParam(value="lastname", required=false) String lastname,
						@RequestParam(value="times", required=false) Integer times){
		
		String nameIfProvided = (name != null) ? name : "";
		String lastnameIfProvided = (lastname != null) ? lastname : "";
		String fullName = nameIfProvided + " " + lastnameIfProvided;
		
		String greeting;
		if (name == null && lastname == null) {
			greeting = "Hello human";
		} else {
			greeting = "Hello " + fullName;
		}
		
		int greetingNumberOfTimes;
		if (times == null) {
			greetingNumberOfTimes = 1;
		} else {
			greetingNumberOfTimes = times;
		}
		// java 11 has a String.repeat(n) method; but we are using java 8
		return new String(new char[greetingNumberOfTimes]).replace("\0", greeting + "\n");
	}
}
