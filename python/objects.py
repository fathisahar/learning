
#EXAMPLE 1
class Dog:
    sound = "Woof"
 
    def __init__(self, name, age):
        self.name = name
        self.age = age
 
    def bark(self):
        print(Dog.sound)

#EXAMPLE 2
# Write your code below
class Employee:
    new_id = 1

    def __init__(self):
      self.id = Employee.new_id 
      Employee.new_id += 1

    def say_id(self):
      print("My id is {}.".format(self.id))
      
    class Admin(Employee):
        pass


e1 = Employee()
e2 = Employee()
e3 = Admin()
e1.say_id()
e2.say_id()
e3.say_id()

#EXAMPLE SUPER
class Animal:
  def __init__(self, name, sound="Grrrr"):
    self.name = name
    self.sound = sound
 
  def make_noise(self):
    print("{} says, {}".format(self.name, self.sound))
 
class Cat(Animal):
  def __init__(self, name):
    super().__init__(name, "Meow!") 
 
pet_cat = Cat("Rachel")
pet_cat.make_noise() # Rachel says, Meow!


#MULTIPLE INHERITANCE
class Employee():
  new_id = 1
  def __init__(self):
    self.id = Employee.new_id
    Employee.new_id += 1

  def say_id(self):
    print("My id is {}.".format(self.id))

class Admin(Employee):
  def say_id(self):
    super().say_id()
    print("I am an admin.")

# Write your code below
class Manager(Admin):
    def say_id(self):
      print("I am in charge")
      super().say_id()

e1 = Employee()
e2 = Employee()
e3 = Admin()
e4 = Manager()
e4.say_id()