nums = [1, 2, 3, 4, 5]
result0 = list(map(lambda x: x * 5, nums))
print(result0)

str_nums = ["10", "20", "30"]
result1 = list(map(int, str_nums))
print(result1)

words = ["hello", "world", "python"]
result2 = list(map(str.upper, words))
print(result2)

floats = [1.2, 2.5, 3.7, 4.1]
result3 = list(map(round, floats))
print(result3)

strings = ["apple", "banana", "kiwi"]
result4 = list(map(len, strings))
print(result4)