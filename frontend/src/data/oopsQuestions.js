export const oopsSubject = {
  "id": "oops",
  "title": "Object-Oriented Programming (OOPS)",
  "description": "Master OOPS concepts, SOLID principles, and design patterns for technical interviews.",
  "icon": "Box",
  "color": "from-orange-500 to-amber-600",
  "parts": [
    {
      "id": "oops_part_1",
      "title": "Part 1 — OOPS Basics & Fundamentals",
      "difficulty": "Easy",
      "questions": [
        {
          "id": "OOPS-P1-Q1",
          "question": "Which OOP concept represents a real-world entity with state and behavior?",
          "options": ["Class", "Object", "Method", "Attribute"],
          "correctAnswer": 1,
          "explanation": "An object is an instance of a class that represents a real-world entity with state (attributes) and behavior (methods).",
          "topic": "OOPS Fundamentals"
        },
        {
          "id": "OOPS-P1-Q2",
          "question": "What is a Class in Object-Oriented Programming?",
          "options": ["A blueprint or template from which objects are created", "A real-world entity", "A function that modifies data", "An instance of an object"],
          "correctAnswer": 0,
          "explanation": "A class is a blueprint or template that defines the state and behavior of objects of that type.",
          "topic": "OOPS Fundamentals"
        },
        {
          "id": "OOPS-P1-Q3",
          "question": "Which of the following is an example of an object's state?",
          "options": ["A dog barking", "A car accelerating", "The color of a car", "A person walking"],
          "correctAnswer": 2,
          "explanation": "State represents the attributes or properties of an object, like the color of a car. Barking, accelerating, and walking are behaviors.",
          "topic": "State and Behavior"
        },
        {
          "id": "OOPS-P1-Q4",
          "question": "Which of the following best describes 'Message Passing' in OOP?",
          "options": ["Printing a message to the console", "Objects interacting and invoking each other's methods", "Converting code to machine language", "Inheriting properties from a parent class"],
          "correctAnswer": 1,
          "explanation": "Message passing is the process by which objects communicate with each other by invoking their methods.",
          "topic": "Message Passing"
        },
        {
          "id": "OOPS-P1-Q5",
          "question": "Which programming paradigm focuses on data rather than functions?",
          "options": ["Procedural Programming", "Functional Programming", "Object-Oriented Programming", "Logic Programming"],
          "correctAnswer": 2,
          "explanation": "OOP treats data as a critical element and binds it closely to the functions that operate on it, restricting its free flow.",
          "topic": "Procedural vs OOP"
        },
        {
          "id": "OOPS-P1-Q6",
          "question": "Which of the following is NOT an advantage of Object-Oriented Programming?",
          "options": ["Code reusability", "Data security through encapsulation", "Easy modeling of real-world problems", "Requires less memory and executes faster than procedural languages"],
          "correctAnswer": 3,
          "explanation": "OOP programs often require more memory and can be slightly slower than purely procedural languages like C due to overhead like dynamic dispatch.",
          "topic": "Advantages of OOP"
        },
        {
          "id": "OOPS-P1-Q7",
          "question": "In a banking system, 'Account' is a _______ and 'SavingsAccount_123' is an _______.",
          "options": ["Object, Class", "Class, Object", "Method, Attribute", "Attribute, Method"],
          "correctAnswer": 1,
          "explanation": "The 'Account' defines the general structure (Class), while a specific instance like 'SavingsAccount_123' is the Object.",
          "topic": "Class vs Object"
        },
        {
          "id": "OOPS-P1-Q8",
          "question": "Which of the following statements about 'Identity' is true?",
          "options": ["Two objects with identical state always have the same identity", "Identity is defined by the methods of an object", "Identity distinguishes one object from another, even if their state is identical", "Classes have identity, objects do not"],
          "correctAnswer": 2,
          "explanation": "Identity is a unique characteristic (often a memory address) that distinguishes two instances, even if their data (state) is identical.",
          "topic": "Identity"
        },
        {
          "id": "OOPS-P1-Q9",
          "question": "What are 'Methods' in the context of OOP?",
          "options": ["Variables declared inside a class", "Functions defined inside a class that operate on its data", "Unique identifiers for objects", "The process of hiding implementation details"],
          "correctAnswer": 1,
          "explanation": "Methods are the behaviors or functions defined within a class that operate on the object's attributes.",
          "topic": "Methods"
        },
        {
          "id": "OOPS-P1-Q10",
          "question": "If you are designing a Library Management System, which of the following is most likely a Class?",
          "options": ["BorrowBook()", "Harry Potter and the Sorcerer's Stone", "Book", "DueDate"],
          "correctAnswer": 2,
          "explanation": "'Book' is a template. 'Harry Potter' is a specific object of type Book. 'BorrowBook' is a method, and 'DueDate' is an attribute.",
          "topic": "Real-world examples"
        },
        {
          "id": "OOPS-P1-Q11",
          "question": "Why is OOP often preferred over Procedural Programming for large applications?",
          "options": ["It uses global variables effectively", "It is easier to manage, scale, and maintain through modularity", "It executes faster", "It does not require compilation"],
          "correctAnswer": 1,
          "explanation": "OOP modularizes code into objects, making large codebases easier to maintain, debug, and scale.",
          "topic": "Procedural vs OOP"
        },
        {
          "id": "OOPS-P1-Q12",
          "question": "What is the primary difference between a Class and an Object?",
          "options": ["A class consumes memory, an object does not", "An object is logical, a class is physical", "A class is a logical construct, an object has physical existence in memory", "There is no difference"],
          "correctAnswer": 2,
          "explanation": "A class is just a logical blueprint and takes no memory (other than metadata), while an object is a physical realization in memory.",
          "topic": "Class vs Object"
        },
        {
          "id": "OOPS-P1-Q13",
          "question": "Which concept allows a car to 'drive' and 'brake'?",
          "options": ["State", "Identity", "Behavior", "Inheritance"],
          "correctAnswer": 2,
          "explanation": "Driving and braking are actions or functions performed by the car, which represents its Behavior.",
          "topic": "State and Behavior"
        },
        {
          "id": "OOPS-P1-Q14",
          "question": "In OOP, attributes of an object correspond to:",
          "options": ["Functions", "Data / Variables", "Return types", "Access modifiers"],
          "correctAnswer": 1,
          "explanation": "Attributes (also called fields or instance variables) hold the data or state of the object.",
          "topic": "Attributes"
        },
        {
          "id": "OOPS-P1-Q15",
          "question": "Can an object exist without a class?",
          "options": ["Yes, always", "No, in class-based OOP languages, an object must be instantiated from a class", "Yes, but only in Java", "No, unless it is a static object"],
          "correctAnswer": 1,
          "explanation": "In class-based languages like Java, C++, and C#, every object must be created as an instance of a specific class.",
          "topic": "OOPS Fundamentals"
        }
      ]
    },
    {
      "id": "oops_part_2",
      "title": "Part 2 — Classes, Objects & Constructors",
      "difficulty": "Easy",
      "questions": [
        {
          "id": "OOPS-P2-Q1",
          "question": "When is a constructor invoked?",
          "options": ["When a class is declared", "When a method is called", "When an object is created", "When the program terminates"],
          "correctAnswer": 2,
          "explanation": "A constructor is automatically invoked at the time of object creation using the 'new' keyword (in languages like Java/C++).",
          "topic": "Constructors"
        },
        {
          "id": "OOPS-P2-Q2",
          "question": "Which of the following is true regarding a default constructor?",
          "options": ["It must be explicitly defined by the programmer", "It takes at least one argument", "It is automatically provided by the compiler if no constructors are defined", "It cannot initialize variables"],
          "correctAnswer": 2,
          "explanation": "If a class has no explicit constructors, the compiler automatically provides a no-argument default constructor.",
          "topic": "Constructors"
        },
        {
          "id": "OOPS-P2-Q3",
          "question": "What is the primary purpose of a constructor?",
          "options": ["To destroy an object", "To allocate memory for a class", "To initialize the instance variables of an object", "To call other methods"],
          "correctAnswer": 2,
          "explanation": "Constructors are primarily used to set initial values for object attributes upon instantiation.",
          "topic": "Constructors"
        },
        {
          "id": "OOPS-P2-Q4",
          "question": "(Java/C++) What happens if you define a parameterized constructor but do NOT define a default constructor?",
          "options": ["The compiler still provides a default constructor", "The compiler throws an error immediately", "You cannot create an object without passing arguments", "The parameterized constructor acts as a default constructor"],
          "correctAnswer": 2,
          "explanation": "Once you explicitly define any constructor, the compiler does not provide a default one. You must provide arguments when creating objects unless you also explicitly define a no-arg constructor.",
          "topic": "Constructor Overloading"
        },
        {
          "id": "OOPS-P2-Q5",
          "question": "What is 'Constructor Overloading'?",
          "options": ["Having multiple classes with the same constructor name", "Having multiple constructors in the same class with different parameter lists", "Calling a constructor from another constructor", "Overriding a constructor in a child class"],
          "correctAnswer": 1,
          "explanation": "Constructor overloading allows a class to have more than one constructor with different parameter lists, providing different ways to initialize an object.",
          "topic": "Constructor Overloading"
        },
        {
          "id": "OOPS-P2-Q6",
          "question": "(Java) What does the 'this' keyword refer to?",
          "options": ["The parent class", "The current object instance calling the method", "The static variables of the class", "The main method"],
          "correctAnswer": 1,
          "explanation": "'this' is a reference variable that refers to the current object on which the method or constructor is being invoked.",
          "topic": "this keyword"
        },
        {
          "id": "OOPS-P2-Q7",
          "question": "What is the purpose of a Destructor (e.g., in C++)?",
          "options": ["To initialize static variables", "To free up resources and memory before an object is destroyed", "To pause the execution of a program", "To delete the class definition"],
          "correctAnswer": 1,
          "explanation": "Destructors are automatically invoked when an object goes out of scope or is deleted, primarily to release memory and resources.",
          "topic": "Destructors"
        },
        {
          "id": "OOPS-P2-Q8",
          "question": "Are static members tied to a specific object instance?",
          "options": ["Yes, each object gets its own copy", "No, static members belong to the class and are shared among all instances", "Only if accessed via the 'this' keyword", "Only in Python"],
          "correctAnswer": 1,
          "explanation": "Static variables and methods belong to the class itself, not to any specific object. Only one copy exists in memory.",
          "topic": "Static members"
        },
        {
          "id": "OOPS-P2-Q9",
          "question": "Can a static method directly access non-static instance variables?",
          "options": ["Yes, directly", "No, it requires an object reference", "Yes, but only in child classes", "No, static methods cannot access any variables"],
          "correctAnswer": 1,
          "explanation": "Static methods run at the class level and do not have a 'this' reference. They must instantiate an object to access instance variables.",
          "topic": "Static methods"
        },
        {
          "id": "OOPS-P2-Q10",
          "question": "(Java) How do you call another constructor of the SAME class from within a constructor?",
          "options": ["Using super()", "Using class()", "Using this()", "It is not possible"],
          "correctAnswer": 2,
          "explanation": "'this()' is used to call another constructor in the same class, an approach known as constructor chaining.",
          "topic": "Constructor Chaining"
        },
        {
          "id": "OOPS-P2-Q11",
          "question": "(Java) Consider: class A { A() { System.out.print(\"1\"); } A(int x) { this(); System.out.print(\"2\"); } }. What is printed by new A(5)?",
          "options": ["12", "21", "2", "Compilation error"],
          "correctAnswer": 0,
          "explanation": "new A(5) calls A(int x). The first statement is this(), which calls the default constructor A(), printing '1'. Then it prints '2'. Output: 12.",
          "topic": "Constructor Chaining"
        },
        {
          "id": "OOPS-P2-Q12",
          "question": "Which of the following does NOT have a return type?",
          "options": ["Static methods", "Instance methods", "Constructors", "Abstract methods"],
          "correctAnswer": 2,
          "explanation": "Constructors never have a return type, not even void. If you add a return type, it becomes a regular method.",
          "topic": "Constructors"
        },
        {
          "id": "OOPS-P2-Q13",
          "question": "(Python) Which method is commonly referred to as the constructor in Python?",
          "options": ["__construct__", "init()", "__init__", "__new__"],
          "correctAnswer": 2,
          "explanation": "In Python, the __init__ method is automatically called when a new instance of a class is created.",
          "topic": "Constructors"
        },
        {
          "id": "OOPS-P2-Q14",
          "question": "Why might you mark a constructor as 'private'?",
          "options": ["To improve performance", "To prevent the class from being instantiated from outside", "To allow multiple inheritance", "To hide the instance variables"],
          "correctAnswer": 1,
          "explanation": "A private constructor prevents other classes from creating objects of this class. It is often used in the Singleton design pattern.",
          "topic": "Constructors"
        },
        {
          "id": "OOPS-P2-Q15",
          "question": "(Java/C++) If a local variable in a method has the same name as an instance variable, how do you refer to the instance variable?",
          "options": ["Using local.", "Using var.", "Using this.", "Using super."],
          "correctAnswer": 2,
          "explanation": "The 'this' keyword resolves the naming conflict by explicitly pointing to the instance variable (e.g., this.name = name).",
          "topic": "this keyword"
        }
      ]
    },
    {
      "id": "oops_part_3",
      "title": "Part 3 — Encapsulation & Abstraction",
      "difficulty": "Easy-Medium",
      "questions": []
    },
    {
      "id": "oops_part_4",
      "title": "Part 4 — Inheritance",
      "difficulty": "Easy-Medium",
      "questions": []
    },
    {
      "id": "oops_part_5",
      "title": "Part 5 — Polymorphism, Overloading & Overriding",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "oops_part_6",
      "title": "Part 6 — Abstract Classes, Interfaces & Advanced Inheritance",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "oops_part_7",
      "title": "Part 7 — Association, Aggregation, Composition & Design",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "oops_part_8",
      "title": "Part 8 — SOLID & Software Design Principles",
      "difficulty": "Medium-Hard",
      "questions": []
    },
    {
      "id": "oops_part_9",
      "title": "Part 9 — OOPS Code, Output & Interview Scenarios",
      "difficulty": "Medium-Hard",
      "questions": []
    },
    {
      "id": "oops_part_10",
      "title": "Part 10 — Advanced OOPS & Placement Interview",
      "difficulty": "Hard",
      "questions": []
    }
  ]
};
