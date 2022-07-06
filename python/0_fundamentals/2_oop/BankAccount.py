import math

class BankAccount:
    accounts = []

    def __init__(self, interest_percentage, opening_balance=0):
        self.interest_rate = interest_percentage / 100
        self.balance = opening_balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        BankAccount.round_balance(self.balance)

        return self

    def withdraw(self, amount):
        if amount > self.balance:
            self.balance -= 5
            print("Insufficient funds: Charging a $5 fee")
            return False;
        self.balance -= amount
        BankAccount.round_balance(self.balance)

        return self
        
    def display_account_info(self):
        print(f"Balance: $ {self.balance:,.2f}, interest rate: {self.interest_rate * 100:.3f}") 
        # :,.2f - use , to separate thousands; print 2 decimals (pennies)

    def yield_interest(self):
        if self.balance < 0:
            return;
        self.balance *= (1 + self.interest_rate)
        BankAccount.round_balance(self.balance)

        return self

    @classmethod
    def print_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()

    # always round down; we are a bank...
    @staticmethod
    def round_balance(amount):
        return math.floor(amount * 100) /100


# Create 2 accounts

# account1 = BankAccount(2, 130)
# account2 = BankAccount(4, 1000000)

# # NINJA BONUS: use a classmethod to print all instances of a Bank Account's info

# BankAccount.print_accounts()

# # To the first account, make 3 deposits and 1 withdrawal, then yield interest and display the account's info all in one line of code (i.e. chaining)

# account1.deposit(200).deposit(350).deposit(90).withdraw(500).yield_interest().display_account_info()

# # To the second account, make 2 deposits and 4 withdrawals, then yield interest and display the account's info all in one line of code (i.e. chaining)

# account2.deposit(2000).deposit(50000).withdraw(1000).withdraw(2000).withdraw(3000).withdraw(5000).display_account_info()


