package com.codingdojo.authentication.controllers;

import javax.servlet.http.HttpSession;
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

import com.codingdojo.authentication.models.Listing;
import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.Note;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.services.ListingService;
import com.codingdojo.authentication.services.NoteService;
import com.codingdojo.authentication.services.UserService;

@Controller
public class MainController {
 
	 @Autowired
	 private UserService userServ;
	 
	 @Autowired
	 private ListingService listingServ;
	 
	 @Autowired
	 private NoteService noteServ;
	  
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
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 model.addAttribute("listings", listingServ.getAllListings());
		 return "dashboard.jsp";
	 }
	 
	 @GetMapping("/listings/new")
	 public String listingsNew(
			 @ModelAttribute("listing") Listing listing,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 return "newlisting.jsp";
	 }
	 
	 @PostMapping("/listings/new")
	 public String listingsCreate(
			 @Valid @ModelAttribute("listing") Listing listing,
			 BindingResult result,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 if(result.hasErrors()) {
			 return "newlisting.jsp";
		 }
		 listingServ.saveNewListing(listing);
		 return "redirect:/dashboard";
	 }
	 
	 @GetMapping("listings/{id}/show")
	 public String listingsShow(
			 @PathVariable("id") Long id,
			 @ModelAttribute("note") Note note,
			 Model model,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 model.addAttribute("listing", listingServ.getListingById(id));
		 return "/showlisting.jsp";
	 }
	 
	 @PostMapping("/notes/new")
	 public String notesNew(
			 @Valid @ModelAttribute("note") Note note,
			 BindingResult result,
			 Model model,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 if(result.hasErrors()) {
			 model.addAttribute("listing", listingServ.getListingById(note.getListing().getId()));
			 return "showlisting.jsp";
		 }
		 noteServ.saveNewNote(note);
		 return "redirect:/listings/"+note.getListing().getId()+"/show";
	 }
	 
	 @DeleteMapping("listings/{id}/delete")
	 public String listingsDelete(
			 @PathVariable("id") Long id,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 listingServ.deleteListing(id);
		 return "redirect:/dashboard";
	 }
	 
	 @GetMapping("/listings/{id}/edit")
	 public String listingsEdit(
			 Model model,
			 @PathVariable("id") Long id,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 model.addAttribute("listing", listingServ.getListingById(id));
		 return "editlisting.jsp";
	 }
	 
	 @PutMapping("/listings/{id}/edit")
	 public String listingsUpdate(
			 @PathVariable("id") Long id,
			 @Valid @ModelAttribute("listing") Listing listing,
			 BindingResult result,
			 HttpSession session) {
		 if(session.getAttribute("user") == null) {
			 return "redirect:/logout";
		 }
		 if(result.hasErrors()) {
			 return "editlisting.jsp";
		 }
		 listingServ.updateListing(listing);
		 return "redirect:/dashboard";
	 }
	 

	 
}

