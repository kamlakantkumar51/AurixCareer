export const aptitudeSubject = {
      "id": "aptitude",
      "title": "Quantitative & Logical Aptitude",
      "description": "Master numerical ability, logical reasoning, and verbal aptitude for placement tests.",
      "icon": "BrainCircuit",
      "color": "from-rose-500 to-orange-600",
      "parts": [
            {
                  "id": "APT-P1",
                  "title": "Part 1 — Number System & Basic Arithmetic",
                  "difficulty": "Easy",
                  "questions": [
                        {
                              "id": "APT-P1-Q1",
                              "question": "What is the unit digit in the product (2467^153 * 341^72)?",
                              "options": ["1", "3", "7", "9"],
                              "correctAnswer": 2,
                              "explanation": "Unit digit of 341^72 is 1 (since 1 raised to any power is 1). For 2467^153, we look at 7^153. The cyclicity of 7 is 4. 153 divided by 4 leaves a remainder of 1. So, unit digit is 7^1 = 7. Total unit digit = 7 * 1 = 7.",
                              "topic": "Unit Digit",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q2",
                              "question": "Which of the following numbers is completely divisible by 99?",
                              "options": ["3572404", "135792", "913464", "114345"],
                              "correctAnswer": 3,
                              "explanation": "A number is divisible by 99 if it is divisible by both 9 and 11. Sum of digits in 114345 is 18 (divisible by 9). Difference between sum of odd and even placed digits: (1+4+4) - (1+3+5) = 9 - 9 = 0 (divisible by 11).",
                              "topic": "Divisibility",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q3",
                              "question": "The HCF of two numbers is 11 and their LCM is 7700. If one of the numbers is 275, what is the other number?",
                              "options": ["279", "283", "308", "318"],
                              "correctAnswer": 2,
                              "explanation": "Formula: Product of two numbers = HCF × LCM. So, 275 × x = 11 × 7700. x = (11 × 7700) / 275 = 84700 / 275 = 308.",
                              "topic": "HCF and LCM",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q4",
                              "question": "A number when divided by 899 gives a remainder 63. If the same number is divided by 29, the remainder will be:",
                              "options": ["10", "5", "4", "2"],
                              "correctAnswer": 1,
                              "explanation": "Let the number be N = 899k + 63. Since 899 is perfectly divisible by 29 (29 × 31 = 899), we just need to divide the remainder 63 by 29. 63 / 29 gives quotient 2 and remainder 5.",
                              "topic": "Remainders",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q5",
                              "question": "What is the sum of the first 50 natural numbers?",
                              "options": ["1225", "1275", "1250", "1300"],
                              "correctAnswer": 1,
                              "explanation": "Sum of first n natural numbers = n(n+1)/2. For n=50, Sum = 50(51)/2 = 25 × 51 = 1275.",
                              "topic": "Basic Arithmetic",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q6",
                              "question": "The sum of two numbers is 25 and their difference is 13. Find their product.",
                              "options": ["104", "114", "315", "325"],
                              "correctAnswer": 1,
                              "explanation": "x + y = 25, x - y = 13. Adding them: 2x = 38 -> x = 19. y = 6. Product = 19 × 6 = 114.",
                              "topic": "Basic Arithmetic",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q7",
                              "question": "What is the least number which when divided by 5, 6, 7, and 8 leaves a remainder 3, but when divided by 9 leaves no remainder?",
                              "options": ["1677", "1683", "2523", "3363"],
                              "correctAnswer": 1,
                              "explanation": "LCM of 5, 6, 7, 8 is 840. The number is of the form 840k + 3. For k=2, 840(2) + 3 = 1683. Sum of digits of 1683 is 18, which is divisible by 9.",
                              "topic": "HCF and LCM",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q8",
                              "question": "Simplify: 108 / 36 of (1/4) + (2/5) * (15/4)",
                              "options": ["12.5", "13.5", "14.5", "15.5"],
                              "correctAnswer": 1,
                              "explanation": "Using BODMAS: First 'of' -> 36 × (1/4) = 9. Then division -> 108 / 9 = 12. Then multiplication -> (2/5) * (15/4) = 30/20 = 1.5. Finally addition -> 12 + 1.5 = 13.5.",
                              "topic": "Simplification",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q9",
                              "question": "If a number is multiplied by 3 and 15 is subtracted from the product, the result is equal to the original number plus 11. Find the number.",
                              "options": ["13", "14", "15", "16"],
                              "correctAnswer": 0,
                              "explanation": "Let the number be x. 3x - 15 = x + 11. 2x = 26. x = 13.",
                              "topic": "Linear Equations",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q10",
                              "question": "How many prime numbers are there between 1 and 50?",
                              "options": ["14", "15", "16", "17"],
                              "correctAnswer": 1,
                              "explanation": "There are exactly 15 prime numbers between 1 and 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
                              "topic": "Prime Numbers",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q11",
                              "question": "Which of the following is a composite number?",
                              "options": ["61", "71", "81", "97"],
                              "correctAnswer": 2,
                              "explanation": "81 is a composite number because it is divisible by 1, 3, 9, 27, and 81. The other numbers (61, 71, 97) are prime.",
                              "topic": "Composite Numbers",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q12",
                              "question": "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
                              "options": ["4", "7", "9", "13"],
                              "correctAnswer": 0,
                              "explanation": "Take the difference of the numbers: (91 - 43) = 48, (183 - 91) = 92, (183 - 43) = 140. Now find HCF of 48, 92, and 140, which is 4.",
                              "topic": "HCF and LCM",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q13",
                              "question": "What is the value of (0.2 × 0.2 + 0.02 × 0.02 - 0.4 × 0.02) / 0.36?",
                              "options": ["0.009", "0.09", "0.9", "9"],
                              "correctAnswer": 1,
                              "explanation": "The numerator is (a-b)^2 where a=0.2 and b=0.02. (0.2 - 0.02)^2 = (0.18)^2 = 0.0324. Denominator is 0.36. 0.0324 / 0.36 = 0.09.",
                              "topic": "Simplification",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q14",
                              "question": "If a number x is 10% less than another number y and y is 10% more than 125, then what is x?",
                              "options": ["123.75", "140.55", "143", "150"],
                              "correctAnswer": 0,
                              "explanation": "y = 125 + (10% of 125) = 125 + 12.5 = 137.5. x is 10% less than y, so x = 137.5 - (10% of 137.5) = 137.5 - 13.75 = 123.75.",
                              "topic": "Basic Arithmetic",
                              "difficulty": "Easy"
                        },
                        {
                              "id": "APT-P1-Q15",
                              "question": "The difference of two numbers is 20% of the larger number. If the smaller number is 20, what is the larger number?",
                              "options": ["25", "45", "50", "80"],
                              "correctAnswer": 0,
                              "explanation": "Let larger be L and smaller be S. L - S = 0.2L. Given S = 20, L - 20 = 0.2L => 0.8L = 20 => L = 20 / 0.8 = 25.",
                              "topic": "Basic Arithmetic",
                              "difficulty": "Easy"
                        }
                  ]
            },
            {
                  "id": "APT-P2",
                  "title": "Part 2 — Number System II",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P2-Q1",
                              "question": "What is the remainder when 125 is divided by 7?",
                              "options": [
                                    "4",
                                    "5",
                                    "6",
                                    "3"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q2",
                              "question": "Find the HCF of 36 and 48.",
                              "options": [
                                    "6",
                                    "8",
                                    "12",
                                    "16"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q3",
                              "question": "Find the LCM of 12, 15 and 20.",
                              "options": [
                                    "40",
                                    "50",
                                    "60",
                                    "120"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q4",
                              "question": "Which of the following is a prime number?",
                              "options": [
                                    "51",
                                    "57",
                                    "61",
                                    "69"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q5",
                              "question": "What is the smallest number that should be added to 456 to make it divisible by 9?",
                              "options": [
                                    "2",
                                    "3",
                                    "4",
                                    "5"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q6",
                              "question": "What is the smallest number that should be subtracted from 875 to make it divisible by 12?",
                              "options": [
                                    "7",
                                    "8",
                                    "9",
                                    "11"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q7",
                              "question": "The sum of the first 20 natural numbers is:",
                              "options": [
                                    "200",
                                    "210",
                                    "220",
                                    "230"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q8",
                              "question": "What is the unit digit of 7^45?",
                              "options": [
                                    "1",
                                    "3",
                                    "7",
                                    "9"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q9",
                              "question": "If a number is divisible by both 6 and 8, then it must be divisible by:",
                              "options": [
                                    "12",
                                    "18",
                                    "24",
                                    "48"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q10",
                              "question": "Find the greatest 4-digit number divisible by 15.",
                              "options": [
                                    "9985",
                                    "9990",
                                    "9995",
                                    "9975"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q11",
                              "question": "Find the smallest 4-digit number divisible by 24.",
                              "options": [
                                    "1008",
                                    "1012",
                                    "1024",
                                    "1032"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q12",
                              "question": "What is the remainder when 2^10 is divided by 7?",
                              "options": [
                                    "1",
                                    "2",
                                    "3",
                                    "4"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q13",
                              "question": "How many factors does 36 have?",
                              "options": [
                                    "6",
                                    "8",
                                    "9",
                                    "12"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q14",
                              "question": "The product of two consecutive positive integers is 132. What are the numbers?",
                              "options": [
                                    "10, 11",
                                    "11, 12",
                                    "12, 13",
                                    "13, 14"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P2-Q15",
                              "question": "What is the greatest number that divides 245 and 1029 leaving the same remainder in each case?",
                              "options": [
                                    "4",
                                    "6",
                                    "8",
                                    "12"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Basic arithmetic and number system concept.",
                              "topic": "Number System",
                              "difficulty": "Easy-Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P3",
                  "title": "Part 3 — Averages",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P3-Q1",
                              "question": "Find the average of 10, 20, 30, 40 and 50.",
                              "options": [
                                    "25",
                                    "30",
                                    "35",
                                    "40"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q2",
                              "question": "The average of 6 numbers is 25. What is their total sum?",
                              "options": [
                                    "125",
                                    "150",
                                    "175",
                                    "200"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q3",
                              "question": "The average of 5 numbers is 18. If four numbers are 12, 15, 20 and 25, find the fifth number.",
                              "options": [
                                    "15",
                                    "16",
                                    "18",
                                    "20"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q4",
                              "question": "The average age of 4 students is 20 years. If a teacher aged 40 years joins them, what is the new average age?",
                              "options": [
                                    "22",
                                    "24",
                                    "25",
                                    "28"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q5",
                              "question": "The average of 8 numbers is 15. If one number, 22, is removed, what is the average of the remaining 7 numbers?",
                              "options": [
                                    "13",
                                    "14",
                                    "14",
                                    "15"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q6",
                              "question": "The average marks of 10 students is 65. If the marks of one student are excluded, the average becomes 63. What were the marks of that student?",
                              "options": [
                                    "80",
                                    "82",
                                    "83",
                                    "85"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q7",
                              "question": "The average of three consecutive numbers is 24. What is the largest number?",
                              "options": [
                                    "23",
                                    "24",
                                    "25",
                                    "26"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q8",
                              "question": "The average of five consecutive even numbers is 36. What is the smallest number?",
                              "options": [
                                    "30",
                                    "32",
                                    "34",
                                    "36"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q9",
                              "question": "The average salary of 6 employees is \u20b925,000. If the manager's salary is \u20b940,000, what is the average salary of the other 5 employees?",
                              "options": [
                                    "\u20b920,000",
                                    "\u20b921,000",
                                    "\u20b922,000",
                                    "\u20b923,000"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q10",
                              "question": "A batsman has an average of 45 runs after 10 innings. How many runs must he score in the 11th inning to increase his average to 48?",
                              "options": [
                                    "70",
                                    "75",
                                    "78",
                                    "80"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q11",
                              "question": "The average age of 20 students is 15 years. If the teacher's age is included, the average becomes 16 years. Find the teacher's age.",
                              "options": [
                                    "30 years",
                                    "35 years",
                                    "36 years",
                                    "40 years"
                              ],
                              "correctAnswer": 3,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q12",
                              "question": "The average of 7 numbers is 28. If each number is increased by 5, what will be the new average?",
                              "options": [
                                    "30",
                                    "31",
                                    "33",
                                    "35"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q13",
                              "question": "The average of 4 numbers is 20. If each number is multiplied by 3, what will be the new average?",
                              "options": [
                                    "40",
                                    "50",
                                    "60",
                                    "80"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q14",
                              "question": "The average weight of 5 people is 60 kg. If a person weighing 80 kg joins the group, what is the new average?",
                              "options": [
                                    "62.5 kg",
                                    "63.33 kg",
                                    "65 kg",
                                    "66.67 kg"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P3-Q15",
                              "question": "The average of 10 numbers is 40. If 5 is added to each number, what is the new average?",
                              "options": [
                                    "40",
                                    "42",
                                    "45",
                                    "50"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard average calculation.",
                              "topic": "Averages",
                              "difficulty": "Easy-Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P4",
                  "title": "Part 4 — Problems on Ages",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P4-Q1",
                              "question": "The present age of A is 5 years more than B. If their total age is 35 years, what is A's age?",
                              "options": [
                                    "15 years",
                                    "20 years",
                                    "25 years",
                                    "30 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q2",
                              "question": "The present ages of A and B are in the ratio 3:5. If their total age is 40 years, what is B's age?",
                              "options": [
                                    "15 years",
                                    "20 years",
                                    "25 years",
                                    "30 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q3",
                              "question": "A father is 3 times as old as his son. Their total age is 48 years. Find the son's age.",
                              "options": [
                                    "10 years",
                                    "12 years",
                                    "14 years",
                                    "16 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q4",
                              "question": "A mother is 4 times as old as her daughter. After 5 years, she will be 3 times her daughter's age. Find the daughter's present age.",
                              "options": [
                                    "5 years",
                                    "10 years",
                                    "15 years",
                                    "20 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q5",
                              "question": "The present age of a person is 24 years. What will be his age after 8 years?",
                              "options": [
                                    "30 years",
                                    "32 years",
                                    "34 years",
                                    "36 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q6",
                              "question": "Five years ago, A was 20 years old. What will be A's age after 10 years?",
                              "options": [
                                    "30 years",
                                    "35 years",
                                    "40 years",
                                    "45 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q7",
                              "question": "The ages of A and B are in the ratio 4:7. After 6 years, their ages will be in the ratio 5:8. Find A's present age.",
                              "options": [
                                    "18 years",
                                    "20 years",
                                    "24 years",
                                    "28 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q8",
                              "question": "A is 8 years older than B. Four years ago, A was twice as old as B. Find B's present age.",
                              "options": [
                                    "8 years",
                                    "10 years",
                                    "12 years",
                                    "14 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q9",
                              "question": "The present age of a father is 40 years and his son's age is 10 years. After how many years will the father be twice as old as his son?",
                              "options": [
                                    "10 years",
                                    "15 years",
                                    "20 years",
                                    "25 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q10",
                              "question": "The average age of A and B is 25 years. If A is 6 years older than B, find A's age.",
                              "options": [
                                    "22 years",
                                    "25 years",
                                    "28 years",
                                    "31 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q11",
                              "question": "The sum of the ages of a father and son is 60 years. Five years ago, the father's age was 4 times the son's age. Find the father's present age.",
                              "options": [
                                    "40 years",
                                    "45 years",
                                    "48 years",
                                    "50 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q12",
                              "question": "A person's age is twice the age of his brother. After 10 years, their ages will be in the ratio 3:2. Find the younger brother's present age.",
                              "options": [
                                    "10 years",
                                    "15 years",
                                    "20 years",
                                    "25 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q13",
                              "question": "The present ages of A and B are in the ratio 5:3. Six years ago, their ages were in the ratio 3:1. Find A's present age.",
                              "options": [
                                    "12 years",
                                    "15 years",
                                    "20 years",
                                    "25 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q14",
                              "question": "A father is 30 years older than his son. In 5 years, the father's age will be twice the son's age. Find the son's present age.",
                              "options": [
                                    "20 years",
                                    "25 years",
                                    "30 years",
                                    "35 years"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        },
                        {
                              "id": "APT-P4-Q15",
                              "question": "The present age of A is 3 times the age of B. After 10 years, A will be twice B's age. Find A's present age.",
                              "options": [
                                    "20 years",
                                    "25 years",
                                    "30 years",
                                    "35 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Calculation based on linear equations of ages.",
                              "topic": "Problems on Ages",
                              "difficulty": "Easy-Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P5",
                  "title": "Part 5 \u2014 Percentages",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P5-Q1",
                              "question": "What is 20% of 250?",
                              "options": [
                                    "40",
                                    "50",
                                    "60",
                                    "75"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q2",
                              "question": "30 is what percentage of 150?",
                              "options": [
                                    "10%",
                                    "15%",
                                    "20%",
                                    "25%"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q3",
                              "question": "A number is increased from 200 to 250. What is the percentage increase?",
                              "options": [
                                    "20%",
                                    "25%",
                                    "30%",
                                    "35%"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q4",
                              "question": "A number is decreased from 500 to 400. What is the percentage decrease?",
                              "options": [
                                    "10%",
                                    "15%",
                                    "20%",
                                    "25%"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q5",
                              "question": "40% of a number is 80. Find the number.",
                              "options": [
                                    "160",
                                    "180",
                                    "200",
                                    "240"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q6",
                              "question": "A student scored 360 marks out of 500. What is his percentage?",
                              "options": [
                                    "70%",
                                    "72%",
                                    "75%",
                                    "80%"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q7",
                              "question": "The price of a shirt is \u20b9800. If it is increased by 15%, what is the new price?",
                              "options": [
                                    "\u20b9900",
                                    "\u20b9920",
                                    "\u20b9940",
                                    "\u20b9960"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q8",
                              "question": "A salary of \u20b930,000 is reduced by 10%. What is the new salary?",
                              "options": [
                                    "\u20b926,000",
                                    "\u20b927,000",
                                    "\u20b928,000",
                                    "\u20b929,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q9",
                              "question": "A number is first increased by 20% and then decreased by 20%. What is the overall percentage change?",
                              "options": [
                                    "No change",
                                    "2% decrease",
                                    "4% decrease",
                                    "4% increase"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q10",
                              "question": "If 25% of a number is 45, what is 60% of that number?",
                              "options": [
                                    "90",
                                    "100",
                                    "108",
                                    "120"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q11",
                              "question": "In a class of 40 students, 60% are boys. How many girls are there?",
                              "options": [
                                    "12",
                                    "14",
                                    "16",
                                    "18"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q12",
                              "question": "A shopkeeper gives a discount of 20% on an article marked at \u20b91,500. What is the selling price?",
                              "options": [
                                    "\u20b91,100",
                                    "\u20b91,200",
                                    "\u20b91,250",
                                    "\u20b91,300"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q13",
                              "question": "A person's income increases by 25%. If his original income was \u20b920,000, what is his new income?",
                              "options": [
                                    "\u20b922,500",
                                    "\u20b924,000",
                                    "\u20b925,000",
                                    "\u20b926,000"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q14",
                              "question": "A number is 40% less than 500. Find the number.",
                              "options": [
                                    "250",
                                    "300",
                                    "350",
                                    "400"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P5-Q15",
                              "question": "If 75% of a number is 150, what is 40% of the number?",
                              "options": [
                                    "60",
                                    "70",
                                    "80",
                                    "90"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Standard Percentages problem.",
                              "topic": "Percentages",
                              "difficulty": "Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P6",
                  "title": "Part 6 \u2014 Ratio and Proportion",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P6-Q1",
                              "question": "The ratio of two numbers is 3:5. If their sum is 64, find the smaller number.",
                              "options": [
                                    "20",
                                    "24",
                                    "28",
                                    "30"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q2",
                              "question": "The ratio of A:B is 4:7. If A = 20, find B.",
                              "options": [
                                    "28",
                                    "30",
                                    "35",
                                    "40"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q3",
                              "question": "Divide \u20b9600 in the ratio 2:3. What is the smaller share?",
                              "options": [
                                    "\u20b9200",
                                    "\u20b9240",
                                    "\u20b9300",
                                    "\u20b9360"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q4",
                              "question": "The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?",
                              "options": [
                                    "15",
                                    "20",
                                    "25",
                                    "30"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q5",
                              "question": "If 5:8 = x:40, find x.",
                              "options": [
                                    "20",
                                    "25",
                                    "30",
                                    "32"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q6",
                              "question": "The ratio of the ages of A and B is 4:5. If B is 25 years old, what is A's age?",
                              "options": [
                                    "15 years",
                                    "18 years",
                                    "20 years",
                                    "22 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q7",
                              "question": "Two numbers are in the ratio 7:9. If their difference is 18, find the larger number.",
                              "options": [
                                    "63",
                                    "72",
                                    "81",
                                    "90"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q8",
                              "question": "If 3 pens cost \u20b945, how much will 8 pens cost at the same rate?",
                              "options": [
                                    "\u20b9100",
                                    "\u20b9110",
                                    "\u20b9120",
                                    "\u20b9135"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q9",
                              "question": "The ratio of income of A to B is 5:6. If A earns \u20b925,000, how much does B earn?",
                              "options": [
                                    "\u20b928,000",
                                    "\u20b930,000",
                                    "\u20b932,000",
                                    "\u20b935,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q10",
                              "question": "Divide \u20b91,200 among A, B and C in the ratio 2:3:5. What is C's share?",
                              "options": [
                                    "\u20b9400",
                                    "\u20b9500",
                                    "\u20b9600",
                                    "\u20b9700"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q11",
                              "question": "The ratio of two numbers is 5:7. If both numbers are increased by 10, their ratio becomes 3:4. Find the smaller number.",
                              "options": [
                                    "20",
                                    "25",
                                    "30",
                                    "35"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q12",
                              "question": "If 12 workers can complete a job in 15 days, how many days will 20 workers take to complete the same job?",
                              "options": [
                                    "7 days",
                                    "8 days",
                                    "9 days",
                                    "10 days"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q13",
                              "question": "The ratio of red balls to blue balls is 5:3. If there are 40 red balls, how many blue balls are there?",
                              "options": [
                                    "20",
                                    "24",
                                    "28",
                                    "30"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q14",
                              "question": "If 4:9 = 20:x, find x.",
                              "options": [
                                    "36",
                                    "40",
                                    "45",
                                    "50"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P6-Q15",
                              "question": "The ratio of the present ages of a father and son is 5:2. If their total age is 56 years, find the father's age.",
                              "options": [
                                    "35 years",
                                    "40 years",
                                    "42 years",
                                    "45 years"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Ratio and Proportion problem.",
                              "topic": "Ratio and Proportion",
                              "difficulty": "Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P7",
                  "title": "Part 7 \u2014 Partnership",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P7-Q1",
                              "question": "A and B invest \u20b920,000 and \u20b930,000 respectively in a business. What is the ratio of their profits?",
                              "options": [
                                    "2:3",
                                    "3:2",
                                    "1:2",
                                    "2:5"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q2",
                              "question": "A invests \u20b940,000 and B invests \u20b960,000 for the same period. If the total profit is \u20b925,000, what is B's share?",
                              "options": [
                                    "\u20b910,000",
                                    "\u20b912,500",
                                    "\u20b915,000",
                                    "\u20b918,000"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q3",
                              "question": "A and B invest \u20b950,000 and \u20b940,000 respectively. After one year, the profit is \u20b918,000. What is A's share?",
                              "options": [
                                    "\u20b98,000",
                                    "\u20b910,000",
                                    "\u20b912,000",
                                    "\u20b914,000"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q4",
                              "question": "A invests \u20b930,000 for 12 months and B invests \u20b920,000 for 12 months. If the total profit is \u20b925,000, what is B's share?",
                              "options": [
                                    "\u20b98,000",
                                    "\u20b910,000",
                                    "\u20b912,000",
                                    "\u20b915,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q5",
                              "question": "A and B start a business with investments of \u20b925,000 and \u20b935,000. After one year, they earn a profit of \u20b924,000. What is A's share?",
                              "options": [
                                    "\u20b98,000",
                                    "\u20b910,000",
                                    "\u20b912,000",
                                    "\u20b914,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q6",
                              "question": "A invests \u20b960,000 for 8 months, while B invests \u20b940,000 for 12 months. What is the ratio of their profits?",
                              "options": [
                                    "1:1",
                                    "2:3",
                                    "3:2",
                                    "4:3"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q7",
                              "question": "A invests \u20b940,000 for 6 months and B invests \u20b930,000 for 8 months. If the total profit is \u20b914,000, what is A's share?",
                              "options": [
                                    "\u20b96,000",
                                    "\u20b97,000",
                                    "\u20b98,000",
                                    "\u20b99,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q8",
                              "question": "A and B invest \u20b950,000 and \u20b970,000 respectively for one year. If B receives \u20b921,000 as profit, what is the total profit?",
                              "options": [
                                    "\u20b930,000",
                                    "\u20b932,000",
                                    "\u20b936,000",
                                    "\u20b940,000"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q9",
                              "question": "A starts a business with \u20b980,000. After 4 months, B joins with \u20b960,000. Find the ratio of their profits at the end of one year.",
                              "options": [
                                    "3:2",
                                    "4:3",
                                    "5:3",
                                    "8:9"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q10",
                              "question": "A invests \u20b990,000 for 12 months and B invests \u20b960,000 for 9 months. What is the ratio of their profits?",
                              "options": [
                                    "2:1",
                                    "3:2",
                                    "4:3",
                                    "5:3"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q11",
                              "question": "A and B invest \u20b940,000 and \u20b950,000 respectively. After 6 months, A withdraws his entire investment. If the total profit at the end of the year is \u20b918,000, what is A's share?",
                              "options": [
                                    "\u20b96,000",
                                    "\u20b97,200",
                                    "\u20b98,000",
                                    "\u20b99,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q12",
                              "question": "A invests \u20b930,000 for 10 months and B invests \u20b945,000 for 8 months. Find the ratio of their profits.",
                              "options": [
                                    "2:3",
                                    "3:4",
                                    "5:6",
                                    "1:1"
                              ],
                              "correctAnswer": 3,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q13",
                              "question": "A and B start a business with \u20b920,000 and \u20b930,000. After 4 months, A doubles his investment. What is the ratio of their profits after one year?",
                              "options": [
                                    "4:5",
                                    "5:6",
                                    "6:5",
                                    "3:2"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q14",
                              "question": "A invests \u20b950,000 for 12 months. B joins after 4 months with \u20b975,000. Find the ratio of A's profit to B's profit.",
                              "options": [
                                    "1:1",
                                    "2:1",
                                    "3:2",
                                    "4:3"
                              ],
                              "correctAnswer": 0,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P7-Q15",
                              "question": "A and B invest \u20b960,000 and \u20b940,000 respectively. A invests for 8 months and B for 12 months. If the total profit is \u20b922,000, what is B's share?",
                              "options": [
                                    "\u20b910,000",
                                    "\u20b911,000",
                                    "\u20b912,000",
                                    "\u20b913,000"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Partnership problem.",
                              "topic": "Partnership",
                              "difficulty": "Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P8",
                  "title": "Part 8 \u2014 Pipes and Cisterns",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P8-Q1",
                              "question": "A pipe can fill a tank in 12 hours. What part of the tank can it fill in 1 hour?",
                              "options": [
                                    "1/10",
                                    "1/12",
                                    "1/15",
                                    "1/8"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q2",
                              "question": "A pipe fills a tank in 10 hours. How long will it take to fill the tank completely?",
                              "options": [
                                    "5 hours",
                                    "8 hours",
                                    "10 hours",
                                    "12 hours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q3",
                              "question": "Pipe A can fill a tank in 20 hours and Pipe B can fill it in 30 hours. How long will they take together?",
                              "options": [
                                    "10 hours",
                                    "12 hours",
                                    "15 hours",
                                    "18 hours"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q4",
                              "question": "A pipe fills a tank in 15 hours, while another pipe empties it in 30 hours. If both are opened together, how long will it take to fill the tank?",
                              "options": [
                                    "20 hours",
                                    "25 hours",
                                    "30 hours",
                                    "35 hours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q5",
                              "question": "Two pipes can fill a tank in 12 hours and 18 hours respectively. How long will they take to fill the tank together?",
                              "options": [
                                    "6 hours",
                                    "7.2 hours",
                                    "8 hours",
                                    "9 hours"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q6",
                              "question": "A pipe can fill a tank in 8 hours. How much of the tank will be filled in 3 hours?",
                              "options": [
                                    "1/4",
                                    "3/8",
                                    "1/2",
                                    "5/8"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q7",
                              "question": "Pipe A fills a tank in 16 hours and Pipe B fills it in 24 hours. If both are opened together, what fraction of the tank will they fill in 4 hours?",
                              "options": [
                                    "1/3",
                                    "5/12",
                                    "1/2",
                                    "7/12"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q8",
                              "question": "A pipe fills a tank in 6 hours and another pipe fills it in 12 hours. If both are opened together, how long will they take to fill the tank?",
                              "options": [
                                    "3 hours",
                                    "4 hours",
                                    "5 hours",
                                    "6 hours"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q9",
                              "question": "A pipe can fill a tank in 10 hours, while an outlet pipe can empty it in 15 hours. If both are opened together, how long will it take to fill the tank?",
                              "options": [
                                    "20 hours",
                                    "25 hours",
                                    "30 hours",
                                    "35 hours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q10",
                              "question": "Two pipes can fill a tank in 20 minutes and 30 minutes respectively. How long will they take together?",
                              "options": [
                                    "10 minutes",
                                    "12 minutes",
                                    "15 minutes",
                                    "18 minutes"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q11",
                              "question": "A pipe fills a tank in 24 hours. Another pipe fills the same tank in 36 hours. If both are opened together, how long will they take?",
                              "options": [
                                    "12 hours",
                                    "14.4 hours",
                                    "16 hours",
                                    "18 hours"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q12",
                              "question": "A pipe can fill a tank in 8 hours and another can empty it in 12 hours. If both are opened together, how long will it take to fill the tank?",
                              "options": [
                                    "18 hours",
                                    "20 hours",
                                    "24 hours",
                                    "30 hours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q13",
                              "question": "Pipe A can fill a tank in 10 hours and Pipe B can fill it in 15 hours. If Pipe A works alone for 2 hours and then Pipe B is also opened, how much more time is required to fill the tank?",
                              "options": [
                                    "4 hours",
                                    "5 hours",
                                    "6 hours",
                                    "7 hours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q14",
                              "question": "A pipe fills a tank in 16 hours. Due to a leak, the tank takes 20 hours to fill. How long would the leak take to empty the full tank?",
                              "options": [
                                    "60 hours",
                                    "70 hours",
                                    "80 hours",
                                    "90 hours"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P8-Q15",
                              "question": "Two pipes fill a tank in 15 hours and 20 hours respectively. If a third pipe can empty the tank in 60 hours, how long will all three pipes take to fill the tank when opened together?",
                              "options": [
                                    "8 hours",
                                    "10 hours",
                                    "12 hours",
                                    "15 hours"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Pipes and Cisterns problem.",
                              "topic": "Pipes and Cisterns",
                              "difficulty": "Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P9",
                  "title": "Part 9 \u2014 Time and Work",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P9-Q1",
                              "question": "A can complete a work in 10 days. What part of the work does A complete in 1 day?",
                              "options": [
                                    "1/5",
                                    "1/10",
                                    "1/15",
                                    "1/20"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q2",
                              "question": "A can complete a work in 12 days and B can complete it in 18 days. How many days will they take together?",
                              "options": [
                                    "6 days",
                                    "7.2 days",
                                    "8 days",
                                    "9 days"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q3",
                              "question": "A can do a piece of work in 15 days and B can do it in 20 days. How long will they take together?",
                              "options": [
                                    "8 days",
                                    "60/7 days",
                                    "9 days",
                                    "10 days"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q4",
                              "question": "A can complete a work in 20 days. If A works for 5 days, what fraction of the work remains?",
                              "options": [
                                    "1/4",
                                    "1/2",
                                    "3/4",
                                    "4/5"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q5",
                              "question": "A can complete a work in 8 days and B can complete it in 12 days. If they work together, how many days will they take?",
                              "options": [
                                    "4 days",
                                    "4.8 days",
                                    "5 days",
                                    "6 days"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q6",
                              "question": "A and B together can complete a work in 6 days. A alone can complete it in 10 days. How many days will B alone take?",
                              "options": [
                                    "12 days",
                                    "15 days",
                                    "18 days",
                                    "20 days"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q7",
                              "question": "A can do a work in 24 days and B can do it in 16 days. If both work together for 4 days, what fraction of the work is completed?",
                              "options": [
                                    "1/3",
                                    "1/2",
                                    "5/12",
                                    "7/12"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q8",
                              "question": "A can complete a work in 30 days. B is 50% more efficient than A. How many days will B take to complete the work?",
                              "options": [
                                    "15 days",
                                    "18 days",
                                    "20 days",
                                    "25 days"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q9",
                              "question": "A is twice as efficient as B. If B completes a work in 24 days, how many days will A take?",
                              "options": [
                                    "8 days",
                                    "10 days",
                                    "12 days",
                                    "16 days"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q10",
                              "question": "A can do a piece of work in 18 days and B can do it in 36 days. If A works for 6 days and then B completes the remaining work, how many total days are required?",
                              "options": [
                                    "18 days",
                                    "20 days",
                                    "24 days",
                                    "30 days"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q11",
                              "question": "12 workers can complete a work in 15 days. How many days will 20 workers take to complete the same work?",
                              "options": [
                                    "8 days",
                                    "9 days",
                                    "10 days",
                                    "12 days"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q12",
                              "question": "8 men can complete a work in 18 days. How many men are required to complete the same work in 12 days?",
                              "options": [
                                    "10",
                                    "12",
                                    "14",
                                    "16"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q13",
                              "question": "A can complete a work in 16 days and B in 24 days. A works alone for 4 days, then B joins him. How many more days will they need to finish the work?",
                              "options": [
                                    "6 days",
                                    "7.2 days",
                                    "8 days",
                                    "9 days"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q14",
                              "question": "A and B can complete a work in 12 days and 15 days respectively. If A works for 3 days and then B works alone, how many more days will B need?",
                              "options": [
                                    "8 days",
                                    "9 days",
                                    "11.25 days",
                                    "12 days"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P9-Q15",
                              "question": "A can complete a work in 25 days. B can complete the same work in 20 days. If they work together for 5 days, what fraction of the work remains?",
                              "options": [
                                    "1/2",
                                    "7/12",
                                    "1/3",
                                    "5/12"
                              ],
                              "correctAnswer": 3,
                              "explanation": "Standard Time and Work problem.",
                              "topic": "Time and Work",
                              "difficulty": "Medium"
                        }
                  ]
            },
            {
                  "id": "APT-P10",
                  "title": "Part 10 \u2014 Problems on Trains",
                  "difficulty": "Easy-Medium",
                  "questions": [
                        {
                              "id": "APT-P10-Q1",
                              "question": "A train 150 m long is running at 54 km/h. How much time will it take to pass a pole?",
                              "options": [
                                    "8 sec",
                                    "10 sec",
                                    "12 sec",
                                    "15 sec"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q2",
                              "question": "A train is running at 72 km/h. How many metres will it cover in 15 seconds?",
                              "options": [
                                    "250 m",
                                    "280 m",
                                    "300 m",
                                    "320 m"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q3",
                              "question": "A train 200 m long is running at 36 km/h. How long will it take to pass a pole?",
                              "options": [
                                    "15 sec",
                                    "20 sec",
                                    "25 sec",
                                    "30 sec"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q4",
                              "question": "A train 180 m long is running at 54 km/h. How much time will it take to cross a 120 m long platform?",
                              "options": [
                                    "15 sec",
                                    "18 sec",
                                    "20 sec",
                                    "25 sec"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q5",
                              "question": "A train 250 m long crosses a 150 m long platform in 20 seconds. What is the speed of the train?",
                              "options": [
                                    "54 km/h",
                                    "60 km/h",
                                    "72 km/h",
                                    "80 km/h"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q6",
                              "question": "A train 120 m long is moving at 45 km/h. How long will it take to pass a pole?",
                              "options": [
                                    "8.6 sec",
                                    "9.6 sec",
                                    "10.6 sec",
                                    "12 sec"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q7",
                              "question": "A train 300 m long crosses a 200 m long bridge in 25 seconds. Find its speed.",
                              "options": [
                                    "60 km/h",
                                    "72 km/h",
                                    "80 km/h",
                                    "90 km/h"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q8",
                              "question": "A train running at 90 km/h crosses a pole in 8 seconds. What is the length of the train?",
                              "options": [
                                    "180 m",
                                    "200 m",
                                    "220 m",
                                    "240 m"
                              ],
                              "correctAnswer": 3,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q9",
                              "question": "Two trains of lengths 150 m and 250 m are running in the same direction at 54 km/h and 36 km/h respectively. How long will the faster train take to overtake the slower train?",
                              "options": [
                                    "60 sec",
                                    "70 sec",
                                    "80 sec",
                                    "90 sec"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q10",
                              "question": "Two trains of lengths 200 m and 300 m are running in opposite directions at 54 km/h and 36 km/h. How much time will they take to cross each other?",
                              "options": [
                                    "15 sec",
                                    "18 sec",
                                    "20 sec",
                                    "25 sec"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q11",
                              "question": "A train 240 m long crosses a man walking at 6 km/h in the opposite direction in 12 seconds. What is the speed of the train?",
                              "options": [
                                    "60 km/h",
                                    "66 km/h",
                                    "72 km/h",
                                    "78 km/h"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q12",
                              "question": "A train 180 m long crosses a man walking at 9 km/h in the same direction in 18 seconds. Find the speed of the train.",
                              "options": [
                                    "36 km/h",
                                    "39 km/h",
                                    "45 km/h",
                                    "48 km/h"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q13",
                              "question": "A train 150 m long crosses a platform 350 m long in 25 seconds. What is the speed of the train?",
                              "options": [
                                    "54 km/h",
                                    "60 km/h",
                                    "72 km/h",
                                    "80 km/h"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q14",
                              "question": "A train running at 60 km/h crosses a platform in 18 seconds. If the length of the train is 200 m, what is the length of the platform?",
                              "options": [
                                    "80 m",
                                    "100 m",
                                    "120 m",
                                    "150 m"
                              ],
                              "correctAnswer": 1,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        },
                        {
                              "id": "APT-P10-Q15",
                              "question": "A train takes 12 seconds to pass a pole and 20 seconds to pass a 160 m long platform. What is the length of the train?",
                              "options": [
                                    "200 m",
                                    "220 m",
                                    "240 m",
                                    "260 m"
                              ],
                              "correctAnswer": 2,
                              "explanation": "Standard Problems on Trains problem.",
                              "topic": "Problems on Trains",
                              "difficulty": "Medium"
                        }
                  ]
            }
      ]
};
