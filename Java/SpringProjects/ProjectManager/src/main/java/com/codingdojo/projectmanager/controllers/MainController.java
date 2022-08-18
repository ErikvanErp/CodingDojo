package com.codingdojo.projectmanager.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.projectmanager.models.LoginUser;
import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.services.UserService;

@Controller
public class MainController {
 
	@Autowired
	private UserService userServ;
	 
	@GetMapping("/")
	public String index(Model model) {
	    model.addAttribute("newUser", new User());
	    model.addAttribute("newLogin", new LoginUser());
	    return "login.jsp";
	}
	 
	@PostMapping("/register")
	public String register(
			@Valid @ModelAttribute("newUser") User newUser, 
	        BindingResult result,  
	        Model model, 
	        HttpSession session) { 
		 
		User savedUser = userServ.register(newUser, result);
	    if(result.hasErrors()) {
	        model.addAttribute("newLogin", new LoginUser());
	        return "login.jsp";
	    }
	    session.setAttribute("user", savedUser);
	    return "redirect:/dashboard";
	}
	 
	@PostMapping("/login")
	public String login(
			@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
	        BindingResult result, 
	        Model model, 
	        HttpSession session) {
		 
	    User currentUser = userServ.login(newLogin, result);
	    if(result.hasErrors()) {
	        model.addAttribute("newUser", new User());
	        return "login.jsp";
	    }
	    session.setAttribute("user", currentUser);
	    return "redirect:/dashboard";
	}
	 
	 @GetMapping("/logout")
	 public String logout(HttpSession session) {
		 session.setAttribute("user", null);
		 return "redirect:/";
	 }
	 
	@GetMapping("/dashboard")
	public String dashboard(HttpSession session) {
		if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		}
		return "dashboard.jsp";
	}
	
	@GetMapping("/projects/new")
	public String projectsNew(
			@ModelAttribute("project") Project project,
			HttpSession session) {
		if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		}
		return "newproject.jsp";
	}
}

