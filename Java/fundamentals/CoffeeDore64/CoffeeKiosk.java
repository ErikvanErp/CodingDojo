import java.util.ArrayList;

public class CoffeeKiosk{
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }
    public void addMenuItem(Item menuItem){
        this.menu.add(menuItem);  
    }
    public void displayMenu(){
        for (int i = 0; i < menu.size(); i++){
            System.out.printf("%d %s -- $%.2f\n", i, menu.get(i).getName(), menu.get(i).getPrice());
        }
    }

    // get new order from customer
    public void newOrder() {
        // ask for customer name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
        // Create a new order with the given input string
        Order newOrder = new Order(name);

        // Show the user the menu, so they can choose items to add.
        this.displayMenu();
        
    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            
            // Get the item object from the menu, and add the item to the order
            try{
                int index = Integer.parseInt(itemNumber);
                Item menuItem = menu.get(index);
                newOrder.addItem(menuItem);
            }
            catch(Exception e){
                System.out.println("item number is not on menu");
            }

            // Ask them to enter a new item index or q again, and take their input
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }

        // After you have collected their order, print the order details 

        System.out.println(newOrder);
    }

}

