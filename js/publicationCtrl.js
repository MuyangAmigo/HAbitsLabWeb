'use strict'
var app = angular.module("publicationApp", []);
app.controller("publicationCtrl", function($scope) {
    $scope.publications = [
      {"title": "A Wearable Sensor System for Medication Adherence Prediction",
      "date":"04/2016",
      "conference": "Elsevier Artificial Intelligence in Medicine.",
      "description": "Objective Studies have revealed that non-adherence to prescribed medication can lead to hospital readmissions, clinical complications, and other negative patient outcomes.",
      "src": "http://www.sciencedirect.com/science/article/pii/S0933365715300580",
      "download":"assets/papers/1.pdf",
      "tag": "sensor wearable"},

      {"title": "A comparison of piezoelectric-based inertial sensing and audio-based detection of swallows",
      "date": "03/2016",
      "description": "Obesity Medicine",
      "conference": "Background Prior research has shown a correlation between poor dietary habits and countless negative health outcomes such as heart disease, diabetes, and certain cancers.",
      "src": "http://www.sciencedirect.com/science/article/pii/S2451847615300105",
      "download":"assets/papers/2.pdf",
      "tag": "eating"},

      {"title": "Remote Health Monitoring Outcome Success Prediction using First Month Intervention Data",
      "date": "01/2016",
      "conference": "IEEE Journal of Biomedical and Health Informatics",
      "description": "Remote health monitoring (RHM) systems are becoming more widely adopted by clinicians and hospitals to remotely monitor and communicate with patients while optimizing clinician time, decreasing hospital costs, and improving quality of care.",
      "src": "http://europepmc.org/abstract/med/26780823",
      "download":"assets/papers/3.pdf",
      "tag": "health remotehealthmonitoring"},

      {"title": "Dynamic Computation Offloading for Low-Power Wearable Health Monitoring Systems",
      "date": "2016",
      "description": "",
      "conference": "IEEE Transactions on Biomedical Engineering",
      "src": "http://www.ncbi.nlm.nih.gov/pubmed/27214888",
      "download":"assets/papers/4.pdf",
      "tag": "machinelearning wearable"},

      {"title": "Probabilistic Segmentation of Time-Series Audio Signals using Support Vector Machines",
      "date": "2016",
      "description": "Abstract To allow health tracking, patient monitoring, and provide timely user interventions, sensor signals from body sensor networks need to be processed in real-time.",
      "conference": "Elsevier Microprocessors and Microsystems",
      "src": "http://www.sciencedirect.com/science/article/pii/S0141933116300394",
      "download":"assets/papers/5.pdf",
      "tag": "machinelearning"},

      {"title": "A Survey of Electronic Methods for Non-Invasive Detection of Eating Behavior",
      "date": "2016",
      "description": "",
      "conference": "IEEE Pervasive Computing",
      "src": "http://er.cs.ucla.edu/publications.htm",
      "download":"assets/papers/6.pdf",
      "tag": "eating physicalactivity"},

      {"title": "Detection of Gestures Associated with Medication Adherence using Smartwatch-based Inertial Sensors",
      "date": "11/2015",
      "conference": "IEEE Sensors Journal, 2015",
      "description": "Poor adherence to prescription medication can compromise treatment effectiveness and cost the billions of dollars in unnecessary health care expenses.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=7315013",
      "download":"assets/papers/7.pdf",
      "tag": "sensor"},

      {"title": "Audio-Based Detection and Evaluation of Eating Behavior using the Smartwatch Platform",
      "date": "10/2015",
      "conference": "Elsevier Computers in Biology and Medicine",
      "description": "Abstract In recent years, smartwatches have emerged as a viable platform for a variety of medical and health-related applications.",
      "src": "http://www.sciencedirect.com/science/article/pii/S0010482515002553",
      "download":"assets/papers/8.pdf",
      "tag": "eating sensor physicalactivity"},

      {"title":"Effects of Coaching on Adherence in Remote Health Monitoring Systems",
      "date": "10/2015",
      "conference": "ACM Conference on Wireless Health (WH) 2015",
      "description": "Among all of the major organizations, including the World Health Organization, the Centers for Disease Control and the Pew report the focus on disease prevention is critical.",
      "src": "http://dl.acm.org/citation.cfm?id=2811949",
      "download":"assets/papers/9.pdf",
      "tag": "health remotehealthmonitoring"},

      {"title": "A Data-Driven Feature Extraction Framework for Predicting the Severity of Condition for Congestive Heart Failure Patients",
      "date": "08/2015",
      "conference": "IEEE Engineering in Medicine and Biology Society (EMBC) 2015",
      "description": "In this paper, we propose a novel methodology for utilizing disease diagnostic information to predict severity of condition for Congestive Heart Failure (CHF) patients.",
      "src":"http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=7318908",
      "download":"assets/papers/10.pdf",
      "tag": "health machinelearning"},

      {"title": "A Smartwatch-Based Medication Adherence System",
      "date": "06/2015",
      "conference": "IEEE 12th International Conference on Wearable and Implantable Body Sensor Networks (BSN), 2015",
      "description": "Poor adherence to prescription medication can compromise treatment effectiveness and cost the billions of dollars in unnecessary health care expenses.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=7299348",
      "download":"assets/papers/11.pdf",
      "tag": "health sensor"},

      {"title": "Power Optimization for Wearable Devices",
      "date": "03/2015",
      "conference": " IEEE Percom: WristSense, 2015",
      "description": "In recent years, several wearable devices have been proposed for monitoring nutrition intake, tracking energy expenditure, and performing activity recognition.",
      "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=7134100",
      "download":"assets/papers/12.pdf",
      "tag": "machinelearning sensor wearable"},

      {"title": "Monitoring Eating Habits using a Piezoelectric Sensor-Based Necklace",
      "date": "03/2015",
      "conference": "Elsevier Computers in Biology and Medicine",
      "description": "Abstract Maintaining appropriate levels of food intake and developing regularity in eating habits is crucial to weight loss and the preservation of a healthy lifestyle.",
      "src": "http://www.sciencedirect.com/science/article/pii/S0010482515000086",
      "download":"assets/papers/13.pdf",
      "tag": "eating sensor"},

      {"title": "Non-Invasive Detection of Medication Adherence using a Digital Smart Necklace",
      "date": "03/2015",
      "conference": "Pervasive Computing and Communication Workshops (PerCom Workshops)",
      "designing": "Studies have revealed that non-adherence to prescribed medication can lead to hospital readmissions, clinical complications, and a host of other negative patient outcomes.",
      "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=7134061",
      "download":"assets/papers/14.pdf",
      "tag": "health"},

      {"title": "Recognition of Nutrition-Intake using Time-Frequency Decomposition in a Wearable Necklace using a Piezoelectric Sensor",
      "date": "02/2015",
      "conference": "IEEE Sensors Journal",
      "description": "Food intake levels, hydration, ingestion rate, and dietary choices are all factors known to impact the risk of obesity.",
      "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=7039196",
      "download":"assets/papers/15.pdf",
      "tag": "health sensor wearable"},

      {"title": "A Framework for Predicting Adherence in Remote Health Monitoring Systems",
      "date": "10/2014",
      "conference": "ACM Conference on Wireless Health (WH) 2014",
      "description": "Remote health monitoring (RHM) systems have shown potential effectiveness in disease management and prevention.",
      "src": "http://dl.acm.org/citation.cfm?doid=2668883.2669586",
      "download":"assets/papers/16.pdf",
      "tag": "health remotehealthmonitoring"},

      {"title": "Non-Invasive Monitoring of Eating Behavior using Spectrogram Analysis in a Wearable Necklace",
      "date":"10/2014",
      "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
      "description": "Food intake levels, hydration, chewing and swallowing rate, and dietary choices are all factors known to impact one's health.",
      "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2436",
      "download":"assets/papers/17.pdf",
      "tag": "eating health wearable physicalactivity"},

      {"title": "Beyond Dr. Google: Early Results of a Personalized Weight-Tracking Smartphone Application and Alert System for Patients with Ascites",
      "date": "10/2014",
      "conference": "65th Annual Meeting of the American Association for the Study of Liver Disease (AASLD) 2014",
      "description": "Medical management of ascites is currently limited to dietary sodium restriction, diuretics, and large-volume paracentesis (LVP) with few interventions in place to prevent ascites-related complications.",
      "src": "http://onlinelibrary.wiley.com/doi/10.1002/hep.27493/full",
      "download":"assets/papers/18.pdf",
      "tag": "health"},

      {"title": "Support Vector Regression for METs of Exergaming Actions",
      "date":"10/2014",
      "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
      "description": "Sedentary behavior is a root cause of several chronic conditions affecting health of adults and children in the United States and worldwide.",
      "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2508",
      "download":"assets/papers/19.pdf",
      "tag": "machinelearning"},

      {"title": "Multiple Model Analytics for Adverse Event Prediction in Remote Health Monitoring Systems",
      "date": "10/2014",
      "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
      "description": "Remote health monitoring systems (RHMS) are gaining an important role in healthcare by collecting and transmitting patient vital information and providing data analysis and medical adverse event prediction (e.g. hospital readmission prediction).",
      "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2445",
      "download":"assets/papers/20.pdf",
      "tag": "machinelearning remotehealthmonitoring"},

      {"title": "Spectrogram-Based Audio Classification of Nutrition Intake",
      "date":"10/2014",
      "conference": "IEEE EMBS Conference on Healthcare Innovation & Point-of-Care Healthcare Technologies (PHT) 2014",
      "description": "Acoustic monitoring of food intake in an unobtrusive, wearable form-factor can encourage healthy dietary choices by enabling individuals to monitor their eating patterns, maintain regularity in their meal times, and ensure adequate hydration levels.",
      "src": "http://emb.citengine.com/event/hipt-2014/paper-details?pdID=2458",
      "download":"assets/papers/21.pdf",
      "tag": "machinelearning health"},

      {"title": "Using electronic health records to predict severity of condition for congestive heart failure patients",
      "date": "09/2014",
      "conference": "ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp) 2014.",
      "description": "We propose a novel way to design an analytics engine based exclusively on electronic health records (EHR).",
      "src": "http://dl.acm.org/citation.cfm?doid=2638728.2638815",
      "download":"assets/papers/22.pdf",
      "tag": "health machinelearning"},

      {"title": "Remote health monitoring: Predicting outcome success based on contextual features for cardiovascular disease",
      "date": "08/2014",
      "conference": "IEEE Engineering in Medicine and Biology Society (EMBC) 2014.",
      "description": "Current studies have produced a plethora of remote health monitoring (RHM) systems designed to enhance the care of patients with chronic diseases.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6943953",
      "download":"assets/papers/23.pdf",
      "tag": "health machinelearning remotehealthmonitoring"},

      {"title": "BreathSens: A Continuous On-Bed Respiratory Monitoring System With Torso Localization Using an Unobtrusive Pressure Sensing Array",
      "date": "07/2014",
      "conference": "IEEE Journal of Biomedical and Health Informatics",
      "description": "The ability to continuously monitor respiration rates of patients in homecare or in clinics is an important goal.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6869013",
      "download":"assets/papers/24.pdf",
      "tag": "sleeping machinelearning"},

      {"title": "Anti-Cheating: Detecting Self-Inflicted and Impersonator Cheaters for Remote Health Monitoring Systems with Wearable Sensors",
      "date": "06/2014",
      "conference": "IEEE Body Sensor Networks (BSN) 2014",
      "description": "In remote health monitoring of patient's physical activity, ensuring correctness and authenticity of the received data is essential.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6855623",
      "download":"assets/papers/25.pdf",
      "tag": "health remotehealthmonitoring physicalactivity"},

      {"title": "Improving Compliance in Remote Healthcare Systems Through Smartphone Battery Optimization",
      "date": "06/2014",
      "conference": "IEEE Journal of Biomedical and Health Informatics",
      "description": "Remote health monitoring (RHM) has emerged as a solution to help reduce the cost burden of unhealthy lifestyles and aging populations.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6827927",
      "download":"assets/papers/26.pdf",
      "tag": "health"},

      {"title": "A Wearable Nutrition Monitoring System",
      "date": "06/2014",
      "conference": "IEEE Body Sensor Networks (BSN) 2014",
      "description": "Maintaining appropriate levels of food intake anddeveloping regularity in eating habits is crucial to weight lossand the preservation of a healthy lifestyle.",
      "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6855620",
      "download":"assets/papers/27.pdf",
      "tag": "machinelearning wearable"},

      {"title": "Determining the Single Best Axis for Exercise Repetition Recognition and Counting on SmartWatches",
      "date": "06/2014",
      "conference": "IEEE Body Sensor Networks (BSN) 2014",
      "description": "Due to the exploding costs of chronic diseasesstemming from physical inactivity, wearable sensor systems toenable remote, continuous monitoring of individuals has increasedin popularity.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6855613",
      "download":"assets/papers/28.pdf",
      "tag": "machinelearning"},

      {"title": "Battery optimization in smartphones for remote health monitoring systems to enhance user adherence",
      "date": "05/2014",
      "conference": "PErvasive Technologies Related to Assistive Environments (PETRA) 2014",
      "description": "Remote health monitoring (RHM) can help save the cost burden of unhealthy lifestyles. Of increased popularity is the use of smartphones to collect data, measure physical activity, and provide coaching and feedback to users.",
      "src": "http://dl.acm.org/citation.cfm?id=2674407",
      "download":"assets/papers/29.pdf",
      "tag": "health remotehealthmonitoring"},

      {"title": "Non-invasive nutrition monitor",
      "date": "03/2014",
      "description": "An apparatus includes a sensor configured to detect a variable characteristic, the variation of the characteristic including variation indicative of an individual swallowing when the sensor is positioned in a neck area of the individual.",
      "conference": "Patent: US 20160026767 A1",
      "src": "http://www.google.com/patents/US20160026767",
      "download":"assets/papers/30.pdf",
      "tag": "machinelearning remotehealthmonitoring"},

      {"title": "Using Pressure Map Sequences for Recognition of On Bed Rehabilitation Exercises",
      "date": "01/2014",
      "conference": "IEEE Journal of Biomedical and Health Informatics",
      "description": "Physical rehabilitation is an important process for patients recovering after surgery. In this paper, we propose and develop a framework to monitor on-bed range of motion exercises that allows physical therapists to evaluate patient adherence to set exercise programs. ",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6698387",
      "download":"assets/papers/31.pdf",
      "tag": "sleeping machinelearning"},

      {"title": "Staying Connected: a CVD Risk Intervention for Young Black Women",
      "date": "2014",
      "conference": "American Heart Association (AHA) 2014",
      "description": "Fifty thousand Black women, disproportionately affected by cardiovascular disease (CVD), die annually; 49% of Black women ≥ 20 years have CVD.",
      "src": "http://circ.ahajournals.org/content/130/Suppl_2/A19005.short",
      "download":"assets/papers/32.pdf",
      "tag": "machinelearning"},

      {"title": "Remote patient monitoring: what impact can data analytics have on cost?",
      "date":"11/2013",
      "conference": "IEEE Body Sensor Networks (BSN) 2013",
      "description": "While significant effort has been made on designing Remote Monitoring Systems (RMS), limited research has been conducted on the potential cost savings that these systems offer in terms of reduction in readmission costs, as well as the costs associated with human resources involved in the intervention process.",
      "src": "http://dl.acm.org/citation.cfm?id=2534108",
      "download":"assets/papers/33.pdf",
      "tag": "machinelearning remotehealthmonitoring"},

      {"title": "Sleep posture analysis using a dense pressure sensitive bedsheet",
      "date": "10/2013",
      "conference": "Pervasive and Mobile Computing (PMC) Journal Special Issue 2014",
      "description": "Sleep posture affects the quality of our sleep and is especially important for such medical conditions as sleep apnea and pressure ulcers.",
      "src": "http://www.sciencedirect.com/science/article/pii/S1574119213001326",
      "download":"assets/papers/34.pdf",
      "tag": "sleeping physicalactivity"},

      {"title": "Designing a Robust Activity Recognition Framework for Health and Exergaming Using Wearable Sensors",
      "date": "10/2013",
      "conference": "IEEE Journal of Biomedical and Health Informatics",
      "description": "Detecting human activity independent of intensity is essential in many applications, primarily in calculating metabolic equivalent rates and extracting human context awareness.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6648432",
      "download":"assets/papers/35.pdf",
      "tag": "health"},

      {"title": "On-bed monitoring for range of motion exercises with a pressure sensitive bedsheet",
      "date": "05/2013",
      "conference": "2013 IEEE International Conference on Body Sensor Networks",
      "description": "This paper presents the design of an on-bed rehabilitation exercise monitoring system that utilizes a high density sensor bedsheet to evaluate active range of motion exercises.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6575475",
      "download":"assets/papers/36.pdf",
      "tag": "sleeping physicalactivity"},

      {"title": "Robust human intensity-varying activity recognition using Stochastic Approximation in wearable sensors",
      "date": "05/2013",
      "conference": "IEEE Body Sensor Networks (BSN) 2013",
      "description": "Detecting human activity independent of intensity is essential in many applications, primarily in calculating metabolic equivalent rates (MET) and extracting human context awareness from on-body inertial sensors.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6575515",
      "download":"assets/papers/37.pdf",
      "tag": "machinelearning physicalactivity"},

      {"title": "MET calculations from on-body accelerometers for exergaming movements",
      "date":"05/2013",
      "conference": "IEEE Body Sensor Networks (BSN) 2013",
      "description": "The use of accelerometers to approximate energy expenditure and serve as inputs for exergaming, have both increased in prevalence in response to the worldwide obesity epidemic.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6575520",
      "download":"assets/papers/38.pdf",
      "tag": "machinelearning"},

      {"title": "Improving accuracy in E-Textiles as a platform for pervasive sensing",
      "date": "05/2013",
      "conference": "IEEE Body Sensor Networks (BSN) 2013",
      "description": "Recently Electronic Textile (E-Textile) technology enables the weaving computation and communication components into the clothes that we wear and objects that we interact with every day.",
      "src": "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6575514",
      "download":"assets/papers/39.pdf",
      "tag": "sensor"},

      {"title": "Inconspicuous on-bed respiratory rate monitoring",
      "date": "05/2013",
      "conference": "PErvasive Technologies Related to Assistive Environments (PETRA) 2013",
      "description": "The monitoring of human respiratory rate is essential in many clinical applications including the detection and monitoring of sleep disorders, the monitoring of newborns for Sudden Infant Death Syndrome (SIDS), and identifying patients at high risk up to 24 hours before an adverse event like stroke and cardiac arrest.",
      "src": "http://dl.acm.org/citation.cfm?id=2504353",
      "download":"assets/papers/40.pdf",
      "tag": "sleeping"},

      {"title": "A dense pressure sensitive bedsheet design for unobtrusive sleep posture monitoring",
      "date": "03/2013",
      "conference": "Conf. on Pervasive Comp. and Comm (PerCom) 2013",
      "description": "Sleep plays a pivotal role in the quality of life, and sleep posture is related to many medical conditions such as sleep apnea.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6526734",
      "download":"assets/papers/41.pdf",
      "tag": "sleeping"},

      {"title": "WANDA: an end-to-end remote health monitoring and analytics system for heart failure patients",
      "date": "10/2012",
      "conference": "Wireless Health 2012",
      "description": "Recent advances in wireless sensors, mobile technologies, and cloud computing have made continuous remote monitoring of patients possible.",
      "src": "http://dl.acm.org/citation.cfm?id=2448105",
      "download":"assets/papers/42.pdf",
      "tag": "health"},

      {"title": "Opportunistic hierarchical classification for power optimization in wearable movement monitoring systems",
      "date": "06/2012",
      "conference": "IEEE Int. Symposium on Industrial Embedded Systems (SIES) 2012",
      "description": "Patient monitoring systems are becoming increasingly important in accurately diagnosing and treating growing worldwide chronic conditions especially the obesity epidemic.",
      "src": "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?reload=true&arnumber=6356575",
      "download":"assets/papers/43.pdf",
      "tag": "machinelearning wearable physicalactivity "},

      {"title": "Dynamic Task Optimization in Remote Diabetes Monitoring Systems",
      "date":"2012",
      "conference": "Int. Conf. on Healthcare Informatics, Imaging and Systems Biology 2012",
      "description": "Diabetes is the seventh leading cause of death in the United States, but careful symptom monitoring can prevent adverse events.",
      "src": "http://ieeexplore.ieee.org/xpl/abstractAuthors.jsp?arnumber=6366181",
      "download":"assets/papers/44.pdf",
      "tag": "machinelearning"},

      {"title": "Artificial spider: eight-legged arachnid and autonomous learning of locomotion",
      "date": "05/2006",
      "conference": "SPIE-Unmanned Systems Technology VIII 2006",
      "description": "Evolution has produced organisms whose locomotive agility and adaptivity mock the difficulty faced by robotic scientists.",
      "src": "http://proceedings.spiedigitallibrary.org/proceeding.aspx?articleid=1286440",
      "download":"assets/papers/45.pdf",
      "tag": "machinelearning"}
    ]

});
