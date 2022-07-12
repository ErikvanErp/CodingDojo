from BankAccount import BankAccount

class User():
    def __init__(self, first_name, last_name, email, age) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        # self.account = BankAccount(interest_percentage=2)
        self.accounts = []
    
    def display_info(self):
        print(f"{self.first_name} {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        if self.is_rewards_member:
            print(f"Rewards member: {self.gold_card_points} gold card points")
        else:
            print(f"Not a rewards member")

        return self

    def enroll(self):
        if self.is_rewards_member:
            print("User already a member")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200

        return self
    
    def spend_points(self, pts):
        if not self.is_rewards_member:
            print("Cannot spend points; Not a gold card member")
            return self
        elif pts > self.gold_card_points:
            print(f"Not enough points (only {self.gold_card_points})")
            return self
        else:
            self.gold_card_points -= pts
            return self

    def open_new_account(self, interest_pct=2):
        self.accounts.append(BankAccount(interest_percentage=interest_pct))
        return self

# SENSEI BONUS: Allow a user to have multiple accounts; update methods so the user has to specify which account they are withdrawing or depositing to

    def make_deposit(self, account, amount):
        if not self.accounts[account]:
            print(f"Error: account index invalid")
            return False
        self.accounts[account].deposit(amount)
        return self
    
    def make_withdrawal(self,account,amount):
        if not self.accounts[account]:
            print(f"Error: account index invalid")
            return False
        self.accounts[account].withdraw(amount)
        return self

    def display_user_balance(self):
        print(f"\nBalances of {self.first_name} {self.last_name}:")
        for account in self.accounts:
            account.display_account_info()

    def transfer_money(self, amount, other_user):
        if (self.number_of_accounts > 0 and other_user.number_of_accounts > 0):
            self.make_withdrawal(0,amount)
            other_user.make_deposit(0,amount)

    @property
    def number_of_accounts(self):
        return len(self.accounts)


# SENPAI BONUS: Add a transfer_money(self, amount, other_user) method to the user class that takes an amount and a different User instance, and transfers money from the user's account into another user's account.


bobbi = User("Billy Bob", "Chernov", "chernov@dartmouth.edu", 40)
# bobbi.display_info()
# bobbi.enroll()
# bobbi.display_info()

peter = User("Peter", "Pan", "ppan@yahoo.com", 12)
sue = User("Sue", "Q", "sq@hotmail.com", 32)

# bobbi.spend_points(50)
# peter.enroll()
# peter.spend_points(80)

# bobbi.display_info()
# peter.display_info()
# sue.display_info()

# bobbi.enroll()
# sue.spend_points(40)
# peter.spend_points(30).spend_points(50).spend_points(300).spend_points(200)


bobbi.open_new_account(3.2)
bobbi.open_new_account(4.2)
bobbi.display_user_balance()
bobbi.make_deposit(0,100).make_deposit(1,200).make_withdrawal(0,50)
bobbi.display_user_balance()

peter.open_new_account(4)
peter.display_user_balance()
bobbi.transfer_money(30, peter)
bobbi.display_user_balance()
peter.display_user_balance()
