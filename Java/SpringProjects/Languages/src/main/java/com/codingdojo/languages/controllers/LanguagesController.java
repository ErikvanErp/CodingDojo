package com.codingdojo.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.codingdojo.languages.models.Language;
import com.codingdojo.languages.services.LanguagesService;

@Controller
public class LanguagesController {

	@Autowired
	LanguagesService languagesService;
	
	@GetMapping("/")
	public String home() {
		
		return "redirect:/languages";
	}
	
	@GetMapping("/languages")
	public String index(@ModelAttribute("language") Language language, Model model) {
		List<Language> allLanguages = languagesService.getAllLanguages();
		model.addAttribute("allLanguages", allLanguages);
		return "languages.jsp";
	}
	
	@GetMapping("language/{id}/show")
	public String languageShow(@PathVariable("id") Long id, Model model) {
		Language language = languagesService.findLanguageById(id);
		model.addAttribute("language", language);
		return "show.jsp";
	}
	
	@PostMapping("/language/add")
	public String languageAdd(
			@Valid @ModelAttribute("language") Language language,
			BindingResult result) {
		
		if(result.hasErrors()) {
			return "languages.jsp";
		} else {
			languagesService.createNewLanguage(language);
			return "redirect:/languages";			
		}
	}
	
	@GetMapping("/language/{id}/edit")
	public String editLanguage(@PathVariable("id") Long id, Model model) {
		Language language = languagesService.findLanguageById(id);
		model.addAttribute("language", language);
		return "edit.jsp";
	}
	
	@PutMapping("/language/{id}/update")
	public String updateLanguage(
			@PathVariable("id") Long id, 
			@Valid @ModelAttribute("language") Language language,
			BindingResult result) {
		
		if(result.hasErrors()) {
			return "edit.jsp";
		} else {
			languagesService.createNewLanguage(language);
			return "redirect:/languages";			
		}
	}
	
	@DeleteMapping("/language/{id}/delete")
	public String languageDelete(@PathVariable("id") Long id) {
		languagesService.deleteLanguageById(id);
		
		return "redirect:/languages";
		
	}

}

