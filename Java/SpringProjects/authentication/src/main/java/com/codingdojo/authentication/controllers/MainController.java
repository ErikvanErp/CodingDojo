package com.codingdojo.authentication.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.services.UserService;

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
 public String register(@Valid @ModelAttribute("newUser") User newUser, 
         BindingResult result, Model model, HttpSession session) { 
	 
	 User savedUser = userServ.register(newUser, result);
     if(result.hasErrors()) {
         model.addAttribute("newLogin", new LoginUser());
         return "login.jsp";
     }
     session.setAttribute("user", savedUser);
     return "redirect:/home";
 }
 
 @PostMapping("/login")
 public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
         BindingResult result, Model model, HttpSession session) {
	 
     User currentUser = userServ.login(newLogin, result);
     if(result.hasErrors()) {
         model.addAttribute("newUser", new User());
         return "login.jsp";
     }
     session.setAttribute("user", currentUser);
     return "redirect:/home";
 }
 
 @GetMapping("/home")
 public String dashboard(HttpSession session) {
	 return "dashboard.jsp";
 }
 
}

