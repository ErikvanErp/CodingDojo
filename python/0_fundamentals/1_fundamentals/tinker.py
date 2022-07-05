d = {
    "a":1, 
    "b":2
}

e = {
    "c":300,
    "b":200
}

d.update(e);

for k, v in d.items():
    print(f"{k} : {v}")

for item in d.items():
    print(item)

print(type(d.values()))