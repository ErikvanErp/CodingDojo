package com.codingdojo.booksapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.booksapi.models.Book;
import com.codingdojo.booksapi.services.BookService;

@Controller
public class BookController {

	@Autowired
	BookService bookService;
	
	@GetMapping("/books")
	public String index(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "index.jsp";
		
	}
	
	@GetMapping("/book/{bookId}")
	public String showOneBook(Model model, @PathVariable("bookId") Long bookId) {
		Book book = bookService.findBook(bookId);
		model.addAttribute("book", book);
		return "show.jsp";
		
	}
	
	@GetMapping("/book/new")
	public String newBook() {
		
		return "new.jsp";
	}
	
	@PostMapping("/book/create")
	public String createBook(
			@RequestParam(value="title") String title,
			@RequestParam(value="description") String description,
			@RequestParam(value="language") String language,
			@RequestParam(value="pages") String pages) {
		
		Integer numberOfPages = Integer.parseInt(pages);
		
		Book book = new Book(title, description, language, numberOfPages);
		bookService.createBook(book);
		
		return "redirect:/books";
	}
	
	
}
