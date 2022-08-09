package com.codingdojo.counter.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class NinjaGoldController {
	
	@RequestMapping("/")
	public String index() {
		
		return "index.jsp";
	}

	@RequestMapping(value="/findgold", method=RequestMethod.POST)
	public String findgold(
			@RequestParam(value="place") String place,
			HttpSession session) {

		Integer newAmount = this.chooseRandomAmount(place);
		this.addToTotalAmount(newAmount, session);
		String logEntry = this.createActivityLogString(place, newAmount);
		this.addToActivityLog(logEntry, session);
		
		return "redirect:/";
	}
	
	@RequestMapping("/reset")
	public String reset(HttpSession session) {
		
		session.setAttribute("totalAmount", 0);
		session.setAttribute("activityLog", new ArrayList<String>());
		
		return "redirect:/";
	}
	
	private Integer chooseRandomAmount(String place) {
		Integer minAmount, maxAmount;
		
		switch (place) {
		case "farm":
			minAmount = 10;
			maxAmount = 20;
			break;
		case "cave":
			minAmount = 5;
			maxAmount = 10;
			break;
		case "house":
			minAmount = 2;
			maxAmount = 5;
			break;
		case "quest":
			minAmount = -50;
			maxAmount = 50;
			break;
		default:
			minAmount = 0;
			maxAmount = 0;
		}
		Random random = new Random(); 
		return random.nextInt(maxAmount + 1 - minAmount) + minAmount;
	}
	
	private void addToTotalAmount(Integer newAmount, HttpSession session) {
		if(session.getAttribute("totalAmount") == null) {
			session.setAttribute("totalAmount", 0);
		}
		Integer totalAmount = (Integer) session.getAttribute("totalAmount");
		session.setAttribute("totalAmount", totalAmount + newAmount); 
	}
	
	private String createActivityLogString(String place, Integer Amount) {
		Date now = new Date();
		
		String logString = Amount >= 0 ?
				String.format("pYou entered a %s and earned %d gold. (%s)", place, Amount, now):
				String.format("nYou failed a %s and lost %d gold. Ouch. (%s)", place, -Amount, now);
		
		return logString;
	}
	
	private void addToActivityLog(String logEntry, HttpSession session) {
		
		if(session.getAttribute("activityLog") == null) {
			session.setAttribute("activityLog", new ArrayList<String>());
		}
		ArrayList<String> activityLog = (ArrayList<String>) session.getAttribute("activityLog");
		activityLog.add(logEntry);
		session.setAttribute("activityLog", activityLog);	
	}

}
