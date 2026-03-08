def validate_age(age):
    if not 13 <= age <= 120:
        raise ValueError("Invalid age")
    return "Valid"

def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b