const originalQuestions = [
  {
    q: "What is a major limitation of rule-based AI systems?",
    opts: [
      "They cannot process data",
      "They lack flexibility and adaptability",
      "They are only used in agriculture",
      "They require human intervention in all cases"
    ],
    ans: 1
  },
  {
    q: "A chatbot used in Nigerian banking services, like Zenith Bank's Ziva, relies on which AI technique?",
    opts: [
      "Reinforcement Learning",
      "Expert Systems",
      "Natural Language Processing",
      "Decision Trees"
    ],
    ans: 2
  },
  {
    q: "A Nigerian hospital wants to use AI to detect diseases based on medical images, which technology should be used?",
    opts: [
      "Neural Networks",
      "Expert Systems",
      "Rule-Based Systems",
      "Reinforcement Learning"
    ],
    ans: 0
  },
  {
    q: "What is the main ethical concern with AI models in banking?",
    opts: [
      "AI cannot be used for financial decisions",
      "AI models may introduce bias in loan approvals",
      "AI models work without using any data",
      "AI models are 100% error-free"
    ],
    ans: 1
  },
  {
    q: "How do neural networks differ from rule-based systems?",
    opts: [
      "Neural networks are only used in healthcare",
      "Rule-based systems process unstructured data better than neural networks",
      "Neural networks use predefined rules, while rule-based systems learn from data",
      "Neural networks learn patterns from data, while rule-based systems follow predefined rules"
    ],
    ans: 3
  },
  {
    q: "A Nigerian logistics company wants to optimize vehicle load capacity to reduce empty trips. How can AI help?",
    opts: [
      "By using only motorcycles for all deliveries",
      "By analyzing shipment data to maximise load efficiency and consolidate deliveries, reducing wasted space",
      "By randomly loading vehicles",
      "By sending all vehicles empty"
    ],
    ans: 1
  },
  {
    q: "Compare the application of AI in fraud detection for banks versus AI in predictive maintenance for buses. How do they both rely on anomaly detection?",
    opts: [
      "Fraud detection is only for marketing; predictive maintenance is only for sales",
      "They are exactly the same because both use images",
      "Fraud detection spots unusual transaction patterns; predictive maintenance spots unusual sensor readings (e.g., engine vibration) - both identify deviations from normal behaviour",
      "Neither uses anomaly detection"
    ],
    ans: 2
  },
  {
    q: "A Nigerian e-commerce platform (like Jumia) wants to reduce stockouts during festive seasons. How can machine learning help?",
    opts: [
      "By reducing inventory to zero",
      "By analyzing customer purchasing patterns and predicting demand for specific products, enabling timely restocking",
      "By randomly guessing which products will sell",
      "By stopping all sales during festive periods"
    ],
    ans: 1
  },
  {
    q: "Compare the role of AI in sales (identifying leads) versus AI in marketing (personalized ads). Which statement best analyzes their relationship?",
    opts: [
      "Sales AI is only for B2B, marketing AI is only for B2C",
      "They are unrelated and never interact",
      "Both use customer data, but sales AI prioritises leads likely to purchase, while marketing AI tailors content to engage customers; together they create a seamless funnel",
      "Neither requires any data"
    ],
    ans: 2
  },
  {
    q: "Create an AI-based solution to reduce go-slow (traffic jams) in Lagos during morning rush hour. Which combination of technologies from the module would you use?",
    opts: [
      "Using only manual police control without any data",
      "Closing all roads permanently",
      "Real-time traffic monitoring, AI-predicted congestion alerts, dynamic rerouting of public buses, and smart traffic lights that adjust timing based on vehicle density",
      "Adding more traffic lights without any AI"
    ],
    ans: 2
  },
  {
    q: "In a Nigerian hospital with few radiologists, a doctor receives a chest X-ray of a patient with suspected tuberculosis. How can AI assist in diagnosis?",
    opts: [
      "By performing the X-ray procedure automatically",
      "By prescribing medication without human input",
      "By replacing the doctor entirely",
      "By analyzing the image for early signs of infection and flagging suspicious areas"
    ],
    ans: 3
  },
  {
    q: "A Nigerian fintech startup wants to build a chatbot that allows users to send money via WhatsApp. Which AI application described in the module best matches this goal?",
    opts: [
      "Kudi.ai - using AI to facilitate financial transactions through messaging apps",
      "Predictive maintenance for vehicles",
      "Route optimization for delivery trucks",
      "AI for medical imaging"
    ],
    ans: 0
  },
  {
    q: "Evaluate the potential of AI-powered public transportation to boost economic productivity in Ikeja industrial zone. Which outcome is most directly linked?",
    opts: [
      "AI causes more traffic jams",
      "Public transport becomes irrelevant",
      "Smoother movement of workers and goods reduces delays, lowers costs, and increases business efficiency",
      "AI eliminates all jobs in the zone"
    ],
    ans: 2
  },
  {
    q: "Compare the role of AI in sales (e.g., Paystack) versus AI in customer service (chatbots). How do their objectives differ?",
    opts: [
      "Both focus exclusively on reducing costs",
      "Both aim to replace all human workers",
      "Sales AI is only for marketing, while customer service AI is only for fraud detection",
      "Sales AI identifies promising leads and personalises offers; customer service AI provides 24/7 support and answers FAQs"
    ],
    ans: 3
  },
  {
    q: "Analyze why AI-powered drug discovery is particularly important for Nigeria given diseases like HIV and malaria.",
    opts: [
      "Drug discovery is irrelevant to Nigeria",
      "AI only works for rare diseases",
      "AI accelerates the development of new medications, reducing time and cost, which can lead to more effective treatments for prevalent local diseases",
      "Nigeria has no diseases"
    ],
    ans: 2
  },
  {
    q: "A Nigerian agricultural cooperative wants to use AI to predict crop yields. Which industry application from Module 3 is most directly transferable?",
    opts: [
      "AI for customer service chatbots",
      "AI for medical imaging",
      "AI for stock trading predictions",
      "AI for analyzing soil conditions and weather data (similar to fintech pattern recognition)"
    ],
    ans: 3
  },
  {
    q: "Evaluate the statement: \"AI-powered chatbots can completely replace human customer service agents in Nigerian telecom companies.\" Based on the module, which response is most accurate?",
    opts: [
      "Yes, because chatbots can handle all complex emotional issues",
      "No, because chatbots cannot provide any service",
      "Yes, because the module says chatbots eliminate all human roles",
      "No, because chatbots are best for FAQs and simple tasks, but human agents are still needed for complex or sensitive problems"
    ],
    ans: 3
  },
  {
    q: "Design a public transportation safety system for Port Harcourt using AI. What component from the module would be most critical?",
    opts: [
      "Driver behavior monitoring (e.g., Nauto) that detects speeding, distracted driving, and provides real-time alerts",
      "Using only manual logbooks for drivers",
      "Installing more speed bumps without any technology",
      "Removing all traffic rules"
    ],
    ans: 0
  },
  {
    q: "A Nigerian transport agency wants to reduce emissions from public buses. Using AI for sustainability, what is the most effective approach?",
    opts: [
      "Programme AI to recommend optimal speeds and braking points to minimise fuel consumption, and combine with electric autonomous vehicles",
      "Increase the number of diesel buses",
      "Ban all buses from the roads",
      "Remove all traffic lights"
    ],
    ans: 0
  },
  {
    q: "Evaluate the potential of AI-powered personalized treatment for chronic diseases like hypertension in rural Nigeria. What is the most realistic benefit?",
    opts: [
      "AI only works for wealthy urban patients",
      "AI can replace all community health workers",
      "AI can analyze patient data to recommend lifestyle changes and medication adjustments, improving outcomes even with limited doctor access",
      "AI requires expensive infrastructure that rural areas cannot afford, so no benefit is possible"
    ],
    ans: 2
  },
  {
    q: "A Nigerian investment firm wants to use AI to predict stock price movements on the NSE. What kind of data would the AI model need?",
    opts: [
      "Weather forecasts for London",
      "Random numbers from dice rolls",
      "Only the current date",
      "Historical prices, market news, economic indicators, and company performance data"
    ],
    ans: 3
  },
  {
    q: "Analyze the difference between AI in medical imaging for tuberculosis detection versus AI in personalized treatment for diabetes.",
    opts: [
      "Both are identical because they both use patient data",
      "Medical imaging AI interprets visual data (X-rays) for diagnosis; personalized treatment AI analyzes treatment responses to recommend medication adjustments",
      "Medical imaging AI is only for research, not clinical use",
      "Personalized treatment AI cannot be used in Nigeria"
    ],
    ans: 1
  },
  {
    q: "A Nigerian healthcare provider wants to use AI for medical imaging but is concerned about data privacy. What ethical measure should they prioritise?",
    opts: [
      "Share all patient images publicly",
      "Avoid using AI entirely",
      "Ignore all privacy concerns",
      "Obtain patient consent, anonymise data, and ensure compliance with data protection regulations as mentioned in the module"
    ],
    ans: 3
  },
  {
    q: "Compare the use of AI in fraud detection versus risk management in Nigerian banks. Which statement best analyzes their distinct roles?",
    opts: [
      "Risk management is only for marketing, while fraud detection is for customer service",
      "Both functions are identical because they both use transaction data",
      "Fraud detection identifies suspicious real-time activities, while risk management evaluates long-term loan and investment risks",
      "Neither function benefits from machine learning"
    ],
    ans: 2
  },
  {
    q: "Evaluate the feasibility of fully autonomous vehicles in rural Nigeria given the module's challenges. Which factor is the biggest barrier?",
    opts: [
      "Lack of interest from drivers",
      "Too much internet connectivity",
      "Poor road infrastructure, inconsistent signage, and high technology costs",
      "Overabundance of skilled AI technicians"
    ],
    ans: 2
  },
  {
    q: "A Nigerian hospital wants to use AI to predict patient risk for hypertension. What type of data would be most valuable according to the module?",
    opts: [
      "Random numbers",
      "Only the patient's favourite food",
      "Weather data from another country",
      "Patient medical histories, lab results, and lifestyle data"
    ],
    ans: 3
  },
  {
    q: "Analyze why AI-powered route optimization is more effective than traditional static routing for delivery companies in Lagos.",
    opts: [
      "Traditional routing already uses real-time data",
      "AI requires no data inputs",
      "Static routing never changes, while AI adapts to real-time traffic, road conditions, and weather, reducing delays and fuel costs",
      "AI routing is slower and less reliable"
    ],
    ans: 2
  },
  {
    q: "Evaluate the potential impact of deploying autonomous electric vehicles (AVs) in Lagos. Which of the following is the most significant long-term benefit based on the module?",
    opts: [
      "Lower cost of vehicle purchase for all citizens",
      "Immediate elimination of all traffic jams",
      "Complete removal of human drivers from all roads",
      "Reduced air pollution and fuel consumption due to smoother traffic flow and electric power"
    ],
    ans: 3
  },
  {
    q: "A logistics manager in Lagos notices that delivery times vary unpredictably due to traffic. Using AI-powered route optimization, what is the most effective first step to reduce delays?",
    opts: [
      "Train drivers to use paper maps for alternative routes",
      "Analyze real-time traffic data and historical patterns to dynamically reroute drivers",
      "Buy more delivery vehicles to increase capacity",
      "Increase fuel budget to allow longer travel times"
    ],
    ans: 1
  },
  {
    q: "A Nigerian bank notices an increase in fraudulent transactions from foreign accounts. How should they apply AI fraud detection as described in the module?",
    opts: [
      "Implement an AI system that monitors transactions in real-time, flags unusual patterns (e.g., large foreign transfers), and can freeze suspicious activity",
      "Close all customer accounts",
      "Ignore the issue because fraud is unavoidable",
      "Manually check each transaction at the end of the month"
    ],
    ans: 0
  },
  {
    q: "A Nigerian bank wants to use AI for trading on the Nigerian Stock Exchange. What is the primary advantage according to the module?",
    opts: [
      "AI processes large datasets of historical prices, market news, and economic indicators to predict price movements and reduce risk",
      "AI guarantees 100% profit on every trade",
      "AI eliminates all market volatility",
      "AI requires no data to function"
    ],
    ans: 0
  },
  {
    q: "Compare the use of AI in customer service (chatbots) versus AI in sales (lead scoring). How do they both improve customer experience?",
    opts: [
      "Chatbots provide instant support; lead scoring ensures customers receive relevant offers - both reduce friction and increase satisfaction",
      "Chatbots are only for complaints; lead scoring is only for spam",
      "Both annoy customers equally",
      "Neither improves experience"
    ],
    ans: 0
  },
  {
    q: "A Nigerian startup wants to create an AI solution for drug discovery targeting malaria. What step from the module would they take first?",
    opts: [
      "Use AI to analyze vast amounts of medical data and predict which chemical compounds might be effective against malaria",
      "Avoid any data analysis",
      "Ignore all medical data",
      "Only use traditional herbal remedies without AI"
    ],
    ans: 0
  },
  {
    q: "Evaluate the claim: \"AI in healthcare will completely solve the shortage of doctors in Nigeria.\" Based on the module, what is the most balanced conclusion?",
    opts: [
      "AI can replace all doctors immediately",
      "AI acts as a support tool to assist doctors and extend their reach, but cannot fully replace human clinical judgement, especially in complex cases",
      "AI will make the shortage worse",
      "AI has no role in healthcare"
    ],
    ans: 1
  },
  {
    q: "Create an integrated AI strategy for a Nigerian city to improve transportation, healthcare, and finance simultaneously. Which cross-sectoral application from the module would have the broadest impact?",
    opts: [
      "Using AI only for entertainment",
      "Using only one AI tool for all sectors without adaptation",
      "Using AI for real-time traffic management (transportation), AI-assisted diagnosis (healthcare), and AI fraud detection (finance) - all leveraging data analytics and machine learning to enhance efficiency and security",
      "Avoiding AI entirely"
    ],
    ans: 2
  },
  {
    q: "A healthcare manager in Nigeria must decide whether to invest in AI for personalized diabetes treatment. Based on the module, what is the strongest argument for adoption?",
    opts: [
      "AI is cheaper than any existing medication",
      "AI analyzes individual patient responses to treatments and recommends tailored plans, improving outcomes with limited resources",
      "AI eliminates the need for any doctor supervision",
      "AI guarantees a 100% cure for diabetes"
    ],
    ans: 1
  },
  {
    q: "A Nigerian hospital has limited specialists for malaria diagnosis. How can AI act as a support system as described in the module?",
    opts: [
      "By analyzing patient data (symptoms, lab results) to predict malaria risk and assist doctors in making informed decisions",
      "By ignoring lab results",
      "By replacing doctors completely",
      "By charging higher fees for AI use"
    ],
    ans: 0
  },
  {
    q: "A Nigerian e-commerce company notices that customers often abandon their carts. Applying AI marketing techniques from the module, what should they do first?",
    opts: [
      "Use collaborative filtering to recommend products based on browsing history and past purchases",
      "Hire more customer service agents for phone calls",
      "Reduce all product prices by 50%",
      "Stop all online advertising"
    ],
    ans: 0
  },
  {
    q: "Analyze why predictive maintenance is more beneficial for public buses in Kaduna than reactive maintenance.",
    opts: [
      "Predictive maintenance uses AI to detect early warning signs of breakdown, reducing costly emergency repairs and service disruptions",
      "Reactive maintenance never causes delays",
      "Predictive maintenance requires no sensors or data",
      "Reactive maintenance is always cheaper in the long run"
    ],
    ans: 0
  },
  {
    q: "Design a pilot programme for AI-powered public bus tracking in Abuja. Which features from the module should be included?",
    opts: [
      "Only paper timetables that never change",
      "Mobile app with real-time bus locations, estimated arrival times, and dynamic schedule adjustments based on passenger demand",
      "Removing all bus signs",
      "No updates for passengers"
    ],
    ans: 1
  },
  {
    q: "Create a plan to improve passenger experience on Lagos BRT buses using AI. Which two features from the module would you prioritise?",
    opts: [
      "Real-time mobile app tracking of bus locations and dynamic scheduling based on passenger demand",
      "Removing all bus stops and using only paper timetables",
      "Banning mobile phones on buses",
      "Increasing bus fares and reducing routes"
    ],
    ans: 0
  },
  {
    q: "A Nigerian logistics company wants to reduce fuel costs and improve delivery times. Evaluate which AI solution from the module offers the highest return on investment.",
    opts: [
      "Hiring more drivers",
      "Using paper maps for all deliveries",
      "Increasing vehicle speeds regardless of traffic",
      "AI-powered route optimization that avoids traffic and suggests efficient routes in real time"
    ],
    ans: 3
  },
  {
    q: "Compare the challenges of adopting AI in healthcare versus transportation in Nigeria. Which statement correctly analyzes both?",
    opts: [
      "Neither sector faces any barriers",
      "Healthcare has no challenges; transportation has all challenges",
      "Both face identical challenges of high costs and lack of skilled professionals, but healthcare also has ethical concerns about patient data privacy",
      "Transportation only faces cost issues, healthcare only faces privacy issues"
    ],
    ans: 2
  },
  {
    q: "Evaluate the statement: \"AI and ML will make human decision-making obsolete in Nigerian banking.\" Based on the module, which response is correct?",
    opts: [
      "No, because AI cannot process any financial data",
      "No, AI enhances decision-making by providing data-driven insights, but human judgement is still needed for strategy, ethics, and complex cases",
      "Yes, AI will completely replace all bank employees",
      "Yes, because the module says AI eliminates all human roles"
    ],
    ans: 1
  },
  {
    q: "Analyze why high implementation cost is a barrier for AI adoption in Nigerian SMEs but less so for large banks.",
    opts: [
      "Both have identical budgets",
      "Large banks have greater capital and can absorb initial costs, while SMEs may struggle with upfront investment in AI infrastructure and skilled personnel",
      "SMEs have more financial resources than banks",
      "SMEs do not exist in Nigeria"
    ],
    ans: 1
  },
  {
    q: "A Nigerian e-commerce company wants to implement collaborative filtering for product recommendations. What data would they need to collect?",
    opts: [
      "Only customer names",
      "Random guesses",
      "Customer browsing and purchase history to find similar users and suggest items",
      "Only product prices without any history"
    ],
    ans: 2
  },
  {
    q: "Evaluate the ethical concern about AI causing job displacement in Nigeria. Which response best balances progress and social impact?",
    opts: [
      "Force all companies to keep manual processes forever",
      "Ignore job losses because efficiency is more important",
      "Completely ban all AI technologies",
      "Invest in retraining programmes and create new roles in AI maintenance and data analysis alongside automation"
    ],
    ans: 3
  },
{
    q: "How does AI-driven automation impact agriculture in Nigeria?",
    opts: [
      "It automates tasks like planting and harvesting",
      "It reduces productivity in rural areas",
      "It has no significant impact on agriculture",
      "It increases the need for manual labor"
    ],
    ans: 0
  },
  {
    q: "Which environmental issue in Nigeria can ML help monitor?",
    opts: [
      "All of the above",
      "Climate change",
      "Air pollution",
      "Deforestation"
    ],
    ans: 0
  },
  {
    q: "What is the role of sensor networks in environmental monitoring with ML?",
    opts: [
      "To make decisions without human intervention",
      "To create satellite images",
      "To collect data on temperature, humidity, and air quality",
      "To clean up environmental pollution"
    ],
    ans: 2
  },
  {
    q: "How can AI assist in the healthcare sector in Nigeria?",
    opts: [
      "By focusing only on urban healthcare",
      "By making medical decisions without human input",
      "By analyzing medical data for faster disease diagnosis",
      "By replacing doctors in all hospitals"
    ],
    ans: 2
  },
  {
    q: "AI in materials science can help in designing materials for:",
    opts: [
      "Cosmetic products",
      "Car tires only",
      "Renewable energy solutions",
      "Fashion clothing"
    ],
    ans: 2
  },
  {
    q: "What is the primary concern regarding privacy in AI and ML systems?",
    opts: [
      "Data collection and usage",
      "Data storage",
      "Data visualization",
      "Data analysis speed"
    ],
    ans: 0
  },
  {
    q: "How does AI contribute to faster scientific discovery?",
    opts: [
      "By preventing data collection",
      "By replacing scientists in all roles",
      "By making discoveries automatically",
      "By enabling the analysis of large datasets quickly"
    ],
    ans: 3
  },
  {
    q: "What role does encryption play in AI security?",
    opts: [
      "It speeds up data processing",
      "It protects sensitive data by making it unreadable to unauthorized users",
      "It helps with data visualization",
      "It reduces the amount of data needed"
    ],
    ans: 1
  },
  {
    q: "What is the role of AI in materials science?",
    opts: [
      "AI increases the cost of materials",
      "AI designs new drugs",
      "AI creates human-like robots",
      "AI helps predict the behavior of materials under different conditions"
    ],
    ans: 3
  },
  {
    q: "What is a key strategy to mitigate job displacement caused by AI in Nigeria?",
    opts: [
      "Reducing investments in AI technologies",
      "Avoiding AI adoption in key sectors",
      "Implementing upskilling and re-skilling programs",
      "Encouraging manual labor over automation"
    ],
    ans: 2
  },
  {
    q: "Which sector in Nigeria is most affected by AI-powered chatbots?",
    opts: [
      "Agriculture",
      "Customer service",
      "Law enforcement",
      "Transportation"
    ],
    ans: 1
  },
  {
    q: "Which field benefits from AI applications like identifying new drug combinations or predicting molecular behavior?",
    opts: [
      "Biology and Chemistry",
      "Philosophy",
      "Architecture",
      "Fashion Design"
    ],
    ans: 0
  },
  {
    q: "Which of the following is an example of fairness in AI systems in Nigeria?",
    opts: [
      "Designing AI models without auditing for bias",
      "Using an AI model that favors urban populations over rural ones",
      "Ensuring AI systems used for loan approval are equally accessible to men and women from all regions",
      "Implementing AI systems that use only male candidates for technical roles"
    ],
    ans: 2
  },
  {
    q: "Accountability in AI refers to:",
    opts: [
      "Ensuring AI decisions are made without any human intervention",
      "Using AI only in well-regulated environments",
      "Determining who is responsible when an AI system causes harm or makes biased decisions",
      "Making AI systems operate without any bias"
    ],
    ans: 2
  },
  {
    q: "What role does transparency play in AI systems?",
    opts: [
      "Transparency leads to less accountability",
      "Transparency ensures that stakeholders can understand and challenge AI decisions",
      "Transparency allows AI to be completely autonomous",
      "Transparency helps conceal biases in AI decisions"
    ],
    ans: 1
  },
  {
    q: "Which of the following is NOT a method to address bias in AI systems?",
    opts: [
      "Auditing AI models for fairness",
      "Ensuring transparency in algorithm development",
      "Ignoring feedback from affected communities",
      "Using diverse and representative datasets"
    ],
    ans: 2
  },
  {
    q: "How does Machine Learning assist in environmental monitoring?",
    opts: [
      "By analyzing vast datasets quickly and detecting patterns",
      "By collecting environmental data from the atmosphere",
      "By replacing traditional environmental scientists",
      "By controlling weather patterns"
    ],
    ans: 0
  },
  {
    q: "Which of the following is a benefit of personalized medicine powered by AI?",
    opts: [
      "One-size-fits-all treatments for all patients",
      "Increased treatment costs",
      "Slower treatment processes",
      "Treatments tailored to an individual's genetic profile"
    ],
    ans: 3
  },
  {
    q: "How can ML contribute to agriculture in Nigeria?",
    opts: [
      "By reducing the need for weather forecasts",
      "By replacing traditional farming methods",
      "By promoting fast food industries",
      "By predicting droughts and helping with irrigation planning"
    ],
    ans: 3
  },
  {
    q: "How can AI developers ensure that personal data is protected in AI systems?",
    opts: [
      "By ignoring ethical guidelines",
      "By using encryption, secure data storage, and access control mechanisms",
      "By collecting as much data as possible",
      "By sharing user data for research purposes"
    ],
    ans: 1
  },
  {
    q: "What is a major consequence of biased AI systems?",
    opts: [
      "Decreased performance of AI models",
      "Improved transparency in decision-making",
      "Strengthening existing social inequalities",
      "Equal access to opportunities for all groups"
    ],
    ans: 2
  },
  {
    q: "Which of the following is an example of AI being used in environmental science?",
    opts: [
      "Improving retail sales",
      "Generating social media content",
      "Monitoring pollution levels in cities",
      "Predicting stock market trends"
    ],
    ans: 2
  },
  {
    q: "What does fairness in AI refer to?",
    opts: [
      "The ability of AI to make perfect predictions",
      "The ability of AI to make decisions without human input",
      "The ability of AI to be unbiased and make impartial decisions",
      "The transparency of the algorithm used in decision-making"
    ],
    ans: 2
  },
  {
    q: "Why is it important to use diverse datasets in AI development?",
    opts: [
      "To make the system exclusive to a specific group",
      "To increase the speed of data processing",
      "To simplify the algorithm design",
      "To ensure the AI system is trained with a variety of perspectives and experiences"
    ],
    ans: 3
  },
  {
    q: "What is bias in AI systems?",
    opts: [
      "The tendency of AI to favor all groups equally",
      "The randomness in AI decision-making",
      "The ability of AI to make perfect decisions",
      "The systematic error in AI decisions that favors one group over another"
    ],
    ans: 3
  },
  {
    q: "What is one major concern associated with the widespread adoption of AI in Nigeria?",
    opts: [
      "Reduced digital transformation",
      "Improved access to healthcare",
      "Job displacement in various sectors",
      "Increased agricultural output"
    ],
    ans: 2
  },
  {
    q: "What is one challenge in defining fairness in AI systems?",
    opts: [
      "Fairness is easy to measure and quantify",
      "Fairness depends on context and varies across cultures and societies",
      "Fairness is automatically achieved with diverse data",
      "Fairness is universally agreed upon by all stakeholders"
    ],
    ans: 1
  },
  {
    q: "What does ML stand for in the context of AI?",
    opts: [
      "Medical Learning",
      "Machine Learning",
      "Material Learning",
      "Multi-layer Learning"
    ],
    ans: 1
  },
  {
    q: "How does AI contribute to the development of sustainable materials?",
    opts: [
      "By ignoring environmental concerns",
      "By analyzing environmental data and predicting the impact of materials",
      "By increasing the amount of waste generated during material production",
      "By slowing down the research process"
    ],
    ans: 1
  },
  {
    q: "How can Nigerian researchers benefit from global AI-powered collaborations?",
    opts: [
      "By limiting research to local problems only",
      "By focusing only on theoretical research",
      "By accessing international data and conducting virtual experiments",
      "By avoiding partnerships with international research teams"
    ],
    ans: 2
  },
  {
    q: "Which of the following is a potential consequence of a data breach in AI systems?",
    opts: [
      "Improved system performance",
      "Reduced system efficiency",
      "Identity theft and fraud",
      "More accurate predictions"
    ],
    ans: 2
  },
  {
    q: "Which of the following is an example of ML being used in environmental monitoring?",
    opts: [
      "Analyzing satellite images to detect deforestation",
      "Forecasting the weather without using data",
      "Manually tracking forest growth",
      "None of the above"
    ],
    ans: 0
  },
  {
    q: "In the context of AI in research, what does \"data-sharing\" refer to?",
    opts: [
      "Giving up control over research data",
      "Keeping data private",
      "Exchanging scientific data among researchers to advance discoveries",
      "Sharing personal data with everyone"
    ],
    ans: 2
  },
  {
    q: "Why is social responsibility important in AI development?",
    opts: [
      "To prioritize profits over societal impacts",
      "To eliminate all manual labor",
      "To ensure AI benefits are equitably distributed across society",
      "To promote bias in AI decision-making"
    ],
    ans: 2
  },
  {
    q: "What type of data is often used in environmental monitoring with ML?",
    opts: [
      "Satellite imagery",
      "All of the above",
      "Sensor data from air and water quality monitors",
      "Weather reports"
    ],
    ans: 1
  },
  {
    q: "What is the role of Machine Learning in AI-driven scientific research?",
    opts: [
      "To reduce the amount of research data collected",
      "To make decisions without human supervision",
      "To teach computers to learn from data and improve their accuracy",
      "To prevent new scientific discoveries"
    ],
    ans: 2
  },
  {
    q: "What is Machine Learning (ML) as used in environmental monitoring?",
    opts: [
      "A process of manually analyzing data",
      "A software for managing environmental data only",
      "A branch of artificial intelligence that enables computers to learn from data",
      "A type of computer hardware for analysis"
    ],
    ans: 2
  },
  {
    q: "How does ML improve climate modeling?",
    opts: [
      "By making weather predictions less accurate",
      "By reducing the need for climate scientists",
      "By directly controlling the weather",
      "By predicting the future based on historical data"
    ],
    ans: 3
  },
  {
    q: "Which of these is a key application of AI in medicine?",
    opts: [
      "Automating all surgeries",
      "Designing new medical equipment",
      "Writing prescriptions automatically",
      "Diagnosing diseases based on medical data"
    ],
    ans: 3
  },
  {
    q: "What is a key benefit of using AI in drug discovery?",
    opts: [
      "It speeds up the identification of potential drugs",
      "It makes drugs more expensive",
      "It eliminates the need for human researchers",
      "It only works for rare diseases"
    ],
    ans: 0
  },
  {
    q: "Which of the following diseases does AI help in drug discovery for in Nigeria?",
    opts: [
      "Common cold",
      "Diabetes",
      "Cancer",
      "Malaria"
    ],
    ans: 3
  },
  {
    q: "Which of the following is a common AI application in environmental research?",
    opts: [
      "Organizing office schedules",
      "Writing software code",
      "Predicting natural disasters",
      "Designing new cars"
    ],
    ans: 2
  },
  {
    q: "What is the role of AI in predicting drug toxicity?",
    opts: [
      "AI does not impact drug toxicity predictions",
      "AI makes the drug more toxic",
      "AI helps predict how a drug will interact with the human body",
      "AI replaces clinical trials"
    ],
    ans: 2
  },
  {
    q: "Which of the following is a common source of bias in AI systems?",
    opts: [
      "Diverse and inclusive training data",
      "Transparent data usage",
      "Continuous model auditing",
      "Data reflecting historical inequalities"
    ],
    ans: 3
  },
  {
    q: "In drug discovery, AI is used to:",
    opts: [
      "Identify promising drug candidates quickly",
      "Design new medical devices",
      "Replace human doctors",
      "Perform physical experiments in labs"
    ],
    ans: 0
  },
  {
    q: "Which of the following AI systems is most likely to raise security concerns due to the sensitivity of its data?",
    opts: [
      "A weather prediction system",
      "A chess-playing AI",
      "An AI game recommendation system",
      "An AI-powered healthcare diagnostic system"
    ],
    ans: 3
  },
  {
    q: "What is the primary purpose of using deep learning frameworks like TensorFlow and PyTorch?",
    opts: [
      "To write complex algorithms manually",
      "To speed up data collection",
      "To simplify the process of building AI models",
      "To replace human decision-making"
    ],
    ans: 2
  },
  {
    q: "What role can AI play in Nigeria's education system?",
    opts: [
      "Personalizing learning for individual students",
      "Replacing traditional classrooms entirely",
      "Reducing the need for textbooks",
      "Automating teacher evaluations"
    ],
    ans: 0
  },
  {
    q: "What is Keras primarily used for?",
    opts: [
      "Basic data analysis",
      "Deep learning applications",
      "Data visualization",
      "Web development"
    ],
    ans: 1
  },
  {
    q: "What does the integration of AI and IoT (AIoT) allow devices to do?",
    opts: [
      "Minimize electricity consumption",
      "Replace human workers in all sectors",
      "Perform tasks without human intervention",
      "Collect, analyze, and act on data in real-time"
    ],
    ans: 3
  },
  {
    q: "How can AI be used to support sustainable development in Nigeria?",
    opts: [
      "By promoting smarter agriculture, healthcare, and urban planning",
      "By creating digital-only products and services",
      "By replacing manual labor with robots in every industry",
      "By eliminating all traditional industries"
    ],
    ans: 0
  },
  {
    q: "In which of the following industries can TensorFlow and PyTorch be used in Nigeria?",
    opts: [
      "Healthcare for medical imaging",
      "Agriculture for crop disease diagnosis",
      "All of the above",
      "Banking for fraud detection"
    ],
    ans: 2
  },
  {
    q: "Which programming language are both Scikit-Learn and Keras written in?",
    opts: [
      "Java",
      "Python",
      "JavaScript",
      "R"
    ],
    ans: 1
  },
  {
    q: "What is the primary advantage of using open-source libraries like Scikit-Learn and Keras for machine learning?",
    opts: [
      "They are accessible and free, allowing anyone to learn and build AI models",
      "They provide real-time data processing services",
      "They offer free cloud storage for data",
      "They are used only by large corporations"
    ],
    ans: 0
  },
  {
    q: "Which of the following is a feature of Amazon Rekognition?",
    opts: [
      "Image and video analysis",
      "Speech-to-text conversion",
      "Predictive analytics",
      "Text translation"
    ],
    ans: 0
  },
  {
    q: "Which of the following is a primary advantage of TensorFlow?",
    opts: [
      "Flexibility and ease of use",
      "Scalability for large-scale applications",
      "Faster debugging",
      "Better for quick experimentation"
    ],
    ans: 1
  },
  {
    q: "Which of the following industries could be significantly impacted by AI-powered healthcare technologies in Nigeria?",
    opts: [
      "Real estate management",
      "Energy production",
      "Textile manufacturing",
      "Healthcare and diagnostics"
    ],
    ans: 3
  },
  {
    q: "In which sector can AI and ML help optimize traffic flow and reduce congestion?",
    opts: [
      "Healthcare",
      "Manufacturing",
      "Transportation",
      "Education"
    ],
    ans: 2
  },
  {
    q: "Which of these is NOT a feature of Keras?",
    opts: [
      "Creating machine learning models for classification",
      "Preprocessing data",
      "Image recognition",
      "Neural network building"
    ],
    ans: 1
  },
  {
    q: "What type of hardware can cloud platforms like AWS and Google Cloud provide to enhance AI model training?",
    opts: [
      "Regular servers",
      "Central Processing Units (CPUs)",
      "Graphics Processing Units (GPUs)",
      "Hard drives"
    ],
    ans: 2
  },
  {
    q: "Which of the following services in Azure is used for building and deploying AI models?",
    opts: [
      "Google Cloud Vision API",
      "Azure Machine Learning",
      "Azure Cognitive Services",
      "AWS Rekognition"
    ],
    ans: 1
  },
  {
    q: "What is the primary benefit of using cloud platforms like AWS, Google Cloud, and Azure for AI applications?",
    opts: [
      "Limited storage options",
      "Lack of machine learning tools",
      "Scalability and flexibility",
      "High upfront hardware costs"
    ],
    ans: 2
  },
  {
    q: "What is one common use of TensorFlow in real-world applications?",
    opts: [
      "Handwriting analysis",
      "Natural language processing",
      "Image generation",
      "Video streaming"
    ],
    ans: 1
  },
  {
    q: "What is a major concern when implementing AI and ML in decision-making processes?",
    opts: [
      "Decreased system accuracy",
      "Ethical issues and bias",
      "Lack of data",
      "Increased operational costs"
    ],
    ans: 1
  },
  {
    q: "What is one potential benefit of AIoT in agriculture in Nigeria?",
    opts: [
      "Higher unemployment in the agriculture sector",
      "Reduced demand for AI professionals",
      "Increased crop yields through smarter irrigation and weather prediction",
      "Decreased use of mobile phones in rural areas"
    ],
    ans: 2
  },
  {
    q: "What is one potential disadvantage of AI and ML in the workplace?",
    opts: [
      "Enhanced job security for workers",
      "Increased job opportunities",
      "Job displacement due to automation",
      "Improved employee productivity"
    ],
    ans: 2
  },
  {
    q: "In which of the following industries can AI-powered cloud platforms provide significant benefits, especially in Nigeria?",
    opts: [
      "Fintech",
      "Agriculture",
      "Healthcare",
      "All of the above"
    ],
    ans: 3
  },
  {
    q: "Which of the following Google Cloud services is primarily used for natural language processing (NLP)?",
    opts: [
      "Google Cloud Natural Language API",
      "Amazon Polly",
      "Google Cloud Vision API",
      "Azure Cognitive Services"
    ],
    ans: 0
  },
  {
    q: "Which of the following AI applications could improve educational experiences?",
    opts: [
      "AI-created teacher evaluations",
      "Automated textbook printing",
      "AI-powered class scheduling",
      "Personalized learning based on student progress"
    ],
    ans: 3
  },
  {
    q: "Which framework would you likely use if you need a deep learning model for quick experimentation?",
    opts: [
      "Both are equally good for experimentation",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn"
    ],
    ans: 2
  },
  {
    q: "Which of the following challenges is most associated with using AI-powered cloud platforms in Nigeria?",
    opts: [
      "High-quality user support",
      "Data security concerns and privacy issues",
      "Unlimited access to cloud resources",
      "Easy integration with local systems"
    ],
    ans: 1
  },
  {
    q: "What potential problem could arise from the use of AI in decision-making systems, such as recruitment or lending?",
    opts: [
      "Increased transparency in operations",
      "Over-automation of tasks",
      "Reinforcement of bias and discrimination",
      "More personalized services"
    ],
    ans: 2
  },
  {
    q: "What is one of the main advantages of AI in drug discovery?",
    opts: [
      "Increasing drug side effects",
      "Reducing the time and cost of research",
      "Replacing traditional medicines",
      "Eliminating the need for human researchers"
    ],
    ans: 1
  },
  {
    q: "Which of the following is an example of Generative AI?",
    opts: [
      "AI systems for weather forecasting",
      "Automated vehicle navigation systems",
      "AI-powered chatbots",
      "AI models that generate text, images, and videos"
    ],
    ans: 3
  },
  {
    q: "How can Generative AI benefit Nigeria's creative industries?",
    opts: [
      "By replacing traditional industries",
      "By generating creative content like scripts and animations",
      "By improving traffic management systems",
      "By automating manual labor"
    ],
    ans: 1
  },
  {
    q: "What is the main advantage of using pre-built AI services like Azure Cognitive Services or Google Cloud Vision API?",
    opts: [
      "They can be easily integrated into applications without building AI models from scratch",
      "They require no programming skills",
      "They are limited to image recognition only",
      "They cannot scale with demand"
    ],
    ans: 0
  },
  {
    q: "What type of model is typically built using Scikit-Learn?",
    opts: [
      "Generative adversarial networks",
      "Decision trees, support vector machines, and random forests",
      "Recurrent neural networks",
      "Convolutional neural networks"
    ],
    ans: 1
  },
  {
    q: "Which of the following machine learning models can be implemented using Scikit-Learn?",
    opts: [
      "Linear regression",
      "Convolutional neural networks",
      "Generative adversarial networks",
      "Deep reinforcement learning models"
    ],
    ans: 0
  },
  {
    q: "Which deep learning framework is known for being more research-friendly and flexible?",
    opts: [
      "PyTorch",
      "Scikit-learn",
      "TensorFlow",
      "Keras"
    ],
    ans: 0
  },
  {
    q: "AIoT refers to the combination of which two technologies?",
    opts: [
      "Artificial Intelligence and Internet of Things",
      "Automated Intelligence and Open Technologies",
      "Automated Intelligence and Internet of Things",
      "Artificial Intelligence and Open Technologies"
    ],
    ans: 0
  },
  {
    q: "Which company developed TensorFlow?",
    opts: [
      "Google",
      "IBM",
      "Microsoft",
      "Facebook"
    ],
    ans: 0
  },
  {
    q: "How can AI and ML improve business operations?",
    opts: [
      "By replacing human workers in every task",
      "By reducing the need for customer feedback",
      "By creating products automatically",
      "By predicting market trends and improving decision-making"
    ],
    ans: 3
  },
  {
    q: "Which framework is known for having easier integration with Python code?",
    opts: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Both TensorFlow and PyTorch"
    ],
    ans: 1
  },
  {
    q: "Which of the following is a primary function of Scikit-Learn?",
    opts: [
      "Image processing",
      "Building deep learning models",
      "Classification, regression, and clustering",
      "Natural language processing"
    ],
    ans: 2
  },
  {
    q: "Which of the following is a significant challenge to the widespread adoption of AI in Nigeria?",
    opts: [
      "Low levels of technological infrastructure and education in rural areas",
      "The lack of ethical guidelines for AI development",
      "Excessive use of AI in the public sector",
      "Overabundance of skilled AI professionals"
    ],
    ans: 0
  },
  {
    q: "Which of the following is NOT a potential application of AI and ML in healthcare?",
    opts: [
      "Human heart surgery",
      "Early disease detection",
      "Personalized treatment plans",
      "Robot-assisted surgeries"
    ],
    ans: 0
  },
  {
    q: "What ethical concern is associated with AI and ML in data analysis?",
    opts: [
      "Excessive data storage",
      "Data transparency and privacy issues",
      "Slow data processing speeds",
      "Lack of data accuracy"
    ],
    ans: 1
  },
  {
    q: "Which sector in Nigeria could benefit from AI-driven automation in customer service?",
    opts: [
      "Retail and Banking",
      "Transportation",
      "Construction",
      "Manufacturing"
    ],
    ans: 0
  },
  {
    q: "What makes Scikit-Learn and Keras ideal for students?",
    opts: [
      "They are paid libraries",
      "They require high-powered computing systems",
      "They are only available for professionals",
      "They are open-source and free to use"
    ],
    ans: 3
  },
  {
    q: "Which deep learning framework is built on top of Keras for more advanced model development?",
    opts: [
      "TensorFlow",
      "OpenCV",
      "PyTorch",
      "Scikit-learn"
    ],
    ans: 0
  },
  {
    q: "How does AI contribute to improved diagnostics in healthcare?",
    opts: [
      "By eliminating the need for hospitals",
      "By replacing all human doctors",
      "By providing free medical services to all",
      "By analyzing medical images and identifying diseases"
    ],
    ans: 3
  },
  {
    q: "Which of the following is NOT a feature of PyTorch?",
    opts: [
      "Strong research support",
      "Large-scale deployment",
      "Dynamic computation graph",
      "Ease of debugging"
    ],
    ans: 1
  },
  {
    q: "Which deep learning framework is often used for deployment in mobile applications?",
    opts: [
      "Both TensorFlow and PyTorch",
      "PyTorch",
      "TensorFlow",
      "Keras"
    ],
    ans: 2
  },
  {
    q: "Which of the following is a service provided by Amazon Web Services (AWS) for building and deploying machine learning models?",
    opts: [
      "Google Cloud Vision API",
      "Google AI Platform",
      "Amazon SageMaker",
      "Azure Machine Learning"
    ],
    ans: 2
  },
  {
    q: "Which cloud platform provides the Tensor Processing Units (TPUs) for accelerating machine learning tasks?",
    opts: [
      "AWS",
      "IBM Cloud",
      "Azure",
      "Google Cloud"
    ],
    ans: 3
  },
  {
    q: "Which AI-powered technology could help in predicting traffic patterns for Nigerian cities like Lagos?",
    opts: [
      "AI traffic management systems",
      "AI video editing tools",
      "AI-driven chatbots",
      "AI language translation systems"
    ],
    ans: 0
  },
  {
    q: "Create an AI-driven predictive asset management model for public hospital equipment (e.g., X-ray machines, incubators) across Nigeria. What telemetry signals would flag immediate maintenance needs?",
    opts: [
      "Replacing highly complex imaging components on a fixed monthly schedule without checking performance logs",
      "Operational duty cycle tracking, power grid voltage surge history, internal component temperature logging, cooling fan vibration telemetry, automated technical team dispatch rules",
      "Running medical equipment continuously until it breaks down mid-procedure before calling a technician",
      "Tracking only the date of equipment purchase while ignoring daily operational stress data"
    ],
    ans: 1
  },
  {
    q: "Create an AI-powered real estate valuation assistant for banks in Nigeria to instantly assess the market worth of collateral properties. What spatial and historical variables are crucial?",
    opts: [
      "Reviewing only the exterior color and architectural style of the building",
      "Proximity to major commercial hubs, historical neighborhood price appreciation curves, infrastructure development indicators, land title registration status checks, ML hedonic pricing models",
      "Setting property values based entirely on the owner's original purchase price receipt",
      "Assuming all properties located within the same state have an identical per-square-meter value"
    ],
    ans: 1
  },
  {
    q: "Create an AI-powered vocational skill-matching platform for informal youth apprenticeship programs (e.g., the Igbo Apprenticeship System - Igba Boi). What matching parameters would ensure optimal mentor-mentee compatibility?",
    opts: [
      "Allocating apprentices to merchants using a simple randomized lottery system without reviewing trade interests",
      "Mentee regional geographic origin, career trade interest profiles, localized merchant business scale metrics, core basic literacy assessment tracking, behavioral compatibility scoring",
      "Forcing all apprentices to relocate to the capital city before matching them with any trade business owner",
      "Matching apprentices with business mentors purely based on the chronological date of registration on the app"
    ],
    ans: 1
  },
  {
    q: "Create an AI-based system for Nigerian hair salons to recommend hairstyles based on face shape and hair texture using computer vision. What personalization and virtual try-on would you include?",
    opts: [
      "Requiring clients to submit 3D laser head scans taken at a professional medical imaging facility",
      "Recommending hairstyles randomly using an unweighted circular wheel-spinning game in the salon app",
      "Offering a single standard traditional hairstyle catalog choice to all customers uniformly",
      "Face shape detection, hair texture analysis, style database matching, virtual try-on, customer preference learning"
    ],
    ans: 3
  },
  {
    q: "Create an AI-powered automated resume matching tool for specialized tech roles within the Nigerian banking sector. How would you design the engine to prioritize actual technical capabilities over formal certificates?",
    opts: [
      "Relying entirely on the candidate's university name to filter applications automatically",
      "Sorting resumes based on the font style and total document layout design complexity",
      "Screening out any candidate who lacks a first-class degree certificate from a federal university",
      "GitHub repository code quality parsing, hackathon participation metrics, core skill keyword proximity evaluation, anonymized work history matching, bias control audits"
    ],
    ans: 3
  },
  {
    q: "Design an AI-based system to optimize parcel distribution for a logistics company using a combination of delivery vans and foot couriers in highly dense Nigerian market clusters. What parameters should the allocation engine solve for?",
    opts: [
      "Core van drop-off hubs optimization, package weight-to-distance courier allocation algorithms, localized pedestrian walkway mapping, real-time delivery status sync loops",
      "Sequencing package sorting based exclusively on the total volumetric dimensions of the boxes",
      "Directing foot couriers to walk along major highways to deliver packages between distant suburbs",
      "Using delivery vans for all narrow-alley deliveries regardless of gridlock traffic levels"
    ],
    ans: 0
  },
  {
    q: "Design an AIoT smart water quality network for commercial fish farming estates in Nigeria. What automated triggers would ensure ecosystem stability?",
    opts: [
      "Draining the fish ponds entirely whenever a single weather pattern changes",
      "Checking water toxicity parameters manually using chemical test strips once a quarter",
      "Adding chemical treatments to the fish ponds on a rigid weekly calendar routine without measuring water metrics",
      "Continuous pH level parsing, ammonia concentration tracking, water temperature logging, automated fresh-water pump actuation triggers, emergency mobile alerts"
    ],
    ans: 3
  },
  {
    q: "Design an AIoT smart monitoring system for poultry farms in Nigeria to optimize broiler health and reduce mortality rates. What environmental controls would you automate?",
    opts: [
      "Chicken coop temperature sensor arrays, ammonia gas level trackers, automated ventilation fan actuation, variable illumination controls, early disease sound anomaly audio models",
      "Leaving coop windows open permanently regardless of external weather changes or predator risks",
      "Flooding the chicken coops with artificial light 24 hours a day without break to force continuous feeding",
      "Checking the poultry house temperature manually using a handheld thermometer once a week"
    ],
    ans: 0
  },
  {
    q: "Design an AI-based routing engine for a healthcare delivery platform utilizing commercial delivery drones and motorcycle riders to distribute emergency medical supplies in Nigeria. What optimization criteria must the allocation algorithm solve for?",
    opts: [
      "Medical order urgency level indexing, package weight dimensional allocation, drone battery range modeling, terrain road condition alerts, weather flight risk integration",
      "Sending motorcycle riders on long-distance interstate routes during severe downpour flood conditions",
      "Sequencing delivery tracking numbers based on the alphabetical listing of the receiving clinic's name",
      "Deploying delivery drones for all long-distance heavy cargo distribution regardless of wind battery drain rates"
    ],
    ans: 0
  },
  {
    q: "Create an AI-driven predictive logistics asset allocation model for national vaccination distribution campaigns across Nigeria. What tracking telemetry would prevent vaccine storage spoilage?",
    opts: [
      "Tracking the total volume of distributed vaccine vials exclusively while ignoring storage temperature data streams",
      "Replacing solar-powered cold storage units on a rigid annual calendar loop without reviewing operational logs",
      "Continuous cold-box temperature logging, vehicle transit delay prediction, geographic cellular signal coverage maps, regional power grid availability tracking, backup ice-pack depletion forecasting",
      "Distributing highly temperature-sensitive vaccines in uninsulated cargo vans across long-distance rural roads"
    ],
    ans: 2
  },
  {
    q: "Create a Generative AI content moderation system customized for localized social media platforms popular among Nigerian youth. What linguistic markers must it accurately flag?",
    opts: [
      "Any comment that uses non-standard abbreviations or emojis frequently",
      "Flagging all posts written in Pidgin English as inherently suspicious or low-quality",
      "Localized cyberbullying code words, ethnic hate speech variants, regional financial scam phrasing structures, contextual slang interpretation, escalation routing models",
      "Restricting moderation strictly to formal English curse words found in Western standard dictionaries"
    ],
    ans: 2
  },
  {
    q: "Create an AI-based system for Nigerian fitness trainers to generate personalized workout plans based on client goals, injuries, and available equipment. What constraint satisfaction and progressive overload would you use?",
    opts: [
      "Forcing all clients to train using heavy gym machinery while ignoring home-based workout variations",
      "Goal type (weight loss, muscle gain, rehab), injury restrictions, equipment availability, progressive overload algorithm, adaptive difficulty",
      "Assigning daily exercise tasks using a simple randomized lottery selector tool in the fitness app",
      "Delivering identical generic workout training routines to all clients regardless of physical fitness levels"
    ],
    ans: 1
  },
  {
    q: "Create an AI-driven public warning platform for flash flood events in low-lying urban settlements across Nigeria. What sensor infrastructure and telemetry models would you deploy?",
    opts: [
      "Broadcasting flood warnings exclusively via high-speed internet web applications",
      "River headwater telemetry levels, urban drainage flow rate monitors, satellite cloud burst forecasting, instant multi-channel push warnings (USSD, mass SMS, sirens)",
      "Assuming flash floods cannot be predicted and focusing entirely on post-disaster cleanups",
      "Sending physical emergency response trucks to inspect drainage ditches after water levels peak"
    ],
    ans: 1
  },
  {
    q: "Create an AI-powered real estate price estimator for commercial properties along major transportation corridors in Nigeria. What infrastructure variables should the regression model prioritize?",
    opts: [
      "Assuming commercial real estate prices double every 12 months in all locations uniformly",
      "The total number of trees planted on the property site boundary exclusively",
      "Road lane expansion metrics, proximity to mass transit rail stations, local commercial zoning laws, neighborhood vehicle traffic volume logs, historical land lease appreciations",
      "Relying entirely on unverified price quotes listed on informal social media groups"
    ],
    ans: 2
  },
  {
    q: "Create an AI-powered agricultural credit scoring model for microfinance institutions supporting smallholder maize farmers in Nigeria. What spatial and transaction datasets would you fuse?",
    opts: [
      "Generating credit scores by referencing international commodity trading prices while ignoring local harvest metrics",
      "Mandating that all rural maize farmers submit a three-year audited corporate tax balance sheet document",
      "Farm boundary spatial NDVI tracking, historical rainfall deviation grids, mobile money wallet cash flow aggregates, localized crop market price trends, peer group validation indicators",
      "Evaluating the credit application based entirely on the farmer's family lineage status within the local community"
    ],
    ans: 2
  },
  {
    q: "Create a Generative AI language translation engine dedicated to translating educational science materials into indigenous Nigerian languages for primary schools. What conceptual alignment layers are mandatory?",
    opts: [
      "Translating abstract scientific terms into literal everyday words using generic text tools without validation",
      "Restricting all translated text to a maximum length of three words per sentence to match child reading speeds",
      "Substituting complex scientific concepts with traditional folklore stories completely to simplify the text",
      "Contextual terminology synthesis, local cultural analogy mapping, pedagogical clarity verification loops, multi-dialect validation sets, curriculum expert review integrations"
    ],
    ans: 3
  },
  {
    q: "Design an AI-powered system for Nigerian property managers to predict maintenance issues (e.g., plumbing, electrical) before they occur. What sensor data and predictive models would you use?",
    opts: [
      "Water flow sensors, electrical load monitoring, historical failure patterns, ML prediction, automated work order generation",
      "Waiting for a plumbing pipe to burst completely before contacting any plumbing technician team",
      "Charging tenants a uniform unmetered maintenance fee monthly while ignoring building asset health data",
      "Dynamic pressure checking, thermal overload warning logs, historical failure patterns, automated work order triggers"
    ],
    ans: 0
  },
  {
    q: "Design an AI-based predictive model for public health authorities in Nigeria to forecast cholera outbreaks during the rainy season. What multi-sector data points would you ingest?",
    opts: [
      "Assuming cholera outbreaks occur randomly with no correlation to environmental factors",
      "Tracking regional air temperature exclusively, while ignoring water and sanitation metrics",
      "Flooding topography satellite maps, localized clean water access statistics, population density metrics, hospital diarrhea case reporting spikes, historical rainfall trends",
      "Launching public health investigations only after an entire city becomes infected"
    ],
    ans: 2
  },
  {
    q: "Create an AI-based demand prediction platform for a ride-hailing company operating a fleet of tricycles (keke napeps) in a dense Nigerian city. What real-time spatial indicators would optimize vehicle positioning?",
    opts: [
      "Restricting vehicle positioning adjustments strictly to a uniform geographical grid layout regardless of traffic",
      "Directing tricycle operators to drive around streets randomly hoping to spot passengers on corners",
      "Localized mobile app open rates, sudden weather changes (rain radar), neighborhood market closing times, local calendar events, historical peak-hour trip maps",
      "Forcing all fleet vehicles to park at a central depot station until a customer places a formal phone call"
    ],
    ans: 2
  },
  {
    q: "Design a smart grid load forecasting engine for a corporate industrial estate in Nigeria utilizing solar arrays and gas turbine generation. What power variables must the system balance?",
    opts: [
      "Real-time factory machine start-up peak load surges, solar irradiance variability forecasts, gas turbine thermal ramp rates, optimal battery storage state-of-charge tracking",
      "Keeping gas turbines running at maximum capacity 24/7 regardless of actual factory power usage",
      "Adjusting industrial power distribution based on manual voltage dials in the control room",
      "Forcing all factories to operate only during peak sunlight hours to avoid using gas turbines entirely"
    ],
    ans: 0
  },
  {
    q: "Design an AI-based system for a logistics company to optimize package delivery sequences using commercial motorcycles (okadas) in highly dense Nigerian urban zones. What parameters should the routing engine solve for?",
    opts: [
      "Fixed grid routing that ignores traffic directions and street layout constraints",
      "Directing riders to travel only on major expressways while avoiding inner-city paths entirely",
      "Sequencing deliveries alphabetically by the customer's first name",
      "Street-level lane narrowness constraints, localized traffic congestion patterns, customer drop-off time windows, real-time fuel efficiency route alternatives"
    ],
    ans: 3
  },
  {
    q: "Design an AIoT smart climate automation system for commercial greenhouse farms in Nigeria to maximize tomato yields. What physical parameters would you dynamically actuate?",
    opts: [
      "Keeping greenhouse ventilation windows closed permanently regardless of internal humidity or heat build-up",
      "Checking greenhouse environmental conditions manually using an analogue wall thermometer once a day",
      "Internal temperature sensor grids, relative humidity tracking, automated misting nozzle triggers, motorized shade cloth actuation, soil nutrient drip irrigation scheduling models",
      "Activating water misting systems continuously 24 hours a day to keep greenhouse plants completely soaked"
    ],
    ans: 2
  },
  {
    q: "Create an AI-powered automated code-review assistant for software development teams in Nigerian fintech startups. What specific security vulnerability checks must it run?",
    opts: [
      "API key hardcoding detection, SQL injection pattern matching, encryption standard validation, payment gateway integration flaw mapping, compliance checks",
      "Flagging code that contains local language commentary or variable names",
      "Auto-rejecting any code file that exceeds 100 lines of text length",
      "Ensuring all database queries execute at exactly the same speed regardless of complexity"
    ],
    ans: 0
  },
  {
    q: "Design a computer vision system for automated defect sorting and quality control of locally manufactured clay building bricks in Nigeria. What surface structural features must the model identify?",
    opts: [
      "Hand-testing the strength of every single brick by hitting them with a metal hammer manually",
      "Rejecting all bricks that possess any minor dust particles on their exterior surface after firing",
      "Sorting bricks based entirely on their color shading variance under natural sunlight",
      "Surface micro-crack segmentation, dimensional edge straightness analysis, structural cavity volumetric checking, foreign stone inclusion identification models"
    ],
    ans: 3
  },
  {
    q: "Design a computer vision framework for automated quality sorting and defect segmentation of locally processed palm oil fruit bunches in Nigeria. What surface visual attributes must the deep learning model evaluate?",
    opts: [
      "Sorting fruit bunches based entirely on the total physical length of the stalk stem bundle",
      "Weighing the fruit bunches on a basic mechanical scale and sorting them by mass categories exclusively",
      "Fruit color maturity classification, loose fruit detach ratio tracking, surface mold/fungal patch segmentation, foreign matter identification metrics",
      "Rejecting all palm oil fruit bunches that possess any minor natural dust particles on their outer skin"
    ],
    ans: 2
  },
  {
    q: "Design an AIoT environmental monitoring network to trace methane gas emissions around municipal landfill sites in major Nigerian cities. What data architecture would support compliance audits?",
    opts: [
      "Geo-tagged gas sensor mesh-networks, atmospheric wind diffusion modeling, historical daily emission tracking, automated threshold violation logging, regulatory agency data streams",
      "Completely covering landfill sites with plastic sheets to trap gases without measuring emissions",
      "Relying on citizen complaints regarding landfill odors to gauge methane concentration levels",
      "Inspecting landfill boundaries manually with handheld gas meters once every six months"
    ],
    ans: 0
  },
  {
    q: "Design an AIoT monitoring platform to track oil bunkering and illegal tap intrusions along remote overland petroleum pipelines in Nigeria. What high-frequency sensor streams would support rapid location tracking?",
    opts: [
      "Distributed acoustic fiber-optic sensing, pipeline transient pressure wave modeling, valve flow rate discrepancy matching, automated surveillance drone launch triggers",
      "Sending a security patrol team to walk along thousands of kilometers of pipeline on foot once a month",
      "Shutting down overland pipeline distribution permanently and transporting all fuel via standard road trucks",
      "Monitoring only the fuel levels of delivery trucks at the final distribution depot station point"
    ],
    ans: 0
  },
  {
    q: "Create an AI-powered agricultural loan risk assessment engine for commercial banks funding rice farmers in Nigeria. What environmental and operational variables are critical?",
    opts: [
      "Farmland historic flood inundation maps, satellite-derived soil organic carbon index, localized irrigation access status, farmer past credit repayment frequency, crop yield regression models",
      "Evaluating the loan application based entirely on the farmer's personal political party affiliations",
      "Insisting that smallholder farmers provide urban real estate deeds as collateral before reviewing any farm data",
      "Setting loan risk parameters using global rice trade statistics while ignoring local production metrics"
    ],
    ans: 0
  },
  {
    q: "Design an AIoT framework to track and mitigate gas flaring compliance violations in oil production fields across southern Nigeria. What verification streams would support regulatory auditing?",
    opts: [
      "Banning all petroleum production operations instantly without analyzing economic or technical energy constraints",
      "Sending a human auditor to look at flare stacks visually from a distance once a year",
      "Flare stack thermal imaging camera streams, satellite radiant heat anomaly tracking, localized gas combustion telemetry meters, automated compliance report logging, real-time regulatory dashboards",
      "Relying on self-reported flaring estimation sheets submitted by oil companies on paper annually"
    ],
    ans: 2
  },
  {
    q: "Design a computer vision system for automated crowd density tracking and emergency bottleneck detection at major stadium event exits in Nigeria. What behavioral cues must the network analyze?",
    opts: [
      "Turning off stadium lights immediately after an event finishes to encourage people to leave quickly",
      "Counting the number of people wearing team jersey colors near the exit gates",
      "Pedestrian counter-flow velocity analysis, spatial crowd compactness metrics, escape route obstacle identification, automated directional exit lighting triggers",
      "Requiring ticketing staff to manually count every individual passing through turnstiles during an emergency"
    ],
    ans: 2
  },
  {
    q: "Create an AI-driven public alert framework for tracking and forecasting dust storms (harmattan) across northern Nigerian airports. What telemetry networks and dissemination modules would you implement?",
    opts: [
      "Air particulate concentration sensor grids, horizontal visibility telemetry matching, weather satellite dust tracking, automated airport tower text alerts, flight schedule optimization inputs",
      "Issuing safety warnings via physical newspapers published three days after a dust storm passes",
      "Broadcasting visibility warnings exclusively via high-definition corporate web video channels",
      "Ignoring air visibility data unless a dust storm causes multiple flight diversions consecutively"
    ],
    ans: 0
  },
  {
    q: "Design a smart grid demand-side management AI for a private energy distribution company operating an industrial estate grid in Nigeria. What operational load curves must the system balance?",
    opts: [
      "Adjusting industrial power voltage levels manually using physical switches during peak usage hours",
      "Running industrial backup diesel generators at full capacity continuously regardless of factory demand drops",
      "Peak machine operation power demands, solar array generation forecasting models, battery energy storage optimization algorithms, dynamic time-of-use tariff pricing triggers",
      "Forcing all commercial estate tenants to maintain a fixed, unvarying electricity consumption rate 24/7"
    ],
    ans: 2
  },
  {
    q: "Create a Generative AI tool for local language subtitle generation for the Nigerian film industry (Nollywood). What contextual translation capabilities must the system possess?",
    opts: [
      "Replacing all local cultural references with generic Western pop-culture equivalents",
      "Translating dialogue literally word-for-word using a basic standard dictionary",
      "Outputting subtitles exclusively in formal British English regardless of the film's target audience",
      "Cultural idiom mapping, Pidgin English contextual decoding, multi-speaker accent normalization, subtitle timing sync automation, localized humor equivalence models"
    ],
    ans: 3
  }
];

