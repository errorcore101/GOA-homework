try:
    num = int(input("Enter a number: "))
    if num == 0:
        raise ValueError("რიცხვი არ უნდა იყოს 0")
except ValueError as e:
    print(e)

try:
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    result = a / b
except Exception as e:
    print("Error:", e)
else:
    print("Result:", result)

try:
    x = int(input("Enter a number: "))
    y = 10 / x
except Exception as e:
    print("Error:", e)
finally:
    print("პროგრამა დასრულდა")


try:
    num = int(input("Enter a number: "))
    if num < 0:
        raise ValueError("უარყოფითი რიცხვი არ შეიძლება")
    print("Number:", num)
except ValueError as e:
    print(e)

try:
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    result = a / b
except Exception as e:
    print("Error:", e)
else:
    print("Result:", result)
finally:
    print("დასრულდა")