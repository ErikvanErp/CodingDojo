import java.util.ArrayList;

public class CafeUtil{

    public int getStreakGoal(int numWeeks){
        int sum = 0;
        for (int i = 1; i < numWeeks + 1; i++){
            sum += i;
        }
        return sum;
    }


    public double getOrderTotal(double[] prices){
        double orderTotal = 0;
        for (double price : prices){
            orderTotal += price;
        }
        return orderTotal;
    }


    public void displayMenu(ArrayList<String> menuItems){

        for(int i = 0; i < menuItems.size(); i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }


    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please neter your name:");
        String userName = System.console().readLine();
        System.out.println(String.format("Hello %s", userName));
        System.out.println(String.format("There are %d people in front of you", customers.size()));
        customers.add(userName);

        // for (String customer : customers){
        //     System.out.println(customer);
        // }
        System.out.print(customers);

    }

    void printPriceChart(String product, double price, int maxQuantity){
        System.out.println(product);
        for (int i = 1; i <= maxQuantity; i++){
            System.out.println(String.format("%d - $%.2f", i, i * price - (i - 1) * 0.5));
        }
    }

}