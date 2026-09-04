// Mock data for Practice Section

export const mockNotes = [
  // DBMS 15-part placement series
  { 
    id: 'dbms-1', title: 'Part 1: ACID Properties', subject: 'DBMS', topic: 'Transactions', tags: ['placement', 'core'], type: 'mcq', 
    content: 'Transactions must adhere to ACID properties to guarantee validity.',
    mcq: {
      question: 'Which property ensures that a transaction is never left partially completed?',
      options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
      answer: 'Atomicity',
      explanation: 'Atomicity means "all or nothing" - either all operations of a transaction execute, or none.'
    }, updatedAt: 'Just now' 
  },
  { 
    id: 'dbms-2', title: 'Part 2: Normalization (1NF to BCNF)', subject: 'DBMS', topic: 'Normalization', tags: ['placement', 'interview'], type: 'mcq',
    content: 'Normalization minimizes redundancy and dependency.',
    mcq: {
      question: 'A relation is in BCNF if and only if every determinant is a ___?',
      options: ['Candidate Key', 'Foreign Key', 'Primary Key', 'Super Key'],
      answer: 'Candidate Key',
      explanation: 'In BCNF, for every non-trivial functional dependency X -> Y, X must be a super key or candidate key.'
    }, updatedAt: '2 hours ago' 
  },
  { 
    id: 'dbms-3', title: 'Part 3: SQL Joins', subject: 'DBMS', topic: 'SQL', tags: ['placement', 'basics'], type: 'mcq',
    content: 'Joins are used to combine rows from two or more tables.',
    mcq: {
      question: 'Which join returns all rows from the left table, and matching rows from the right table?',
      options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
      answer: 'LEFT JOIN',
      explanation: 'A LEFT JOIN keeps all records from the left table even if there are no matches in the right table.'
    }, updatedAt: '5 hours ago' 
  },
  { 
    id: 'dbms-4', title: 'Part 4: Indexing (B/B+ Trees)', subject: 'DBMS', topic: 'Indexing', tags: ['placement', 'advanced'], type: 'mcq',
    content: 'Indexing speeds up data retrieval operations.',
    mcq: {
      question: 'In a B+ tree index, where is the actual data (or pointers to data) stored?',
      options: ['Root node', 'Internal nodes', 'Leaf nodes', 'All nodes'],
      answer: 'Leaf nodes',
      explanation: 'B+ trees store all actual data pointers only at the leaf nodes, making range queries highly efficient.'
    }, updatedAt: '6 hours ago' 
  },
  { 
    id: 'dbms-5', title: 'Part 5: Transaction Isolation Levels', subject: 'DBMS', topic: 'Concurrency', tags: ['placement', 'core'], type: 'mcq',
    content: 'Isolation levels balance concurrency vs consistency.',
    mcq: {
      question: 'Which of the following problems does the "Read Committed" isolation level prevent?',
      options: ['Dirty Read', 'Non-repeatable Read', 'Phantom Read', 'Lost Update'],
      answer: 'Dirty Read',
      explanation: 'Read Committed prevents transactions from reading uncommitted changes made by other transactions.'
    }, updatedAt: '1 day ago' 
  },
  { 
    id: 'dbms-6', title: 'Part 6: Deadlock Handling', subject: 'DBMS', topic: 'Concurrency', tags: ['placement'], type: 'mcq',
    content: 'Deadlocks occur when transactions wait indefinitely for each other.',
    mcq: {
      question: 'In the Wait-Die scheme for deadlock prevention, an older transaction waiting for a younger one will:',
      options: ['Wait', 'Die (abort)', 'Preempt', 'Commit'],
      answer: 'Wait',
      explanation: 'In Wait-Die, an older transaction is allowed to wait, while a younger transaction requesting a lock held by an older one dies (rolls back).'
    }, updatedAt: '1 day ago' 
  },
  { 
    id: 'dbms-7', title: 'Part 7: Relational Algebra', subject: 'DBMS', topic: 'Query Languages', tags: ['placement'], type: 'mcq',
    content: 'Relational algebra is a procedural query language.',
    mcq: {
      question: 'Which operation is used to select specific columns from a relation?',
      options: ['Select (σ)', 'Project (π)', 'Rename (ρ)', 'Union (∪)'],
      answer: 'Project (π)',
      explanation: 'Projection (π) eliminates unwanted columns, whereas Selection (σ) eliminates unwanted rows.'
    }, updatedAt: '2 days ago' 
  },
  { 
    id: 'dbms-8', title: 'Part 8: ER Modeling', subject: 'DBMS', topic: 'Design', tags: ['placement', 'basics'], type: 'mcq',
    content: 'Entity-Relationship diagrams visually map the database structure.',
    mcq: {
      question: 'How is a Weak Entity represented in an ER diagram?',
      options: ['Single Rectangle', 'Double Rectangle', 'Dashed Rectangle', 'Diamond'],
      answer: 'Double Rectangle',
      explanation: 'A weak entity, which depends on a strong entity for its existence, is represented by a double rectangle.'
    }, updatedAt: '2 days ago' 
  },
  { 
    id: 'dbms-9', title: 'Part 9: Concurrency Control (Locks)', subject: 'DBMS', topic: 'Concurrency', tags: ['placement'], type: 'mcq',
    content: 'Lock-based protocols ensure serializability.',
    mcq: {
      question: 'In Two-Phase Locking (2PL), what happens during the shrinking phase?',
      options: ['Only acquire locks', 'Only release locks', 'Both acquire and release', 'Upgrade locks'],
      answer: 'Only release locks',
      explanation: '2PL has a growing phase (acquiring, no releasing) and a shrinking phase (releasing, no acquiring).'
    }, updatedAt: '3 days ago' 
  },
  { 
    id: 'dbms-10', title: 'Part 10: NoSQL vs SQL', subject: 'DBMS', topic: 'Architecture', tags: ['placement', 'interview'], type: 'mcq',
    content: 'NoSQL databases scale horizontally and offer flexible schemas.',
    mcq: {
      question: 'According to the CAP theorem, a distributed database can guarantee at most two of the following: Consistency, Availability, and ___?',
      options: ['Atomicity', 'Partition Tolerance', 'Performance', 'Durability'],
      answer: 'Partition Tolerance',
      explanation: 'CAP stands for Consistency, Availability, and Partition tolerance.'
    }, updatedAt: '4 days ago' 
  },
  { 
    id: 'dbms-11', title: 'Part 11: Views in SQL', subject: 'DBMS', topic: 'SQL', tags: ['placement'], type: 'mcq',
    content: 'Views are virtual tables based on the result-set of an SQL statement.',
    mcq: {
      question: 'Which statement about Materialized Views is true?',
      options: ['They do not store data physically', 'They automatically reflect base table changes instantly', 'They store data physically to improve query performance', 'They cannot be indexed'],
      answer: 'They store data physically to improve query performance',
      explanation: 'Unlike standard views, materialized views actually store the query result on disk for faster access, needing periodic refresh.'
    }, updatedAt: '5 days ago' 
  },
  { 
    id: 'dbms-12', title: 'Part 12: Integrity Constraints', subject: 'DBMS', topic: 'Normalization', tags: ['placement'], type: 'mcq',
    content: 'Constraints enforce rules on data in a table.',
    mcq: {
      question: 'Which constraint ensures that a value exists in another table?',
      options: ['UNIQUE', 'NOT NULL', 'FOREIGN KEY', 'CHECK'],
      answer: 'FOREIGN KEY',
      explanation: 'A Foreign Key enforces referential integrity by linking a column to the primary key of another table.'
    }, updatedAt: '6 days ago' 
  },
  { 
    id: 'dbms-13', title: 'Part 13: Triggers and Stored Procedures', subject: 'DBMS', topic: 'Advanced SQL', tags: ['placement'], type: 'mcq',
    content: 'Stored procedures bundle SQL statements into a callable routine.',
    mcq: {
      question: 'What triggers a database Trigger to execute?',
      options: ['A manual CALL statement', 'A specific time of day', 'An event like INSERT, UPDATE, or DELETE', 'Application startup'],
      answer: 'An event like INSERT, UPDATE, or DELETE',
      explanation: 'Triggers are automatically fired by the DBMS in response to specific DML events on a table.'
    }, updatedAt: '1 week ago' 
  },
  { 
    id: 'dbms-14', title: 'Part 14: Storage and File Structure', subject: 'DBMS', topic: 'Architecture', tags: ['placement'], type: 'mcq',
    content: 'Understanding how data is physically laid out on disk.',
    mcq: {
      question: 'In a hash file organization, what is a "bucket"?',
      options: ['A memory cache', 'A unit of storage containing one or more records', 'A transaction log', 'An index node'],
      answer: 'A unit of storage containing one or more records',
      explanation: 'A bucket is the storage unit (often one disk block) that stores records mapped to it by a hash function.'
    }, updatedAt: '1 week ago' 
  },
  { 
    id: 'dbms-15', title: 'Part 15: Big Data & Data Warehousing', subject: 'DBMS', topic: 'Advanced', tags: ['placement', 'interview'], type: 'mcq',
    content: 'Data warehouses support OLAP workloads.',
    mcq: {
      question: 'Which schema model is commonly used in Data Warehousing featuring a central fact table surrounded by dimension tables?',
      options: ['Network Schema', 'Hierarchical Schema', 'Star Schema', 'Relational Schema'],
      answer: 'Star Schema',
      explanation: 'A Star Schema connects multiple denormalized dimension tables to a single central fact table, resembling a star.'
    }, updatedAt: '2 weeks ago' 
  },

  // Other subjects
  { id: 'n2', title: 'OS Processes vs Threads', subject: 'Operating Systems', topic: 'Concurrency', tags: ['basics'], content: 'Processes have separate memory...', updatedAt: '1 day ago' },
  { id: 'n3', title: 'TCP vs UDP', subject: 'Computer Networks', topic: 'Transport Layer', tags: ['core'], content: 'TCP is connection-oriented...', updatedAt: '3 days ago' },
  { id: 'n4', title: 'Time Complexities of Arrays', subject: 'DSA', topic: 'Arrays', tags: ['basics', 'must-know'], content: 'O(1) access, O(n) search...', updatedAt: '4 days ago' },
  { id: 'n5', title: 'Pillars of OOP', subject: 'OOP', topic: 'Basics', tags: ['core'], content: 'Encapsulation, Abstraction, Inheritance, Polymorphism.', updatedAt: '5 days ago' },
  { id: 'n6', title: 'Cache Locality', subject: 'Computer Organization', topic: 'Memory', tags: ['architecture'], content: 'Spatial and temporal locality principles...', updatedAt: '1 week ago' },
  { id: 'n7', title: 'Agile vs Waterfall', subject: 'Software Engineering', topic: 'Methodologies', tags: ['interview'], content: 'Agile is iterative, Waterfall is linear...', updatedAt: '2 weeks ago' },
  { id: 'n8', title: 'DFA vs NFA', subject: 'Theory of Computation', topic: 'Automata', tags: ['theoretical'], content: 'DFA has unique transitions, NFA can have multiple...', updatedAt: '1 month ago' },
  { id: 'n9', title: 'Load Balancers', subject: 'System Design', topic: 'Scalability', tags: ['important'], content: 'Distributing traffic across multiple servers...', updatedAt: '1 hour ago' },
  { id: 'n11', title: 'Rebase vs Merge', subject: 'Git & GitHub', topic: 'Version Control', tags: ['workflow'], content: 'Rebase rewrites history, merge preserves it...', updatedAt: '2 days ago' },
];


