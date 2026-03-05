# NameError
#print(x)


# SyntaxError
#if 5 > 3
#    print("Hello)


# IndexError
#my_list = [1, 2, 3]
#print(my_list[5])


# TypeError
#print("5" + 5)


# ValueError
#int("hello")


# Error handling არის შეცდომების დამუშავების მექანიზმი პროგრამაში.
# ის გვეხმარება, რომ პროგრამა შეცდომის დროს არ გაითიშოს და სწორად დავამუშაოთ პრობლემა.

try:
    number = eval(input("შეიყვანეთ რიცხვი: "))
    result = 10 / number
    print("პასუხი არის:", result)

except ValueError:
    print("შეცდომა: არასწორი მნიშვნელობა!")

except SyntaxError:
    print("შეცდომა: სინტაქსური შეცდომა!")

print("პროგრამა დასრულდა.")