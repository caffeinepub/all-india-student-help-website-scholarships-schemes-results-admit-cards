import { UpdateCategory, type UpdateItem } from './updateTypes';

export const seedUpdates: UpdateItem[] = [
  // Education News
  {
    id: 'nep-2020-implementation-update',
    title: 'NEP 2020 Implementation: Major Changes in School Curriculum Announced',
    category: UpdateCategory.EDUCATION_NEWS,
    date: '2026-02-09',
    excerpt: 'Ministry of Education announces key updates in implementing National Education Policy 2020 across all states. New curriculum framework to be rolled out from academic year 2026-27.',
    stateTags: [],
    body: `
      <h2>National Education Policy 2020 Implementation Update</h2>
      <p>The Ministry of Education has announced significant progress in implementing the National Education Policy (NEP) 2020 across India. The new curriculum framework will bring major changes to school education from the academic year 2026-27.</p>
      
      <h3>Key Changes Announced</h3>
      <ul>
        <li>Introduction of 5+3+3+4 curricular structure replacing the 10+2 system</li>
        <li>Focus on foundational literacy and numeracy in early years</li>
        <li>Multidisciplinary approach in higher secondary education</li>
        <li>Emphasis on vocational education from Class 6 onwards</li>
        <li>Reduction in curriculum content to focus on core concepts</li>
      </ul>
      
      <h3>Implementation Timeline</h3>
      <ul>
        <li>Phase 1 (2026-27): Classes 1, 3, 6, and 9</li>
        <li>Phase 2 (2027-28): Classes 2, 4, 7, and 10</li>
        <li>Phase 3 (2028-29): Classes 5, 8, 11, and 12</li>
      </ul>
      
      <h3>Impact on Students</h3>
      <p>Students will benefit from a more flexible and holistic education system. The new framework allows students to choose subjects based on their interests rather than rigid streams. Assessment will focus on competency-based evaluation rather than rote learning.</p>
      
      <h3>What Parents Should Know</h3>
      <p>Parents should stay informed about these changes through their child's school. Schools will conduct orientation sessions to explain the new curriculum structure. The transition will be gradual, ensuring no disruption to ongoing education.</p>
      
      <p><em>Note: Please check with your school and state education board for specific implementation details in your area.</em></p>
    `,
  },
  {
    id: 'cbse-board-exam-pattern-2027',
    title: 'CBSE Announces New Board Exam Pattern for 2027 - What Students Need to Know',
    category: UpdateCategory.EDUCATION_NEWS,
    date: '2026-02-08',
    excerpt: 'Central Board of Secondary Education releases new exam pattern for Class 10 and 12 board exams 2027. Changes include competency-based questions and reduced syllabus.',
    stateTags: [],
    body: `
      <h2>CBSE New Board Exam Pattern 2027</h2>
      <p>The Central Board of Secondary Education (CBSE) has announced a revised exam pattern for Class 10 and Class 12 board examinations to be conducted in 2027. These changes align with the National Education Policy 2020 and focus on competency-based assessment.</p>
      
      <h3>Major Changes in Exam Pattern</h3>
      <ul>
        <li>40% weightage to competency-based questions</li>
        <li>30% weightage to application-based questions</li>
        <li>30% weightage to knowledge-based questions</li>
        <li>Introduction of case study-based questions in all subjects</li>
        <li>Reduced emphasis on rote learning</li>
      </ul>
      
      <h3>Subject-wise Changes</h3>
      <p><strong>Mathematics:</strong> More focus on problem-solving and real-life applications. Reduced theoretical questions.</p>
      <p><strong>Science:</strong> Increased practical-based questions. Integration of concepts across Physics, Chemistry, and Biology.</p>
      <p><strong>Social Science:</strong> Map-based questions and source-based questions will carry more marks.</p>
      <p><strong>Languages:</strong> Enhanced focus on comprehension and creative writing skills.</p>
      
      <h3>How to Prepare</h3>
      <ul>
        <li>Focus on understanding concepts rather than memorization</li>
        <li>Practice case studies and application-based questions</li>
        <li>Solve previous years' sample papers with new pattern</li>
        <li>Strengthen practical knowledge through experiments and projects</li>
      </ul>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Sample papers release: June 2026</li>
        <li>Syllabus finalization: July 2026</li>
        <li>Board exams: February-March 2027</li>
      </ul>
      
      <p><em>Disclaimer: Students should regularly check the official CBSE website for detailed circulars and updates.</em></p>
    `,
  },
  
  // School Education
  {
    id: 'cbse-class-10-syllabus-2026-27',
    title: 'CBSE Class 10 Syllabus 2026-27 Released - Download PDF',
    category: UpdateCategory.SCHOOL_EDUCATION,
    date: '2026-02-07',
    excerpt: 'CBSE has released the complete syllabus for Class 10 for academic year 2026-27. Students can download subject-wise syllabus PDFs from the official website.',
    stateTags: [],
    body: `
      <h2>CBSE Class 10 Syllabus 2026-27</h2>
      <p>The Central Board of Secondary Education has released the complete syllabus for Class 10 for the academic year 2026-27. The syllabus includes all core subjects and optional subjects with detailed chapter-wise breakup.</p>
      
      <h3>Core Subjects Covered</h3>
      <ul>
        <li>English (Language & Literature)</li>
        <li>Hindi (Course A & B)</li>
        <li>Mathematics (Standard & Basic)</li>
        <li>Science</li>
        <li>Social Science</li>
      </ul>
      
      <h3>Key Features of New Syllabus</h3>
      <ul>
        <li>Rationalized content focusing on core concepts</li>
        <li>Integration of experiential learning activities</li>
        <li>Emphasis on critical thinking and problem-solving</li>
        <li>Reduced content load by approximately 30%</li>
        <li>Clear learning outcomes for each chapter</li>
      </ul>
      
      <h3>Subject-wise Highlights</h3>
      <p><strong>Mathematics:</strong> Two levels - Standard (for students planning to take Maths in 11th) and Basic (for students not continuing with Maths). Both have same difficulty level for internal assessment.</p>
      
      <p><strong>Science:</strong> Integrated approach covering Physics, Chemistry, and Biology. More practical-based learning activities included.</p>
      
      <p><strong>Social Science:</strong> Covers History, Geography, Political Science, and Economics. Focus on contemporary issues and map work.</p>
      
      <h3>How to Download Syllabus</h3>
      <ol>
        <li>Visit the official CBSE website</li>
        <li>Go to the "Curriculum" section</li>
        <li>Select "Class 10 Syllabus 2026-27"</li>
        <li>Download subject-wise PDF files</li>
      </ol>
      
      <h3>Study Tips for Class 10 Students</h3>
      <ul>
        <li>Create a study schedule covering all subjects</li>
        <li>Focus on NCERT textbooks as primary resource</li>
        <li>Practice previous years' question papers</li>
        <li>Make short notes for quick revision</li>
        <li>Give equal importance to practical work</li>
      </ul>
      
      <p><em>Note: Students should follow the syllabus prescribed by CBSE and consult their teachers for any clarifications.</em></p>
    `,
  },
  {
    id: 'icse-class-12-exam-dates-2027',
    title: 'ICSE Class 12 Board Exam Dates 2027 Announced - Check Complete Timetable',
    category: UpdateCategory.SCHOOL_EDUCATION,
    date: '2026-02-06',
    excerpt: 'Council for the Indian School Certificate Examinations (CISCE) has announced the exam dates for ISC (Class 12) board examinations 2027. Exams will begin from February 15, 2027.',
    stateTags: [],
    body: `
      <h2>ICSE Class 12 (ISC) Board Exam Dates 2027</h2>
      <p>The Council for the Indian School Certificate Examinations (CISCE) has released the complete timetable for ISC (Class 12) board examinations 2027. The exams will be conducted from February 15 to March 30, 2027.</p>
      
      <h3>Exam Schedule Highlights</h3>
      <ul>
        <li>Exam Start Date: February 15, 2027</li>
        <li>Exam End Date: March 30, 2027</li>
        <li>Exam Timing: 2:00 PM to 5:00 PM (for most papers)</li>
        <li>Duration: 3 hours per paper</li>
        <li>Reporting Time: 1:30 PM</li>
      </ul>
      
      <h3>Important Subjects Schedule</h3>
      <ul>
        <li>English: February 15, 2027</li>
        <li>Physics: February 20, 2027</li>
        <li>Chemistry: February 25, 2027</li>
        <li>Mathematics: March 1, 2027</li>
        <li>Biology: March 5, 2027</li>
        <li>Computer Science: March 10, 2027</li>
        <li>Economics: March 15, 2027</li>
      </ul>
      
      <h3>Exam Guidelines</h3>
      <ul>
        <li>Students must carry their admit card and valid ID proof</li>
        <li>Reach the exam center 30 minutes before the exam</li>
        <li>Electronic devices are strictly prohibited</li>
        <li>Use only blue or black pen for writing</li>
        <li>Read instructions on the question paper carefully</li>
      </ul>
      
      <h3>Preparation Tips</h3>
      <ul>
        <li>Create a subject-wise revision timetable</li>
        <li>Focus on important topics and previous years' questions</li>
        <li>Practice writing answers within time limit</li>
        <li>Revise formulas and important definitions daily</li>
        <li>Take care of your health and sleep well</li>
      </ul>
      
      <h3>What to Do Before Exams</h3>
      <p>Download your admit card from the CISCE website at least one week before the exam. Check all details carefully. If you find any error, contact your school immediately. Prepare all necessary stationery items in advance.</p>
      
      <p><em>Disclaimer: Please verify the complete timetable on the official CISCE website. Dates mentioned are indicative and subject to change.</em></p>
    `,
  },
  {
    id: 'state-board-scholarship-scheme-2026',
    title: 'State Board Students: Special Scholarship Scheme for Meritorious Students',
    category: UpdateCategory.SCHOOL_EDUCATION,
    date: '2026-02-05',
    excerpt: 'Various state education boards announce special scholarship schemes for Class 10 and 12 meritorious students. Students scoring above 75% eligible to apply.',
    stateTags: ['bihar', 'uttar-pradesh', 'west-bengal', 'jharkhand'],
    body: `
      <h2>State Board Scholarship Scheme for Meritorious Students 2026</h2>
      <p>Multiple state education boards across India have announced special scholarship schemes to encourage and support meritorious students from Classes 10 and 12. This initiative aims to promote academic excellence and provide financial assistance to deserving students.</p>
      
      <h3>Eligibility Criteria</h3>
      <ul>
        <li>Students must have passed Class 10 or 12 from a recognized state board</li>
        <li>Minimum 75% marks in the board examination</li>
        <li>Family annual income below ₹3 lakh</li>
        <li>Must be continuing education in the next class/course</li>
        <li>Indian citizen and resident of the respective state</li>
      </ul>
      
      <h3>Scholarship Amount</h3>
      <ul>
        <li>Class 10 pass students: ₹10,000 per year for Class 11-12</li>
        <li>Class 12 pass students: ₹15,000 per year for undergraduate courses</li>
        <li>Additional ₹5,000 for students from SC/ST/OBC categories</li>
      </ul>
      
      <h3>Participating States</h3>
      <p>This scheme is currently available in Bihar, Uttar Pradesh, West Bengal, Jharkhand, Madhya Pradesh, Rajasthan, and several other states. Each state has its own application portal and process.</p>
      
      <h3>Application Process</h3>
      <ol>
        <li>Visit your state education board's official website</li>
        <li>Look for "Scholarship" or "Student Welfare" section</li>
        <li>Register with basic details and mobile number</li>
        <li>Fill the application form with academic details</li>
        <li>Upload required documents (mark sheet, income certificate, etc.)</li>
        <li>Submit the form and note down the application number</li>
      </ol>
      
      <h3>Required Documents</h3>
      <ul>
        <li>Class 10 or 12 mark sheet</li>
        <li>Income certificate (issued within last 6 months)</li>
        <li>Caste certificate (if applicable)</li>
        <li>Aadhaar card</li>
        <li>Bank account details (student's own account preferred)</li>
        <li>Passport size photograph</li>
        <li>Admission proof for next class/course</li>
      </ul>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Application Start: February 1, 2026</li>
        <li>Last Date to Apply: March 31, 2026</li>
        <li>Document Verification: April 2026</li>
        <li>Merit List Release: May 2026</li>
        <li>Scholarship Disbursement: June-July 2026</li>
      </ul>
      
      <h3>Selection Process</h3>
      <p>Students will be selected based on their board exam marks. A merit list will be prepared state-wise and category-wise. Preference will be given to students from economically weaker sections and rural areas.</p>
      
      <p><em>Note: This is general information applicable to multiple states. Please check your specific state education board website for exact details, eligibility criteria, and application process.</em></p>
    `,
  },
  
  // Competitive Exams
  {
    id: 'upsc-cse-2027-notification',
    title: 'UPSC Civil Services Exam 2027 Notification Released - Apply Online',
    category: UpdateCategory.COMPETITIVE_EXAMS,
    date: '2026-02-08',
    excerpt: 'Union Public Service Commission has released the official notification for Civil Services Examination 2027. Online applications open from February 10, 2026.',
    stateTags: [],
    body: `
      <h2>UPSC Civil Services Examination 2027</h2>
      <p>The Union Public Service Commission (UPSC) has released the official notification for the Civil Services Examination (CSE) 2027. This exam is conducted to recruit candidates for various prestigious services including IAS, IPS, IFS, and other Group A and Group B services.</p>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Notification Release: February 5, 2026</li>
        <li>Online Application Start: February 10, 2026</li>
        <li>Last Date to Apply: March 10, 2026</li>
        <li>Preliminary Exam: May 25, 2027</li>
        <li>Mains Exam: September 2027</li>
        <li>Interview: February-April 2028</li>
      </ul>
      
      <h3>Eligibility Criteria</h3>
      <p><strong>Educational Qualification:</strong> Bachelor's degree from a recognized university in any discipline.</p>
      
      <p><strong>Age Limit:</strong></p>
      <ul>
        <li>General Category: 21-32 years</li>
        <li>OBC: 21-35 years (3 years relaxation)</li>
        <li>SC/ST: 21-37 years (5 years relaxation)</li>
        <li>PwD: Additional 10 years relaxation</li>
      </ul>
      
      <p><strong>Number of Attempts:</strong></p>
      <ul>
        <li>General: 6 attempts</li>
        <li>OBC: 9 attempts</li>
        <li>SC/ST: Unlimited attempts (till age limit)</li>
      </ul>
      
      <h3>Exam Pattern</h3>
      <p><strong>Preliminary Exam (Objective Type):</strong></p>
      <ul>
        <li>Paper I: General Studies (200 marks)</li>
        <li>Paper II: CSAT - Aptitude Test (200 marks, qualifying)</li>
      </ul>
      
      <p><strong>Mains Exam (Written):</strong></p>
      <ul>
        <li>9 papers (1750 marks total)</li>
        <li>Essay, General Studies (4 papers), Optional Subject (2 papers), Language papers (2)</li>
      </ul>
      
      <p><strong>Interview:</strong> Personality Test (275 marks)</p>
      
      <h3>Application Fee</h3>
      <ul>
        <li>General/OBC: ₹100</li>
        <li>Female/SC/ST/PwD: No fee</li>
      </ul>
      
      <h3>How to Apply</h3>
      <ol>
        <li>Visit the official UPSC website (upsc.gov.in)</li>
        <li>Click on "Online Application for Civil Services Exam 2027"</li>
        <li>Register with basic details and email/mobile</li>
        <li>Fill Part I and Part II of the application form</li>
        <li>Upload photograph and signature (as per specifications)</li>
        <li>Pay the application fee online</li>
        <li>Submit the form and take a printout</li>
      </ol>
      
      <h3>Preparation Tips</h3>
      <ul>
        <li>Start with NCERT books (Class 6-12) for basic concepts</li>
        <li>Read newspapers daily (The Hindu, Indian Express)</li>
        <li>Follow standard reference books for each subject</li>
        <li>Practice previous years' question papers</li>
        <li>Join test series for regular assessment</li>
        <li>Focus on current affairs and government schemes</li>
      </ul>
      
      <p><em>Disclaimer: This is general information. Please read the official UPSC notification carefully for complete details, eligibility criteria, and exam pattern before applying.</em></p>
    `,
  },
  {
    id: 'ssc-cgl-2026-notification',
    title: 'SSC CGL 2026 Notification Out - 15000+ Vacancies Expected',
    category: UpdateCategory.COMPETITIVE_EXAMS,
    date: '2026-02-07',
    excerpt: 'Staff Selection Commission releases notification for Combined Graduate Level Examination 2026. Over 15,000 vacancies expected across various government departments.',
    stateTags: [],
    body: `
      <h2>SSC CGL 2026 Notification</h2>
      <p>The Staff Selection Commission (SSC) has released the official notification for the Combined Graduate Level (CGL) Examination 2026. This exam is conducted to recruit candidates for various Group B and Group C posts in different ministries, departments, and organizations of the Government of India.</p>
      
      <h3>Vacancy Details</h3>
      <p>Approximately 15,000+ vacancies are expected across various posts including:</p>
      <ul>
        <li>Assistant Section Officer (ASO)</li>
        <li>Inspector (Central Excise & Customs)</li>
        <li>Inspector (Preventive Officer)</li>
        <li>Tax Assistant</li>
        <li>Junior Statistical Officer (JSO)</li>
        <li>Auditor</li>
        <li>Accountant</li>
        <li>Upper Division Clerk (UDC)</li>
        <li>Lower Division Clerk (LDC)</li>
      </ul>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Notification Date: February 5, 2026</li>
        <li>Online Application Start: February 10, 2026</li>
        <li>Last Date to Apply: March 12, 2026</li>
        <li>Tier-I Exam: June-July 2026</li>
        <li>Tier-II Exam: September 2026</li>
        <li>Tier-III Exam: November 2026</li>
      </ul>
      
      <h3>Eligibility Criteria</h3>
      <p><strong>Educational Qualification:</strong> Bachelor's degree from a recognized university in any discipline.</p>
      
      <p><strong>Age Limit:</strong></p>
      <ul>
        <li>Minimum: 18 years</li>
        <li>Maximum: 27 years (for most posts)</li>
        <li>Age relaxation: OBC (3 years), SC/ST (5 years), PwD (10 years)</li>
      </ul>
      
      <h3>Exam Pattern</h3>
      <p><strong>Tier-I (Computer Based Test):</strong></p>
      <ul>
        <li>General Intelligence & Reasoning: 25 questions (50 marks)</li>
        <li>General Awareness: 25 questions (50 marks)</li>
        <li>Quantitative Aptitude: 25 questions (50 marks)</li>
        <li>English Comprehension: 25 questions (50 marks)</li>
        <li>Total: 100 questions, 200 marks, 60 minutes</li>
      </ul>
      
      <p><strong>Tier-II (Computer Based Test):</strong></p>
      <ul>
        <li>Paper I: Quantitative Abilities (100 questions, 200 marks, 2 hours)</li>
        <li>Paper II: English Language & Comprehension (200 questions, 200 marks, 2 hours)</li>
        <li>Paper III: Statistics (100 questions, 200 marks, 2 hours) - for JSO posts</li>
        <li>Paper IV: General Studies (Finance & Economics) - for specific posts</li>
      </ul>
      
      <p><strong>Tier-III:</strong> Descriptive Paper (Pen & Paper mode) - Essay/Letter/Application writing</p>
      
      <h3>Application Fee</h3>
      <ul>
        <li>General/OBC: ₹100</li>
        <li>Female/SC/ST/PwD/Ex-Servicemen: No fee</li>
      </ul>
      
      <h3>How to Apply</h3>
      <ol>
        <li>Visit the official SSC website (ssc.nic.in)</li>
        <li>Click on "Apply" for SSC CGL 2026</li>
        <li>Register with basic details (one-time registration if not done before)</li>
        <li>Login and fill the application form</li>
        <li>Upload recent photograph and signature</li>
        <li>Pay application fee online</li>
        <li>Submit and take printout of the application</li>
      </ol>
      
      <h3>Preparation Strategy</h3>
      <ul>
        <li>Understand the exam pattern and syllabus thoroughly</li>
        <li>Focus on speed and accuracy for Tier-I</li>
        <li>Practice quantitative aptitude and reasoning daily</li>
        <li>Improve English vocabulary and grammar</li>
        <li>Stay updated with current affairs (last 6 months)</li>
        <li>Solve previous years' papers and mock tests</li>
      </ul>
      
      <p><em>Note: This information is for guidance only. Please check the official SSC notification for complete details, post-wise eligibility, and exam pattern.</em></p>
    `,
  },
  {
    id: 'neet-ug-2027-registration',
    title: 'NEET UG 2027 Registration Starts - Check Eligibility and Exam Date',
    category: UpdateCategory.COMPETITIVE_EXAMS,
    date: '2026-02-06',
    excerpt: 'National Testing Agency opens registration for NEET UG 2027. Medical aspirants can apply online till March 15, 2026. Exam scheduled for May 4, 2027.',
    stateTags: [],
    body: `
      <h2>NEET UG 2027 Registration</h2>
      <p>The National Testing Agency (NTA) has opened the registration process for the National Eligibility cum Entrance Test (NEET) UG 2027. This exam is the gateway for admission to MBBS, BDS, AYUSH, and other undergraduate medical courses in India.</p>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Registration Start: February 5, 2026</li>
        <li>Last Date to Apply: March 15, 2026</li>
        <li>Correction Window: March 20-25, 2026</li>
        <li>Admit Card Release: April 20, 2027</li>
        <li>Exam Date: May 4, 2027 (Sunday)</li>
        <li>Result Declaration: June 2027</li>
      </ul>
      
      <h3>Eligibility Criteria</h3>
      <p><strong>Educational Qualification:</strong></p>
      <ul>
        <li>Passed Class 12 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English</li>
        <li>Minimum 50% marks in PCB (40% for SC/ST/OBC, 45% for PwD)</li>
        <li>Students appearing in Class 12 in 2027 can also apply</li>
      </ul>
      
      <p><strong>Age Limit:</strong></p>
      <ul>
        <li>Minimum: 17 years as on December 31, 2027</li>
        <li>Maximum: No upper age limit (removed from 2024)</li>
      </ul>
      
      <p><strong>Number of Attempts:</strong> Unlimited (no restriction on number of attempts)</p>
      
      <h3>Exam Pattern</h3>
      <ul>
        <li>Mode: Pen and Paper (Offline)</li>
        <li>Duration: 3 hours 20 minutes</li>
        <li>Total Questions: 200 (180 to be attempted)</li>
        <li>Total Marks: 720</li>
        <li>Marking Scheme: +4 for correct, -1 for incorrect</li>
      </ul>
      
      <p><strong>Subject-wise Distribution:</strong></p>
      <ul>
        <li>Physics: 50 questions (45 to be attempted)</li>
        <li>Chemistry: 50 questions (45 to be attempted)</li>
        <li>Biology (Botany + Zoology): 100 questions (90 to be attempted)</li>
      </ul>
      
      <h3>Application Fee</h3>
      <ul>
        <li>General/OBC: ₹1,700</li>
        <li>SC/ST/PwD/Third Gender: ₹1,000</li>
        <li>Outside India: ₹9,500</li>
      </ul>
      
      <h3>How to Apply</h3>
      <ol>
        <li>Visit the official NEET website (neet.nta.nic.in)</li>
        <li>Click on "New Registration" for NEET UG 2027</li>
        <li>Fill basic details and create login credentials</li>
        <li>Login and complete the application form</li>
        <li>Upload photograph, signature, and other documents</li>
        <li>Pay the application fee online</li>
        <li>Submit the form and download confirmation page</li>
      </ol>
      
      <h3>Documents Required</h3>
      <ul>
        <li>Class 10 certificate (for date of birth proof)</li>
        <li>Class 12 mark sheet or admit card</li>
        <li>Category certificate (if applicable)</li>
        <li>PwD certificate (if applicable)</li>
        <li>Passport size photograph (recent)</li>
        <li>Signature (scanned copy)</li>
        <li>Valid ID proof (Aadhaar/PAN/Passport)</li>
      </ul>
      
      <h3>Preparation Tips</h3>
      <ul>
        <li>Focus on NCERT textbooks (Class 11 and 12) thoroughly</li>
        <li>Understand concepts rather than rote learning</li>
        <li>Practice previous years' NEET question papers</li>
        <li>Take regular mock tests to improve speed and accuracy</li>
        <li>Revise important topics and formulas daily</li>
        <li>Focus more on Biology as it carries maximum weightage</li>
        <li>Maintain a healthy study schedule with breaks</li>
      </ul>
      
      <h3>Exam Day Guidelines</h3>
      <ul>
        <li>Carry admit card and valid photo ID proof</li>
        <li>Reach exam center 90 minutes before the exam</li>
        <li>Carry transparent water bottle (if needed)</li>
        <li>No electronic devices, calculators, or study material allowed</li>
        <li>Follow all COVID-19 safety protocols (if applicable)</li>
      </ul>
      
      <p><em>Disclaimer: This is general information. Please read the official NEET UG 2027 information bulletin carefully for complete details before applying.</em></p>
    `,
  },
  {
    id: 'jee-main-2027-session-1',
    title: 'JEE Main 2027 Session 1 Registration Open - Apply Before March 20',
    category: UpdateCategory.COMPETITIVE_EXAMS,
    date: '2026-02-05',
    excerpt: 'NTA opens registration for JEE Main 2027 Session 1. Engineering aspirants can apply for B.E./B.Tech and B.Arch/B.Planning courses. Exam in April 2027.',
    stateTags: [],
    body: `
      <h2>JEE Main 2027 Session 1 Registration</h2>
      <p>The National Testing Agency (NTA) has started the registration process for Joint Entrance Examination (JEE) Main 2027 Session 1. This exam is conducted for admission to undergraduate engineering programs (B.E./B.Tech) and architecture programs (B.Arch/B.Planning) in NITs, IIITs, and other centrally funded technical institutions.</p>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Registration Start: February 5, 2026</li>
        <li>Last Date to Apply: March 20, 2026</li>
        <li>Correction Window: March 25-28, 2026</li>
        <li>Admit Card Release: April 5, 2027</li>
        <li>Exam Dates: April 15-20, 2027</li>
        <li>Result Declaration: May 2027</li>
      </ul>
      
      <h3>Eligibility Criteria</h3>
      <p><strong>Educational Qualification:</strong></p>
      <ul>
        <li>Passed Class 12 or equivalent with Physics, Mathematics, and Chemistry/Biology/Biotechnology/Technical Vocational Subject</li>
        <li>Minimum 75% marks in Class 12 (65% for SC/ST) or be in top 20 percentile</li>
        <li>Students appearing in Class 12 in 2027 can also apply</li>
      </ul>
      
      <p><strong>Age Limit:</strong> No age limit for appearing in JEE Main. However, age limit may apply for admission to certain institutes.</p>
      
      <p><strong>Number of Attempts:</strong> Maximum 6 attempts (in consecutive years)</p>
      
      <h3>Exam Pattern</h3>
      <p><strong>Paper 1 (B.E./B.Tech):</strong></p>
      <ul>
        <li>Mode: Computer Based Test (CBT)</li>
        <li>Duration: 3 hours</li>
        <li>Total Questions: 90 (75 to be attempted)</li>
        <li>Total Marks: 300</li>
        <li>Subjects: Physics (30 Q), Chemistry (30 Q), Mathematics (30 Q)</li>
        <li>Marking: +4 for correct, -1 for incorrect</li>
      </ul>
      
      <p><strong>Paper 2A (B.Arch):</strong></p>
      <ul>
        <li>Part I: Mathematics (20 Q, 80 marks)</li>
        <li>Part II: Aptitude Test (50 Q, 200 marks)</li>
        <li>Part III: Drawing Test (2 Q, 70 marks) - Pen & Paper</li>
        <li>Duration: 3 hours</li>
      </ul>
      
      <p><strong>Paper 2B (B.Planning):</strong></p>
      <ul>
        <li>Part I: Mathematics (20 Q, 80 marks)</li>
        <li>Part II: Aptitude Test (50 Q, 200 marks)</li>
        <li>Part III: Planning Based Questions (25 Q, 100 marks)</li>
        <li>Duration: 3 hours</li>
      </ul>
      
      <h3>Application Fee</h3>
      <ul>
        <li>General/OBC (One Paper): ₹1,000</li>
        <li>General/OBC (Both Papers): ₹1,800</li>
        <li>SC/ST/PwD/Third Gender (One Paper): ₹500</li>
        <li>SC/ST/PwD/Third Gender (Both Papers): ₹900</li>
      </ul>
      
      <h3>How to Apply</h3>
      <ol>
        <li>Visit the official JEE Main website (jeemain.nta.nic.in)</li>
        <li>Click on "New Registration" for JEE Main 2027</li>
        <li>Fill basic details and generate application number</li>
        <li>Login with application number and password</li>
        <li>Complete the application form (personal, academic, exam center choice)</li>
        <li>Upload photograph, signature, and category certificate</li>
        <li>Pay application fee online</li>
        <li>Submit and download confirmation page</li>
      </ol>
      
      <h3>Documents Required</h3>
      <ul>
        <li>Class 10 certificate (for date of birth)</li>
        <li>Class 12 mark sheet or school certificate</li>
        <li>Category certificate (SC/ST/OBC-NCL/EWS)</li>
        <li>PwD certificate (if applicable)</li>
        <li>Passport size photograph (recent, colored)</li>
        <li>Signature (scanned)</li>
        <li>Valid ID proof (Aadhaar preferred)</li>
      </ul>
      
      <h3>Preparation Strategy</h3>
      <ul>
        <li>Master NCERT textbooks for Class 11 and 12</li>
        <li>Focus on conceptual understanding in Physics, Chemistry, and Mathematics</li>
        <li>Practice numerical problems regularly</li>
        <li>Solve previous years' JEE Main question papers</li>
        <li>Take full-length mock tests to improve time management</li>
        <li>Identify weak areas and work on them</li>
        <li>Revise important formulas and concepts daily</li>
      </ul>
      
      <h3>Important Points</h3>
      <ul>
        <li>JEE Main is conducted twice a year (Session 1 and Session 2)</li>
        <li>Best of two scores will be considered for ranking</li>
        <li>Top 2.5 lakh candidates qualify for JEE Advanced (for IIT admission)</li>
        <li>JEE Main score is also used for admission to NITs, IIITs, and GFTIs</li>
      </ul>
      
      <p><em>Note: This is general information. Please read the official JEE Main information bulletin carefully for complete details before applying.</em></p>
    `,
  },
  {
    id: 'railway-ntpc-2026-notification',
    title: 'Railway NTPC 2026 Notification Expected Soon - 35000+ Vacancies',
    category: UpdateCategory.COMPETITIVE_EXAMS,
    date: '2026-02-04',
    excerpt: 'Railway Recruitment Board expected to release NTPC (Non-Technical Popular Categories) notification soon. Over 35,000 vacancies anticipated across various posts.',
    stateTags: [],
    body: `
      <h2>Railway NTPC 2026 Notification</h2>
      <p>The Railway Recruitment Board (RRB) is expected to release the notification for Non-Technical Popular Categories (NTPC) recruitment 2026 soon. This is one of the largest recruitment drives by Indian Railways, offering opportunities for graduates and 12th pass candidates.</p>
      
      <h3>Expected Vacancy Details</h3>
      <p>Approximately 35,000+ vacancies are expected across various posts including:</p>
      
      <p><strong>Graduate Level Posts:</strong></p>
      <ul>
        <li>Junior Accountant cum Typist</li>
        <li>Senior Clerk cum Typist</li>
        <li>Junior Time Keeper</li>
        <li>Trains Clerk</li>
        <li>Commercial cum Ticket Clerk</li>
        <li>Accounts Clerk cum Typist</li>
      </ul>
      
      <p><strong>12th Pass Level Posts:</strong></p>
      <ul>
        <li>Commercial Apprentice</li>
        <li>Traffic Apprentice</li>
        <li>Goods Guard</li>
        <li>Senior Commercial cum Ticket Clerk</li>
      </ul>
      
      <h3>Expected Important Dates</h3>
      <ul>
        <li>Notification Release: March 2026 (expected)</li>
        <li>Online Application: March-April 2026</li>
        <li>CBT 1 Exam: June-July 2026</li>
        <li>CBT 2 Exam: September-October 2026</li>
        <li>Typing/Skill Test: November-December 2026</li>
      </ul>
      
      <h3>Eligibility Criteria</h3>
      <p><strong>Educational Qualification:</strong></p>
      <ul>
        <li>Graduate Level: Bachelor's degree from recognized university</li>
        <li>12th Pass Level: 10+2 or equivalent from recognized board</li>
      </ul>
      
      <p><strong>Age Limit:</strong></p>
      <ul>
        <li>Minimum: 18 years</li>
        <li>Maximum: 33 years (for most posts)</li>
        <li>Age relaxation: OBC (3 years), SC/ST (5 years), PwD (10 years)</li>
      </ul>
      
      <h3>Expected Exam Pattern</h3>
      <p><strong>CBT 1 (Computer Based Test):</strong></p>
      <ul>
        <li>General Awareness: 40 questions</li>
        <li>Mathematics: 30 questions</li>
        <li>General Intelligence & Reasoning: 30 questions</li>
        <li>Total: 100 questions, 100 marks, 90 minutes</li>
        <li>Negative Marking: 1/3 mark deducted for wrong answer</li>
      </ul>
      
      <p><strong>CBT 2 (For shortlisted candidates):</strong></p>
      <ul>
        <li>General Awareness: 50 questions</li>
        <li>Mathematics: 35 questions</li>
        <li>General Intelligence & Reasoning: 35 questions</li>
        <li>Total: 120 questions, 120 marks, 90 minutes</li>
      </ul>
      
      <p><strong>Typing/Skill Test:</strong> For specific posts requiring typing or computer skills</p>
      
      <h3>Application Fee (Expected)</h3>
      <ul>
        <li>General/OBC: ₹500</li>
        <li>SC/ST/PwD/Female/Transgender/Minorities/Economically Backward Class: ₹250</li>
      </ul>
      
      <h3>How to Apply (When Notification is Released)</h3>
      <ol>
        <li>Visit the official RRB website of your region</li>
        <li>Click on "NTPC 2026 Apply Online"</li>
        <li>Register with basic details</li>
        <li>Login and fill the application form</li>
        <li>Upload photograph and signature</li>
        <li>Pay application fee online</li>
        <li>Submit and save the application number</li>
      </ol>
      
      <h3>Preparation Tips</h3>
      <ul>
        <li>Start with basic mathematics and reasoning concepts</li>
        <li>Focus on current affairs (last 6 months)</li>
        <li>Practice speed and accuracy for CBT</li>
        <li>Solve previous years' RRB NTPC question papers</li>
        <li>Take regular mock tests</li>
        <li>Improve typing speed for posts requiring typing test</li>
        <li>Stay updated with railway-related current affairs</li>
      </ul>
      
      <h3>Important Points to Remember</h3>
      <ul>
        <li>One candidate can apply for only one RRB region</li>
        <li>Multiple applications will lead to rejection</li>
        <li>Medical fitness is mandatory after selection</li>
        <li>Document verification is strict - keep all original documents ready</li>
      </ul>
      
      <p><em>Disclaimer: This information is based on previous recruitment patterns. Please wait for the official notification for confirmed details about vacancies, eligibility, exam pattern, and application process.</em></p>
    `,
  },
  
  // Existing updates (Scholarships, Schemes, Results, Admit Cards)
  {
    id: 'national-scholarship-portal-2026',
    title: 'National Scholarship Portal 2026 - Applications Open',
    category: UpdateCategory.SCHOLARSHIPS,
    date: '2026-02-08',
    excerpt: 'The National Scholarship Portal has opened applications for various central government scholarships for the academic year 2026-27. Students from all states can apply online.',
    stateTags: [],
    body: `
      <h2>About National Scholarship Portal 2026</h2>
      <p>The National Scholarship Portal (NSP) is a one-stop solution for students seeking scholarships from various government schemes. The portal has opened applications for the academic year 2026-27.</p>
      
      <h3>Eligibility Criteria</h3>
      <ul>
        <li>Students must be Indian citizens</li>
        <li>Family income should be below the specified limit (varies by scheme)</li>
        <li>Minimum academic performance requirements apply</li>
        <li>Students should be enrolled in recognized institutions</li>
      </ul>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Application Start Date: February 1, 2026</li>
        <li>Last Date to Apply: March 31, 2026</li>
        <li>Document Verification: April 1-30, 2026</li>
        <li>Results Expected: May 2026</li>
      </ul>
      
      <h3>Required Documents</h3>
      <ul>
        <li>Aadhaar Card</li>
        <li>Income Certificate (issued within last 6 months)</li>
        <li>Previous year mark sheets</li>
        <li>Bank account details (student's own account preferred)</li>
        <li>Caste certificate (if applicable)</li>
        <li>Disability certificate (if applicable)</li>
      </ul>
      
      <h3>How to Apply</h3>
      <p>Students should visit the official National Scholarship Portal website and register using their Aadhaar number. After registration, log in and fill out the application form carefully. Upload all required documents in the specified format and submit the application before the deadline.</p>
      
      <h3>Frequently Asked Questions</h3>
      <p><strong>Q: Can I apply for multiple scholarships?</strong><br>
      A: Yes, eligible students can apply for multiple schemes through the same portal.</p>
      
      <p><strong>Q: What if I don't have an Aadhaar card?</strong><br>
      A: Aadhaar is mandatory for most scholarships. Apply for Aadhaar immediately if you don't have one.</p>
      
      <p><strong>Q: When will the scholarship amount be credited?</strong><br>
      A: After verification and approval, amounts are typically credited within 2-3 months.</p>
      
      <p><em>Note: This is general guidance. Please verify all details on the official NSP website before applying.</em></p>
    `,
  },
  {
    id: 'jharkhand-mukhyamantri-scholarship-2026',
    title: 'Jharkhand Mukhyamantri Protsahan Yojana 2026 - Registration Started',
    category: UpdateCategory.SCHOLARSHIPS,
    date: '2026-02-07',
    excerpt: 'Jharkhand government has launched the Mukhyamantri Protsahan Yojana for meritorious students. Students who scored above 60% in Class 12 can apply for financial assistance.',
    stateTags: ['jharkhand'],
    body: `
      <h2>Jharkhand Mukhyamantri Protsahan Yojana 2026</h2>
      <p>The Government of Jharkhand has announced the Mukhyamantri Protsahan Yojana to encourage and support meritorious students from economically weaker sections.</p>
      
      <h3>Eligibility</h3>
      <ul>
        <li>Must be a permanent resident of Jharkhand</li>
        <li>Scored 60% or above in Class 12 examination</li>
        <li>Family annual income below ₹2.5 lakh</li>
        <li>Currently enrolled in a recognized college or university</li>
      </ul>
      
      <h3>Scholarship Amount</h3>
      <p>Selected students will receive ₹15,000 per year for undergraduate courses and ₹20,000 per year for postgraduate courses.</p>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Registration Opens: February 5, 2026</li>
        <li>Last Date: March 20, 2026</li>
        <li>Merit List: April 15, 2026</li>
      </ul>
      
      <h3>Documents Required</h3>
      <ul>
        <li>Jharkhand Domicile Certificate</li>
        <li>Class 12 Mark Sheet</li>
        <li>Income Certificate</li>
        <li>College Admission Proof</li>
        <li>Bank Account Details</li>
        <li>Aadhaar Card</li>
      </ul>
      
      <h3>Application Process</h3>
      <p>Visit the official Jharkhand E-Kalyan portal, register with your mobile number, fill in personal and academic details, upload documents, and submit the form. Keep the application number for future reference.</p>
      
      <p><em>Disclaimer: Please verify all information on the official government website before applying.</em></p>
    `,
  },
  {
    id: 'pm-kisan-samman-nidhi-2026',
    title: 'PM-KISAN Samman Nidhi - 16th Installment Release Date Announced',
    category: UpdateCategory.SCHEMES,
    date: '2026-02-06',
    excerpt: 'The 16th installment of PM-KISAN scheme will be released in February 2026. Eligible farmers will receive ₹2,000 directly in their bank accounts.',
    stateTags: [],
    body: `
      <h2>PM-KISAN Samman Nidhi 16th Installment</h2>
      <p>The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central government scheme that provides income support to farmer families across India.</p>
      
      <h3>About the Scheme</h3>
      <p>Under this scheme, eligible farmer families receive ₹6,000 per year in three equal installments of ₹2,000 each, directly transferred to their bank accounts.</p>
      
      <h3>16th Installment Details</h3>
      <ul>
        <li>Expected Release Date: February 28, 2026</li>
        <li>Amount: ₹2,000 per eligible farmer</li>
        <li>Transfer Mode: Direct Bank Transfer (DBT)</li>
      </ul>
      
      <h3>Eligibility</h3>
      <ul>
        <li>Small and marginal farmer families</li>
        <li>Landholding up to 2 hectares</li>
        <li>Must have valid Aadhaar linked to bank account</li>
        <li>Land records should be updated</li>
      </ul>
      
      <h3>How to Check Status</h3>
      <p>Farmers can check their payment status on the official PM-KISAN portal by entering their Aadhaar number, mobile number, or account number.</p>
      
      <h3>Common Issues and Solutions</h3>
      <p><strong>Payment Pending:</strong> Ensure Aadhaar is linked to bank account and land records are updated.</p>
      <p><strong>Invalid Bank Details:</strong> Visit your nearest Common Service Center to update bank details.</p>
      
      <p><em>Note: This information is for guidance only. Please check the official PM-KISAN website for accurate details.</em></p>
    `,
  },
  {
    id: 'bihar-board-10th-result-2026',
    title: 'Bihar Board 10th Result 2026 - Expected Date and How to Check',
    category: UpdateCategory.RESULTS,
    date: '2026-02-05',
    excerpt: 'Bihar School Examination Board (BSEB) is expected to announce Class 10 results in March 2026. Students can check results online on the official website.',
    stateTags: ['bihar'],
    body: `
      <h2>Bihar Board 10th Result 2026</h2>
      <p>The Bihar School Examination Board (BSEB) conducts the Class 10 examination every year. The results for 2026 are expected to be announced in March.</p>
      
      <h3>Expected Result Date</h3>
      <p>Based on previous years' patterns, the Bihar Board 10th result 2026 is likely to be declared in the last week of March or first week of April 2026.</p>
      
      <h3>How to Check Results Online</h3>
      <ol>
        <li>Visit the official BSEB website</li>
        <li>Click on the "Result" section</li>
        <li>Select "Class 10 Result 2026"</li>
        <li>Enter your Roll Number and Roll Code</li>
        <li>Click "Submit" to view your result</li>
        <li>Download and save the result for future reference</li>
      </ol>
      
      <h3>Alternative Ways to Check</h3>
      <ul>
        <li>SMS: Send SMS to the designated number (will be announced)</li>
        <li>Mobile App: Download the official BSEB app</li>
        <li>School: Visit your school to collect the mark sheet</li>
      </ul>
      
      <h3>What After Results?</h3>
      <p>After the results are announced, students should collect their original mark sheets from their respective schools. These mark sheets are required for admission to Class 11.</p>
      
      <h3>Compartment Examination</h3>
      <p>Students who fail in one or two subjects may be eligible for compartment examinations. Details will be announced along with the main results.</p>
      
      <p><em>Disclaimer: The dates mentioned are tentative. Please check the official BSEB website for confirmed information.</em></p>
    `,
  },
  {
    id: 'jee-main-2026-admit-card',
    title: 'JEE Main 2026 Session 1 Admit Card Released - Download Now',
    category: UpdateCategory.ADMIT_CARDS,
    date: '2026-02-04',
    excerpt: 'National Testing Agency (NTA) has released JEE Main 2026 Session 1 admit cards. Candidates can download from the official website using application number and date of birth.',
    stateTags: [],
    body: `
      <h2>JEE Main 2026 Session 1 Admit Card</h2>
      <p>The National Testing Agency (NTA) has released the admit cards for JEE Main 2026 Session 1 examination. All registered candidates can now download their hall tickets.</p>
      
      <h3>Examination Details</h3>
      <ul>
        <li>Exam Name: JEE Main 2026 Session 1</li>
        <li>Exam Dates: February 20-28, 2026</li>
        <li>Exam Mode: Computer Based Test (CBT)</li>
        <li>Duration: 3 hours</li>
      </ul>
      
      <h3>How to Download Admit Card</h3>
      <ol>
        <li>Visit the official JEE Main website</li>
        <li>Click on "Download Admit Card" link</li>
        <li>Enter Application Number and Date of Birth</li>
        <li>Enter the security code displayed</li>
        <li>Click "Submit"</li>
        <li>Download and print the admit card</li>
      </ol>
      
      <h3>Important Instructions</h3>
      <ul>
        <li>Carry the admit card to the examination center (printed copy mandatory)</li>
        <li>Bring a valid photo ID proof (Aadhaar/PAN/Driving License/Passport)</li>
        <li>Reach the center at least 1 hour before the exam</li>
        <li>No electronic devices allowed inside the examination hall</li>
        <li>Check all details on the admit card carefully</li>
      </ul>
      
      <h3>What to Do If There's an Error?</h3>
      <p>If you find any discrepancy in your admit card (name, photo, signature, category, etc.), immediately contact NTA through the helpline or email provided on the website.</p>
      
      <h3>Documents to Carry</h3>
      <ul>
        <li>JEE Main 2026 Admit Card (printed)</li>
        <li>Valid Photo ID proof (original)</li>
        <li>Passport size photograph (same as uploaded in application)</li>
        <li>PwD certificate (if applicable)</li>
      </ul>
      
      <p><em>Note: This is general information. Please read all instructions on your admit card and the official website carefully.</em></p>
    `,
  },
  {
    id: 'up-scholarship-2026',
    title: 'UP Scholarship 2026-27 - Pre and Post Matric Applications Open',
    category: UpdateCategory.SCHOLARSHIPS,
    date: '2026-02-03',
    excerpt: 'Uttar Pradesh government has opened online applications for Pre-Matric and Post-Matric scholarships for SC/ST/OBC/Minority students for the academic year 2026-27.',
    stateTags: ['uttar-pradesh'],
    body: `
      <h2>UP Scholarship 2026-27</h2>
      <p>The Social Welfare Department, Government of Uttar Pradesh, invites applications for various scholarship schemes for students belonging to SC, ST, OBC, General Category (EWS), and Minority communities.</p>
      
      <h3>Types of Scholarships</h3>
      <ul>
        <li>Pre-Matric Scholarship (Class 9-10)</li>
        <li>Post-Matric Scholarship (Class 11-12)</li>
        <li>Post-Matric Other State Scholarship</li>
        <li>Post-Matric Intermediate Scholarship</li>
      </ul>
      
      <h3>Eligibility Criteria</h3>
      <ul>
        <li>Student must be a permanent resident of Uttar Pradesh</li>
        <li>Must belong to SC/ST/OBC/Minority/General (EWS) category</li>
        <li>Family annual income should not exceed ₹2 lakh (varies by category)</li>
        <li>Must be studying in a recognized institution in UP or outside UP</li>
        <li>Previous year attendance should be at least 75%</li>
      </ul>
      
      <h3>Important Dates</h3>
      <ul>
        <li>Application Start: February 1, 2026</li>
        <li>Last Date (Fresh): March 31, 2026</li>
        <li>Last Date (Renewal): April 15, 2026</li>
      </ul>
      
      <h3>Required Documents</h3>
      <ul>
        <li>Aadhaar Card</li>
        <li>Income Certificate (current financial year)</li>
        <li>Caste Certificate (SC/ST/OBC)</li>
        <li>Previous year mark sheet</li>
        <li>Current year fee receipt</li>
        <li>Bank passbook (student's account)</li>
        <li>Passport size photograph</li>
      </ul>
      
      <h3>How to Apply</h3>
      <p>Visit the official UP Scholarship portal, register using basic details, log in with credentials, select the appropriate scholarship scheme, fill the application form, upload documents, and submit. Note down the registration number for tracking.</p>
      
      <h3>Scholarship Amount</h3>
      <p>The scholarship amount varies based on the class, course, and category. It ranges from ₹1,200 to ₹5,000 per year for Pre-Matric and up to ₹12,000 per year for Post-Matric courses.</p>
      
      <p><em>Disclaimer: Please verify all details on the official UP Scholarship portal before applying.</em></p>
    `,
  },
  {
    id: 'west-bengal-madhyamik-result-2026',
    title: 'West Bengal Madhyamik Result 2026 - Check Date and Process',
    category: UpdateCategory.RESULTS,
    date: '2026-02-02',
    excerpt: 'West Bengal Board of Secondary Education (WBBSE) will announce Madhyamik (Class 10) results in May 2026. Students can check results online and via SMS.',
    stateTags: ['west-bengal'],
    body: `
      <h2>West Bengal Madhyamik Result 2026</h2>
      <p>The West Bengal Board of Secondary Education (WBBSE) conducts the Madhyamik examination (Class 10) annually. The results for 2026 are expected in May.</p>
      
      <h3>Expected Result Date</h3>
      <p>Based on previous trends, the WBBSE Madhyamik Result 2026 is likely to be declared in the third or fourth week of May 2026.</p>
      
      <h3>How to Check Results</h3>
      <p><strong>Online Method:</strong></p>
      <ol>
        <li>Visit the official WBBSE website</li>
        <li>Click on "Madhyamik Result 2026"</li>
        <li>Enter Roll Number</li>
        <li>Click "Submit"</li>
        <li>View and download your result</li>
      </ol>
      
      <p><strong>SMS Method:</strong></p>
      <p>Type: WB10 [Roll Number] and send to the designated number (will be announced with results)</p>
      
      <h3>Grading System</h3>
      <p>WBBSE follows a grading system. Students receive grades (A+, A, B+, B, C, D, E) instead of marks. The grading is based on the percentage of marks obtained.</p>
      
      <h3>What After Results?</h3>
      <p>After results are declared, students should collect their original mark sheets from their schools. These are required for Class 11 admission. Students should also check the admission schedule for higher secondary schools.</p>
      
      <p><em>Disclaimer: Dates are tentative. Please check the official WBBSE website for confirmed information.</em></p>
    `,
  },
];

// Helper functions
export function getUpdatesByCategory(category: UpdateCategory): UpdateItem[] {
  return seedUpdates.filter((update) => update.category === category);
}

export function getUpdatesByState(stateSlug: string): UpdateItem[] {
  return seedUpdates.filter(
    (update) => update.stateTags && update.stateTags.includes(stateSlug)
  );
}

export function getLatestUpdates(count: number = 6): UpdateItem[] {
  return [...seedUpdates]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getUpdateById(id: string): UpdateItem | undefined {
  return seedUpdates.find((update) => update.id === id);
}

// Get latest updates by category
export function getLatestByCategory(category: UpdateCategory, count: number = 3): UpdateItem[] {
  return getUpdatesByCategory(category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