export const mockProblems = [
  {
    "id": "p1",
    "name": "Linked List Cycle II",
    "platform": "LeetCode",
    "topic": "Fast and Slow Pointer",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/linked-list-cycle-ii/"
  },
  {
    "id": "p2",
    "name": "Remove Nth Node from the End of List",
    "platform": "LeetCode",
    "topic": "Fast and Slow Pointer",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    "id": "p3",
    "name": "Find the Duplicate Number",
    "platform": "LeetCode",
    "topic": "Fast and Slow Pointer",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-the-duplicate-number/"
  },
  {
    "id": "p4",
    "name": "Palindrome Linked List",
    "platform": "LeetCode",
    "topic": "Fast and Slow Pointer",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/palindrome-linked-list/"
  },
  {
    "id": "p5",
    "name": "Merge Intervals",
    "platform": "LeetCode",
    "topic": "Overlapping Intervals",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/merge-intervals/"
  },
  {
    "id": "p6",
    "name": "Insert Interval",
    "platform": "LeetCode",
    "topic": "Overlapping Intervals",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/insert-interval/"
  },
  {
    "id": "p7",
    "name": "My Calendar II",
    "platform": "LeetCode",
    "topic": "Overlapping Intervals",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/my-calendar-ii/"
  },
  {
    "id": "p8",
    "name": "Minimum Number of Arrows to Burst Balloons",
    "platform": "LeetCode",
    "topic": "Overlapping Intervals",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
  },
  {
    "id": "p9",
    "name": "Non-overlapping Intervals",
    "platform": "LeetCode",
    "topic": "Overlapping Intervals",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    "id": "p10",
    "name": "Find the Middle Index in Array",
    "platform": "LeetCode",
    "topic": "Prefix Sum",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-the-middle-index-in-array/"
  },
  {
    "id": "p11",
    "name": "Product of Array Except Self",
    "platform": "LeetCode",
    "topic": "Prefix Sum",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    "id": "p12",
    "name": "Maximum Product Subarray",
    "platform": "LeetCode",
    "topic": "Prefix Sum",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-product-subarray/"
  },
  {
    "id": "p13",
    "name": "Number of Ways to Split Array",
    "platform": "LeetCode",
    "topic": "Prefix Sum",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/number-of-ways-to-split-array/"
  },
  {
    "id": "p14",
    "name": "Range Sum Query 2D",
    "platform": "LeetCode",
    "topic": "Prefix Sum",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/range-sum-query-2d-immutable/"
  },
  {
    "id": "p15",
    "name": "Maximum Sum Subarray of Size K",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-average-subarray-i/"
  },
  {
    "id": "p16",
    "name": "Number of Subarrays having Average ≥ Threshold",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/"
  },
  {
    "id": "p17",
    "name": "Repeated DNA Sequences",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/repeated-dna-sequences/"
  },
  {
    "id": "p18",
    "name": "Permutation in String",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/permutation-in-string/"
  },
  {
    "id": "p19",
    "name": "Sliding Subarray Beauty",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sliding-subarray-beauty/"
  },
  {
    "id": "p20",
    "name": "Sliding Window Maximum",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    "id": "p21",
    "name": "Longest Substring Without Repeating Characters",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "id": "p22",
    "name": "Minimum Size Subarray Sum",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-size-subarray-sum/"
  },
  {
    "id": "p23",
    "name": "Subarray Product Less Than K",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/subarray-product-less-than-k/"
  },
  {
    "id": "p24",
    "name": "Max Consecutive Ones",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/max-consecutive-ones-iii/"
  },
  {
    "id": "p25",
    "name": "Fruits Into Baskets",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/fruit-into-baskets/"
  },
  {
    "id": "p26",
    "name": "Count Number of Nice Subarrays",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/count-number-of-nice-subarrays/"
  },
  {
    "id": "p27",
    "name": "Minimum Window Substring",
    "platform": "LeetCode",
    "topic": "Sliding Window",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    "id": "p28",
    "name": "Two Sum II - Input Array is Sorted",
    "platform": "LeetCode",
    "topic": "Two Pointers",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    "id": "p29",
    "name": "Dutch National Flag: Sort Colors",
    "platform": "LeetCode",
    "topic": "Two Pointers",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sort-colors/"
  },
  {
    "id": "p30",
    "name": "Next Permutation",
    "platform": "LeetCode",
    "topic": "Two Pointers",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/next-permutation/"
  },
  {
    "id": "p31",
    "name": "Bag of Tokens",
    "platform": "LeetCode",
    "topic": "Two Pointers",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/bag-of-tokens/"
  },
  {
    "id": "p32",
    "name": "Container with Most Water",
    "platform": "LeetCode",
    "topic": "Two Pointers",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    "id": "p33",
    "name": "Trapping Rain Water",
    "platform": "LeetCode",
    "topic": "Two Pointers",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    "id": "p34",
    "name": "Missing Number",
    "platform": "LeetCode",
    "topic": "Cyclic Sort (Index-Based)",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/missing-number/"
  },
  {
    "id": "p35",
    "name": "Find Missing Numbers",
    "platform": "LeetCode",
    "topic": "Cyclic Sort (Index-Based)",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"
  },
  {
    "id": "p36",
    "name": "Set Mismatch",
    "platform": "LeetCode",
    "topic": "Cyclic Sort (Index-Based)",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/set-mismatch/"
  },
  {
    "id": "p37",
    "name": "First Missing Positive",
    "platform": "LeetCode",
    "topic": "Cyclic Sort (Index-Based)",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/first-missing-positive/"
  },
  {
    "id": "p38",
    "name": "Reverse Linked List",
    "platform": "LeetCode",
    "topic": "Reversal of Linked List (In-place)",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/reverse-linked-list/"
  },
  {
    "id": "p39",
    "name": "Reverse Nodes in k-Group",
    "platform": "LeetCode",
    "topic": "Reversal of Linked List (In-place)",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
  },
  {
    "id": "p40",
    "name": "Swap Nodes in Pairs",
    "platform": "LeetCode",
    "topic": "Reversal of Linked List (In-place)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/swap-nodes-in-pairs/"
  },
  {
    "id": "p41",
    "name": "Rotate Image",
    "platform": "LeetCode",
    "topic": "Matrix Manipulation",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/rotate-image/"
  },
  {
    "id": "p42",
    "name": "Spiral Matrix",
    "platform": "LeetCode",
    "topic": "Matrix Manipulation",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    "id": "p43",
    "name": "Set Matrix Zeroes",
    "platform": "LeetCode",
    "topic": "Matrix Manipulation",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    "id": "p44",
    "name": "Game of Life",
    "platform": "LeetCode",
    "topic": "Matrix Manipulation",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/game-of-life/"
  },
  {
    "id": "p45",
    "name": "Shortest Path in Binary Matrix",
    "platform": "LeetCode",
    "topic": "Breadth First Search (BFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
  },
  {
    "id": "p46",
    "name": "Rotten Oranges",
    "platform": "LeetCode",
    "topic": "Breadth First Search (BFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    "id": "p47",
    "name": "As Far From Land as Possible",
    "platform": "LeetCode",
    "topic": "Breadth First Search (BFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/as-far-from-land-as-possible/"
  },
  {
    "id": "p48",
    "name": "Word Ladder",
    "platform": "LeetCode",
    "topic": "Breadth First Search (BFS)",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/word-ladder/"
  },
  {
    "id": "p49",
    "name": "Number of Closed Islands",
    "platform": "LeetCode",
    "topic": "Depth First Search (DFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/number-of-closed-islands/"
  },
  {
    "id": "p50",
    "name": "Coloring a Border",
    "platform": "LeetCode",
    "topic": "Depth First Search (DFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/coloring-a-border/"
  },
  {
    "id": "p51",
    "name": "Number of Enclaves",
    "platform": "LeetCode",
    "topic": "Depth First Search (DFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/number-of-enclaves/"
  },
  {
    "id": "p52",
    "name": "Time Needed to Inform All Employees",
    "platform": "LeetCode",
    "topic": "Depth First Search (DFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/time-needed-to-inform-all-employees/"
  },
  {
    "id": "p53",
    "name": "Find Eventual Safe States",
    "platform": "LeetCode",
    "topic": "Depth First Search (DFS)",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-eventual-safe-states/"
  },
  {
    "id": "p54",
    "name": "Permutation II",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/permutations-ii/"
  },
  {
    "id": "p55",
    "name": "Combination Sum",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/combination-sum/"
  },
  {
    "id": "p56",
    "name": "Generate Parentheses",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/generate-parentheses/"
  },
  {
    "id": "p57",
    "name": "N-Queens",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/n-queens/"
  },
  {
    "id": "p58",
    "name": "Sudoku Solver",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sudoku-solver/"
  },
  {
    "id": "p59",
    "name": "Palindrome Partitioning",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/palindrome-partitioning/"
  },
  {
    "id": "p60",
    "name": "Word Search",
    "platform": "LeetCode",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/word-search/"
  },
  {
    "id": "p61",
    "name": "Search in Rotated Sorted Array",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    "id": "p62",
    "name": "Find Minimum in Rotated Sorted Array",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    "id": "p63",
    "name": "Find Peak Element",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-peak-element/"
  },
  {
    "id": "p64",
    "name": "Single Element in a Sorted Array",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/single-element-in-a-sorted-array/"
  },
  {
    "id": "p65",
    "name": "Minimum Time to Arrive on Time",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/"
  },
  {
    "id": "p66",
    "name": "Capacity to Ship Packages within D Days",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
  },
  {
    "id": "p67",
    "name": "Koko Eating Bananas",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/koko-eating-bananas/"
  },
  {
    "id": "p68",
    "name": "Find in Mountain Array",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-in-mountain-array/"
  },
  {
    "id": "p69",
    "name": "Median of Two Sorted Arrays",
    "platform": "LeetCode",
    "topic": "Modified Binary Search",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
    "id": "p70",
    "name": "Missing Number",
    "platform": "LeetCode",
    "topic": "Bitwise XOR",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/missing-number/"
  },
  {
    "id": "p71",
    "name": "Single Number II",
    "platform": "LeetCode",
    "topic": "Bitwise XOR",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/single-number-ii/"
  },
  {
    "id": "p72",
    "name": "Single Number III",
    "platform": "LeetCode",
    "topic": "Bitwise XOR",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/single-number-iii/"
  },
  {
    "id": "p73",
    "name": "Find the Original Array of Prefix XOR",
    "platform": "LeetCode",
    "topic": "Bitwise XOR",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-the-original-array-of-prefix-xor/"
  },
  {
    "id": "p74",
    "name": "XOR Queries of a Subarray",
    "platform": "LeetCode",
    "topic": "Bitwise XOR",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/xor-queries-of-a-subarray/"
  },
  {
    "id": "p75",
    "name": "Top K Frequent Elements",
    "platform": "LeetCode",
    "topic": "Top K Elements",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    "id": "p76",
    "name": "Kth Largest Element",
    "platform": "LeetCode",
    "topic": "Top K Elements",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    "id": "p77",
    "name": "Ugly Number II",
    "platform": "LeetCode",
    "topic": "Top K Elements",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/ugly-number-ii/"
  },
  {
    "id": "p78",
    "name": "K Closest Points to Origin",
    "platform": "LeetCode",
    "topic": "Top K Elements",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    "id": "p79",
    "name": "Find K Pairs with Smallest Sums",
    "platform": "LeetCode",
    "topic": "K-way Merge",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"
  },
  {
    "id": "p80",
    "name": "Kth Smallest Element in a Sorted Matrix",
    "platform": "LeetCode",
    "topic": "K-way Merge",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
  },
  {
    "id": "p81",
    "name": "Merge K Sorted Lists",
    "platform": "LeetCode",
    "topic": "K-way Merge",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    "id": "p82",
    "name": "Smallest Range Covering Elements from K Lists",
    "platform": "LeetCode",
    "topic": "K-way Merge",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
  },
  {
    "id": "p83",
    "name": "Find Median from Data Stream",
    "platform": "LeetCode",
    "topic": "Two Heaps",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    "id": "p84",
    "name": "Sliding Window Median",
    "platform": "LeetCode",
    "topic": "Two Heaps",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sliding-window-median/"
  },
  {
    "id": "p85",
    "name": "IPO",
    "platform": "LeetCode",
    "topic": "Two Heaps",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/ipo/"
  },
  {
    "id": "p86",
    "name": "Next Greater Element II",
    "platform": "LeetCode",
    "topic": "Monotonic Stack",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/next-greater-element-ii/"
  },
  {
    "id": "p87",
    "name": "Next Greater Node in Linked List",
    "platform": "LeetCode",
    "topic": "Monotonic Stack",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/next-greater-node-in-linked-list/"
  },
  {
    "id": "p88",
    "name": "Daily Temperatures",
    "platform": "LeetCode",
    "topic": "Monotonic Stack",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    "id": "p89",
    "name": "Online Stock Span",
    "platform": "LeetCode",
    "topic": "Monotonic Stack",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/online-stock-span/"
  },
  {
    "id": "p90",
    "name": "Maximum Width Ramp",
    "platform": "LeetCode",
    "topic": "Monotonic Stack",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-width-ramp/"
  },
  {
    "id": "p91",
    "name": "Largest Rectangle in Histogram",
    "platform": "LeetCode",
    "topic": "Monotonic Stack",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },
  {
    "id": "p92",
    "name": "Level Order Traversal",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    "id": "p93",
    "name": "Zigzag Level Order Traversal",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
  },
  {
    "id": "p94",
    "name": "Even Odd Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/even-odd-tree/"
  },
  {
    "id": "p95",
    "name": "Reverse Odd Levels",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/"
  },
  {
    "id": "p96",
    "name": "Deepest Leaves Sum",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/deepest-leaves-sum/"
  },
  {
    "id": "p97",
    "name": "Add One Row to Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/add-one-row-to-tree/"
  },
  {
    "id": "p98",
    "name": "Maximum Width of Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-width-of-binary-tree/"
  },
  {
    "id": "p99",
    "name": "All Nodes Distance K in Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
  },
  {
    "id": "p100",
    "name": "Construct BT from Preorder and Inorder",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  },
  {
    "id": "p101",
    "name": "Construct BT from Postorder and Inorder",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
  },
  {
    "id": "p102",
    "name": "Maximum Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-binary-tree/"
  },
  {
    "id": "p103",
    "name": "Construct BST from Preorder",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
  },
  {
    "id": "p104",
    "name": "Maximum Depth of Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
  },
  {
    "id": "p105",
    "name": "Balanced Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/balanced-binary-tree/"
  },
  {
    "id": "p106",
    "name": "Diameter of Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    "id": "p107",
    "name": "Minimum Depth of Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
  },
  {
    "id": "p108",
    "name": "Binary Tree Paths",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/binary-tree-paths/"
  },
  {
    "id": "p109",
    "name": "Path Sum II",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/path-sum-ii/"
  },
  {
    "id": "p110",
    "name": "Sum Root to Leaf Numbers",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sum-root-to-leaf-numbers/"
  },
  {
    "id": "p111",
    "name": "Smallest String Starting from Leaf",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/smallest-string-starting-from-leaf/"
  },
  {
    "id": "p112",
    "name": "Insufficient Nodes in Root to Leaf Paths",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/"
  },
  {
    "id": "p113",
    "name": "Pseudo-Palindromic Paths in a Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/"
  },
  {
    "id": "p114",
    "name": "Binary Tree Maximum Path Sum",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },
  {
    "id": "p115",
    "name": "LCA of Binary Tree",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    "id": "p116",
    "name": "Maximum Difference Between Node and Ancestor",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/"
  },
  {
    "id": "p117",
    "name": "LCA of Deepest Leaves",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/"
  },
  {
    "id": "p118",
    "name": "Kth Ancestor of a Tree Node",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/"
  },
  {
    "id": "p119",
    "name": "Validate BST",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    "id": "p120",
    "name": "Range Sum of BST",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/range-sum-of-bst/"
  },
  {
    "id": "p121",
    "name": "Minimum Absolute Difference in BST",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Easy",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-absolute-difference-in-bst/"
  },
  {
    "id": "p122",
    "name": "Insert into a BST",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
  },
  {
    "id": "p123",
    "name": "LCA of BST",
    "platform": "LeetCode",
    "topic": "Trees",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
  },
  {
    "id": "p124",
    "name": "House Robber II",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    "id": "p125",
    "name": "Target Sum",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/target-sum/"
  },
  {
    "id": "p126",
    "name": "Partition Equal Subset Sum",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
  },
  {
    "id": "p127",
    "name": "Ones and Zeroes",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/ones-and-zeroes/"
  },
  {
    "id": "p128",
    "name": "Last Stone Weight II",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/last-stone-weight-ii/"
  },
  {
    "id": "p129",
    "name": "Coin Change",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/coin-change/"
  },
  {
    "id": "p130",
    "name": "Coin Change II",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/coin-change-ii/"
  },
  {
    "id": "p131",
    "name": "Perfect Squares",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/perfect-squares/"
  },
  {
    "id": "p132",
    "name": "Minimum Cost For Tickets",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-cost-for-tickets/"
  },
  {
    "id": "p133",
    "name": "Longest Increasing Subsequence",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
  },
  {
    "id": "p134",
    "name": "Largest Divisible Subset",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/largest-divisible-subset/"
  },
  {
    "id": "p135",
    "name": "Maximum Length of Pair Chain",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximum-length-of-pair-chain/"
  },
  {
    "id": "p136",
    "name": "Number of LIS",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
  },
  {
    "id": "p137",
    "name": "Longest String Chain",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/longest-string-chain/"
  },
  {
    "id": "p138",
    "name": "Unique Paths II",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/unique-paths-ii/"
  },
  {
    "id": "p139",
    "name": "Minimum Path Sum",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-path-sum/"
  },
  {
    "id": "p140",
    "name": "Triangle",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/triangle/"
  },
  {
    "id": "p141",
    "name": "Minimum Falling Path Sum",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-falling-path-sum/"
  },
  {
    "id": "p142",
    "name": "Maximal Square",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/maximal-square/"
  },
  {
    "id": "p143",
    "name": "Cherry Pickup",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/cherry-pickup/"
  },
  {
    "id": "p144",
    "name": "Dungeon Game",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/dungeon-game/"
  },
  {
    "id": "p145",
    "name": "Longest Common Subsequence",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    "id": "p146",
    "name": "Longest Palindromic Subsequence",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
  },
  {
    "id": "p147",
    "name": "Palindromic Substrings",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/palindromic-substrings/"
  },
  {
    "id": "p148",
    "name": "Longest Palindromic Substring",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    "id": "p149",
    "name": "Edit Distance",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/edit-distance/"
  },
  {
    "id": "p150",
    "name": "Minimum ASCII Delete Sum for Two Strings",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/"
  },
  {
    "id": "p151",
    "name": "Distinct Subsequences",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/distinct-subsequences/"
  },
  {
    "id": "p152",
    "name": "Shortest Common Supersequence",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/shortest-common-supersequence/"
  },
  {
    "id": "p153",
    "name": "Wildcard Matching",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/wildcard-matching/"
  },
  {
    "id": "p154",
    "name": "Buy and Sell Stocks II",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
  },
  {
    "id": "p155",
    "name": "Buy and Sell Stocks III",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
  },
  {
    "id": "p156",
    "name": "Buy and Sell Stocks IV",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
  },
  {
    "id": "p157",
    "name": "Buy and Sell Stocks with Cooldown",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
  },
  {
    "id": "p158",
    "name": "Buy and Sell Stocks with Transaction Fee",
    "platform": "LeetCode",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
  },
  {
    "id": "p159",
    "name": "Course Schedule",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/course-schedule/"
  },
  {
    "id": "p160",
    "name": "Course Schedule II",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    "id": "p161",
    "name": "Strange Printer II",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/strange-printer-ii/"
  },
  {
    "id": "p162",
    "name": "Sequence Reconstruction",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/sequence-reconstruction/"
  },
  {
    "id": "p163",
    "name": "Alien Dictionary",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/alien-dictionary/"
  },
  {
    "id": "p164",
    "name": "Number of Operations to Make Network Connected",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
  },
  {
    "id": "p165",
    "name": "Redundant Connection",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/redundant-connection/"
  },
  {
    "id": "p166",
    "name": "Accounts Merge",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/accounts-merge/"
  },
  {
    "id": "p167",
    "name": "Satisfiability of Equality Equations",
    "platform": "LeetCode",
    "topic": "Graphs",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/satisfiability-of-equality-equations/"
  },
  {
    "id": "p168",
    "name": "Jump Game II",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    "id": "p169",
    "name": "Gas Station",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/gas-station/"
  },
  {
    "id": "p170",
    "name": "Bag of Tokens",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/bag-of-tokens/"
  },
  {
    "id": "p171",
    "name": "Boats to Save People",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/boats-to-save-people/"
  },
  {
    "id": "p172",
    "name": "Wiggle Subsequence",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/wiggle-subsequence/"
  },
  {
    "id": "p173",
    "name": "Car Pooling",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/car-pooling/"
  },
  {
    "id": "p174",
    "name": "Candy",
    "platform": "LeetCode",
    "topic": "Greedy",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/candy/"
  },
  {
    "id": "p175",
    "name": "Design Twitter",
    "platform": "LeetCode",
    "topic": "Design Data Structure",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/design-twitter/"
  },
  {
    "id": "p176",
    "name": "Design Browser History",
    "platform": "LeetCode",
    "topic": "Design Data Structure",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/design-browser-history/"
  },
  {
    "id": "p177",
    "name": "Design Circular Deque",
    "platform": "LeetCode",
    "topic": "Design Data Structure",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/design-circular-deque/"
  },
  {
    "id": "p178",
    "name": "Snapshot Array",
    "platform": "LeetCode",
    "topic": "Design Data Structure",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/snapshot-array/"
  },
  {
    "id": "p179",
    "name": "LRU Cache",
    "platform": "LeetCode",
    "topic": "Design Data Structure",
    "difficulty": "Medium",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/lru-cache/"
  },
  {
    "id": "p180",
    "name": "LFU Cache",
    "platform": "LeetCode",
    "topic": "Design Data Structure",
    "difficulty": "Hard",
    "status": "Not Started",
    "timeComplexity": "-",
    "spaceComplexity": "-",
    "link": "https://leetcode.com/problems/lfu-cache/"
  }
];

export const mockStats = {
  problemsSolved: 42,
  problemsRevisited: 15,
  notesCreated: 28,
  topicsCompleted: 12,
  streak: 5,
  subjectProgress: [
    { subject: 'DSA', progress: 80 },
    { subject: 'DBMS', progress: 60 },
    { subject: 'OS', progress: 50 },
    { subject: 'Networks', progress: 40 },
  ]
};

export const fetchNotes = async () => new Promise(res => setTimeout(() => res(mockNotes), 500));
export const fetchProblems = async () => new Promise(res => setTimeout(() => res(mockProblems), 500));
export const fetchStats = async () => new Promise(res => setTimeout(() => res(mockStats), 500));
