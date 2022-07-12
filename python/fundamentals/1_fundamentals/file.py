
num1 = 42 # variable declaration    data type     primitive    int
num2 = 2.3 # variable declaration    data type    primitive    float
boolean = True # variable declaration    data type    primitive    bool
string = 'Hello World' # variable declaration    data type    primitive    str
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable declaration    data type    composite    list    initialize
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration    data type    composite    dict    initialize
fruit = ('blueberry', 'strawberry', 'banana') # variable declaration    data type    composite    tuple    initialize


print(type(fruit)) # log statement    typecheck    tuple
print(pizza_toppings[1]) # log statement    list    access value
pizza_toppings.append('Mushrooms') # list    add value
print(person['name']) # log statement    dict    access value
person['name'] = 'George' # dict    change value
person['eye_color'] = 'blue' # dict    add key:value pair
print(fruit[2]) # log statement    tuple    access value

if num1 > 45: # conditional    if
    print("It's greater") # log statement    str
else: # consitional    else
    print("It's lower") # log statement    str

if len(string) < 5: # conditional   if   length check    str
    print("It's a short word!") # log statement    str
elif len(string) > 15: # conditional    elif   length check    str
    print("It's a long word!") # lof statement    str
else: # conditional    else
    print("Just right!") # log statement    str

for x in range(5): # for loop   sequence
    print(x) # log statement    int
for x in range(2,5): # for loop    sequence
    print(x) # log statement    int
for x in range(2,10,3): # for loop    sequence
    print(x) # log statement    int
x = 0    # variable declaration    int
while(x < 5): # while loop    start
    print(x) # log statement    int
    x += 1 # while loop    increment

pizza_toppings.pop() # list    delete value
pizza_toppings.pop(1) # list    delete value

print(person) # log statement    dict
person.pop('eye_color') # dict    delete key:value pair
print(person) # log statement   

for topping in pizza_toppings: # for loop
    if topping == 'Pepperoni': # conditional    if
        continue # for loop    continue
    print('After 1st if statement') # log statement    str
    if topping == 'Olives': # conditional    if
        break # for loop    break

def print_hello_ten_times(): # function definition
    for num in range(10): # for loop   start
        print('Hello') # log statement    str

print_hello_ten_times() # function call

def print_hello_x_times(x): # function definion with parameter
    for num in range(x): # for loop    iterator
        print('Hello') # log statement

print_hello_x_times(4) # funtion call with argument

def print_hello_x_or_ten_times(x = 10): # function definition with parameter with default value
    for num in range(x): # for loop
        print('Hello') # log statement    str

print_hello_x_or_ten_times() # function call without argument
print_hello_x_or_ten_times(4) # function call with argument

# multiline comment
"""
Bonus section
"""

# each of the lines of code below gives an error

# print(num3)    # num3 does not exist    - NameError: name <variable name> is not defined
# num3 = 72    # variable declaration    int (no error)
# fruit[0] = 'cranberry'    # tuple is immutable     - TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) # key does not exist in dict    - KeyError: 'favorite_team'
# print(pizza_toppings[7]) # index is too high for list    - IndexError: list index out of range
#   print(boolean) # indentation error     - IndentationError: unexpected indent
# fruit.append('raspberry') # tuple is immutable; no append method exists    -- AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) # tuple is immutable; no pop method exists    - AttributeError: 'tuple' object has no attribute 'pop'