import java.util.ArrayList;

public class Order{
    String name;
    double total;
    boolean ready;
    ArrayList<Item> items;

    public Order(String name){
        this.name = name;
        this.items = new ArrayList<Item>();
    }

    public Order addItem(Item item){
        this.items.add(item);
        this.total += item.price;

        return this;
    }

    public Order setReady(){
        this.ready = true;

        return this;
    }

    public String toString(){
        String result = this.name + ": ";
        for (Item item : this.items){
            result += (item.name + ", ");
        }
        result += String.format("$%.2f", this.total);
        if(this.ready){
            result += "; ready.";
        } 
        else{
            result += "; not ready.";
        }

        return result;    
    }

}