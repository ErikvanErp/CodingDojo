package com.codingdojo.authentication.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.authentication.models.Book;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.repositories.BookRepository;
import com.codingdojo.authentication.repositories.UserRepository;

@Service
public class BookServices {
	@Autowired
	BookRepository bookRepo;
	
	@Autowired
	UserRepository userRepo;
	
	public Book saveNewBook(Book book) {
		return bookRepo.save(book);
	}
	
	public List<Book> getAllBooks(){
		return bookRepo.findAll();
	}
	
	public Book getBookById(Long id) {
		Optional<Book> book = bookRepo.findById(id);
		if(book.isPresent()) {
			return book.get();
		} else {
			return null;
		}
	}
	
	public void updateBook(Book book) {
		bookRepo.save(book);
	}
	
	public List<Book> getAvailableBooks(){
		return bookRepo.findByBorrower(null);
	}
	
	public List<Book> getBooksByBorrower(User user){
		return bookRepo.findByBorrower(user);
	}
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);		
	}
	
	public void borrowBook(Long bookId, Long userId) {
		Optional<Book> optionalBook = bookRepo.findById(bookId);
		Optional<User> optionalUser = userRepo.findById(userId);
		if (optionalBook.isPresent() && optionalUser.isPresent()){
			Book book = optionalBook.get();
			User user = optionalUser.get();
			book.setBorrower(user);
			bookRepo.save(book);
		} 
	}
	
	public void returnBook(Long bookId) {
		Optional<Book> optionalBook = bookRepo.findById(bookId);
		if (optionalBook.isPresent()){
			Book book = optionalBook.get();
			book.setBorrower(null);
			bookRepo.save(book);
		} 
	}

}
