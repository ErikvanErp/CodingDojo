package com.codingdojo.authentication.controllers;

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

import com.codingdojo.authentication.models.Category;
import com.codingdojo.authentication.models.Product;
import com.codingdojo.authentication.services.CategoryService;
import com.codingdojo.authentication.services.ProductService;

@Controller
public class MainController {
	
	@Autowired
	ProductService productServ;
	
	@Autowired
	CategoryService categoryServ;

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("products", productServ.getAllProducts());
		model.addAttribute("categories", categoryServ.getAllCategories());
		return "index.jsp";
	}
	
	@GetMapping("/products/new")
	public String productsNew(
			@ModelAttribute("product") Product product) {
		return "newproduct.jsp";
	}
	
	@PostMapping("/products/create")
	public String productsCreate(
			@Valid @ModelAttribute("product") Product product,
			BindingResult result) {
		if(result.hasErrors()) {
			return "newproduct.jsp";
		}
		productServ.saveNewProduct(product);		
		return "redirect:/";
	}
	
	@GetMapping("/products/{id}/show")
	public String productsShow(
			@PathVariable("id") Long id,
			Model model) {
		Product product = productServ.getProduct(id);
		model.addAttribute("product", product);
		model.addAttribute("otherCategories", categoryServ.getOtherCategories(product));
		return "showproduct.jsp";
	}
	
	@PostMapping("/products/{id}/addcategory")
	public String productsAddCategory(
			@PathVariable("id") Long productId,
			@RequestParam("category_id") Long categoryId) {
		productServ.addCategoryToProduct(categoryId, productId);
		return "redirect:/products/"+ productId + "/show";
	}
	
	@GetMapping("/categories/new")
	public String categoryNew(
			@ModelAttribute("category") Category category) {
		return "newcategory.jsp";
	}
	
	@PostMapping("/categories/create")
	public String categoryCreate(
			@Valid @ModelAttribute("category") Category category,
			BindingResult result) {
		if(result.hasErrors()) {
			return "newcategory.jsp";
		}
		categoryServ.saveNewCategory(category);
		return "redirect:/";
	}
	
	@GetMapping("/categories/{id}/show")
	public String categoriesShow(
			@PathVariable("id") Long id,
			Model model) {
		Category category = categoryServ.getCategory(id);
		model.addAttribute("category", category);
		model.addAttribute("otherProducts", productServ.getOtherProducts(category));
		return "showcategory.jsp";
	}
	
	@PostMapping("/categories/{id}/addproduct")
	public String categoriesAddProduct(
			@PathVariable("id") Long categoryId,
			@RequestParam("product_id") Long productId) {
		productServ.addCategoryToProduct(categoryId, productId);
		return "redirect:/categories/"+ categoryId + "/show";
	}
	
	
}
