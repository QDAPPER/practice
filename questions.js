const originalQuestions = [
  {
    q: "The root word of 'technology' is derived from which language?",
    opts: ["Latin", "Greek", "French", "German"],
    ans: 1
  },
  {
    q: "The term 'evolution' originates from the Latin word meaning:",
    opts: ["Revolution", "Innovation", "Unrolling", "Automation"],
    ans: 2
  },
  {
    q: "The First Industrial Revolution was primarily powered by:",
    opts: ["Electricity", "Steam power", "Nuclear energy", "Solar energy"],
    ans: 1
  },
  {
    q: "The Second Industrial Revolution is strongly associated with:",
    opts: ["Digital computers", "Steam engines", "Electrical power", "Artificial intelligence"],
    ans: 2
  },
  {
    q: "The Third Industrial Revolution is also called the:",
    opts: ["Mechanical Revolution", "Digital Revolution", "Energy Revolution", "Agricultural Revolution"],
    ans: 1
  },
  {
    q: "The Fourth Industrial Revolution (IR 4.0) was popularized by:",
    opts: ["Alan Turing", "Bill Gates", "Klaus Schwab", "Elon Musk"],
    ans: 2
  },
  {
    q: "Data is best defined as:",
    opts: ["Processed information", "Organized facts", "Unprocessed facts and figures", "Final business reports"],
    ans: 2
  },
  {
    q: "Which of the following is a Boolean data type value?",
    opts: ["1", "3.14", "TRUE", "\"Data\""],
    ans: 2
  },
  {
    q: "Structured data typically follows:",
    opts: ["Random format", "Tabular format", "Audio format", "Binary-only format"],
    ans: 1
  },
  {
    q: "Metadata is best described as:",
    opts: ["Processed data", "Data about data", "Raw data", "Encrypted data"],
    ans: 1
  },
  {
    q: "Why did the Industrial Revolution begin in Britain?",
    opts: ["Availability of nuclear power", "Agricultural productivity increase", "Internet expansion", "Blockchain adoption"],
    ans: 1
  },
  {
    q: "Emerging technologies are typically characterized by:",
    opts: ["Being outdated", "Having no social impact", "Creating significant economic or social impact", "Being purely theoretical"],
    ans: 2
  },
  {
    q: "The shift from analog to digital electronics occurred during:",
    opts: ["IR 1.0", "IR 2.0", "IR 3.0", "IR 4.0"],
    ans: 2
  },
  {
    q: "Semi-structured data differs from structured data because it:",
    opts: ["Has no format", "Has tags but no rigid schema", "Is always numeric", "Cannot be processed"],
    ans: 1
  },
  {
    q: "Human-Computer Interaction (HCI) primarily focuses on:",
    opts: ["Hardware manufacturing", "Improving user-system interaction", "Database storage", "Network topology"],
    ans: 1
  },
  {
    q: "A computer is called programmable because it:",
    opts: ["Contains a battery", "Has hardware", "Executes stored instructions", "Connects to the internet"],
    ans: 2
  },
  {
    q: "Data processing cycle consists of:",
    opts: ["Store, Delete, Encrypt", "Input, Process, Output", "Scan, Print, Archive", "Code, Debug, Deploy"],
    ans: 1
  },
  {
    q: "IoT devices are major contributors to:",
    opts: ["Manual systems", "Big data generation", "Paper documentation", "Analog systems"],
    ans: 1
  },
  {
    q: "The quaternary industry primarily focuses on:",
    opts: ["Farming", "Manufacturing", "Research and Development", "Retail"],
    ans: 2
  },
  {
    q: "AI in smartphones is an example of:",
    opts: ["IR 2.0", "IR 1.0", "IR 4.0", "Agricultural Revolution"],
    ans: 2
  },
  {
    q: "A company uses barcode scanners to track inventory automatically. This illustrates:",
    opts: ["Manual data logging", "Data acquisition", "Data deletion", "Data encryption"],
    ans: 1
  },
  {
    q: "JSON is best categorized as:",
    opts: ["Structured data", "Semi-structured data", "Unstructured data", "Metadata"],
    ans: 1
  },
  {
    q: "A CNC machine controlled via software represents:",
    opts: ["IR 2.0", "Cyber-physical system", "Agricultural automation", "Manual production"],
    ans: 1
  },
  {
    q: "A chatbot that responds to customer queries uses:",
    opts: ["Steam engines", "Artificial Intelligence", "Telegraph", "Mechanical relays"],
    ans: 1
  },
  {
    q: "Converting monthly sales records into summary reports represents:",
    opts: ["Data acquisition", "Data processing", "Data deletion", "Data encryption"],
    ans: 1
  },
  {
    q: "Deploying edge computing reduces:",
    opts: ["Electricity usage", "Latency", "Programming complexity", "Data storage needs"],
    ans: 1
  },
  {
    q: "A system predicting user preferences using past purchase data applies:",
    opts: ["Data mining", "Manual processing", "Steam logic", "Telegraph networks"],
    ans: 0
  },
  {
    q: "Implementing IoT sensors in agriculture supports:",
    opts: ["IR 1.0", "Smart farming", "Manual tracking", "Primary industry elimination"],
    ans: 1
  },
  {
    q: "Using metadata to filter image files by location demonstrates:",
    opts: ["Data visualization", "Data structuring", "Data indexing", "Data encryption"],
    ans: 2
  },
  {
    q: "Cloud computing primarily enables:",
    opts: ["Local-only storage", "Distributed access to resources", "Analog storage", "Mechanical computing"],
    ans: 1
  },
  {
    q: "The main difference between IR 3.0 and IR 4.0 is:",
    opts: ["Use of steam power", "Introduction of electricity", "Integration of AI and smart systems", "Agricultural focus"],
    ans: 2
  },
  {
    q: "Which scenario best illustrates unstructured data?",
    opts: ["SQL database", "Excel sheet", "Audio recording", "Relational table"],
    ans: 2
  },
  {
    q: "A failure in data curation most likely results in:",
    opts: ["Faster processing", "High data quality", "Poor decision-making", "Increased automation"],
    ans: 2
  },
  {
    q: "A business that ignores big data analytics risks:",
    opts: ["Over-optimization", "Competitive disadvantage", "Increased profits", "Better insights"],
    ans: 1
  },
  {
    q: "Compared to structured data, unstructured data is harder to analyze because:",
    opts: ["It lacks format consistency", "It is encrypted", "It is smaller", "It is always numeric"],
    ans: 0
  },
  {
    q: "Designing a smart factory integrating IoT, AI, and robotics exemplifies:",
    opts: ["IR 2.0", "IR 3.0", "IR 4.0 transformation", "Agricultural reform"],
    ans: 2
  },
  {
    q: "Combining cloud computing and big data analytics to improve healthcare outcomes represents:",
    opts: ["Digital regression", "Technological stagnation", "Integrated innovation", "Manual processing"],
    ans: 2
  },
  {
    q: "Developing a new HCI model that integrates gesture recognition requires:",
    opts: ["Only hardware expertise", "Cognitive psychology and computer science integration", "Steam mechanics", "Telegraph systems"],
    ans: 1
  },
  {
    q: "A government must choose between investing in AI research or traditional manufacturing. From a long-term innovation perspective, AI is preferable because it:",
    opts: ["Requires no skills", "Aligns with IR 4.0 global trends", "Eliminates industries", "Reduces education"],
    ans: 1
  },
  {
    q: "The most strategic reason data is called the 'new oil' is because it:",
    opts: ["Is physically extracted", "Drives economic and technological transformation", "Is renewable energy", "Replaces electricity"],
    ans: 1
  },
  {
    q: "Which invention is associated with IR 1.0?",
    opts: ["Telephone", "Steam Engine", "Internet", "Artificial Intelligence"],
    ans: 1
  },
  {
    q: "The Second Industrial Revolution is also called the:",
    opts: ["Digital Revolution", "Technological Revolution", "Steam Revolution", "Agricultural Revolution"],
    ans: 1
  },
  {
    q: "Which of the following is an example of a tertiary industry?",
    opts: ["Mining", "Steel production", "Teaching", "Farming"],
    ans: 2
  },
  {
    q: "Which data type stores whole numbers?",
    opts: ["float", "char", "int", "string"],
    ans: 2
  },
  {
    q: "XML is classified as:",
    opts: ["Structured data", "Semi-structured data", "Unstructured data", "Metadata"],
    ans: 1
  },
  {
    q: "Which device executes software instructions?",
    opts: ["Memory", "Microprocessor", "Router", "Switch"],
    ans: 1
  },
  {
    q: "A router is primarily used for:",
    opts: ["Data storage", "Instruction execution", "Network communication", "Graphic design"],
    ans: 2
  },
  {
    q: "Big data is mainly characterized by:",
    opts: ["Small size", "Limited complexity", "High volume and velocity", "Manual processing"],
    ans: 2
  },
  {
    q: "The Agricultural Revolution contributed to IR by:",
    opts: ["Reducing literacy", "Increasing food production", "Eliminating trade", "Stopping innovation"],
    ans: 1
  },
  {
    q: "AI-powered autonomous vehicles are typical of:",
    opts: ["IR 2.0", "IR 3.0", "IR 4.0", "IR 1.0"],
    ans: 2
  },
  {
    q: "Why is structured data easier to analyze?",
    opts: ["It contains audio files", "It follows a predefined model", "It lacks format", "It is encrypted"],
    ans: 1
  },
  {
    q: "Data becomes information when it is:",
    opts: ["Deleted", "Randomized", "Processed and interpreted", "Stored"],
    ans: 2
  },
  {
    q: "Cyber-physical systems combine:",
    opts: ["Manual tools and farming", "Physical systems and computational control", "Paper and printing", "Steam and coal only"],
    ans: 1
  },
  {
    q: "HCI aims to:",
    opts: ["Increase hardware size", "Improve system-user interaction", "Eliminate software", "Replace networks"],
    ans: 1
  },
  {
    q: "Edge computing improves system performance mainly by:",
    opts: ["Increasing data duplication", "Reducing processing distance", "Eliminating servers", "Removing IoT devices"],
    ans: 1
  },
  {
    q: "The primary industry focuses on:",
    opts: ["Research", "Services", "Raw material extraction", "Marketing"],
    ans: 2
  },
  {
    q: "Floating-point numbers are used to represent:",
    opts: ["Whole numbers", "Boolean values", "Real numbers", "Characters"],
    ans: 2
  },
  {
    q: "Metadata improves big data systems by:",
    opts: ["Increasing ambiguity", "Providing contextual information", "Deleting redundant data", "Encrypting files"],
    ans: 1
  },
  {
    q: "Data curation ensures data is:",
    opts: ["Random", "Disorganized", "High-quality and reusable", "Deleted quickly"],
    ans: 2
  },
  {
    q: "The telegraph significantly improved:",
    opts: ["Transportation", "Communication", "Mining", "Agriculture"],
    ans: 1
  },
  {
    q: "A company migrating storage to cloud servers is leveraging:",
    opts: ["IR 1.0", "Steam automation", "Cloud computing", "Manual processing"],
    ans: 2
  },
  {
    q: "A system using machine learning to detect fraud is an example of:",
    opts: ["Data deletion", "Data analysis", "Data compression", "Data replication"],
    ans: 1
  },
  {
    q: "Using JSON APIs to exchange data between systems demonstrates:",
    opts: ["Structured rigid schema", "Semi-structured data exchange", "Unstructured communication", "Analog processing"],
    ans: 1
  },
  {
    q: "An IoT-enabled smart home adjusts temperature automatically based on sensors. This reflects:",
    opts: ["IR 2.0", "Cyber-physical integration", "Manual override", "Agricultural automation"],
    ans: 1
  },
  {
    q: "A manager using dashboards to analyze monthly trends is performing:",
    opts: ["Data encryption", "Data acquisition", "Data visualization and analysis", "Data deletion"],
    ans: 2
  },
  {
    q: "Replacing manual assembly lines with programmable robots illustrates:",
    opts: ["Regression", "Digital transformation", "Steam power revival", "Analog shift"],
    ans: 1
  },
  {
    q: "Implementing blockchain for secure transactions supports:",
    opts: ["Centralized manipulation", "Transparent distributed records", "Manual logs", "Steam communication"],
    ans: 1
  },
  {
    q: "A mobile banking app using fingerprint recognition applies:",
    opts: ["HCI principles", "Steam technology", "Telegraphy", "Primary industry"],
    ans: 0
  },
  {
    q: "Training an AI model using large datasets requires strong knowledge in:",
    opts: ["Agriculture", "Statistics and linear algebra", "Mining", "Textile production"],
    ans: 1
  },
  {
    q: "Automating payroll through enterprise software represents:",
    opts: ["Data processing", "Data deletion", "Data ignorance", "Data mining"],
    ans: 0
  },
  {
    q: "The main distinction between IR 2.0 and IR 3.0 is:",
    opts: ["Use of electricity vs. digital electronics", "Steam vs. coal", "Farming vs. mining", "Manual vs. handwritten records"],
    ans: 0
  },
  {
    q: "A failure in network infrastructure most directly affects:",
    opts: ["Data visualization", "Data transmission", "Data interpretation", "Data curation"],
    ans: 1
  },
  {
    q: "Compared to IR 1.0, IR 4.0 emphasizes:",
    opts: ["Manual labor", "Intelligent automation", "Textile focus", "Steam engines"],
    ans: 1
  },
  {
    q: "Semi-structured data requires different tools than structured data because it:",
    opts: ["Has inconsistent hierarchy", "Is always numeric", "Is stored in tables", "Has no metadata"],
    ans: 0
  },
  {
    q: "The biggest risk of poor data governance in emerging technologies is:",
    opts: ["Faster innovation", "Ethical and security breaches", "Reduced automation", "Smaller datasets"],
    ans: 1
  },
  {
    q: "Designing a smart transportation system integrating IoT sensors, AI, and cloud analytics demonstrates:",
    opts: ["Isolated innovation", "Cross-disciplinary technological synthesis", "Manual engineering", "IR 1.0 focus"],
    ans: 1
  },
  {
    q: "Creating a startup that combines blockchain and IoT for supply chain tracking represents:",
    opts: ["Traditional industry", "Innovation ecosystem integration", "Agricultural revolution", "Telegraph improvement"],
    ans: 1
  },
  {
    q: "Developing a big data platform that integrates structured, semi-structured, and unstructured data requires:",
    opts: ["Single storage format", "Multi-model database architecture", "Analog storage", "Manual indexing"],
    ans: 1
  },
  {
    q: "Investing in AI-driven research over fossil-fuel-based technologies is justified because it:",
    opts: ["Eliminates employment", "Aligns with sustainable digital economies", "Reduces automation", "Avoids globalization"],
    ans: 1
  },
  {
    q: "The most critical success factor for IR 4.0 implementation in developing countries is:",
    opts: ["Ignoring digital literacy", "Strong digital infrastructure and policy support", "Eliminating education", "Avoiding globalization"],
    ans: 1
  },
  {
    q: "The factory system became prominent during:",
    opts: ["IR 4.0", "IR 3.0", "IR 1.0", "IR 2.0"],
    ans: 2
  },
  {
    q: "Which invention improved long-distance communication during IR 2.0?",
    opts: ["Steam engine", "Telegraph", "CNC machine", "Blockchain"],
    ans: 1
  },
  {
    q: "A Boolean data type can store:",
    opts: ["Letters", "Decimal numbers", "True or False", "Multiple characters"],
    ans: 2
  },
  {
    q: "A string data type stores:",
    opts: ["Only numbers", "Single bit", "Combination of characters", "Machine code"],
    ans: 2
  },
  {
    q: "Which of the following is an example of unstructured data?",
    opts: ["SQL table", "Excel sheet", "Video file", "CSV file"],
    ans: 2
  },
  {
    q: "The term IR 4.0 was introduced in:",
    opts: ["1950", "2005", "2016", "1980"],
    ans: 2
  },
  {
    q: "Which industry category does IT research belong to?",
    opts: ["Primary", "Secondary", "Tertiary", "Quaternary"],
    ans: 3
  },
  {
    q: "Which device category stores random information?",
    opts: ["Network", "Memory", "Router", "Switch"],
    ans: 1
  },
  {
    q: "CPLD and FPGA are examples of:",
    opts: ["Storage drives", "Programmable devices", "Network cables", "Operating systems"],
    ans: 1
  },
  {
    q: "Which is NOT part of the data processing cycle?",
    opts: ["Input", "Output", "Processing", "Encryption"],
    ans: 3
  },
  {
    q: "The shift from rural to urban living during IR 1.0 occurred mainly because:",
    opts: ["Farming increased", "Factories required labor", "Internet expanded", "AI automation began"],
    ans: 1
  },
  {
    q: "Data science differs from traditional statistics because it:",
    opts: ["Ignores programming", "Integrates algorithms and computing systems", "Avoids large datasets", "Focuses only on theory"],
    ans: 1
  },
  {
    q: "Semi-structured data like JSON includes:",
    opts: ["Strict relational schema", "Tags and hierarchical structure", "Only numeric values", "No metadata"],
    ans: 1
  },
  {
    q: "Data curation ensures data is preserved for:",
    opts: ["Immediate deletion", "Long-term usability", "Manual handling", "Redundancy"],
    ans: 1
  },
  {
    q: "IoT devices contribute to big data because they:",
    opts: ["Reduce storage", "Generate continuous data streams", "Eliminate networks", "Work offline only"],
    ans: 1
  },
  {
    q: "A microprocessor primarily performs:",
    opts: ["Data storage", "Instruction execution", "Network routing", "Power supply"],
    ans: 1
  },
  {
    q: "Edge computing processes data:",
    opts: ["Only in the cloud", "Near the data source", "In manual registers", "On paper"],
    ans: 1
  },
  {
    q: "The key driver of IR 3.0 was:",
    opts: ["Steam", "Electricity", "Digital electronics", "Agriculture"],
    ans: 2
  },
  {
    q: "Artificial Intelligence in smartphones enhances:",
    opts: ["Manual dialing", "User experience personalization", "Steam communication", "Coal production"],
    ans: 1
  },
  {
    q: "Big data analytics helps organizations to:",
    opts: ["Avoid decisions", "Improve evidence-based decisions", "Reduce automation", "Eliminate competition"],
    ans: 1
  },
  {
    q: "A hospital using predictive analytics to forecast patient admissions is applying:",
    opts: ["Data deletion", "Data analysis", "Data encryption", "Data curation only"],
    ans: 1
  },
  {
    q: "A smart traffic system using sensors and cloud processing demonstrates:",
    opts: ["IR 1.0", "Isolated computing", "Cyber-physical system", "Manual signaling"],
    ans: 2
  },
  {
    q: "Storing customer data in a relational database is an example of:",
    opts: ["Structured data management", "Unstructured storage", "Analog storage", "Paper-based logging"],
    ans: 0
  },
  {
    q: "An organization adopting DevOps practices aims to:",
    opts: ["Separate development and operations", "Integrate development and operations", "Eliminate automation", "Reduce collaboration"],
    ans: 1
  },
  {
    q: "Using RPA to automate invoice processing illustrates:",
    opts: ["Manual accounting", "Robotic Process Automation", "Steam accounting", "Agricultural automation"],
    ans: 1
  },
  {
    q: "Deploying AI chatbots reduces:",
    opts: ["User satisfaction", "Response time", "Digital interaction", "Data generation"],
    ans: 1
  },
  {
    q: "Encrypting data before cloud storage enhances:",
    opts: ["Data redundancy", "Data security", "Data duplication", "Data deletion"],
    ans: 1
  },
  {
    q: "A company analyzing social media posts for sentiment is handling:",
    opts: ["Structured data only", "Unstructured text data", "Boolean data", "Floating-point data"],
    ans: 1
  },
  {
    q: "A data warehouse primarily supports:",
    opts: ["Real-time gaming", "Analytical reporting", "Steam engines", "Manual storage"],
    ans: 1
  },
  {
    q: "Integrating AI with IoT devices in manufacturing increases:",
    opts: ["Manual supervision", "Predictive maintenance capability", "Coal usage", "Factory downtime"],
    ans: 1
  },
  {
    q: "The transformation from IR 2.0 to IR 3.0 reflects a shift from:",
    opts: ["Steam to electricity", "Electricity to digitalization", "Agriculture to mining", "Manual to steam"],
    ans: 1
  },
  {
    q: "An organization ignoring metadata risks:",
    opts: ["Better indexing", "Reduced data discoverability", "Improved analytics", "Stronger governance"],
    ans: 1
  },
  {
    q: "Big data challenges mainly involve:",
    opts: ["Low storage needs", "Infrastructure scalability", "Manual indexing", "Limited processing"],
    ans: 1
  },
  {
    q: "A poorly designed HCI system can lead to:",
    opts: ["Increased productivity", "User frustration and errors", "Lower system cost", "Better efficiency"],
    ans: 1
  },
  {
    q: "Compared to IR 1.0, IR 4.0 has greater emphasis on:",
    opts: ["Manual production", "Smart automation", "Coal mining", "Textile weaving"],
    ans: 1
  },
  {
    q: "Developing an AI-powered healthcare diagnostic platform integrating big data requires:",
    opts: ["Single-discipline expertise", "Multidisciplinary collaboration", "Steam systems", "Manual analysis"],
    ans: 1
  },
  {
    q: "Designing a digital twin for a manufacturing plant involves:",
    opts: ["Physical-only monitoring", "Real-time virtual modeling", "Steam replication", "Paper documentation"],
    ans: 1
  },
  {
    q: "Creating a blockchain-based voting system primarily addresses:",
    opts: ["Manual errors", "Transparency and trust", "Steam delays", "Textile shortages"],
    ans: 1
  },
  {
    q: "When evaluating emerging technologies for national development, the most critical factor is:",
    opts: ["Popularity", "Long-term socio-economic impact", "Marketing appeal", "Short-term cost only"],
    ans: 1
  },
  {
    q: "The sustainability of IR 4.0 depends largely on:",
    opts: ["Ignoring cybersecurity", "Ethical governance and data protection", "Eliminating innovation", "Manual operations"],
    ans: 1
  },
  {
    q: "The Congress of Vienna was associated with events following:",
    opts: ["American Revolution", "French Revolution", "Chinese Revolution", "Industrial Revolution"],
    ans: 1
  },
  {
    q: "The term 'cyber-physical system' refers to:",
    opts: ["Manual machine operation", "Computer-controlled physical processes", "Steam-powered tools", "Agricultural devices"],
    ans: 1
  },
  {
    q: "Which is an example of a Service Enabling Device (SED)?",
    opts: ["Steam engine", "Router", "Cotton gin", "Sewing machine"],
    ans: 1
  },
  {
    q: "The primary purpose of a modem is to:",
    opts: ["Store data", "Execute programs", "Transmit data over communication lines", "Print documents"],
    ans: 2
  },
  {
    q: "A data warehouse is mainly used for:",
    opts: ["Gaming", "Transaction processing only", "Analytical reporting", "Steam calculations"],
    ans: 2
  },
  {
    q: "The quaternary industry is heavily knowledge-based and focuses on:",
    opts: ["Farming", "Manufacturing", "Research and development", "Fishing"],
    ans: 2
  },
  {
    q: "One key feature of IR 2.0 was:",
    opts: ["Machine learning", "Electricity adoption", "Steam power", "Digital logic circuits"],
    ans: 1
  },
  {
    q: "Which programming data type stores textual data?",
    opts: ["int", "float", "string", "bool"],
    ans: 2
  },
  {
    q: "Big Data solutions frequently rely on:",
    opts: ["Manual storage", "Metadata indexing", "Steam networks", "Telegraph systems"],
    ans: 1
  },
  {
    q: "Augmented Reality (AR) enhances:",
    opts: ["Physical world with digital elements", "Steam engines", "Coal mining", "Textile weaving"],
    ans: 0
  },
  {
    q: "The American Industrial Revolution expanded manufacturing through:",
    opts: ["Steam only", "Electricity and mass production", "Agriculture", "Manual labor only"],
    ans: 1
  },
  {
    q: "Unstructured data poses challenges because it:",
    opts: ["Fits relational tables", "Lacks predefined schema", "Is always numeric", "Is highly organized"],
    ans: 1
  },
  {
    q: "The goal of data analysis is to:",
    opts: ["Delete information", "Extract meaningful insights", "Randomize datasets", "Reduce storage"],
    ans: 1
  },
  {
    q: "AI is considered transformative because it:",
    opts: ["Automates intelligent decision-making", "Increases manual labor", "Eliminates networks", "Avoids data"],
    ans: 0
  },
  {
    q: "Edge computing complements cloud computing by:",
    opts: ["Increasing latency", "Processing data closer to the source", "Removing networks", "Eliminating IoT"],
    ans: 1
  },
  {
    q: "Data value chain begins with:",
    opts: ["Analysis", "Visualization", "Acquisition", "Reporting"],
    ans: 2
  },
  {
    q: "Human factors in HCI focus on:",
    opts: ["Hardware cost", "Human capabilities and limitations", "Coal production", "Steam engines"],
    ans: 1
  },
  {
    q: "Blockchain ensures integrity by:",
    opts: ["Central authority control", "Immutable distributed ledger", "Manual verification", "Paper backup"],
    ans: 1
  },
  {
    q: "Smart and autonomous systems are typical of:",
    opts: ["IR 1.0", "IR 2.0", "IR 3.0", "IR 4.0"],
    ans: 3
  },
  {
    q: "Digital twins are important because they allow:",
    opts: ["Manual inspection only", "Real-time system simulation", "Steam tracking", "Paper-based modeling"],
    ans: 1
  },
  {
    q: "A government implementing nationwide 5G enables:",
    opts: ["Slower connectivity", "Enhanced IoT and real-time applications", "Manual communication", "Telegraph revival"],
    ans: 1
  },
  {
    q: "Using AI for facial recognition in security systems applies:",
    opts: ["Cognitive computing", "Steam analytics", "Textile automation", "Mining systems"],
    ans: 0
  },
  {
    q: "A company analyzing video surveillance footage uses:",
    opts: ["Structured data tools", "Unstructured data analytics", "Boolean logic only", "Manual scanning"],
    ans: 1
  },
  {
    q: "Implementing DevOps in software projects primarily improves:",
    opts: ["Isolation", "Deployment efficiency", "Manual coding", "Steam integration"],
    ans: 1
  },
  {
    q: "Designing an IoT healthcare monitoring device requires:",
    opts: ["No network", "Sensor integration and data processing", "Steam engine", "Telegraph system"],
    ans: 1
  },
  {
    q: "Migrating legacy systems to cloud platforms supports:",
    opts: ["Digital transformation", "Manual processes", "Coal-based operations", "Analog conversion"],
    ans: 0
  },
  {
    q: "Applying RPA in HR departments automates:",
    opts: ["Complex AI reasoning", "Repetitive administrative tasks", "Coal logistics", "Steam operations"],
    ans: 1
  },
  {
    q: "A smart grid uses digital sensors to:",
    opts: ["Reduce electricity monitoring", "Optimize energy distribution", "Increase outages", "Eliminate data"],
    ans: 1
  },
  {
    q: "Combining big data with AI enables:",
    opts: ["Random predictions", "Predictive analytics", "Manual forecasting", "Steam reporting"],
    ans: 1
  },
  {
    q: "Designing user-friendly software requires knowledge of:",
    opts: ["Mining", "HCI principles", "Steam mechanics", "Textile weaving"],
    ans: 1
  },
  {
    q: "A nation failing to adopt IR 4.0 technologies risks:",
    opts: ["Faster development", "Global competitiveness decline", "Automation growth", "Technological dominance"],
    ans: 1
  },
  {
    q: "Poor data acquisition affects:",
    opts: ["Initial data quality", "Final output only", "Network cables", "Electricity"],
    ans: 0
  },
  {
    q: "Integrating IoT without cybersecurity planning increases:",
    opts: ["System resilience", "Security vulnerabilities", "Data efficiency", "Automation"],
    ans: 1
  },
  {
    q: "Compared to IR 2.0, IR 4.0 requires stronger emphasis on:",
    opts: ["Manual training", "Digital skills and literacy", "Steam engines", "Textile machinery"],
    ans: 1
  },
  {
    q: "Misinterpretation of analytics results may occur due to:",
    opts: ["Strong metadata", "Poor statistical understanding", "High-quality data", "Proper curation"],
    ans: 1
  },
  {
    q: "Developing a fully autonomous transportation network requires integration of:",
    opts: ["Steam engines", "AI, IoT, cloud, and edge computing", "Manual traffic control", "Telegraph lines"],
    ans: 1
  },
  {
    q: "Designing an ethical AI framework should integrate:",
    opts: ["Profit only", "Legal, social, and technical considerations", "Coal production", "Manual oversight only"],
    ans: 1
  },
  {
    q: "Building a scalable big data ecosystem requires:",
    opts: ["Single storage node", "Distributed architecture", "Manual database", "Steam indexing"],
    ans: 1
  },
  {
    q: "When assessing emerging technologies for adoption, the most critical evaluation criterion is:",
    opts: ["Trend popularity", "Long-term sustainability and societal impact", "Immediate excitement", "Short-term gains"],
    ans: 1
  },
  {
    q: "The long-term success of innovation ecosystems depends primarily on:",
    opts: ["Ignoring education", "Continuous research, collaboration, and digital infrastructure", "Eliminating automation", "Manual systems"],
    ans: 1
  }
];
