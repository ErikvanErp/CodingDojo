package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	
	private Integer employeeID;
	private String role;
	private ArrayList<String> securityIncidents;

	// constructor that takes an ID and a role
	public AdminUser(Integer id, String role) {
		super(id);
		this.role = role;
		this.securityIncidents = new ArrayList<String>();
	}

	// Setters & Getters
	public Integer getEmployeeID() {
		return employeeID;
	}

	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

//  no get/set for securityIncidents
//  can use the reportSecurityIncidents() method

//	public ArrayList<String> getSecurityIncidents() {
//		return securityIncidents;
//	}

//	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
//		this.securityIncidents = securityIncidents;
//	}

	// methods
	public void newIncident(String notes) {
		String report = String.format(
				"Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
				new Date(), this.id, notes
				);
		securityIncidents.add(report);
	}
	
	public void authIncident() {
		String report = String.format(
				"Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
				new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
				);
		securityIncidents.add(report);
	}

	// interface overrides
	@Override
	public boolean assignPin(int pin) {
		boolean isValidPin = (pin >= 100000) ? true : false;
		if (isValidPin) {
			this.pin = pin;
		}
		return isValidPin;
	}
	
	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		boolean isValidAuthID = (this.id == confirmedAuthID) ? true : false;
		
		if (!isValidAuthID) {
			this.authIncident();
		}
		return isValidAuthID;
	}
	
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		
		return this.securityIncidents;
	}


	

}





// TO DO: Implement HIPAACompliantUser!
// TO DO: Implement HIPAACompliantAdmin!




