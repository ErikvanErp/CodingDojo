package com.codingdojo.daikichi.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/omikuji")
public class OmikujiController {
	
	@RequestMapping("")
	public String omikuji() {
		
		return "omikuji.jsp";
	}
	
	@RequestMapping(value="/submit", method=RequestMethod.POST)
	public String submit(
			@RequestParam(value="selectedNumber") Integer selectedNumber,
			@RequestParam(value="city") String city,
			@RequestParam(value="realPerson") String realPerson,
			@RequestParam(value="hobby") String hobby,
			@RequestParam(value="livingThing") String livingThing,
			@RequestParam(value="somethingNice") String somethingNice,
			HttpSession session
			) {
		
		session.setAttribute("selectedNumber", selectedNumber);
		session.setAttribute("city", city);
		session.setAttribute("realPerson", realPerson);
		session.setAttribute("hobby", hobby);
		session.setAttribute("livingThing", livingThing);
		session.setAttribute("somethingNice", somethingNice);
		
		return "redirect:/omikuji/show";
	}
	
	@RequestMapping("/show")
	public String show(HttpSession session) {
				
		Integer selectedNumber = (Integer) session.getAttribute("selectedNumber");
		String city = (String) session.getAttribute("city");
		String realPerson = (String) session.getAttribute("realPerson");
		String hobby = (String) session.getAttribute("hobby");
		String livingThing = (String) session.getAttribute("livingThing");
		String somethingNice = (String) session.getAttribute("somethingNice");
		
		return "show_message.jsp";
	}
	
	
	
}




