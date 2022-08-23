package com.codingdojo.authentication.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="notes")
public class Note {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotNull(message="A note cannot be blank.")
	@NotBlank(message="A note cannot be blank.")
	private String noteText;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User noteUser;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="listing_id")
	private Listing listing;
	
	public Note() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNoteText() {
		return noteText;
	}

	public void setNoteText(String noteText) {
		this.noteText = noteText;
	}

	public User getNoteUser() {
		return noteUser;
	}

	public void setNoteUser(User noteUser) {
		this.noteUser = noteUser;
	}

	public Listing getListing() {
		return listing;
	}

	public void setListing(Listing listing) {
		this.listing = listing;
	}
	

}
