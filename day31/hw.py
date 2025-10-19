num = 10

def add_five(num):
    return num + 5


print(num)






def last_char(text):
    return text[-1]

text = "hello"
result = last_char(text)
print(result)





def is_even(num1):
    return num1 % 2 == 0

print(is_even(4))
print(is_even(7))



def sum_two(a, b):
    return a + b

sum = sum_two(9, 10)
print(sum)




def bigger(a, b):
    return a if a > b else b

print(bigger(22, 18))
print(bigger(234, 92))