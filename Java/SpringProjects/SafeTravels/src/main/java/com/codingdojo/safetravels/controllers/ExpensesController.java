package com.codingdojo.safetravels.controllers;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PutMapping;

import com.codingdojo.safetravels.models.Expense;
import com.codingdojo.safetravels.services.ExpenseService;

@Controller
public class ExpensesController {

	@Autowired
	ExpenseService expenseService;
	
	@GetMapping("/expenses")
	public String index(@ModelAttribute("expense") Expense expense, Model model)
	{
		model.addAttribute("allExpenses", expenseService.getAllExpenses());
		return "index.jsp";
	}
	
	@PutMapping("/expense/add")
	public String addExpense(
			@Valid @ModelAttribute("expense") Expense expense,
			BindingResult result,
			Model model) 
	{
		if(result.hasErrors()) {
			model.addAttribute("allExpenses", expenseService.getAllExpenses());
			return "index.jsp";
		}
		expenseService.createNewExpense(expense);
		
		return "redirect:/expenses";
	}

}
