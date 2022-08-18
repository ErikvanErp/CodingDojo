package com.codingdojo.authentication.controllers;

import java.util.List;

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

import com.codingdojo.authentication.models.Book;
import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.services.BookServices;
import com.codingdojo.authentication.services.UserService;

@Controller
public class MainController {
 
 @Autowired
 private UserService userServ;
 
 @Autowired
 private BookServices bookServ;
 
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
     return "redirect:/home";
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
     return "redirect:/home";
 }
 
 @GetMapping("/logout")
 public String logout(HttpSession session) {
	 session.setAttribute("user", null);
	 return "redirect:/";
 }
 
 @GetMapping("/home")
 public String dashboard(
		 Model model, 
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }
	 List<Book> books = bookServ.getAllBooks();
	 model.addAttribute("books", books);
	 
	 return "dashboard.jsp";
 }
 
 @GetMapping("/books/new")
 public String bookNew(
		 @ModelAttribute("book") Book book, 
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }
	 return "newbook.jsp";
 }
 
 @PostMapping("/books/new")
 public String bookCreate(
		 @Valid @ModelAttribute("book") Book book, 
		 BindingResult result, 
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }
	 if(result.hasErrors()) {
		 return "newbook.jsp";
	 }
	 bookServ.saveNewBook(book);
	 return "redirect:/home";
 }
 
 @GetMapping("/books/{id}/show")
 public String bookShow(
		 @PathVariable("id") Long bookId, 
		 Model model, 
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }
	 Book book = bookServ.getBookById(bookId);
	 model.addAttribute("book", book);
	 return "showbook.jsp";
 }
 
 
 @GetMapping("/books/{id}/edit")
 public String bookEdit(
		 @PathVariable("id") Long id, 
		 Model model, 
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }
	 model.addAttribute("book", bookServ.getBookById(id));
	 return "editbook.jsp";
 }
 
 @PutMapping("/books/{id}/edit")
 public String bookUpdate(
		 @PathVariable("id") Long bookId, 
		 @Valid @ModelAttribute("book") Book book, 
		 BindingResult result, 
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }
	 if(result.hasErrors()) {
		 return "editbook.jsp";
	 }
	 bookServ.updateBook(book);
	 return "showbook.jsp";
 }
 
 @DeleteMapping("books/{id}/delete")
 public String bookDelete(
		 @PathVariable("id") Long id) {
	 bookServ.deleteBook(id);
	 return "redirect:/home";
 }
 
 @GetMapping("/bookmarket")
 public String bookmarket(
		 Model model, 
		 HttpSession session) {
	 
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }	 
	 User user = (User) session.getAttribute("user");
	 List<Book> availableBooks = bookServ.getAvailableBooks();
	 model.addAttribute("availableBooks", availableBooks);
	 List<Book> borrowedBooks = bookServ.getBooksByBorrower(user);
	 model.addAttribute("borrowedBooks", borrowedBooks);
	 return "bookmarket.jsp";
 }
 
 @GetMapping("/books/{id}/borrow")
 public String borrowBook(
		 @PathVariable("id") Long bookId,
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }	
	 User user = (User) session.getAttribute("user");
	 bookServ.borrowBook(bookId, user.getId());
	 
	 return "redirect:/bookmarket";
 } 
 
 @GetMapping("/books/{id}/return")
 public String returnBook(
		 @PathVariable("id") Long bookId,
		 HttpSession session) {
	 if(session.getAttribute("user") == null) {
		 return "redirect:/logout";
	 }	
	 bookServ.returnBook(bookId);
	 
	 return "redirect:/bookmarket";
 } 
}

