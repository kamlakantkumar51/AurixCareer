import { sqlSubject } from './sqlQuestions.js';
import { cnSubject } from './cnQuestions.js';
import { oopsSubject } from './oopsQuestions.js';
import { aptitudeSubject } from './aptitudeQuestions.js';

export const csSubjects = [
  {
    "id": "dbms",
    "title": "Database Management Systems (DBMS)",
    "description": "Master core concepts of relational databases, SQL, and architecture.",
    "parts": [
      {
        "id": "dbms_part_1",
        "title": "Part 1 - DBMS FUNDAMENTALS",
        "difficulty": "Easy \u2192 Medium",
        "questions": [
          {
            "id": "dbms_q1_p1",
            "question": "What is the primary purpose of a Database Management System?",
            "options": [
              "To design computer hardware",
              "To manage and organize data efficiently",
              "To compile source code",
              "To manage network traffic"
            ],
            "correctAnswer": 1,
            "explanation": "A DBMS provides facilities to store, organize, retrieve, update and manage data efficiently.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p1",
            "question": "Which of the following is NOT a DBMS?",
            "options": [
              "MySQL",
              "PostgreSQL",
              "Oracle",
              "HTML"
            ],
            "correctAnswer": 3,
            "explanation": "HTML is a markup language, while MySQL, PostgreSQL and Oracle are database management systems.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p1",
            "question": "Which level of database architecture describes how data is physically stored?",
            "options": [
              "External level",
              "Conceptual level",
              "Internal level",
              "View level"
            ],
            "correctAnswer": 2,
            "explanation": "The internal level describes the physical storage structure of data.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p1",
            "question": "Which database architecture has three levels?",
            "options": [
              "Network architecture",
              "Three-schema architecture",
              "Client-server architecture",
              "Object architecture"
            ],
            "correctAnswer": 1,
            "explanation": "The three-schema architecture consists of external, conceptual and internal levels.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p1",
            "question": "What is data independence?",
            "options": [
              "Ability to access data without a database",
              "Ability to change schema at one level without affecting another level",
              "Ability to delete data",
              "Ability to encrypt data"
            ],
            "correctAnswer": 1,
            "explanation": "Data independence allows changes at one schema level without requiring changes at the higher level.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p1",
            "question": "Which component of DBMS is responsible for query processing?",
            "options": [
              "Query processor",
              "File explorer",
              "Compiler",
              "Operating system kernel"
            ],
            "correctAnswer": 0,
            "explanation": "The query processor parses, optimizes and executes database queries.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p1",
            "question": "Which language is primarily used to define database structure?",
            "options": [
              "DML",
              "DDL",
              "DCL",
              "TCL"
            ],
            "correctAnswer": 1,
            "explanation": "DDL includes commands such as CREATE, ALTER and DROP.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p1",
            "question": "Which command is a DDL command?",
            "options": [
              "SELECT",
              "UPDATE",
              "CREATE",
              "INSERT"
            ],
            "correctAnswer": 2,
            "explanation": "CREATE defines database objects such as tables.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p1",
            "question": "Which command is generally classified as DML?",
            "options": [
              "CREATE",
              "ALTER",
              "INSERT",
              "GRANT"
            ],
            "correctAnswer": 2,
            "explanation": "INSERT modifies data stored in a table and is categorized as DML.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p1",
            "question": "Which SQL command retrieves data?",
            "options": [
              "SELECT",
              "INSERT",
              "DELETE",
              "DROP"
            ],
            "correctAnswer": 0,
            "explanation": "SELECT is used to retrieve data from one or more tables.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p1",
            "question": "Which DBMS model stores data in tables?",
            "options": [
              "Hierarchical",
              "Relational",
              "Network",
              "Graphical"
            ],
            "correctAnswer": 1,
            "explanation": "Relational DBMSs organize data into relations, commonly represented as tables.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p1",
            "question": "A row in a relational table is called:",
            "options": [
              "Attribute",
              "Tuple",
              "Domain",
              "Schema"
            ],
            "correctAnswer": 1,
            "explanation": "A tuple represents a single row/record in a relation.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p1",
            "question": "A column in a relational table is called:",
            "options": [
              "Tuple",
              "Record",
              "Attribute",
              "Instance"
            ],
            "correctAnswer": 2,
            "explanation": "An attribute represents a column/property of an entity.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p1",
            "question": "What is a database schema?",
            "options": [
              "Current contents of database",
              "Structure/design of database",
              "Backup file",
              "Query result"
            ],
            "correctAnswer": 1,
            "explanation": "Schema defines the logical structure of a database.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p1",
            "question": "What represents the actual data stored in a database at a particular moment?",
            "options": [
              "Schema",
              "Instance",
              "Domain",
              "Constraint"
            ],
            "correctAnswer": 1,
            "explanation": "A database instance is the state/content of the database at a particular point in time.",
            "topic": "DBMS FUNDAMENTALS",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_2",
        "title": "Part 2 - ER MODEL, RELATIONS & KEYS",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p2",
            "question": "What does ER stand for?",
            "options": [
              "Entity Relationship",
              "External Relation",
              "Entity Retrieval",
              "Enhanced Record"
            ],
            "correctAnswer": 0,
            "explanation": "ER stands for Entity-Relationship model.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p2",
            "question": "An entity represents:",
            "options": [
              "A real-world object",
              "A database query",
              "A SQL command",
              "A file format"
            ],
            "correctAnswer": 0,
            "explanation": "An entity represents a distinguishable real-world object such as Student, Employee or Product.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p2",
            "question": "Which shape represents an entity in a traditional ER diagram?",
            "options": [
              "Oval",
              "Rectangle",
              "Diamond",
              "Triangle"
            ],
            "correctAnswer": 1,
            "explanation": "Rectangles traditionally represent entities.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p2",
            "question": "Which shape represents an attribute?",
            "options": [
              "Rectangle",
              "Oval",
              "Diamond",
              "Circle"
            ],
            "correctAnswer": 1,
            "explanation": "Attributes are traditionally represented using ovals.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p2",
            "question": "Which shape represents a relationship?",
            "options": [
              "Rectangle",
              "Oval",
              "Diamond",
              "Triangle"
            ],
            "correctAnswer": 2,
            "explanation": "Diamonds represent relationships in ER diagrams.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p2",
            "question": "A weak entity depends on:",
            "options": [
              "Another weak entity",
              "An owner/strong entity",
              "A query",
              "An index"
            ],
            "correctAnswer": 1,
            "explanation": "A weak entity cannot be uniquely identified without its owner entity.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p2",
            "question": "Which key uniquely identifies each tuple?",
            "options": [
              "Foreign key",
              "Primary key",
              "Alternate key",
              "Non-key attribute"
            ],
            "correctAnswer": 1,
            "explanation": "A primary key uniquely identifies records in a relation.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p2",
            "question": "Can a primary key contain NULL?",
            "options": [
              "Yes",
              "No",
              "Only in MySQL",
              "Only in Oracle"
            ],
            "correctAnswer": 1,
            "explanation": "Primary key values cannot be NULL because they must uniquely identify every row.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p2",
            "question": "A candidate key is:",
            "options": [
              "Any foreign key",
              "A minimal super key",
              "Always a composite key",
              "A duplicate key"
            ],
            "correctAnswer": 1,
            "explanation": "A candidate key is a minimal set of attributes that uniquely identifies tuples.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p2",
            "question": "A relation can have:",
            "options": [
              "Only one candidate key",
              "Multiple candidate keys",
              "No candidate keys",
              "Only foreign keys"
            ],
            "correctAnswer": 1,
            "explanation": "A relation can have multiple candidate keys, one of which is selected as the primary key.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p2",
            "question": "What is a super key?",
            "options": [
              "Any set of attributes that uniquely identifies a tuple",
              "Only the primary key",
              "Only a foreign key",
              "An attribute containing NULL"
            ],
            "correctAnswer": 0,
            "explanation": "A super key uniquely identifies tuples but may contain unnecessary attributes.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p2",
            "question": "A foreign key is used primarily to:",
            "options": [
              "Sort records",
              "Establish a relationship between tables",
              "Compress data",
              "Encrypt records"
            ],
            "correctAnswer": 1,
            "explanation": "Foreign keys enforce referential relationships between tables.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p2",
            "question": "A key consisting of more than one attribute is called:",
            "options": [
              "Foreign key",
              "Composite key",
              "Alternate key",
              "Simple key"
            ],
            "correctAnswer": 1,
            "explanation": "A composite key contains multiple attributes.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p2",
            "question": "What does cardinality describe in an ER relationship?",
            "options": [
              "Number of attributes",
              "Number of entities participating in a relationship",
              "Number of databases",
              "Number of indexes"
            ],
            "correctAnswer": 1,
            "explanation": "Cardinality describes how many entity instances can participate in a relationship.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p2",
            "question": "Which relationship means one entity can be associated with many entities?",
            "options": [
              "1:1",
              "1:N",
              "N:1 only",
              "0:0"
            ],
            "correctAnswer": 1,
            "explanation": "One-to-many means one entity instance can be related to multiple instances of another entity.",
            "topic": "ER MODEL, RELATIONS & KEYS",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_3",
        "title": "Part 3 - FUNCTIONAL DEPENDENCY & NORMALIZATION",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p3",
            "question": "Functional dependency X \u2192 Y means:",
            "options": [
              "Y determines X",
              "X uniquely determines Y",
              "X and Y are always primary keys",
              "X and Y must be foreign keys"
            ],
            "correctAnswer": 1,
            "explanation": "X \u2192 Y means the value of X determines exactly one value of Y.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p3",
            "question": "Which normal form removes repeating groups?",
            "options": [
              "1NF",
              "2NF",
              "3NF",
              "BCNF"
            ],
            "correctAnswer": 0,
            "explanation": "First Normal Form requires atomic values and removes repeating groups.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p3",
            "question": "2NF primarily removes:",
            "options": [
              "Transitive dependency",
              "Partial dependency",
              "Multivalued dependency",
              "Join dependency"
            ],
            "correctAnswer": 1,
            "explanation": "2NF removes partial dependency of non-prime attributes on part of a candidate key.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p3",
            "question": "3NF primarily removes:",
            "options": [
              "Partial dependency",
              "Transitive dependency",
              "Functional dependency",
              "Candidate keys"
            ],
            "correctAnswer": 1,
            "explanation": "3NF addresses transitive dependencies involving non-key attributes.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p3",
            "question": "BCNF is stronger than:",
            "options": [
              "1NF",
              "2NF",
              "3NF",
              "None"
            ],
            "correctAnswer": 2,
            "explanation": "BCNF is stricter than 3NF.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p3",
            "question": "A relation is in 1NF when:",
            "options": [
              "All values are atomic",
              "There are no foreign keys",
              "It has exactly one candidate key",
              "It has no NULL values"
            ],
            "correctAnswer": 0,
            "explanation": "Atomic attribute values are a fundamental requirement of 1NF.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p3",
            "question": "Partial dependency can occur when:",
            "options": [
              "Candidate key is composite",
              "Table has no primary key",
              "There is no foreign key",
              "All attributes are atomic"
            ],
            "correctAnswer": 0,
            "explanation": "Partial dependency occurs when a non-prime attribute depends on only part of a composite candidate key.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p3",
            "question": "If A \u2192 B and B \u2192 C, then A \u2192 C is:",
            "options": [
              "Partial dependency",
              "Transitive dependency",
              "Multivalued dependency",
              "Join dependency"
            ],
            "correctAnswer": 1,
            "explanation": "A determines C indirectly through B, creating a transitive dependency.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p3",
            "question": "Normalization primarily helps to:",
            "options": [
              "Increase redundancy",
              "Reduce redundancy and anomalies",
              "Remove all indexes",
              "Increase duplicate data"
            ],
            "correctAnswer": 1,
            "explanation": "Normalization organizes data to reduce redundancy and update anomalies.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p3",
            "question": "Which is NOT a typical anomaly caused by redundancy?",
            "options": [
              "Insertion anomaly",
              "Update anomaly",
              "Deletion anomaly",
              "Compilation anomaly"
            ],
            "correctAnswer": 3,
            "explanation": "Compilation anomaly is unrelated to relational database normalization.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p3",
            "question": "BCNF requires that every determinant be:",
            "options": [
              "Foreign key",
              "Candidate key",
              "Composite key",
              "Super key only"
            ],
            "correctAnswer": 1,
            "explanation": "In BCNF, every non-trivial functional dependency X \u2192 Y must have X as a candidate key.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p3",
            "question": "4NF primarily deals with:",
            "options": [
              "Partial dependency",
              "Transitive dependency",
              "Multivalued dependency",
              "Primary keys"
            ],
            "correctAnswer": 2,
            "explanation": "Fourth Normal Form addresses non-trivial multivalued dependencies.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p3",
            "question": "5NF is mainly concerned with:",
            "options": [
              "Join dependencies",
              "Functional dependencies",
              "Primary keys",
              "Atomic values"
            ],
            "correctAnswer": 0,
            "explanation": "Fifth Normal Form deals with join dependencies and lossless decomposition.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p3",
            "question": "Denormalization generally:",
            "options": [
              "Reduces redundancy",
              "Intentionally introduces redundancy for performance",
              "Removes all relationships",
              "Removes indexes"
            ],
            "correctAnswer": 1,
            "explanation": "Denormalization can improve read performance by intentionally storing redundant data.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p3",
            "question": "The main trade-off of normalization is:",
            "options": [
              "Better consistency but potentially more joins",
              "More duplication",
              "No database relationships",
              "No queries"
            ],
            "correctAnswer": 0,
            "explanation": "Normalization improves consistency but can require additional joins during retrieval.",
            "topic": "FUNCTIONAL DEPENDENCY & NORMALIZATION",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_4",
        "title": "Part 4 - SQL BASICS & QUERY PRACTICE",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p4",
            "question": "Which clause filters rows before grouping?",
            "options": [
              "HAVING",
              "WHERE",
              "ORDER BY",
              "GROUP BY"
            ],
            "correctAnswer": 1,
            "explanation": "WHERE filters individual rows before grouping.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p4",
            "question": "Which clause filters groups?",
            "options": [
              "WHERE",
              "HAVING",
              "SELECT",
              "ORDER BY"
            ],
            "correctAnswer": 1,
            "explanation": "HAVING filters groups after GROUP BY.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p4",
            "question": "Which keyword removes duplicate rows from SELECT output?",
            "options": [
              "UNIQUE",
              "DISTINCT",
              "DIFFERENT",
              "REMOVE"
            ],
            "correctAnswer": 1,
            "explanation": "DISTINCT removes duplicate result rows.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p4",
            "question": "Which clause sorts query results?",
            "options": [
              "SORT",
              "ORDER BY",
              "GROUP BY",
              "ARRANGE"
            ],
            "correctAnswer": 1,
            "explanation": "ORDER BY sorts the result set.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p4",
            "question": "Default sorting order in ORDER BY is:",
            "options": [
              "DESC",
              "ASC",
              "RANDOM",
              "NONE"
            ],
            "correctAnswer": 1,
            "explanation": "Ascending order is the default unless DESC is explicitly specified.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p4",
            "question": "Which aggregate function counts rows?",
            "options": [
              "SUM()",
              "AVG()",
              "COUNT()",
              "TOTAL()"
            ],
            "correctAnswer": 2,
            "explanation": "COUNT() returns the number of rows or non-null values depending on its form.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p4",
            "question": "COUNT(*) counts:",
            "options": [
              "Only non-null columns",
              "All rows",
              "Only primary keys",
              "Only unique rows"
            ],
            "correctAnswer": 1,
            "explanation": "COUNT(*) counts all rows returned by the query.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p4",
            "question": "Which function calculates average?",
            "options": [
              "MEAN()",
              "AVG()",
              "AVERAGE()",
              "MID()"
            ],
            "correctAnswer": 1,
            "explanation": "AVG() calculates the arithmetic average.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p4",
            "question": "Which operator is commonly used for pattern matching?",
            "options": [
              "LIKE",
              "MATCHES",
              "PATTERN",
              "FIND"
            ],
            "correctAnswer": 0,
            "explanation": "LIKE performs pattern matching using wildcards such as % and _.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p4",
            "question": "Which wildcard represents any sequence of characters in LIKE?",
            "options": [
              "_",
              "%",
              "*",
              "?"
            ],
            "correctAnswer": 1,
            "explanation": "% matches zero or more characters.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p4",
            "question": "Which wildcard represents exactly one character?",
            "options": [
              "%",
              "_",
              "*",
              "#"
            ],
            "correctAnswer": 1,
            "explanation": "Underscore matches a single character.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p4",
            "question": "Which command modifies existing rows?",
            "options": [
              "CHANGE",
              "UPDATE",
              "MODIFY",
              "ALTER"
            ],
            "correctAnswer": 1,
            "explanation": "UPDATE modifies values in existing rows.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p4",
            "question": "Which command removes selected rows?",
            "options": [
              "DELETE",
              "DROP",
              "REMOVE",
              "CLEAR"
            ],
            "correctAnswer": 0,
            "explanation": "DELETE removes rows and can use a WHERE condition.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p4",
            "question": "Which command removes the table structure itself?",
            "options": [
              "DELETE",
              "DROP",
              "CLEAR",
              "REMOVE ROW"
            ],
            "correctAnswer": 1,
            "explanation": "DROP TABLE removes the table definition and its data.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p4",
            "question": "Which command removes all rows while keeping the table structure?",
            "options": [
              "DROP",
              "TRUNCATE",
              "DELETE DATABASE",
              "REMOVE TABLE"
            ],
            "correctAnswer": 1,
            "explanation": "TRUNCATE removes all rows while retaining the table structure.",
            "topic": "SQL BASICS & QUERY PRACTICE",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_5",
        "title": "Part 5 - JOINS, SUBQUERIES & SET OPERATIONS",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p5",
            "question": "Which join returns matching rows from both tables?",
            "options": [
              "INNER JOIN",
              "LEFT JOIN",
              "RIGHT JOIN",
              "FULL JOIN"
            ],
            "correctAnswer": 0,
            "explanation": "INNER JOIN returns rows satisfying the join condition in both tables.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p5",
            "question": "LEFT JOIN returns:",
            "options": [
              "Only matching rows",
              "All rows from left table and matching rows from right",
              "All rows from right table",
              "Only unmatched rows"
            ],
            "correctAnswer": 1,
            "explanation": "LEFT JOIN preserves every row from the left table.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p5",
            "question": "RIGHT JOIN returns:",
            "options": [
              "All rows from left table",
              "All rows from right table and matching rows from left",
              "Only matching rows",
              "Only unmatched rows"
            ],
            "correctAnswer": 1,
            "explanation": "RIGHT JOIN preserves every row from the right table.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p5",
            "question": "FULL OUTER JOIN returns:",
            "options": [
              "Only matching rows",
              "All rows from both tables",
              "Only left rows",
              "Only right rows"
            ],
            "correctAnswer": 1,
            "explanation": "FULL OUTER JOIN includes matching and non-matching rows from both sides.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p5",
            "question": "A self join joins:",
            "options": [
              "Two databases",
              "A table with itself",
              "Two columns",
              "Two schemas"
            ],
            "correctAnswer": 1,
            "explanation": "A self join treats the same table as two logical tables.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p5",
            "question": "CROSS JOIN produces:",
            "options": [
              "Cartesian product",
              "Only matching records",
              "Only duplicate records",
              "No records"
            ],
            "correctAnswer": 0,
            "explanation": "CROSS JOIN returns every possible combination of rows from both tables.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p5",
            "question": "A subquery is:",
            "options": [
              "Query inside another query",
              "Database backup",
              "Table constraint",
              "Index"
            ],
            "correctAnswer": 0,
            "explanation": "A subquery is a query nested within another SQL statement.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p5",
            "question": "Which operator is commonly used with a subquery returning multiple values?",
            "options": [
              "IN",
              "=",
              "==",
              ":="
            ],
            "correctAnswer": 0,
            "explanation": "IN compares a value against a set of values returned by a subquery.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p5",
            "question": "EXISTS checks whether:",
            "options": [
              "A table exists physically",
              "A subquery returns at least one row",
              "A column exists",
              "A database exists"
            ],
            "correctAnswer": 1,
            "explanation": "EXISTS evaluates to true when the correlated or uncorrelated subquery returns at least one row.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p5",
            "question": "UNION generally:",
            "options": [
              "Combines result sets and removes duplicates",
              "Combines tables physically",
              "Deletes duplicates from tables",
              "Creates foreign keys"
            ],
            "correctAnswer": 0,
            "explanation": "UNION combines compatible result sets and removes duplicate rows.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p5",
            "question": "UNION ALL:",
            "options": [
              "Removes duplicates",
              "Preserves duplicates",
              "Sorts automatically",
              "Deletes rows"
            ],
            "correctAnswer": 1,
            "explanation": "UNION ALL combines result sets without removing duplicates.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p5",
            "question": "For UNION, corresponding SELECT statements generally need:",
            "options": [
              "Same number of compatible columns",
              "Same table names",
              "Same primary key",
              "Same database"
            ],
            "correctAnswer": 0,
            "explanation": "UNION requires compatible column counts and data types.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p5",
            "question": "Which join can be used to find employees with their managers when both are in Employee table?",
            "options": [
              "Self join",
              "Cross join only",
              "Full join only",
              "Natural join only"
            ],
            "correctAnswer": 0,
            "explanation": "A self join can relate employees to managers stored in the same table.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p5",
            "question": "Which clause is commonly used to combine rows into groups?",
            "options": [
              "GROUP BY",
              "COMBINE BY",
              "MERGE BY",
              "ORDER BY"
            ],
            "correctAnswer": 0,
            "explanation": "GROUP BY creates groups for aggregate calculations.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p5",
            "question": "Which is generally evaluated after GROUP BY?",
            "options": [
              "FROM",
              "WHERE",
              "HAVING",
              "JOIN"
            ],
            "correctAnswer": 2,
            "explanation": "HAVING filters the grouped result.",
            "topic": "JOINS, SUBQUERIES & SET OPERATIONS",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_6",
        "title": "Part 6 - TRANSACTIONS & ACID",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p6",
            "question": "What does ACID stand for?",
            "options": [
              "Atomicity, Consistency, Isolation, Durability",
              "Accuracy, Control, Integrity, Data",
              "Atomicity, Control, Isolation, Dependency",
              "Access, Consistency, Integrity, Durability"
            ],
            "correctAnswer": 0,
            "explanation": "ACID defines key properties of reliable database transactions.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p6",
            "question": "Atomicity means:",
            "options": [
              "Transaction is all-or-nothing",
              "Data is always encrypted",
              "Transactions always execute in parallel",
              "Data cannot be deleted"
            ],
            "correctAnswer": 0,
            "explanation": "Atomicity ensures that either the complete transaction occurs or none of it does.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p6",
            "question": "Consistency means:",
            "options": [
              "Database moves from one valid state to another",
              "Database is always empty",
              "Every query succeeds",
              "No transactions can run simultaneously"
            ],
            "correctAnswer": 0,
            "explanation": "Consistency ensures database constraints remain satisfied after a transaction.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p6",
            "question": "Isolation means:",
            "options": [
              "Transactions do not interfere improperly with each other",
              "Database has no users",
              "Tables are physically separated",
              "Queries cannot run concurrently"
            ],
            "correctAnswer": 0,
            "explanation": "Isolation controls how concurrent transactions interact.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p6",
            "question": "Durability means:",
            "options": [
              "Committed changes survive failures",
              "Uncommitted changes are permanent",
              "Data cannot be updated",
              "Queries are always fast"
            ],
            "correctAnswer": 0,
            "explanation": "Durability ensures committed changes persist even after system failures.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p6",
            "question": "Which command permanently saves a transaction?",
            "options": [
              "SAVE",
              "COMMIT",
              "APPLY",
              "STORE"
            ],
            "correctAnswer": 1,
            "explanation": "COMMIT makes transaction changes permanent.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p6",
            "question": "Which command undoes uncommitted changes?",
            "options": [
              "UNDO",
              "ROLLBACK",
              "REVERSE",
              "CANCEL"
            ],
            "correctAnswer": 1,
            "explanation": "ROLLBACK reverses changes made by the current transaction that have not been committed.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p6",
            "question": "Which command creates a point within a transaction to which you can roll back?",
            "options": [
              "CHECKPOINT",
              "SAVEPOINT",
              "MARKPOINT",
              "TRANSACTIONPOINT"
            ],
            "correctAnswer": 1,
            "explanation": "SAVEPOINT creates a rollback point within a transaction.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p6",
            "question": "Dirty read occurs when:",
            "options": [
              "A transaction reads uncommitted data from another transaction",
              "A transaction reads committed data",
              "Data is duplicated",
              "A table is dropped"
            ],
            "correctAnswer": 0,
            "explanation": "A dirty read occurs when uncommitted changes are read.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p6",
            "question": "Non-repeatable read means:",
            "options": [
              "Same row gives different committed values when read twice",
              "Query cannot execute",
              "Table is deleted",
              "Duplicate rows are inserted"
            ],
            "correctAnswer": 0,
            "explanation": "Another transaction modifies or deletes the row between two reads.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p6",
            "question": "Phantom read occurs when:",
            "options": [
              "Re-running a range query returns additional/different rows",
              "A query returns NULL",
              "A transaction is rolled back",
              "A table becomes empty"
            ],
            "correctAnswer": 0,
            "explanation": "Phantom rows appear when another transaction inserts/deletes rows matching the search condition.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p6",
            "question": "Which isolation level generally provides the strongest standard isolation?",
            "options": [
              "Read Uncommitted",
              "Read Committed",
              "Repeatable Read",
              "Serializable"
            ],
            "correctAnswer": 3,
            "explanation": "Serializable provides the strongest standard SQL isolation level.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p6",
            "question": "Read Uncommitted can allow:",
            "options": [
              "Dirty reads",
              "No concurrency",
              "Only serial execution",
              "No reads"
            ],
            "correctAnswer": 0,
            "explanation": "Read Uncommitted allows transactions to read uncommitted changes.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p6",
            "question": "Serializability is primarily related to:",
            "options": [
              "Correctness of concurrent transaction execution",
              "Table naming",
              "Database backup",
              "Data compression"
            ],
            "correctAnswer": 0,
            "explanation": "Serializability ensures concurrent execution has an equivalent serial execution outcome.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p6",
            "question": "A transaction is:",
            "options": [
              "A logical unit of database work",
              "A database table",
              "An index",
              "A column"
            ],
            "correctAnswer": 0,
            "explanation": "A transaction consists of one or more operations treated as a logical unit.",
            "topic": "TRANSACTIONS & ACID",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_7",
        "title": "Part 7 - CONCURRENCY & DEADLOCK",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p7",
            "question": "Concurrency control is required mainly to:",
            "options": [
              "Manage simultaneous transactions safely",
              "Increase table size",
              "Create databases",
              "Delete indexes"
            ],
            "correctAnswer": 0,
            "explanation": "Concurrency control prevents incorrect results when transactions execute simultaneously.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p7",
            "question": "A lock is used to:",
            "options": [
              "Control concurrent access to data",
              "Delete a table",
              "Create a database",
              "Compress data"
            ],
            "correctAnswer": 0,
            "explanation": "Locks coordinate access to shared database resources.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p7",
            "question": "A shared lock generally allows:",
            "options": [
              "Multiple readers",
              "Multiple writers",
              "No readers",
              "Table deletion"
            ],
            "correctAnswer": 0,
            "explanation": "Shared locks allow concurrent reading while restricting conflicting writes.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p7",
            "question": "An exclusive lock generally allows:",
            "options": [
              "A transaction exclusive access for modification",
              "Unlimited concurrent writes",
              "Only reads",
              "No transaction"
            ],
            "correctAnswer": 0,
            "explanation": "Exclusive locks prevent conflicting concurrent access while data is being modified.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p7",
            "question": "Deadlock occurs when:",
            "options": [
              "Transactions wait for each other indefinitely",
              "A query is very fast",
              "Database has no users",
              "A table contains NULL"
            ],
            "correctAnswer": 0,
            "explanation": "Deadlock occurs when transactions form a cycle of waiting.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p7",
            "question": "Which is a necessary condition for deadlock?",
            "options": [
              "Mutual exclusion",
              "Unlimited resources",
              "No waiting",
              "No locking"
            ],
            "correctAnswer": 0,
            "explanation": "Mutual exclusion is one of the classic necessary conditions for deadlock.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p7",
            "question": "Which graph is commonly used to detect transaction deadlocks?",
            "options": [
              "Wait-for graph",
              "ER graph",
              "B-tree",
              "Query graph"
            ],
            "correctAnswer": 0,
            "explanation": "A cycle in a wait-for graph can indicate a deadlock.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p7",
            "question": "Two-phase locking consists of:",
            "options": [
              "Growing and shrinking phases",
              "Read and write phases",
              "Insert and delete phases",
              "Start and stop phases"
            ],
            "correctAnswer": 0,
            "explanation": "In 2PL, locks are acquired during the growing phase and released during the shrinking phase.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p7",
            "question": "In the growing phase of 2PL:",
            "options": [
              "Locks can be acquired but not released",
              "Locks can only be released",
              "No locks are used",
              "Transactions are committed"
            ],
            "correctAnswer": 0,
            "explanation": "During the growing phase, a transaction may obtain locks but cannot release them.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p7",
            "question": "In the shrinking phase:",
            "options": [
              "Locks can be released but not acquired",
              "Locks are only acquired",
              "Database is dropped",
              "Queries are optimized"
            ],
            "correctAnswer": 0,
            "explanation": "The shrinking phase permits lock release but no new lock acquisition.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p7",
            "question": "Starvation occurs when:",
            "options": [
              "A transaction waits indefinitely for resources",
              "Database is deleted",
              "Query returns zero rows",
              "Table has duplicate values"
            ],
            "correctAnswer": 0,
            "explanation": "Starvation occurs when a transaction is repeatedly denied required resources.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p7",
            "question": "Lock-based protocols are used for:",
            "options": [
              "Concurrency control",
              "Data compression",
              "Schema design only",
              "User authentication only"
            ],
            "correctAnswer": 0,
            "explanation": "Locking protocols regulate concurrent access to database items.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p7",
            "question": "A schedule is:",
            "options": [
              "An ordering of operations from transactions",
              "A database schema",
              "A table",
              "A key"
            ],
            "correctAnswer": 0,
            "explanation": "A schedule specifies the order in which transaction operations are executed.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p7",
            "question": "Conflict serializability is based on:",
            "options": [
              "Conflicting operations",
              "Table names",
              "User passwords",
              "Database size"
            ],
            "correctAnswer": 0,
            "explanation": "Conflict serializability considers the ordering of conflicting read/write operations.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p7",
            "question": "Which operations conflict when they access the same data item and at least one is a write?",
            "options": [
              "Read-Read",
              "Read-Write",
              "Read-Read only",
              "No operations"
            ],
            "correctAnswer": 1,
            "explanation": "Read-write, write-read and write-write operations can conflict.",
            "topic": "CONCURRENCY & DEADLOCK",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_8",
        "title": "Part 8 - INDEXING, FILE ORGANIZATION & B-TREES",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p8",
            "question": "Main purpose of an index is to:",
            "options": [
              "Speed up data retrieval",
              "Increase redundancy",
              "Remove tables",
              "Encrypt data"
            ],
            "correctAnswer": 0,
            "explanation": "Indexes provide efficient access paths to rows.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p8",
            "question": "Which data structure is commonly used for database indexing?",
            "options": [
              "B+ Tree",
              "Stack only",
              "Queue only",
              "Linked list only"
            ],
            "correctAnswer": 0,
            "explanation": "B+ trees are widely used because they support efficient search and range queries.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p8",
            "question": "A B+ tree stores actual record pointers/data primarily in:",
            "options": [
              "Leaf nodes",
              "Root only",
              "Internal nodes only",
              "Random nodes"
            ],
            "correctAnswer": 0,
            "explanation": "In a typical B+ tree, leaf nodes contain pointers to records and are linked for efficient range traversal.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p8",
            "question": "B+ tree leaf nodes are commonly:",
            "options": [
              "Linked together",
              "Always empty",
              "Unordered",
              "Deleted after search"
            ],
            "correctAnswer": 0,
            "explanation": "Linked leaves make sequential and range access efficient.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p8",
            "question": "An index can improve:",
            "options": [
              "Read/search performance",
              "Every write operation automatically",
              "Storage efficiency always",
              "Data consistency automatically"
            ],
            "correctAnswer": 0,
            "explanation": "Indexes speed up many reads but can introduce additional storage and write overhead.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p8",
            "question": "A major disadvantage of indexes is:",
            "options": [
              "Additional storage and maintenance cost",
              "They prevent SELECT",
              "They delete records",
              "They remove primary keys"
            ],
            "correctAnswer": 0,
            "explanation": "Indexes consume storage and must be updated when indexed data changes.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p8",
            "question": "A clustered index determines:",
            "options": [
              "Physical/logical ordering of table data depending on DBMS implementation",
              "Password policy",
              "Database name",
              "User privileges"
            ],
            "correctAnswer": 0,
            "explanation": "A clustered index is associated with the physical organization/order of table rows in systems that support it.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p8",
            "question": "A non-clustered index:",
            "options": [
              "Stores a separate index structure pointing to table rows",
              "Deletes the original table",
              "Stores no keys",
              "Is always the primary key"
            ],
            "correctAnswer": 0,
            "explanation": "Non-clustered indexes maintain a separate structure with references to the underlying rows.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p8",
            "question": "Hash indexing is generally very useful for:",
            "options": [
              "Equality searches",
              "Range searches",
              "Sorting",
              "Prefix traversal"
            ],
            "correctAnswer": 0,
            "explanation": "Hash indexes are efficient for exact-match/equality lookups.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p8",
            "question": "Which index structure is generally better suited for range queries?",
            "options": [
              "B+ Tree",
              "Hash table",
              "Stack",
              "Queue"
            ],
            "correctAnswer": 0,
            "explanation": "B+ trees maintain ordered keys and support efficient range traversal.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p8",
            "question": "A dense index contains:",
            "options": [
              "An index entry for every search-key value/record depending on definition",
              "No entries",
              "Only one entry",
              "Only duplicate entries"
            ],
            "correctAnswer": 0,
            "explanation": "Dense indexes contain entries for every search-key value or record in the indexed data.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p8",
            "question": "A sparse index generally:",
            "options": [
              "Contains fewer index entries than records",
              "Contains more entries than records",
              "Has no relation to data ordering",
              "Is always a hash index"
            ],
            "correctAnswer": 0,
            "explanation": "Sparse indexes have entries for only some search-key values and typically require ordered data.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p8",
            "question": "Which index is automatically associated with a primary key in many DBMSs?",
            "options": [
              "Primary/unique index",
              "Hash-only index",
              "Temporary index",
              "Bitmap-only index"
            ],
            "correctAnswer": 0,
            "explanation": "Many DBMSs automatically create a unique index to enforce a primary key.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p8",
            "question": "Why should indexes not be created blindly on every column?",
            "options": [
              "They consume storage and slow writes",
              "They make SELECT impossible",
              "They remove constraints",
              "They prevent joins"
            ],
            "correctAnswer": 0,
            "explanation": "Each index requires storage and maintenance during INSERT, UPDATE and DELETE operations.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p8",
            "question": "Index selectivity refers roughly to:",
            "options": [
              "How well an index distinguishes rows",
              "Number of databases",
              "Number of users",
              "Query length"
            ],
            "correctAnswer": 0,
            "explanation": "Higher selectivity generally means fewer rows match a value, making an index more useful.",
            "topic": "INDEXING, FILE ORGANIZATION & B-TREES",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_9",
        "title": "Part 9 - DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p9",
            "question": "Which SQL command is used to provide privileges?",
            "options": [
              "GRANT",
              "GIVE",
              "PERMIT",
              "ACCESS"
            ],
            "correctAnswer": 0,
            "explanation": "GRANT gives specified privileges to users or roles.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p9",
            "question": "Which command removes privileges?",
            "options": [
              "DELETE",
              "REVOKE",
              "REMOVE",
              "DENY"
            ],
            "correctAnswer": 1,
            "explanation": "REVOKE removes previously granted privileges.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p9",
            "question": "A view is:",
            "options": [
              "A virtual table based on a query",
              "A physical hard disk",
              "A primary key",
              "A backup"
            ],
            "correctAnswer": 0,
            "explanation": "A view is a stored query that presents data as a virtual table.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p9",
            "question": "A major advantage of views is:",
            "options": [
              "Abstraction and security",
              "Guaranteed faster writes",
              "Automatic normalization",
              "Removing all indexes"
            ],
            "correctAnswer": 0,
            "explanation": "Views can hide sensitive columns and simplify complex queries.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p9",
            "question": "Which constraint prevents NULL values?",
            "options": [
              "UNIQUE",
              "NOT NULL",
              "CHECK",
              "DEFAULT"
            ],
            "correctAnswer": 1,
            "explanation": "NOT NULL requires a column to contain a value.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p9",
            "question": "Which constraint ensures uniqueness?",
            "options": [
              "UNIQUE",
              "CHECK",
              "DEFAULT",
              "NULL"
            ],
            "correctAnswer": 0,
            "explanation": "UNIQUE prevents duplicate values in the constrained column(s).",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p9",
            "question": "CHECK constraint is used to:",
            "options": [
              "Enforce a condition on values",
              "Create an index",
              "Create a database",
              "Encrypt records"
            ],
            "correctAnswer": 0,
            "explanation": "CHECK ensures inserted or updated values satisfy a specified condition.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p9",
            "question": "DEFAULT constraint:",
            "options": [
              "Supplies a default value when none is provided",
              "Prevents all inserts",
              "Deletes NULLs",
              "Creates a foreign key"
            ],
            "correctAnswer": 0,
            "explanation": "DEFAULT supplies a predefined value when an INSERT does not specify one.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p9",
            "question": "Referential integrity is mainly enforced using:",
            "options": [
              "Foreign keys",
              "Indexes only",
              "Views",
              "Stored procedures only"
            ],
            "correctAnswer": 0,
            "explanation": "Foreign keys help ensure referenced values exist in the parent table.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p9",
            "question": "Database recovery is required after:",
            "options": [
              "System failure",
              "Successful SELECT",
              "Creating a view",
              "Sorting results"
            ],
            "correctAnswer": 0,
            "explanation": "Recovery mechanisms restore the database to a consistent state after failures.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p9",
            "question": "A transaction log is mainly used for:",
            "options": [
              "Recording database changes for recovery",
              "Storing UI designs",
              "Storing passwords only",
              "Creating indexes"
            ],
            "correctAnswer": 0,
            "explanation": "Logs record changes and help support recovery and durability.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p9",
            "question": "Write-Ahead Logging means:",
            "options": [
              "Log record is written before corresponding data change is persisted",
              "Data is always written first",
              "Logs are never stored",
              "Transactions cannot rollback"
            ],
            "correctAnswer": 0,
            "explanation": "WAL requires relevant log records to reach stable storage before associated data pages are written.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p9",
            "question": "A checkpoint helps:",
            "options": [
              "Reduce recovery work",
              "Delete all transactions",
              "Remove indexes",
              "Normalize tables"
            ],
            "correctAnswer": 0,
            "explanation": "Checkpoints provide a recovery reference point and can reduce the amount of log that must be processed.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p9",
            "question": "Authentication verifies:",
            "options": [
              "Who the user is",
              "What data user can access",
              "Query performance",
              "Database normalization"
            ],
            "correctAnswer": 0,
            "explanation": "Authentication establishes the identity of a user.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p9",
            "question": "Authorization determines:",
            "options": [
              "What an authenticated user is allowed to do",
              "User identity",
              "Database size",
              "Transaction duration"
            ],
            "correctAnswer": 0,
            "explanation": "Authorization controls permissions and access rights.",
            "topic": "DATABASE SECURITY, VIEWS, CONSTRAINTS & RECOVERY",
            "placementImportant": true
          }
        ]
      },
      {
        "id": "dbms_part_10",
        "title": "Part 10 - MIXED PLACEMENT & INTERVIEW QUESTIONS",
        "difficulty": "Medium",
        "questions": [
          {
            "id": "dbms_q1_p10",
            "question": "Which normal form is generally considered sufficient for many practical relational designs?",
            "options": [
              "1NF",
              "2NF",
              "3NF",
              "5NF always"
            ],
            "correctAnswer": 2,
            "explanation": "3NF is widely used because it provides a good balance between reducing redundancy and practical query design.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q2_p10",
            "question": "Which command is used to change table structure?",
            "options": [
              "UPDATE",
              "ALTER",
              "MODIFY ROW",
              "CHANGE DATA"
            ],
            "correctAnswer": 1,
            "explanation": "ALTER modifies the structure of database objects such as tables.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q3_p10",
            "question": "What happens if a WHERE condition is omitted from DELETE?",
            "options": [
              "No rows are deleted",
              "All rows may be deleted",
              "Table structure is always deleted",
              "Only primary key is deleted"
            ],
            "correctAnswer": 1,
            "explanation": "DELETE without WHERE can remove every row from the table.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q4_p10",
            "question": "Which query correctly finds employees with salary greater than 50000?",
            "options": [
              "SELECT * FROM Employee WHERE salary > 50000;",
              "GET Employee IF salary > 50000;",
              "SELECT Employee WHERE salary > 50000;",
              "FIND * Employee salary > 50000;"
            ],
            "correctAnswer": 0,
            "explanation": "SELECT ... FROM ... WHERE is the standard SQL structure for filtering rows.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q5_p10",
            "question": "Which query finds the maximum salary?",
            "options": [
              "SELECT MAX(salary) FROM Employee;",
              "SELECT HIGH(salary) FROM Employee;",
              "SELECT TOP(salary) FROM Employee;",
              "SELECT MAXIMUM salary FROM Employee;"
            ],
            "correctAnswer": 0,
            "explanation": "MAX() returns the largest value in a column.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q6_p10",
            "question": "Which clause is used to group employees by department?",
            "options": [
              "GROUP BY department",
              "ORDER department",
              "SPLIT BY department",
              "CLASSIFY department"
            ],
            "correctAnswer": 0,
            "explanation": "GROUP BY creates groups based on department.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q7_p10",
            "question": "What is the purpose of a foreign key constraint?",
            "options": [
              "Prevent invalid references between related tables",
              "Sort data",
              "Speed up every query",
              "Encrypt data"
            ],
            "correctAnswer": 0,
            "explanation": "Foreign key constraints maintain referential integrity.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q8_p10",
            "question": "Which problem can occur if the same fact is stored redundantly in multiple rows?",
            "options": [
              "Update anomaly",
              "Compilation error",
              "Syntax error",
              "Dead code"
            ],
            "correctAnswer": 0,
            "explanation": "Updating one copy while forgetting another can create inconsistent data.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q9_p10",
            "question": "Which operation is NOT allowed by a primary key?",
            "options": [
              "Duplicate value",
              "Unique value",
              "Non-null value",
              "Valid identifier"
            ],
            "correctAnswer": 0,
            "explanation": "Primary keys must uniquely identify rows.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q10_p10",
            "question": "Which isolation level prevents dirty reads but may allow non-repeatable reads?",
            "options": [
              "Read Uncommitted",
              "Read Committed",
              "Serializable",
              "No Isolation"
            ],
            "correctAnswer": 1,
            "explanation": "Read Committed prevents reading uncommitted data but does not necessarily prevent changes between reads.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q11_p10",
            "question": "Which isolation level prevents dirty reads and non-repeatable reads but may allow phantoms under the SQL standard?",
            "options": [
              "Read Uncommitted",
              "Read Committed",
              "Repeatable Read",
              "None"
            ],
            "correctAnswer": 2,
            "explanation": "Repeatable Read ensures previously read rows cannot change during the transaction, though phantom behavior can depend on DBMS/implementation.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q12_p10",
            "question": "What is the biggest practical reason to use normalization?",
            "options": [
              "Reduce unnecessary redundancy and anomalies",
              "Make every query longer",
              "Remove all foreign keys",
              "Eliminate SQL"
            ],
            "correctAnswer": 0,
            "explanation": "Normalization organizes data to reduce duplication and insertion, update and deletion anomalies.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q13_p10",
            "question": "If a query frequently searches:",
            "options": [
              "Index on employee_id",
              "View only",
              "Foreign key only",
              "Trigger only"
            ],
            "correctAnswer": 0,
            "explanation": "An index on employee_id can provide an efficient lookup path.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q14_p10",
            "question": "A transaction transfers \u20b91000 from Account A to Account B. The debit succeeds but the credit fails. Which ACID property requires the whole transaction to be undone?",
            "options": [
              "Atomicity",
              "Consistency",
              "Isolation",
              "Durability"
            ],
            "correctAnswer": 0,
            "explanation": "Atomicity ensures the transaction is treated as one indivisible unit.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          },
          {
            "id": "dbms_q15_p10",
            "question": "During an interview, you are asked why indexes can make INSERT slower. What is the best answer?",
            "options": [
              "Indexes must also be updated when indexed data changes",
              "Indexes disable INSERT",
              "Indexes remove primary keys",
              "Indexes convert SQL into NoSQL"
            ],
            "correctAnswer": 0,
            "explanation": "When rows are inserted or modified, related indexes may also need to be updated, creating write overhead.",
            "topic": "MIXED PLACEMENT & INTERVIEW QUESTIONS",
            "placementImportant": true
          }
        ]
      }
    ]
  },
  sqlSubject,
  cnSubject,
  oopsSubject,
  aptitudeSubject
];
