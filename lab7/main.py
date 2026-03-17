from lab7.models import Dog, Cat

dog1 = Dog("Rex", 3, "brown", "Shepherd")
cat1 = Cat("Mimi", 2, "white", True)

animals = [dog1, cat1]

for animal in animals:
    print(animal)           
    print(animal.eat())     
    print(animal.speak())   
  