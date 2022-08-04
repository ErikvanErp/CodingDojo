import java.util.HashMap;
import java.util.ArrayList;

public class Node {
    public HashMap<Character, Node> children;
    public boolean isCompleteWord;
    
    public Node() {
        this.children = new HashMap<Character, Node>();
        this.isCompleteWord = false;
    }
    
    public void allKeysInBranch(ArrayList<Character> allKeys) {    	
    	for (Character c : this.children.keySet()) {
    		if (!allKeys.contains(c)) {
    			allKeys.add(c);    			
    		}
    		this.children.get(c).allKeysInBranch(allKeys);
    	}
    }
}
