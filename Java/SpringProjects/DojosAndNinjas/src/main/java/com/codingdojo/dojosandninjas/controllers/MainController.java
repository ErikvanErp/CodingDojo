package com.codingdojo.dojosandninjas.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.dojosandninjas.models.Dojo;
import com.codingdojo.dojosandninjas.models.Ninja;
import com.codingdojo.dojosandninjas.services.DojosServices;
import com.codingdojo.dojosandninjas.services.NinjaServices;



@Controller
public class MainController {
	
	@Autowired
	NinjaServices ninjaServices;
	
	@Autowired
	DojosServices dojosServices;

	@GetMapping("/")
	public String index() {
		return "redirect:/dojos";
	}
	
	@GetMapping("/dojos")
	public String dojos(@ModelAttribute("dojo") Dojo dojo) {
		return "dojos.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String dojoNew(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "dojos.jsp";
		} else {
			dojosServices.createNewDojo(dojo);
			return "redirect:/dojos";			
		}
	}
	
	@GetMapping("/ninjas")
	public String ninjas(@ModelAttribute("ninja") Ninja ninja, Model model) {
		
		model.addAttribute("dojos", dojosServices.getAllDojos());
		return "ninjas.jsp";
	}

	@PostMapping("/ninjas/new")
	public String ninjas(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		
		if(result.hasErrors()) {
			model.addAttribute("dojos", dojosServices.getAllDojos());
			return "ninjas.jsp";
		} else {
			ninjaServices.createNewNinja(ninja);
			return "redirect:/ninjas";
		}
	}
	
	@GetMapping("/dojos/{id}")
	public String dojoShow(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", dojosServices.getDojoById(id));
		return "dojoshow.jsp";
	
	}
}
