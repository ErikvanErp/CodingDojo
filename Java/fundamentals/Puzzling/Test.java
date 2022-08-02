import java.util.ArrayList;
import java.util.Random;
public class Test {
    
	public static void main(String[] args) {
		PuzzleJava generator = new PuzzleJava();
		ArrayList<Integer> randomRolls = generator.getTenRolls();
		System.out.println(randomRolls);
        System.out.println(generator.getRandomLetter());
        System.out.println(generator.generatePassword());
        ArrayList<String> pwdSet = generator.getNewPasswordSet(4);
        System.out.println(pwdSet);
        System.out.println(generator.shuffleArray(pwdSet));
		
        ArrayList<Integer> nums = new ArrayList<Integer>();
        for (int i = 1; i <= 10; i++){
            nums.add(i);
        }
        System.out.println(generator.shuffleArray(nums));
	}
}
