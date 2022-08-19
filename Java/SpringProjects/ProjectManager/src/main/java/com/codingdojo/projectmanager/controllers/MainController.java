package com.codingdojo.projectmanager.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.projectmanager.models.LoginUser;
import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.services.ProjectService;
import com.codingdojo.projectmanager.services.UserService;

@Controller
public class MainController {
 
	@Autowired
	UserService userServ;
	
	@Autowired
	ProjectService projectServ;
	 
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
	public String dashboard(
			Model model,
			HttpSession session) {
		User user = (User) session.getAttribute("user");
		if(user == null) {
			 return "redirect:/logout";	
		}
		//model.addAttribute("projects", projectServ.getAllProjects());
		model.addAttribute("myprojects", projectServ.getTeamsByMember(user));
		model.addAttribute("allprojects", projectServ.getTeamsOfWhichNotMember(user));
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
	
	@PostMapping("projects/new")
	public String projectsCreate(
			@Valid @ModelAttribute("project") Project project,
			BindingResult result,
			HttpSession session) {
		User user = (User) session.getAttribute("user");
		if(user == null) {
			 return "redirect:/logout";
		}
		if(result.hasErrors()) {
			return "newproject.jsp";
		}
		List <User> members = new ArrayList<User>();
		members.add(user);
		project.setMembers(members);		
		projectServ.saveNewProject(project);
		return "redirect:/dashboard";
	}
	
	@PostMapping("/projects/{id}/addmember")
	public String projectsAddMember(
			@PathVariable("id") Long projectId,
			@RequestParam("user_id") Long userId) {
		projectServ.addMemberToTeam(userId, projectId);
		return "redirect:/dashboard"; 
	}
	
	@PostMapping("/projects/{id}/removemember")
	public String projectsRemoveMember(
			@PathVariable("id") Long projectId,
			@RequestParam("user_id") Long userId) {
		projectServ.removeMemberFromTeam(userId, projectId);
		return "redirect:/dashboard"; 
	}
	
	@GetMapping("/projects/{id}/edit")
	public String projectsEdit(
			@PathVariable("id") Long projectId,
			@ModelAttribute("project") Project p,
			Model model) {
		Project project = projectServ.getProjectById(projectId);
		model.addAttribute("project", project);
		return "editproject.jsp";
	}
	@PostMapping("/projects/{id}/edit")
	public String projectsUpdate(
			@Valid @ModelAttribute("project") Project project,
			BindingResult result) {
		if(result.hasErrors()) {
			return "editproject.jsp";
		}
		Project existingProject = projectServ.getProjectById(project.getId());
		project.setMembers(existingProject.getMembers());		
		projectServ.updateProject(project);	
		return "redirect:/dashboard";
	}
	@GetMapping("/projects/{id}/show")
	public String projectsShow(
			@PathVariable("id") Long id,
			Model model,
			HttpSession session) {
		model.addAttribute("project", projectServ.getProjectById(id));
		return "showproject.jsp";		
	}
	@GetMapping("/projects/{id}/delete")
	public String projectsDelete(
			@PathVariable("id") Long id) {
		projectServ.deleteProject(id);
		return "redirect:/dashboard";
	}
}

