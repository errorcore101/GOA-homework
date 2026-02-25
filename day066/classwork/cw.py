#List ინახავს დალაგებულ და დუბლირებად ელემენტებს. Set ინახავს მხოლოდ უნიკალურ ელემენტებს და არ აქვს ინდექსები.


my_set = {1, 2, 3, 4}


my_set.add(5)
print("add-ის შემდეგ:", my_set)


my_set.remove(2)
print("remove-ის შემდეგ:", my_set)

second_set = {3, 4, 10}

difference_set = my_set.difference(second_set)
print("difference-ის შედეგი:", difference_set)

family = {
    "mother": {
        "name": "Nino",
        "age": 45,
        "profession": "Teacher"
    },
    "father": {
        "name": "Giorgi",
        "age": 48,
        "profession": "Engineer"
    },
    "sister": {
        "name": "Ana",
        "age": 20,
        "profession": "Student"
    }
}

print(family)

family.update({
    "brother": {
        "name": "Luka",
        "age": 16,
        "profession": "Student"
    }
})

print(family)