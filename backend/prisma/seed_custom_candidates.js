import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const rawData = `1	2303051050354@paruluniversity.ac.in	2.30305E+12	Kashish .	Female	B.Tech - Computer Science and Engineering
2	2303051050052@paruluniversity.ac.in	2.30305E+12	Akash Kumar	Male	B.Tech - Computer Science and Engineering
3	2303051050404@paruluniversity.ac.in	2.30305E+12	Makwana Harsh Devendrabhai	Male	B.Tech - Computer Science and Engineering
4	2303051050643@paruluniversity.ac.in	2.30305E+12	Randhir Kumar	Male	B.Tech - Computer Science and Engineering
5	2303051050329@paruluniversity.ac.in	2.30305E+12	Jha Avnit Vijay	Male	B.Tech - Computer Science and Engineering
6	2303031540074@paruluniversity.ac.in	2.30303E+12	Prachi Soni	Male	B.Tech - CSE with IEP Microsoft
7	2303031540106@paruluniversity.ac.in	2.30303E+12	Sindhuriya Umang Navalkishor	Male	B.Tech - CSE with IEP Microsoft
8	2303031540115@paruluniversity.ac.in	2.30303E+12	Vaidehi Wate	Male	B.Tech - CSE with IEP Microsoft
9	2303031540001@paruluniversity.ac.in	2.30303E+12	Aastha Manish Bhavsar	Female	B.Tech - CSE with IEP Microsoft
10	2303031540104@paruluniversity.ac.in	2.30303E+12	Shubhra Gohil	Female	B.Tech - CSE with IEP Microsoft
11	2303031570021@paruluniversity.ac.in	2.30303E+12	Natasha Gawade	Female	B.Tech - CSE with IEP SAP
12	2303051051379@paruluniversity.ac.in	2.30305E+12	Bhadoriya Arman Singh Sanjay	Male	B.Tech - Computer Science and Engineering
13	2303051050225@paruluniversity.ac.in	2.30305E+12	Dharya Thakkar	Male	B.Tech - Computer Science and Engineering
14	2303031540052@paruluniversity.ac.in	2.30303E+12	Kumawat Mahesh Omprakash	Male	B.Tech - CSE with IEP Microsoft
15	2303051240345@paruluniversity.ac.in	2.30305E+12	Anukul Kumar	Male	B.Tech - Computer Science and Engineering with AI
16	2303031260197@paruluniversity.ac.in	2.30303E+12	Sampathraj Anand Soni	Male	B.Tech - CSE with Cyber Security
17	2403031267008@paruluniversity.ac.in	2.40303E+12	Faraz Shethwala	Male	B.Tech - CSE with Cyber Security
18	2303031260123@paruluniversity.ac.in	2.30303E+12	Kothareddy Avinash	Male	B.Tech - CSE with Cyber Security
19	2303031550025@paruluniversity.ac.in	2.30303E+12	Pari Jain	Male	B.Tech - CSE with IEP Quick Heal
20	2303031310002@paruluniversity.ac.in	2.30303E+12	Dhruv Maji	Male	B.Tech - CSE with BlockChain Technology
21	2303031050547@paruluniversity.ac.in	2.30303E+12	Kashish Mayur Shah	Female	B.Tech - Computer Science and Engineering
22	2303031050356@paruluniversity.ac.in	2.30303E+12	Nisha Khandelwal	Female	B.Tech - Computer Science and Engineering
23	2303031050212@paruluniversity.ac.in	2.30303E+12	Pranay Umesh Jain	Male	B.Tech - Computer Science and Engineering
24	2303031050130@paruluniversity.ac.in	2.30303E+12	Nusrat Danawala	Male	B.Tech - Computer Science and Engineering
25	2303031050095@paruluniversity.ac.in	2.30303E+12	Jeet Chetankumar Bhavsar	Male	B.Tech - Computer Science and Engineering
26	2303031050452@paruluniversity.ac.in	2.30303E+12	Patel Vinayak Ashwani	Male	B.Tech - Computer Science and Engineering
27	2303031050352@paruluniversity.ac.in	2.30303E+12	Nikhilraj Nagendra Singh Rajput	Male	B.Tech - Computer Science and Engineering
28	2303031050035@paruluniversity.ac.in	2.30303E+12	Akshaya Gupta	Female	B.Tech - Computer Science and Engineering
29	2303031050053@paruluniversity.ac.in	2.30303E+12	Archi Jain	Female	B.Tech - Computer Science and Engineering
30	2303031050542@paruluniversity.ac.in	2.30303E+12	Harsh Shah	Male	B.Tech - Computer Science and Engineering
31	2303031050349@paruluniversity.ac.in	2.30303E+12	Nidhi Raghuvanshi	Female	B.Tech - Computer Science and Engineering
32	2303031050033@paruluniversity.ac.in	2.30303E+12	Akhil Saurabh	Male	B.Tech - Computer Science and Engineering
33	2303051240234@paruluniversity.ac.in	2.30305E+12	Subroto Chatterjee	Male	B.Tech - Computer Science and Engineering with AI
34	2303051240327@paruluniversity.ac.in	2.30305E+12	Yug Sondagar	Male	B.Tech - Computer Science and Engineering with AI
35	2303031460068@paruluniversity.ac.in	2.30303E+12	Jyothsna Vamisetti	Female	B.Tech - CSE with AI and ML
36	2403031469002@paruluniversity.ac.in	2.40303E+12	Kashyap Manish Sunderlal	Male	B.Tech - CSE with AI and ML
37	2303031460072@paruluniversity.ac.in	2.30303E+12	Kambaduru Sai Prashanth	Male	B.Tech - CSE with AI and ML
38	2303031241654@paruluniversity.ac.in	2.30303E+12	Chaurasiya Krishna Omkar	Male	B.Tech - Computer Science and Engineering with AI
39	2303051050080@paruluniversity.ac.in	2.30305E+12	Anand Shekhar	Male	B.Tech - Computer Science and Engineering
40	2303031050598@paruluniversity.ac.in	2.30303E+12	Soi Mandeepkaur Gurmeetsingh	Female	B.Tech - Computer Science and Engineering
41	2303031250162@paruluniversity.ac.in	2.30303E+12	Yashaswini Jayesh Sharma	Male	B.Tech - CSE with Big Data Analytics
42	2303031250159@paruluniversity.ac.in	2.30303E+12	Arun Sivadas Nair	Male	B.Tech - CSE with Big Data Analytics
43	2303031250146@paruluniversity.ac.in	2.30303E+12	Rohan Vedpathak	Male	B.Tech - CSE with Big Data Analytics
44	2303031250150@paruluniversity.ac.in	2.30303E+12	Yadav Neha Rajeshkumar	Female	B.Tech - CSE with Big Data Analytics
45	2303031250075@paruluniversity.ac.in	2.30303E+12	Maisnam Miranda Devi	Female	B.Tech - CSE with Big Data Analytics
46	2303031241363@paruluniversity.ac.in	2.30303E+12	Vaishviben Chaudhari	Female	B.Tech - Computer Science and Engineering with AI
47	2303031241564@paruluniversity.ac.in	2.30303E+12	Segu Surendra Amarnath	Male	B.Tech - Computer Science and Engineering with AI
48	2303031240483@paruluniversity.ac.in	2.30303E+12	Shrushti Kale	Female	B.Tech - Computer Science and Engineering with AI
49	2303031240942@paruluniversity.ac.in	2.30303E+12	Pasupuleti Lakshmi Sowmya Sri	Female	B.Tech - Computer Science and Engineering with AI
50	2303031240651@paruluniversity.ac.in	2.30303E+12	Mohan Sri Raghuram	Male	B.Tech - Computer Science and Engineering with AI
51	2303031240463@paruluniversity.ac.in	2.30303E+12	Jha Aarush Prabhat	Male	B.Tech - Computer Science and Engineering with AI
52	2303031241273@paruluniversity.ac.in	2.30303E+12	Singh Kanishka	Female	B.Tech - Computer Science and Engineering with AI
53	2303031240864@paruluniversity.ac.in	2.30303E+12	Nishank Maidawat	Male	B.Tech - Computer Science and Engineering with AI
54	2303031460157@paruluniversity.ac.in	2.30303E+12	Sairaj Prabhakar Pawar	Male	B.Tech - CSE with AI and ML
55	2303051050531@paruluniversity.ac.in	2.30305E+12	Patel Shreya Kaushikkumar	Female	B.Tech - Computer Science and Engineering
56	2303031240223@paruluniversity.ac.in	2.30303E+12	Arpita Behera	Female	B.Tech - Computer Science and Engineering with AI
57	2303031240868@paruluniversity.ac.in	2.30303E+12	Nomula Rushwitha	Female	B.Tech - Computer Science and Engineering with AI
58	2303051051238@paruluniversity.ac.in	2.30305E+12	Sachin Kumar	Male	B.Tech - Computer Science and Engineering
59	2403031247014@paruluniversity.ac.in	2.40303E+12	Parmar Panktiben Umeshbhai	Female	B.Tech - Computer Science and Engineering with AI
60	2403031247034@paruluniversity.ac.in	2.40303E+12	Solanki Dhruvkumar Yashvantbhai	Male	B.Tech - Computer Science and Engineering with AI
61	2303031050553@paruluniversity.ac.in	2.30303E+12	Mohammad Shahil Shaikh	Male	B.Tech - Computer Science and Engineering
62	2303051051196@paruluniversity.ac.in	2.30305E+12	Anjali Gupta	Female	B.Tech - Computer Science and Engineering
63	2303031050476@paruluniversity.ac.in	2.30303E+12	Prajapati Vishal Ashokbhai	Male	B.Tech - Computer Science and Engineering
64	2303031050691@paruluniversity.ac.in	2.30303E+12	Priyanshi Yaduvanshi	Female	B.Tech - Computer Science and Engineering
65	2403031057038@paruluniversity.ac.in	2.40303E+12	Kesarkar Aditi Rakeshbhai	Female	B.Tech - Computer Science and Engineering
66	2403031057039@paruluniversity.ac.in	2.40303E+12	Kesarkar Harsh Manoharbhai	Male	B.Tech - Computer Science and Engineering
67	2303051050010@paruluniversity.ac.in	2.30305E+12	Abdullah Arman	Male	B.Tech - Computer Science and Engineering
68	2303051050377@paruluniversity.ac.in	2.30305E+12	Kirtan Parsana	Male	B.Tech - Computer Science and Engineering
69	2303031260181@paruluniversity.ac.in	2.30303E+12	Potta Jyothsna	Female	B.Tech - CSE with Cyber Security
70	2303051240286@paruluniversity.ac.in	2.30305E+12	Aditi Rathore	Female	B.Tech - Computer Science and Engineering with AI
71	2303031050453@paruluniversity.ac.in	2.30303E+12	Patel Yashvi Jayeshbhai	Female	B.Tech - Computer Science and Engineering
72	2303031240230@paruluniversity.ac.in	2.30303E+12	Avuku Sai Prakash Reddy	Male	B.Tech - Computer Science and Engineering with AI
73	2303031241044@paruluniversity.ac.in	2.30303E+12	Pothini Vara Laxmi	Female	B.Tech - Computer Science and Engineering with AI
74	2303031240099@paruluniversity.ac.in	2.30303E+12	Muthyala Uma Maheshwari	Female	B.Tech - Computer Science and Engineering with AI
75	2303051240150@paruluniversity.ac.in	2.30305E+12	Patel Kevinkumar Mukundbhai	Male	B.Tech - Computer Science and Engineering with AI
76	2303031550042@paruluniversity.ac.in	2.30303E+12	Shubham Kumar	Male	B.Tech - CSE with IEP Quick Heal
77	2303051051014@paruluniversity.ac.in	2.30305E+12	Vishal Gupta	Male	B.Tech - Computer Science and Engineering
78	2303051050322@paruluniversity.ac.in	2.30305E+12	Janvi Adhiya	Female	B.Tech - Computer Science and Engineering
79	2303031250006@paruluniversity.ac.in	2.30303E+12	Arla Chaithanya	Female	B.Tech - CSE with Big Data Analytics
80	2303031241519@paruluniversity.ac.in	2.30303E+12	Keerthi Kulkarni	Female	B.Tech - Computer Science and Engineering with AI
81	2303031570037@paruluniversity.ac.in	2.30303E+12	Shreya Nair	Female	B.Tech - CSE with IEP SAP
82	2303031050433@paruluniversity.ac.in	2.30303E+12	Meet Patel	Male	B.Tech - Computer Science and Engineering
83	2303031540152@paruluniversity.ac.in	2.30303E+12	Swati Singh	Female	B.Tech - CSE with IEP Microsoft
84	2303031241446@paruluniversity.ac.in	2.30303E+12	Janday Riya Yogesh	Female	B.Tech - Computer Science and Engineering with AI
85	2303031540002@paruluniversity.ac.in	2.30303E+12	Aditi Agarwal	Female	B.Tech - CSE with IEP Microsoft
86	2303051050396@paruluniversity.ac.in	2.30305E+12	Luv Yadav	Male	B.Tech - Computer Science and Engineering
87	2303031240714@paruluniversity.ac.in	2.30303E+12	Nikita Raj	Female	B.Tech - Computer Science and Engineering with AI
88	2303031240257@paruluniversity.ac.in	2.30303E+12	Bhatiya Kajal Hamirbhai	Female	B.Tech - Computer Science and Engineering with AI
89	2303031050524@paruluniversity.ac.in	2.30303E+12	Kishan Jayshankar Roy	Male	B.Tech - Computer Science and Engineering
90	2303051050525@paruluniversity.ac.in	2.30305E+12	Patel Mahi Hemantkumar	Female	B.Tech - Computer Science and Engineering
91	2303031240570@paruluniversity.ac.in	2.30303E+12	Kritarth Joshi	Male	B.Tech - Computer Science and Engineering with AI
92	2303031241112@paruluniversity.ac.in	2.30303E+12	Rambha Mounika	Female	B.Tech - Computer Science and Engineering with AI
93	2303031240465@paruluniversity.ac.in	2.30303E+12	Jhanvi Modani	Female	B.Tech - Computer Science and Engineering with AI
94	2303031050728@paruluniversity.ac.in	2.30303E+12	Tanvi Krunal Parmar	Female	B.Tech - Computer Science and Engineering
95	2303031460102@paruluniversity.ac.in	2.30303E+12	Kyatham Aishwarya	Female	B.Tech - CSE with AI and ML
96	2303031240415@paruluniversity.ac.in	2.30303E+12	Gumma Ganga Dheeresh	Male	B.Tech - Computer Science and Engineering with AI
97	2303031240652@paruluniversity.ac.in	2.30303E+12	Mokkala Pranathi	Male	B.Tech - Computer Science and Engineering with AI
98	2303051050577@paruluniversity.ac.in	2.30305E+12	Prankada Shrawansinh Pushpendrasinh	Male	B.Tech - Computer Science and Engineering
99	2303051050266@paruluniversity.ac.in	2.30305E+12	Gopal Bhawsar	Male	B.Tech - Computer Science and Engineering
100	2303051050964@paruluniversity.ac.in	2.30305E+12	Travadi Zainab Murtuza	Male	B.Tech - Computer Science and Engineering
101	2303051050079@paruluniversity.ac.in	2.30305E+12	Anand Raj	Male	B.Tech - Computer Science and Engineering
102	2303051050295@paruluniversity.ac.in	2.30305E+12	Himanshu Shekhar	Male	B.Tech - Computer Science and Engineering
103	2303051050368@paruluniversity.ac.in	2.30305E+12	Khunt Manaliben Bharatbhai	Female	B.Tech - Computer Science and Engineering
104	2303051050989@paruluniversity.ac.in	2.30305E+12	Varpe Pritam Sanjay	Male	B.Tech - Computer Science and Engineering
105	2303051050936@paruluniversity.ac.in	2.30305E+12	Supriti Samanta	Female	B.Tech - Computer Science and Engineering
106	2303031540107@paruluniversity.ac.in	2.30303E+12	Singh Isha Rajesh	Female	B.Tech - CSE with IEP Microsoft
107	2303031540153@paruluniversity.ac.in	2.30303E+12	Tejaswini Rath	Male	B.Tech - CSE with IEP Microsoft
108	2303031540101@paruluniversity.ac.in	2.30303E+12	Shashwat Dixit	Male	B.Tech - CSE with IEP Microsoft
109	2303031540121@paruluniversity.ac.in	2.30303E+12	Vivek Vyas	Male	B.Tech - CSE with IEP Microsoft
110	2303031540048@paruluniversity.ac.in	2.30303E+12	Kolhe Soham Sanjay	Male	B.Tech - CSE with IEP Microsoft
111	2303051051013@paruluniversity.ac.in	2.30305E+12	Vishal Choudhary	Male	B.Tech - Computer Science and Engineering
112	2303051050914@paruluniversity.ac.in	2.30305E+12	Sonani Param Rasikbhai	Male	B.Tech - Computer Science and Engineering
113	2303051050363@paruluniversity.ac.in	2.30305E+12	Kharva Kinjal Ritesh	Female	B.Tech - Computer Science and Engineering
114	2303031540023@paruluniversity.ac.in	2.30303E+12	Bhalala Srushti Jigneshbhai	Female	B.Tech - CSE with IEP Microsoft
115	2303031050043@paruluniversity.ac.in	2.30303E+12	Ankit Raj	Male	B.Tech - Computer Science and Engineering
116	2303031050003@paruluniversity.ac.in	2.30303E+12	Aadhya Patel	Female	B.Tech - Computer Science and Engineering
117	2303031050266@paruluniversity.ac.in	2.30303E+12	Krishna Swati Sharma	Male	B.Tech - Computer Science and Engineering
118	2303031050516@paruluniversity.ac.in	2.30303E+12	Rishit Palash Bhowmick	Male	B.Tech - Computer Science and Engineering
119	2303031050807@paruluniversity.ac.in	2.30303E+12	Vighyat Santosh More	Male	B.Tech - Computer Science and Engineering
120	2303031050082@paruluniversity.ac.in	2.30303E+12	Dhruvsinh Pratapsinh Barad	Male	B.Tech - Computer Science and Engineering
121	2303031050500@paruluniversity.ac.in	2.30303E+12	Dhwani Rana	Female	B.Tech - Computer Science and Engineering
122	2303031050066@paruluniversity.ac.in	2.30303E+12	Autade Gayatri Pradip	Male	B.Tech - Computer Science and Engineering
123	2303031050575@paruluniversity.ac.in	2.30303E+12	Shreya Mehta	Female	B.Tech - Computer Science and Engineering
124	2303031050149@paruluniversity.ac.in	2.30303E+12	Dhruv M. Patel	Male	B.Tech - Computer Science and Engineering
125	2303051240116@paruluniversity.ac.in	2.30305E+12	Pooja Ranjeet Mandal	Female	B.Tech - Computer Science and Engineering with AI
126	2303051240113@paruluniversity.ac.in	2.30305E+12	Lakshya Patidar	Male	B.Tech - Computer Science and Engineering with AI
127	2303051240299@paruluniversity.ac.in	2.30305E+12	Ishita Rathore	Female	B.Tech - Computer Science and Engineering with AI
128	2303051240205@paruluniversity.ac.in	2.30305E+12	Shah Jineet Sachin	Male	B.Tech - Computer Science and Engineering with AI
129	2303051240178@paruluniversity.ac.in	2.30305E+12	Krisha Jaydipsinh Rathod	Female	B.Tech - Computer Science and Engineering with AI
130	2303031460042@paruluniversity.ac.in	2.30303E+12	Dudekula Sajid	Male	B.Tech - CSE with AI and ML
131	2303031460190@paruluniversity.ac.in	2.30303E+12	Yuvraj B Zende	Male	B.Tech - CSE with AI and ML
132	2303031460080@paruluniversity.ac.in	2.30303E+12	Kesamreddy Meghana	Male	B.Tech - CSE with AI and ML
133	2303031300003@paruluniversity.ac.in	2.30303E+12	Bhavina Parmar	Female	B.Tech - CSE with Cloud Computing
134	2303031250098@paruluniversity.ac.in	2.30303E+12	Pankaj Yadav	Male	B.Tech - CSE with Big Data Analytics
135	2303031250010@paruluniversity.ac.in	2.30303E+12	Ayush Jha	Male	B.Tech - CSE with Big Data Analytics
136	2303031250030@paruluniversity.ac.in	2.30303E+12	Dharavath Sai Kumar	Male	B.Tech - CSE with Big Data Analytics
137	2303031250119@paruluniversity.ac.in	2.30303E+12	Samarth Mishra	Male	B.Tech - CSE with Big Data Analytics
138	2303051050238@paruluniversity.ac.in	2.30305E+12	Disha Patidar	Female	B.Tech - Computer Science and Engineering
139	2303031241656@paruluniversity.ac.in	2.30303E+12	Aadrika Srivastava	Female	B.Tech - Computer Science and Engineering with AI
140	2303031540055@paruluniversity.ac.in	2.30303E+12	Malek Mohammadzaid Jaidahemad	Male	B.Tech - CSE with IEP Microsoft
141	2303031050484@paruluniversity.ac.in	2.30303E+12	Himanshu Prusty	Male	B.Tech - Computer Science and Engineering
142	2303031050093@paruluniversity.ac.in	2.30303E+12	Hemal Bhatt	Male	B.Tech - Computer Science and Engineering
143	2303031240064@paruluniversity.ac.in	2.30303E+12	Kasani Vijay Kumar Goud	Male	B.Tech - Computer Science and Engineering with AI
144	2303031240529@paruluniversity.ac.in	2.30303E+12	Khatri Mahamadakil Firojbhai	Male	B.Tech - Computer Science and Engineering with AI
145	2303031241060@paruluniversity.ac.in	2.30303E+12	Prajapati Prachi Dayasharan	Female	B.Tech - Computer Science and Engineering with AI
146	2303031240180@paruluniversity.ac.in	2.30303E+12	AEGULA MAHENDAR	Male	B.Tech - Computer Science and Engineering with AI
147	2303031241619@paruluniversity.ac.in	2.30303E+12	Aparna Kumar	Female	B.Tech - Computer Science and Engineering with AI
148	2303031240448@paruluniversity.ac.in	2.30303E+12	Jaiswar Abhishek Bhaiyalal	Male	B.Tech - Computer Science and Engineering with AI
149	2303031240490@paruluniversity.ac.in	2.30303E+12	Kamisetty Gnanitha	Female	B.Tech - Computer Science and Engineering with AI
150	2303031241130@paruluniversity.ac.in	2.30303E+12	Raunak Kumar Kunwar	Male	B.Tech - Computer Science and Engineering with AI
151	2303031240675@paruluniversity.ac.in	2.30303E+12	Murahari Jahnavi	Female	B.Tech - Computer Science and Engineering with AI
152	2303051050243@paruluniversity.ac.in	2.30305E+12	Divyanshu Raj	Male	B.Tech - Computer Science and Engineering
153	2303031240705@paruluniversity.ac.in	2.30303E+12	Nannapaneni Greeshma Chowdary	Female	B.Tech - Computer Science and Engineering with AI
154	2303031050050@paruluniversity.ac.in	2.30303E+12	Anushka Prasad	Female	B.Tech - Computer Science and Engineering
155	2303031460056@paruluniversity.ac.in	2.30303E+12	Gummadidala Sai Krishna	Male	B.Tech - CSE with AI and ML
156	2303031050446@paruluniversity.ac.in	2.30303E+12	Swayam Jagdish Patel	Male	B.Tech - Computer Science and Engineering
157	2303031050560@paruluniversity.ac.in	2.30303E+12	Shashwat Singh	Male	B.Tech - Computer Science and Engineering
158	2303051050523@paruluniversity.ac.in	2.30305E+12	Patel Krishna Navneetbhai	Female	B.Tech - Computer Science and Engineering
159	2403051057017@paruluniversity.ac.in	2.40305E+12	Gadara Hastiben Kishorbhai	Female	B.Tech - Computer Science and Engineering
160	2303051050277@paruluniversity.ac.in	2.30305E+12	Harsh .	Male	B.Tech - Computer Science and Engineering
161	2303031260137@paruluniversity.ac.in	2.30303E+12	Mallarapu Nypunya	Female	B.Tech - CSE with Cyber Security
162	2303031050657@paruluniversity.ac.in	2.30303E+12	Siddhi Chiragbhai Upadhyay	Female	B.Tech - Computer Science and Engineering
163	2303031460093@paruluniversity.ac.in	2.30303E+12	Korada Venkata Karthik	Male	B.Tech - CSE with AI and ML
164	2303051050876@paruluniversity.ac.in	2.30305E+12	Shivani Kumari	Female	B.Tech - Computer Science and Engineering
165	2303031240184@paruluniversity.ac.in	2.30303E+12	Akanksha Yadav	Female	B.Tech - Computer Science and Engineering with AI
166	2303031241042@paruluniversity.ac.in	2.30303E+12	Poluparthi Sai Satyasri	Female	B.Tech - Computer Science and Engineering with AI
167	2303051050008@paruluniversity.ac.in	2.30305E+12	Aayush Yadav	Male	B.Tech - Computer Science and Engineering
168	2303051240031@paruluniversity.ac.in	2.30305E+12	Apoorv Porwal	Male	B.Tech - Computer Science and Engineering with AI
169	2303031241248@paruluniversity.ac.in	2.30303E+12	Sharma Om Diwakar	Male	B.Tech - Computer Science and Engineering with AI
170	2403031247043@paruluniversity.ac.in	2.40303E+12	Manseta Vaidehi Chetanbhai	Male	B.Tech - Computer Science and Engineering with AI
171	2303031050359@paruluniversity.ac.in	2.30303E+12	Nishtha Gupta	Female	B.Tech - Computer Science and Engineering
172	2303051240260@paruluniversity.ac.in	2.30305E+12	Varma Anshu Yashpalsingh	Female	B.Tech - Computer Science and Engineering with AI
173	2303031050676@paruluniversity.ac.in	2.30303E+12	Vishal Vijaykumar Vishwakarma	Male	B.Tech - Computer Science and Engineering
174	2303031241491@paruluniversity.ac.in	2.30303E+12	Vaghela Dhruvishakumari Pushprajsinh	Female	B.Tech - Computer Science and Engineering with AI
175	2303031260265@paruluniversity.ac.in	2.30303E+12	Diya Vadgama	Female	B.Tech - CSE with Cyber Security
176	2303051260042@paruluniversity.ac.in	2.30305E+12	Shubham Singh	Male	B.Tech - CSE with Cyber Security
177	2303051260062@paruluniversity.ac.in	2.30305E+12	Sandeep Mandal	Male	B.Tech - CSE with Cyber Security
178	2303051050382@paruluniversity.ac.in	2.30305E+12	Krishna Kant Shukla	Male	B.Tech - Computer Science and Engineering
179	2303031460166@paruluniversity.ac.in	2.30303E+12	Sompalli Ramya	Female	B.Tech - CSE with AI and ML
180	2303051050494@paruluniversity.ac.in	2.30305E+12	Ishika Panchal	Female	B.Tech - Computer Science and Engineering
181	2303051240226@paruluniversity.ac.in	2.30305E+12	Sonam Giri	Female	B.Tech - Computer Science and Engineering with AI
182	2303051051168@paruluniversity.ac.in	2.30305E+12	Abhishek Raj	Male	B.Tech - Computer Science and Engineering
183	2303031260160@paruluniversity.ac.in	2.30303E+12	Nimmana Monika	Female	B.Tech - CSE with Cyber Security
184	2303031050175@paruluniversity.ac.in	2.30303E+12	Gohil Surbhi Vinaybhai	Female	B.Tech - Computer Science and Engineering
185	2303031250114@paruluniversity.ac.in	2.30303E+12	Rana Kavya Piyush	Female	B.Tech - CSE with Cloud Computing
186	2303031241266@paruluniversity.ac.in	2.30303E+12	Siddhapura Astha Niren	Male	B.Tech - Computer Science and Engineering with AI
187	2303031260096@paruluniversity.ac.in	2.30303E+12	K. Shivani	Female	B.Tech - CSE with Cyber Security
188	2303031310019@paruluniversity.ac.in	2.30303E+12	Prathyush Narwade	Male	B.Tech - CSE with BlockChain Technology
189	2303031570065@paruluniversity.ac.in	2.30303E+12	Vansh Kaushal	Male	B.Tech - CSE with IEP SAP
190	2303031570028@paruluniversity.ac.in	2.30303E+12	Jitendra Kumar	Male	B.Tech - CSE with IEP SAP`

