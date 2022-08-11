package com.codingdojo.safetravels.controllers;

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

import com.codingdojo.safetravels.models.Expense;
import com.codingdojo.safetravels.services.ExpenseService;

@Controller
public class ExpensesController {

	@Autowired
	ExpenseService expenseService;
	
	@GetMapping("/")
	public String home() {
		return "redirect:/expenses";
	}
	
	@GetMapping("/expenses")
	public String index(@ModelAttribute("expense") Expense expense, Model model)
	{
		model.addAttribute("allExpenses", expenseService.getAllExpenses());
		return "index.jsp";
	}
	
	@PostMapping("/expense/add")
	public String addExpense(
			@Valid @ModelAttribute("expense") Expense expense,
			BindingResult result,
			Model model) 
	{
		if(result.hasErrors()) {
			model.addAttribute("allExpenses", expenseService.getAllExpenses());
			return "index.jsp";
		} else {
			expenseService.createNewExpense(expense);
			return "redirect:/expenses";			
		}
		
	}
	
	@GetMapping("/expense/{expenseId}/edit")
	public String expenseEdit(Model model, @PathVariable("expenseId") Long expenseId)
	{
		model.addAttribute("expense", expenseService.getExpenseById(expenseId));
		return "edit.jsp";
	}
	
	@PutMapping("/expense/{id}/edit")
	public String expenseUpdate(
			@Valid @ModelAttribute("expense") Expense expense,
			BindingResult result) 
	{
		if(result.hasErrors()) {
			return "edit.jsp";
		} else {
			expenseService.updateExpense(expense);
			return "redirect:/expenses";			
		}
	}
	
	@DeleteMapping("/expense/{id}/delete")
	public String expenseDelete(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/expenses";
	}
	
	@GetMapping("/expense/{id}/show")
	public String expenseShow(@PathVariable("id") Long id, Model model) {
		
		model.addAttribute("expense", expenseService.getExpenseById(id));
		return "show.jsp";
	}
	
	

}
