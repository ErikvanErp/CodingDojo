import java.util.ArrayList;

public class Order{
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    // constructors
    public Order(String name){
        this.name = name;
        this.items = new ArrayList<Item>();
    }
    public Order(){
        this("Guest");
    }

    // getters/setters
    public String getName(){
        return this.name;
    }
    public boolean isReady(){
        return this.ready;
    }
    public ArrayList<Item> getItems(){
        return this.items;
    }
    public void setName(String name){
        this.name = name; 
    }
    public void setReady(boolean ready){
        this.ready = ready;
    }
    public void setReady(){
        this.ready = true;
    }
    public double getOrderTotal(){
        double total = 0;
        for (Item item : this.items){
            total += item.getPrice();
        }
        return total;
    }
    
    // add to items list
    public Order addItem(Item item){
        this.items.add(item);
        return this;
    }

    // toString override
    public String toString(){
        String result = this.name + "'s order: ";
        for (Item item : this.items){
            result += (item.getName() + ", ");
        }
        result += String.format("$%.2f", this.getOrderTotal());
        if(this.ready){
            result += "; ready.";
        } 
        else{
            result += "; not ready.";
        }

        return result;    
    }

}