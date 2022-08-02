import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item("coffee", 2.50);
        Item item2 = new Item("cappucino", 4.50);
        Item item3 = new Item("latte", 4.75);
        Item item4 = new Item("tea", 1.50);

        // Order variables -- order1, order2 etc.
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");
    
        // Application Simulations
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        order2.addItem(item1);
        System.out.println(order2);
        
        order3.addItem(item2);
        System.out.println(order3);

        order1.setReady();
        System.out.println(order1);

        order4.addItem(item3).addItem(item3);
        System.out.println(order4);

        order2.setReady();
        System.out.println(order2);


    }
}
