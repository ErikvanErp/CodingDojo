package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	
	private ArrayList<String> patientNotes;

	public Physician(Integer id) {
		super(id);
	}

	@Override
	public boolean assignPin(int pin) {
		boolean isValidPin = (pin <= 9999 && pin >= 1000) ? true : false;
		
		if(isValidPin) { 
			this.pin = pin; 
		}
		
		return isValidPin;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		
		return (this.id == confirmedAuthID) ? true : false;
	}

	public void newPatientNotes(String notes, String patientName, Date date) {
	    String report  = String.format("Datetime Submitted: %s \n", date);
	           report += String.format("Reported By ID: %s\n", this.id);
	           report += String.format("Patient Name: %s\n", patientName);
	           report += String.format("Notes: %s \n", notes);
	    
	    this.patientNotes.add(report);
	}
}







// TO DO: Setters & Getters
