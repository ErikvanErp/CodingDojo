import java.util.ArrayList;

public class TrieTest {
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insertWord("car");
        trie.insertWord("card");
        trie.insertWord("chip");
        trie.insertWord("trie");
        trie.insertWord("try");
        trie.insertWord("cow");

        
        System.out.println(trie.isPrefixValid("tr"));
        System.out.println(trie.isPrefixValid("tried"));
        System.out.println(trie.isPrefixValid("a"));
        System.out.println(trie.isPrefixValid("car"));
        System.out.println(trie.isPrefixValid("cat"));
        System.out.println(trie.isPrefixValid("co"));
        
        System.out.println(trie.isWordValid("tr"));
        System.out.println(trie.isWordValid("tried"));
        System.out.println(trie.isWordValid("a"));
        System.out.println(trie.isWordValid("car"));
        System.out.println(trie.isWordValid("cat"));
        System.out.println(trie.isWordValid("co"));
        
        trie.printAllKeys();
        
     
    }
}
