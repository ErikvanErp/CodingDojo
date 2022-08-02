public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $%.2f%n";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.75;
        double cappucinoPrice = 4.25;
        double coffeePrice = 2.35;
        double lattePrice = 6;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if(isReadyOrder1){
            System.out.println(customer1 + readyMessage); 
        }else{
            System.out.println(customer1 + pendingMessage); 
        }

        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage); 
            System.out.format(displayTotalMessage, cappucinoPrice); 
        }else{
            System.out.println(customer2 + pendingMessage); 
        }

        System.out.print("Hello " + customer2 + ". ");
        System.out.format(displayTotalMessage, 2 * lattePrice);
        
        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage); 

        }else{
            System.out.println(customer2 + pendingMessage); 
        }

        System.out.print("Hi " + customer3 + ". ");
        System.out.format(displayTotalMessage, lattePrice - coffeePrice);
    }
}
