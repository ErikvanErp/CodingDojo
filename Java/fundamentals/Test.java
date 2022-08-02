import java.util.ArrayList;

public class Test {
    public static void main(String[] args) {
        ArrayList<String> snacks = new ArrayList<String>();
        snacks.add("Pear");
        snacks.add("Apple");
        snacks.add("Apple");
        snacks.add("Apple");
        snacks.add("Apple");
        snacks.add("Apricot");
        snacks.add("Banana");
        
    for(int i=0; i<snacks.size(); i++) {
        if(snacks.get(i).charAt(0) == 'A') {
            snacks.remove(i);
        }
    }
    
        
    for(int i=0; i<snacks.size(); i++) {
        System.out.println(snacks.get(i));
       }
    }
}