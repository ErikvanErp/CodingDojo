
public class Painting extends Art {
	private String paintType; 
	
	public Painting(String title, String author, String description, String paintType) {
		super(title, author, description);
		this.paintType = paintType;
	}

	@Override
	public void viewArt() {
		System.out.printf("%s by %s -- %s. Material: %s\n", this.getTitle(), this.getAuthor(), this.getDescription(),  this.paintType);

	}

	// getters/setters
	public String getPaintType() {
		return paintType;
	}

	public void setPaintType(String paintType) {
		this.paintType = paintType;
	}
	

}
