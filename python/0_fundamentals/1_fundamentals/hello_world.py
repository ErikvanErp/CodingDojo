print("Hello World")

name = "Erik"
print("Hello", name)
print("Hello " + name)

num = 34;
print("Hello", num)
# print("Hello " + num)      # TypeError
print("Hello " + str(num))      

food1 = "red curry"
food2 = "breakfast burrito"
print("I love to eat {} and {}".format(food1, food2))
print(f"I love to eat {food1} and {food2}")

print(food1.title())
print(food1.capitalize())
print("erik van erp".title())

name = "Erik van Erp"
words = name.split()
print(words)
print(f"There are {len(words)} words in my name")
print("There are {} e's in my name".format(name.lower().count("e")))
