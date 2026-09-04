export const sqlSubject = {
  "id": "sql",
  "title": "SQL Practice",
  "description": "Master SQL querying, aggregation, joins, subqueries, and advanced database concepts.",
  "parts": [
    {
      "id": "sql_part_1",
      "title": "Part 1 - SQL BASICS & SELECT",
      "difficulty": "Easy",
      "questions": [
        {
          "id": "sql_q1_p1",
          "question": "Which SQL command is used to retrieve data from a database?",
          "options": ["GET", "SELECT", "FETCH", "READ"],
          "correctAnswer": 1,
          "explanation": "SELECT is used to retrieve data from one or more tables.",
          "topic": "SQL Basics",
          "placementImportant": true
        },
        {
          "id": "sql_q2_p1",
          "question": "Which keyword removes duplicate records from the result?",
          "options": ["UNIQUE", "DISTINCT", "REMOVE", "DIFFERENT"],
          "correctAnswer": 1,
          "explanation": "DISTINCT returns only unique values.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q3_p1",
          "question": "Which clause is used to filter rows?",
          "options": ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
          "correctAnswer": 2,
          "explanation": "WHERE filters individual rows based on a condition.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q4_p1",
          "question": "Which operator is used for pattern matching?",
          "options": ["MATCH", "LIKE", "SEARCH", "FIND"],
          "correctAnswer": 1,
          "explanation": "LIKE is used with wildcard characters such as % and _.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q5_p1",
          "question": "What does the following query return? SELECT * FROM Student;",
          "options": ["Only the first row", "Only the first column", "All columns and rows", "Table structure only"],
          "correctAnswer": 2,
          "explanation": "* represents all columns.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q6_p1",
          "question": "Which operator checks whether a value lies within a range?",
          "options": ["RANGE", "BETWEEN", "WITHIN", "IN"],
          "correctAnswer": 1,
          "explanation": "BETWEEN checks whether a value falls within an inclusive range.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q7_p1",
          "question": "Which operator checks a value against multiple possible values?",
          "options": ["MULTIPLE", "IN", "ANY", "VALUES"],
          "correctAnswer": 1,
          "explanation": "IN checks whether a value matches any value in a specified list.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q8_p1",
          "question": "How should NULL values be checked in SQL?",
          "options": ["= NULL", "IS NULL", "== NULL", "CHECK NULL"],
          "correctAnswer": 1,
          "explanation": "SQL uses IS NULL or IS NOT NULL to check NULL values.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q9_p1",
          "question": "Which clause is used to sort query results?",
          "options": ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
          "correctAnswer": 1,
          "explanation": "ORDER BY sorts the result set.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q10_p1",
          "question": "What is the default sorting order of ORDER BY?",
          "options": ["DESC", "ASC", "RANDOM", "NONE"],
          "correctAnswer": 1,
          "explanation": "Ascending order is the default.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q11_p1",
          "question": "Which keyword can be used to give a temporary name to a column?",
          "options": ["AS", "NAME", "ALIAS", "RENAME"],
          "correctAnswer": 0,
          "explanation": "AS creates an alias for a column or table.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q12_p1",
          "question": "Which logical operator requires both conditions to be true?",
          "options": ["OR", "AND", "NOT", "BOTH"],
          "correctAnswer": 1,
          "explanation": "AND returns true only when both conditions are true.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q13_p1",
          "question": "Which operator reverses the result of a condition?",
          "options": ["NOT", "REVERSE", "NEGATE", "EXCEPT"],
          "correctAnswer": 0,
          "explanation": "NOT reverses a Boolean condition.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q14_p1",
          "question": "What does this query return? SELECT DISTINCT city FROM Student;",
          "options": ["All cities including duplicates", "Only unique cities", "Number of cities", "First city only"],
          "correctAnswer": 1,
          "explanation": "DISTINCT removes duplicate city values.",
          "topic": "SQL Basics"
        },
        {
          "id": "sql_q15_p1",
          "question": "Which query returns students whose age is greater than 18?",
          "options": ["SELECT * FROM Student WHERE age > 18;", "SELECT * FROM Student HAVING age > 18;", "SELECT Student WHERE age > 18;", "GET * FROM Student WHERE age > 18;"],
          "correctAnswer": 0,
          "explanation": "SELECT with WHERE is used to filter rows.",
          "topic": "SQL Basics"
        }
      ]
    },
    {
      "id": "sql_part_2",
      "title": "Part 2 - SQL FUNCTIONS & AGGREGATION",
      "difficulty": "Easy",
      "questions": [
        {
          "id": "sql_q1_p2",
          "question": "Which function calculates the total of a numeric column?",
          "options": ["TOTAL()", "SUM()", "ADD()", "COUNT()"],
          "correctAnswer": 1,
          "explanation": "SUM() returns the total of numeric values.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q2_p2",
          "question": "Which function calculates the average?",
          "options": ["MEAN()", "AVG()", "AVERAGE()", "MID()"],
          "correctAnswer": 1,
          "explanation": "AVG() calculates the average value.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q3_p2",
          "question": "Which function returns the smallest value?",
          "options": ["LOW()", "MIN()", "SMALL()", "LOWER()"],
          "correctAnswer": 1,
          "explanation": "MIN() returns the minimum value.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q4_p2",
          "question": "Which function returns the largest value?",
          "options": ["MAX()", "HIGH()", "LARGE()", "TOP()"],
          "correctAnswer": 0,
          "explanation": "MAX() returns the maximum value.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q5_p2",
          "question": "COUNT(column) ignores which values?",
          "options": ["Zero", "Negative values", "NULL values", "Duplicate values"],
          "correctAnswer": 2,
          "explanation": "COUNT(column) counts only non-NULL values.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q6_p2",
          "question": "What does COUNT(DISTINCT city) return?",
          "options": ["All city values", "Number of unique cities", "Number of rows", "Number of NULL cities"],
          "correctAnswer": 1,
          "explanation": "DISTINCT removes duplicate city values before counting.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q7_p2",
          "question": "Which function is commonly used to convert text to uppercase?",
          "options": ["UPPER()", "CAPITAL()", "UCASE_TEXT()", "TOPPER()"],
          "correctAnswer": 0,
          "explanation": "UPPER() converts text to uppercase.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q8_p2",
          "question": "Which function converts text to lowercase?",
          "options": ["LOWER()", "SMALL()", "DOWN()", "LCASE_TEXT()"],
          "correctAnswer": 0,
          "explanation": "LOWER() converts text to lowercase.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q9_p2",
          "question": "Which function returns the number of characters in a string?",
          "options": ["SIZE()", "LENGTH()", "COUNTCHAR()", "CHARCOUNT()"],
          "correctAnswer": 1,
          "explanation": "LENGTH() returns the length of a string.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q10_p2",
          "question": "Which function rounds a numeric value?",
          "options": ["ROUND()", "ROUNDOFF()", "FORMATNUMBER()", "INTEGER()"],
          "correctAnswer": 0,
          "explanation": "ROUND() rounds a number to the specified decimal places.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q11_p2",
          "question": "Which function returns the absolute value of a number?",
          "options": ["ABS()", "POSITIVE()", "MOD()", "SIGN()"],
          "correctAnswer": 0,
          "explanation": "ABS() returns the absolute value.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q12_p2",
          "question": "Which function returns the remainder after division?",
          "options": ["REM()", "MOD()", "REMAINDER()", "DIV()"],
          "correctAnswer": 1,
          "explanation": "MOD() returns the remainder.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q13_p2",
          "question": "Which aggregate function can be used to count rows?",
          "options": ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
          "correctAnswer": 1,
          "explanation": "COUNT() counts rows or non-NULL values depending on its argument.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q14_p2",
          "question": "Which function returns the average salary?",
          "options": ["SELECT MEAN(salary)", "SELECT AVG(salary)", "SELECT AVERAGE(salary)", "SELECT MID(salary)"],
          "correctAnswer": 1,
          "explanation": "AVG() is the SQL aggregate function for calculating averages.",
          "topic": "SQL Functions"
        },
        {
          "id": "sql_q15_p2",
          "question": "Which aggregate function returns the highest salary?",
          "options": ["TOP(salary)", "HIGH(salary)", "MAX(salary)", "UPPER(salary)"],
          "correctAnswer": 2,
          "explanation": "MAX() returns the highest value.",
          "topic": "SQL Functions"
        }
      ]
    },
    {
      "id": "sql_part_3",
      "title": "Part 3 - GROUP BY & HAVING",
      "difficulty": "Easy-Medium",
      "questions": [
        {
          "id": "sql_q1_p3",
          "question": "Which clause is used to arrange identical data into groups?",
          "options": ["ORDER BY", "GROUP BY", "SORT BY", "ARRANGE BY"],
          "correctAnswer": 1,
          "explanation": "GROUP BY is used with aggregate functions to group the result-set by one or more columns.",
          "topic": "GROUP BY"
        },
        {
          "id": "sql_q2_p3",
          "question": "Which clause filters grouped records?",
          "options": ["WHERE", "FILTER", "HAVING", "GROUP WHERE"],
          "correctAnswer": 2,
          "explanation": "HAVING is used to filter records that work on summarized GROUP BY results.",
          "topic": "HAVING"
        },
        {
          "id": "sql_q3_p3",
          "question": "Can WHERE be used with aggregate functions?",
          "options": ["Yes, always", "No, never", "Only with SUM()", "Only with COUNT()"],
          "correctAnswer": 1,
          "explanation": "WHERE cannot be used with aggregate functions; HAVING must be used instead.",
          "topic": "WHERE vs HAVING"
        },
        {
          "id": "sql_q4_p3",
          "question": "What is the correct execution order in SQL?",
          "options": ["SELECT, FROM, WHERE, GROUP BY, HAVING", "FROM, WHERE, GROUP BY, HAVING, SELECT", "WHERE, FROM, GROUP BY, SELECT, HAVING", "FROM, GROUP BY, WHERE, HAVING, SELECT"],
          "correctAnswer": 1,
          "explanation": "SQL executes in this logical order: FROM > WHERE > GROUP BY > HAVING > SELECT > ORDER BY.",
          "topic": "Query Execution"
        },
        {
          "id": "sql_q5_p3",
          "question": "How do you find the total number of employees in each department?",
          "options": ["SELECT dept, COUNT(*) FROM Employee GROUP BY dept", "SELECT dept, SUM(emp_id) FROM Employee", "SELECT dept, COUNT(*) FROM Employee", "SELECT dept FROM Employee GROUP BY dept COUNT(*)"],
          "correctAnswer": 0,
          "explanation": "GROUP BY dept groups the records, and COUNT(*) counts the employees in each group.",
          "topic": "GROUP BY"
        },
        {
          "id": "sql_q6_p3",
          "question": "Which of the following queries returns departments with more than 5 employees?",
          "options": ["SELECT dept FROM Employee WHERE COUNT(*) > 5", "SELECT dept FROM Employee GROUP BY dept HAVING COUNT(*) > 5", "SELECT dept FROM Employee HAVING COUNT(*) > 5", "SELECT dept FROM Employee GROUP BY dept WHERE COUNT(*) > 5"],
          "correctAnswer": 1,
          "explanation": "HAVING is required to filter on the aggregated COUNT(*).",
          "topic": "HAVING"
        },
        {
          "id": "sql_q7_p3",
          "question": "Can you use multiple columns in a GROUP BY clause?",
          "options": ["Yes", "No", "Only numeric columns", "Only string columns"],
          "correctAnswer": 0,
          "explanation": "You can group by multiple columns (e.g., GROUP BY dept, role).",
          "topic": "GROUP BY"
        },
        {
          "id": "sql_q8_p3",
          "question": "If a column in the SELECT clause is not an aggregate function, it must be included in:",
          "options": ["WHERE clause", "ORDER BY clause", "GROUP BY clause", "HAVING clause"],
          "correctAnswer": 2,
          "explanation": "In standard SQL, non-aggregated columns in SELECT must appear in the GROUP BY clause.",
          "topic": "GROUP BY"
        },
        {
          "id": "sql_q9_p3",
          "question": "What is the difference between WHERE and HAVING?",
          "options": ["WHERE filters before grouping, HAVING filters after grouping", "WHERE is for numbers, HAVING is for text", "HAVING is faster than WHERE", "There is no difference"],
          "correctAnswer": 0,
          "explanation": "WHERE filters rows before they are grouped, while HAVING filters the groups themselves.",
          "topic": "WHERE vs HAVING"
        },
        {
          "id": "sql_q10_p3",
          "question": "What does this query do: SELECT category, MAX(price) FROM Products GROUP BY category?",
          "options": ["Finds the most expensive product overall", "Finds the most expensive product in each category", "Finds all products sorted by price", "Returns an error"],
          "correctAnswer": 1,
          "explanation": "It groups by category and returns the maximum price within each category.",
          "topic": "GROUP BY"
        },
        {
          "id": "sql_q11_p3",
          "question": "Which function is NOT typically used with GROUP BY?",
          "options": ["SUM()", "COUNT()", "UPPER()", "AVG()"],
          "correctAnswer": 2,
          "explanation": "UPPER() is a scalar string function, not an aggregate function typically paired with GROUP BY.",
          "topic": "Aggregate functions"
        },
        {
          "id": "sql_q12_p3",
          "question": "Can HAVING be used without GROUP BY?",
          "options": ["Yes, it behaves like WHERE applied to the whole result set", "No, it requires GROUP BY", "Only in MySQL", "Only with subqueries"],
          "correctAnswer": 0,
          "explanation": "While rare, HAVING can be used without GROUP BY; it treats the entire table as a single group.",
          "topic": "HAVING"
        },
        {
          "id": "sql_q13_p3",
          "question": "How to calculate the average salary per department for only those departments with an average salary > 50000?",
          "options": ["SELECT dept, AVG(salary) FROM emp WHERE AVG(salary) > 50000 GROUP BY dept", "SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 50000", "SELECT dept, AVG(salary) FROM emp GROUP BY dept WHERE AVG(salary) > 50000", "SELECT dept, AVG(salary) FROM emp HAVING AVG(salary) > 50000"],
          "correctAnswer": 1,
          "explanation": "HAVING must be used to filter based on the aggregated average salary.",
          "topic": "HAVING"
        },
        {
          "id": "sql_q14_p3",
          "question": "What is wrong with this query: SELECT dept, name, SUM(salary) FROM emp GROUP BY dept;",
          "options": ["Missing WHERE clause", "SUM cannot be used here", "name is not in GROUP BY or an aggregate function", "Nothing is wrong"],
          "correctAnswer": 2,
          "explanation": "Since 'name' is in the SELECT clause but not aggregated, it must be included in the GROUP BY clause.",
          "topic": "GROUP BY"
        },
        {
          "id": "sql_q15_p3",
          "question": "What does COUNT(DISTINCT column_name) do when used with GROUP BY?",
          "options": ["Counts all rows in the group", "Counts only unique non-null values in the group", "Returns an error", "Sorts the group"],
          "correctAnswer": 1,
          "explanation": "It counts the number of distinct, non-null values of the specified column within each group.",
          "topic": "Aggregate functions"
        }
      ]
    },
    {
      "id": "sql_part_4",
      "title": "Part 4 - JOINS",
      "difficulty": "Easy-Medium",
      "questions": []
    },
    {
      "id": "sql_part_5",
      "title": "Part 5 - SUBQUERIES",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "sql_part_6",
      "title": "Part 6 - KEYS & CONSTRAINTS",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "sql_part_7",
      "title": "Part 7 - DDL, DML & DATABASE OPERATIONS",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "sql_part_8",
      "title": "Part 8 - SQL OPERATORS & SET OPERATIONS",
      "difficulty": "Medium-Hard",
      "questions": []
    },
    {
      "id": "sql_part_9",
      "title": "Part 9 - VIEWS, INDEXES & TRANSACTIONS",
      "difficulty": "Medium-Hard",
      "questions": []
    },
    {
      "id": "sql_part_10",
      "title": "Part 10 - ADVANCED SQL & PLACEMENT QUESTIONS",
      "difficulty": "Hard / Interview",
      "questions": []
    }
  ]
};
