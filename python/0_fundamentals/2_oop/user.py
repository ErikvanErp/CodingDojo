class User():
    def __init__(self, first_name, last_name, email, age) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age

        self.is_rewards_member = False
        self.gold_card_points = 0
    
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
        



bobbi = User("Billy Bob", "Chernov", "chernov@dartmouth.edu", 40)
bobbi.display_info()
bobbi.enroll()
bobbi.display_info()

peter = User("Peter", "Pan", "ppan@yahoo.com", 12)
sue = User("Sue", "Q", "sq@hotmail.com", 32)

bobbi.spend_points(50)
peter.enroll()
peter.spend_points(80)

bobbi.display_info()
peter.display_info()
sue.display_info()

bobbi.enroll()
sue.spend_points(40)
peter.spend_points(30).spend_points(50).spend_points(300).spend_points(200)
