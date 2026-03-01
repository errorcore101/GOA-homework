# List comprehension არის მოკლე გზა ახალი სიის შესაქმნელად სხვა სიიდან.
# ის გვაძლევს საშუალებას ერთ ხაზში შევცვალოთ ან გავფილტროთ ელემენტები.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
doubled_numbers = [num * 2 for num in numbers]
print(doubled_numbers)


nums = [5, 8, 12, 3, 45, 2, 54, 9, 10]
greater_than_10 = [num for num in nums if num > 10]
print(greater_than_10)
