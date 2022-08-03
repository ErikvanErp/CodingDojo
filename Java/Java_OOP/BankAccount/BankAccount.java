import java.util.ArrayList;
import java.util.Random;

public class BankAccount{
    private static int numberOfAccounts = 0; 
    private static double totalAmount = 0;

    private String accountNumber; 
    private double checkingBalance;
    private double savingsBalance;

    public BankAccount(){
        BankAccount.numberOfAccounts++;
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        this.accountNumber = BankAccount.createAccountNumber();
    }

    // static variable getters
    public static double getTotalAmount(){
        return BankAccount.totalAmount;
    }
    public static double getNumberOfAccounts(){
        return BankAccount.numberOfAccounts;
    }

    // account number generator
    private static String createAccountNumber(){
        Random rand = new Random();
        String newAccountNumber = "";
        for (int i = 0; i < 10; i++){
            newAccountNumber += rand.nextInt(10);
        } 
        return newAccountNumber;
    }
    public String getAccountNumber(){
        return this.accountNumber;
    }
    
    // checking and savings accounts
    public double getCheckingBalance(){
        return this.checkingBalance;
    }
    public double getSavingsBalance(){
        return this.savingsBalance;
    }
    public double getTotalBalance(){
        return this.savingsBalance + this.checkingBalance;
    }
    
    public void addToChecking(double amount){
        this.checkingBalance += amount;
        BankAccount.totalAmount += amount;
    }
    public void addToSavings(double amount){
        this.savingsBalance += amount;
        BankAccount.totalAmount += amount;
    }
    public void withdrawFromChecking(double amount){
        if (this.checkingBalance >= amount){
            this.addToChecking( -amount );
        }
    }
    public void withdrawFromSavings(double amount){
        if (this.savingsBalance >= amount){
            this.addToSavings( -amount );
        }
    }

    // toString override
    public String toString(){
        return String.format("Account %s: Checking: $%,.2f; Savings: $%,.2f.", this.accountNumber, this.checkingBalance, this.savingsBalance);
    }

}