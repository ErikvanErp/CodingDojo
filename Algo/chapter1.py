# Codingdojo Algorithm Book
# Chapter 1 - Fundamentals

# Threes and Fives
from pkg_resources import ContextualVersionConflict


def BetterThreesFives(start, end):
    sum = 0;

    for i in range(start,end + 1):
        if i % 3 == 0 and i % 5 == 0:
            sum = sum;
        elif i % 3 == 0:
            sum += i;
        elif i % 5 == 0:
            sum += i;

    return sum;

# print('The sum is {0:d}'.format(BetterThreesFives(100,4000000)));

# Generate Coin Change

def generateCoinChange(cents):
    coins = [25,10,5,1]; # available coin values in cents; must be in reverse order
    howMany =[0,0,0,0]
    remaining = cents;

    for i, coin in enumerate(coins):
        while(remaining >= coin):
            remaining -= coin;
            howMany[i] += 1;
    return howMany;

cents = 42;
c = generateCoinChange(cents);
print('{0} cents is {1} quarters, {2} dimes, {3} nickles, and {4} pennies'.format(cents, c[0], c[1], c[2], c[3]));


