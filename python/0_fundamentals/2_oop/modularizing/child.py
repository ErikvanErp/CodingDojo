import parent

d = dict(locals())
for var in d:
    print(f"{var} : {d[var]}")

print(type(locals()))