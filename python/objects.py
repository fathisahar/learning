
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

e1 = Employee()
e2 = Employee()
e1.say_id()
e2.say_id()