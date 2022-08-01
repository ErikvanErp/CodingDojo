public class Test {
    public static void main(String[] args){
        
        System.out.println("Hi.");
        System.out.println(addThings(6,7));
        System.out.println(addThings("Hello ", "World."));
    }

    public static String addThings(String a, String b){
            return a + b;
    }

    public static int addThings(int a, int b){
        return a + b;
    }
}