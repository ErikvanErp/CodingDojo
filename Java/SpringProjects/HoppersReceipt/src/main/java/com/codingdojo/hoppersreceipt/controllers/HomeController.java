package com.codingdojo.hoppersreceipt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
    @RequestMapping("/")
    public String index(Model model) {
        
        String name = "Pietje Puk";
        String itemName = "Brass nails";
        double price = 10.30;
        String description = "Just nails.";
        String vendor = "LeWitt's in Newport";
    
    	model.addAttribute("name", name);
    	model.addAttribute("itemName", itemName);
    	model.addAttribute("price", price);
    	model.addAttribute("description", description);
    	model.addAttribute("vendor", vendor);
    	
        return "index.jsp";
    }
}
