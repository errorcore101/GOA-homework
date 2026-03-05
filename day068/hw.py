# Exception არის შეცდომა, რომელიც პროგრამის შესრულების დროს ჩნდება.
# try ბლოკში ვწერთ იმ კოდს, რომელმაც შეიძლება შეცდომა გამოიწვიოს.
# except ბლოკი იჭერს ამ შეცდომას და პროგრამა არ ჩერდება, არამედ აგრძელებს მუშაობას.

try:
    num = int(input("Enter a number: "))
    print("Converted number:", num)
except ValueError:
    print("ValueError: You must enter a valid integer.")



try:
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    result = a / b
    print("Result:", result)
except ZeroDivisionError:
    print("ZeroDivisionError: Cannot divide by zero.")

my_list = [10, 20, 30, 40, 50]

try:
    index = int(input("Enter index (0-4): "))
    print("Element:", my_list[index])
except IndexError:
    print("IndexError: Index out of range.")

try:
    x = int(input("Enter a number: "))
    y = int(input("Enter another number: "))
    print("Division:", x / y)
    print("List element:", my_list[x])
except ValueError:
    print("ValueError: Invalid number.")
except ZeroDivisionError:
    print("ZeroDivisionError: Cannot divide by zero.")
except IndexError:
    print("IndexError: Index out of range.")