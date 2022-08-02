import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava{
    
    // return an array with 10 random numbers in the range 1-20
    public ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> tenRolls = new ArrayList<Integer>();
        Random rand = new Random();

        for (int i = 0; i < 10; i++){
            // random integer 0-19, then + 1
            // to get an int in the range 1-20
            tenRolls.add(rand.nextInt(20) + 1);
        }
        return tenRolls;
    }

    // get a random lower case letter a-z
    public char getRandomLetter(){
        Random rand = new Random();

        //char [] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};

        // a-z are consecutive unicode characters; a = U+0061 = 97, z = U+007A = 122
        char [] abc = new char [26]; 
        for (int i = 0; i < 26; i++){
            abc[i] = (char) (97 + i); // cast int to char
        }
        return abc[rand.nextInt(26)];
    }

    // generate a random password
    // consisting of 8 characters
    public String generatePassword(){
        String password = "";
        for (int i = 0; i < 8; i++){
            password = password + getRandomLetter();
        }
        
        return password;
    }

    // return an array with random passwords
    public ArrayList<String> getNewPasswordSet(int length){
        ArrayList<String> passwordSet = new ArrayList<String>();

        for (int i = 0; i < length; i++){
            passwordSet.add(generatePassword());
        }
        return passwordSet;
    }

    // shuffle an array by repeated swapping of 2 random items
    // the method accepts ArrayList with elements of generic type T
    public <T> ArrayList<T> shuffleArray(ArrayList<T> list){
        Random rand = new Random();

        int i, j;
        
        // swap 2 random items a certain number of times
        // for larger arrays, swap more frequently
        for (int k = 0; k < 5 * list.size(); k++){
            i = rand.nextInt(list.size());
            j = rand.nextInt(list.size());
            if (i != j){
                T temp = list.get(i);
                list.set(i, list.get(j));
                list.set(j, temp); 
            }
        }

        return list;
    }

}