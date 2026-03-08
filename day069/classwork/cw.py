# else სრულდება მაშინ, როცა try ბლოკში შეცდომა არ მოხდა; finally კი სრულდება ყოველთვის, მოხდა შეცდომა თუ არა

try:
    num = int(input("Enter a number: "))
    print("Square is:", num ** 2)
except ValueError:
    print("You must enter a number.")
else:
    print("Calculation successful.")
finally:
    print("Program finished.")