const skillsPool = ['React', 'Node.js', 'Python', 'Java', 'Machine Learning', 'C++', 'JavaScript', 'SQL', 'AWS', 'Docker']

async function main() {
  console.log('Seeding custom dummy candidates...')
  const passwordHash = await bcrypt.hash('password123', 10)

  // Ensure skills exist
  for (const s of skillsPool) {
    await prisma.skill.upsert({
      where: { name: s.toLowerCase() },
      update: {},
      create: { name: s.toLowerCase(), category: 'General' }
    })
  }
  const allSkills = await prisma.skill.findMany()

  const lines = rawData.trim().split('\n')
  for (const line of lines) {
    const parts = line.split('\t')
    if (parts.length < 6) continue
    
    // 0: Sr.no, 1: Email, 2: Roll No, 3: Full Name, 4: Gender, 5: Degree
    const email = parts[1].trim().toLowerCase()
    const fullName = parts[3].trim()
    const degree = parts[5].trim()

    const nameParts = fullName.split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || 'Student'

    try {
      // Create User
      const user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          passwordHash,
          role: 'STUDENT',
          isVerified: true
        }
      })

      // Randomize 3 skills for each candidate
      const shuffledSkills = allSkills.sort(() => 0.5 - Math.random()).slice(0, 3)

      // Create StudentProfile
      await prisma.studentProfile.upsert({
        where: { userId: user.id },
        update: {},
        create: {
          userId: user.id,
          firstName,
          lastName,
          targetRole: 'Software Engineer',
          summary: `I am ${fullName}, a passionate software engineering student studying ${degree}.`,
          placementReadinessScore: Math.floor(Math.random() * 40) + 60, // 60 to 100
          location: 'Parul University',
          education: {
            create: [
              {
                college: 'Parul University',
                degree: 'B.Tech',
                branch: degree,
                graduationYear: 2027
              }
            ]
          },
          skills: {
            create: shuffledSkills.map(skill => ({
              skillId: skill.id
            }))
          }
        }
      })

      console.log(`Created candidate: ${email}`)
    } catch (e) {
      console.log(`Failed to create candidate ${email}: ${e.message}`)
    }
  }
  console.log('Finished seeding custom candidates.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
