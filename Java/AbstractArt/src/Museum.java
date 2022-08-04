import java.util.ArrayList;

public class Museum {
	
	public static void main(String[] args) {
		Painting painting1 = new Painting("Dance", "Matisse", "Painting from 1910", "oil on canvas");
		Painting painting2 = new Painting("Florence", "Gerhard Richter", "Overpainted photograph of Florence", "Oil on color photograph");
		Painting painting3 = new Painting("Elastic Time", "Susan Qu", "12 by 12 inches", "oil on canvas");
		Sculpture sculpture1 = new Sculpture("L'Oiseau dans l'espace", "Brancusi", "Part of a series", "polished brass");
		Sculpture sculpture2 = new Sculpture("Cloud Gate", "Anish Kapoor", "Outdoor sculpture in Chicago's Millenium Park", "stainless steel");
		
		
		ArrayList<Art> museum = new ArrayList<Art>();
		museum.add(painting1);
		museum.add(painting2);
		museum.add(painting3);
		museum.add(sculpture1);
		museum.add(sculpture2);
		
		museum.get(3).viewArt();
		museum.get(0).viewArt();
		museum.get(1).viewArt();
		museum.get(4).viewArt();
		museum.get(2).viewArt();
	}
	

}
