names = ["Giorgi", "Nino", "Luka", "Ana", "Saba"]

index = int(input("შეიყვანეთ ინდექსი: "))

if 0 <= index < len(names):
    print("ელემენტი:", names[index])
else:
    raise IndexError("ასეთი ინდექსი ლისთში არ არსებობს")



num = int(input("შეიყვანეთ რიცხვი: "))

if num > 10:
    print("OK")
else:
    raise ValueError("რიცხვი უნდა იყოს დადებითი და 10-ზე მეტი")