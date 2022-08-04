
public class Sculpture extends Art {
	private String material; 
	
	public Sculpture(String title, String author, String description, String material) {
		super(title, author, description);
		this.material = material;
	}

	@Override
	public void viewArt() {
		System.out.printf("%s by %s -- %s. Material: %s\n", this.getTitle(), this.getAuthor(), this.getDescription(),  this.material);
	}

	// getters/setters
	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

}
