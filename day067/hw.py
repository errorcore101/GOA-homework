squares = [x**2 for x in range(1, 11)]

numbers = [1, 2, 5, 8, 10, 13, 18, 21]
even_numbers = [x for x in numbers if x % 2 == 0]

fruits = ["  apple", "banana  ", "  cherry "]
cleaned_fruits = [fruit.strip() for fruit in fruits]

doubled = [x * 2 for x in range(1, 6)]

print(squares)
print(even_numbers)
print(cleaned_fruits)
print(doubled)