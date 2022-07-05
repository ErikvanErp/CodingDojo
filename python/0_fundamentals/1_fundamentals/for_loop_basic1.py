# 1 Basic 
# - Print all integers from 0 to 150.
from this import d


for i in range(151):
    print(i)

# 2 Multiples of Five 
# - Print all the multiples of 5 from 5 to 1,000
for i in range(1,201):
    print(5 * i)

 # 3 Counting, the Dojo Way 
 # - Print integers 1 to 100.
 # If divisible by 5, print "Coding" instead. 
 # If divisible by 10, print "Coding Dojo".
for i in range(1,101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Dojo")
    else:
        print(i)

# 4 Whoa. That Sucker's Huge 
# - Add odd integers from 0 to 500,000, and print the final sum.
sum = 0
for i in range(250000):
    sum += 2 * i + 1
print(f"The sum of all odd numbers from 1 to 500,000 is {sum:,}")

# 5 Countdown by Fours
#  - Print positive numbers starting at 2018, counting down by fours.
for i in range(2018, 0, -4):
    print(i)

#6 Flexible Counter
#  - Set three variables: lowNum, highNum, mult. 
# Starting at lowNum and going through highNum,
# print only the integers that are a multiple of mult. 
# For example, if lowNum=2, highNum=9, and mult=3, 
# the loop should print 3, 6, 9 (on successive lines)
def flexibleCounter(lowNum, highNum, mult):
    for i in range(lowNum, highNum + 1):
        if i % mult == 0:
            print(i)
    return
    
flexibleCounter(2,9,3)