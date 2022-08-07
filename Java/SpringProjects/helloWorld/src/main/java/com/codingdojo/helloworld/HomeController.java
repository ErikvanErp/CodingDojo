package com.codingdojo.helloworld;

//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@GetMapping("/")
	public String index() {
		return "<h1>Hello World from HomeController!</h1>";
	}
	
	@GetMapping("/trie")
	public String trie() {
		return "<h3>How's it hangin?</h3>";
	}
}