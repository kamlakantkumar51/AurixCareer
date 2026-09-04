export const cnSubject = {
  "id": "cn",
  "title": "Computer Networks Practice",
  "description": "Master networking concepts, OSI model, protocols, routing, and network security.",
  "parts": [
    {
      "id": "cn_part_1",
      "title": "Part 1 - NETWORKING BASICS & OSI MODEL",
      "difficulty": "Easy",
      "questions": [
        {
          "id": "cn_q1_p1",
          "question": "What is the primary purpose of a computer network?",
          "options": ["To increase computer speed", "To share resources and information", "To prevent viruses", "To run multiple operating systems"],
          "correctAnswer": 1,
          "explanation": "Networks allow devices to share data, hardware (like printers), and software resources.",
          "topic": "Networking Basics"
        },
        {
          "id": "cn_q2_p1",
          "question": "Which of the following covers the largest geographical area?",
          "options": ["LAN", "MAN", "PAN", "WAN"],
          "correctAnswer": 3,
          "explanation": "A Wide Area Network (WAN) spans a large geographical area, often a country or continent.",
          "topic": "Network Types"
        },
        {
          "id": "cn_q3_p1",
          "question": "In which topology is every node connected to a single central cable?",
          "options": ["Star topology", "Ring topology", "Bus topology", "Mesh topology"],
          "correctAnswer": 2,
          "explanation": "Bus topology uses a single backbone cable to which all nodes are connected.",
          "topic": "Network Topologies"
        },
        {
          "id": "cn_q4_p1",
          "question": "Which device operates at the Physical layer of the OSI model and simply broadcasts data to all ports?",
          "options": ["Switch", "Router", "Hub", "Bridge"],
          "correctAnswer": 2,
          "explanation": "A Hub is a Layer 1 device that sends incoming data out to all other ports without filtering.",
          "topic": "Network Devices"
        },
        {
          "id": "cn_q5_p1",
          "question": "What is the maximum number of layers in the OSI reference model?",
          "options": ["4", "5", "7", "9"],
          "correctAnswer": 2,
          "explanation": "The OSI model consists of 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
          "topic": "OSI Model"
        },
        {
          "id": "cn_q6_p1",
          "question": "Which layer of the OSI model is responsible for routing and logical addressing (IP addresses)?",
          "options": ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
          "correctAnswer": 1,
          "explanation": "The Network layer (Layer 3) handles routing and IP addressing.",
          "topic": "OSI Model"
        },
        {
          "id": "cn_q7_p1",
          "question": "At which layer of the OSI model does a Switch primarily operate?",
          "options": ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
          "correctAnswer": 1,
          "explanation": "A standard switch operates at Layer 2 (Data Link Layer) using MAC addresses.",
          "topic": "Network Devices"
        },
        {
          "id": "cn_q8_p1",
          "question": "What is the name of the Data Unit at the Transport layer?",
          "options": ["Frame", "Packet", "Segment", "Bit"],
          "correctAnswer": 2,
          "explanation": "Data at the Transport layer is called a Segment.",
          "topic": "OSI Model"
        },
        {
          "id": "cn_q9_p1",
          "question": "Which model is practically implemented on the Internet?",
          "options": ["OSI Model", "TCP/IP Model", "ISO Model", "AppleTalk Model"],
          "correctAnswer": 1,
          "explanation": "While the OSI model is a conceptual reference, the TCP/IP model is the actual protocol suite used on the Internet.",
          "topic": "TCP/IP Model"
        },
        {
          "id": "cn_q10_p1",
          "question": "The process of adding headers to data as it moves down the OSI layers is called:",
          "options": ["Decapsulation", "Encoding", "Encapsulation", "Multiplexing"],
          "correctAnswer": 2,
          "explanation": "Encapsulation is the process of adding layer-specific headers to the payload as it moves down the stack.",
          "topic": "Encapsulation"
        },
        {
          "id": "cn_q11_p1",
          "question": "Which topology provides the highest redundancy and reliability?",
          "options": ["Star", "Bus", "Mesh", "Ring"],
          "correctAnswer": 2,
          "explanation": "In a Full Mesh topology, every node is connected to every other node, providing maximum redundancy.",
          "topic": "Network Topologies"
        },
        {
          "id": "cn_q12_p1",
          "question": "What does LAN stand for?",
          "options": ["Local Area Network", "Large Area Network", "Logical Area Network", "Local Access Network"],
          "correctAnswer": 0,
          "explanation": "LAN stands for Local Area Network, typically confined to a single building or campus.",
          "topic": "Network Types"
        },
        {
          "id": "cn_q13_p1",
          "question": "Which OSI layer is responsible for translating data formats, encryption, and compression?",
          "options": ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
          "correctAnswer": 1,
          "explanation": "The Presentation layer ensures data is in a usable format and handles encryption and compression.",
          "topic": "OSI Model"
        },
        {
          "id": "cn_q14_p1",
          "question": "What is the difference between bandwidth and throughput?",
          "options": ["They are the same thing", "Bandwidth is actual speed, throughput is theoretical", "Bandwidth is theoretical capacity, throughput is actual data transferred", "Bandwidth measures latency, throughput measures speed"],
          "correctAnswer": 2,
          "explanation": "Bandwidth is the maximum theoretical capacity of a link, while throughput is the actual successful rate of data transfer.",
          "topic": "Networking Basics"
        },
        {
          "id": "cn_q15_p1",
          "question": "Which device connects multiple networks and determines the best path for data?",
          "options": ["Hub", "Switch", "Router", "Modem"],
          "correctAnswer": 2,
          "explanation": "A Router operates at Layer 3 and connects different networks by routing packets based on IP addresses.",
          "topic": "Network Devices"
        }
      ]
    },
    {
      "id": "cn_part_2",
      "title": "Part 2 - PHYSICAL & DATA LINK LAYER",
      "difficulty": "Easy",
      "questions": []
    },
    {
      "id": "cn_part_3",
      "title": "Part 3 - NETWORK LAYER & IP ADDRESSING",
      "difficulty": "Easy-Medium",
      "questions": []
    },
    {
      "id": "cn_part_4",
      "title": "Part 4 - ROUTING & NETWORK LAYER PROTOCOLS",
      "difficulty": "Easy-Medium",
      "questions": []
    },
    {
      "id": "cn_part_5",
      "title": "Part 5 - TRANSPORT LAYER",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "cn_part_6",
      "title": "Part 6 - APPLICATION LAYER & NETWORK PROTOCOLS",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "cn_part_7",
      "title": "Part 7 - NETWORK SECURITY",
      "difficulty": "Medium",
      "questions": []
    },
    {
      "id": "cn_part_8",
      "title": "Part 8 - PERFORMANCE, CONGESTION & ADVANCED TRANSPORT CONCEPTS",
      "difficulty": "Medium-Hard",
      "questions": []
    },
    {
      "id": "cn_part_9",
      "title": "Part 9 - NETWORKING SCENARIOS & INTERVIEW PROBLEMS",
      "difficulty": "Medium-Hard",
      "questions": []
    },
    {
      "id": "cn_part_10",
      "title": "Part 10 - ADVANCED INTERVIEW & PLACEMENT QUESTIONS",
      "difficulty": "Hard / Interview",
      "questions": []
    }
  ]
};
