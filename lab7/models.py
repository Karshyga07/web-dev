class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
    def eat(self):
        return f"{self.name} is eating"
    def sleep(self):
        return f"{self.name} is spleeping"
    def speak(self):
        return "Some sound"
    def __str__(self):
        return f"{self.name} ({self.age} years old, {self.color})"

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    def spaek(self):
        return "Woof"
    def guard(self):
        return f"{self.name} is guarding the house"
class Cat(Animal):
    def __init__(self, name, age, color, is_lazy):
        super().__init__(name, age, color)
        self.is_lazy = is_lazy
    def speak(self):
        return "Meow"
    def climb(self):
        return f"{self.name} is climbing a tree"