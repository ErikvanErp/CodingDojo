package com.codingdojo.booksapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.booksapi.models.Book;
import com.codingdojo.booksapi.repositories.BookRepository;

@Service
public class BookService {
	private final BookRepository bookRepository;
 
	public BookService(BookRepository bookRepository) {
	    this.bookRepository = bookRepository;
	}
	 // returns all the books
	public List<Book> allBooks() {
	    return bookRepository.findAll();
	}
	 // retrieves a book
	public Book findBook(Long id) {
	    Optional<Book> optionalBook = bookRepository.findById(id);
	    if(optionalBook.isPresent()) {
	        return optionalBook.get();
	    } else {
	        return null;
	    }
	}	
	// creates a book
	public Book createBook(Book b) {
		return bookRepository.save(b);
	}
	// update book info
	public void updateBook(Book b) {
		bookRepository.save(b);
	}
	// delete book
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}
}

