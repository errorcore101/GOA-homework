nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))

words = ["apple", "banana", "kiwi"]
lengths = list(map(lambda x: len(x), words))

text = ["hello world", "python is fun"]
uppercased = list(map(lambda x: x.upper(), text))

str_nums = ["1", "2", "3"]
integers = list(map(lambda x: int(x), str_nums))

print(squared)
print(lengths)
print(uppercased)
print(integers)