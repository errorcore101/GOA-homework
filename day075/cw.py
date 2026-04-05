def calculate(string):
    return eval(string)

def sum_of_differences(arr):
    arr.sort(reverse=True)
    total = 0
    for i in range(len(arr) - 1):
        total += arr[i] - arr[i + 1]
    return total

def divisible_by(numbers, divisor):
    result = []
    for n in numbers:
        if n % divisor == 0:
            result.append(n)
    return result

def square_sum(numbers):
    total = 0
    for n in numbers:
        total += n * n
    return total

def positive_sum(arr):
    total = 0
    for n in arr:
        if n > 0:
            total += n
    return total