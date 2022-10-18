const TestingTheory = [
  {
    question: "What does 'CI' stands for in QA?",
    questionId: 1,
    answers: [
      "Connection interface",
      "Nothing",
      "Continuous Integration",
      "Centiliter",
    ],
    rightAnswer: "Continuous Integration",
  },
  {
    question: "Testing stages. Choose the right sequence",
    questionId: 2,
    answers: [
      "Requirements Management - Product Analysis - Developing a Test Strategy and Planning Quality Control Procedures - Generating Test Documentation - Prototype Testing - Basic Testing - Stabilization - Operation",
      "Product analysis - Working with requirements -. Developing a test strategy and planning quality control procedures - Creating test documentation - Prototype testing - Basic testing - Stabilization - Operation",
      "Requirements Management - Product Analysis - Developing a Test Strategy and Planning Quality Control Procedures - Prototype Testing - Generating Test Documentation - Basic Testing - Stabilization - Operation",
      "Requirements Management - Product Analysis - Developing a Test Strategy and Planning Quality Control Procedures - Generating Test Documentation - Prototype Testing - Stabilization - Basic Testing - Operation",
    ],
    rightAnswer:
      "Product analysis - Working with requirements -. Developing a test strategy and planning quality control procedures - Creating test documentation - Prototype testing - Basic testing - Stabilization - Operation",
  },
  {
    question: "What are the main benefits of automated testing?",
    questionId: 3,
    answers: [
      "Fast execution",
      "Reduced software maintenance costs",
      "Saving testers time",
      "Possibility of execution outside working hours",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "All options are correct",
  },
  {
    question: "What are the main types of locators in Selenium?",
    questionId: 4,
    answers: [
      "ID, ClassName",
      "Name, TagName",
      "LinkText, PartialLinkText",
      "Xpath, CSS Selector, DOM",
      "All options are correct",
      "All options are incorrect",
    ],
    rightAnswer: "All options are correct",
  },
  {
    question: "Provide correct example of Absolute XPath",
    questionId: 5,
    answers: [
      "html/body/div/[3]/div/div/[1]/div/div/div[1]/div/input",
      "html/body/div(3)/div/div(1)/div/div/div)1)/div/input",
      "html\bodydiv[3]divdiv[1]divdivdiv[1]divinput/",
      "html//body/div[3]/div/div[1]/div/div/div[1]/div/input",
      "html/body/div[3]/div/div[1]/div/div/div[1]/div/input",
    ],
    rightAnswer: "html/body/div[3]/div/div[1]/div/div/div[1]/div/input",
  },
  {
    question:
      "Most often, viewing elements in the Google Chrome browser on windows is launched by the button",
    questionId: 6,
    answers: ["F5", "F7", "F2", "F9", "F12"],
    rightAnswer: "F12",
  },
  {
    question:
      "Most often, viewing items in the Google Chrome browser on Mac is launched by this key combination",
    questionId: 7,
    answers: ["Cmd+Opt+O", "Cmd+Opt+R", "Cmd+Opt+J", "Cmd+Opt+N", "Cmd+Opt+W"],
    rightAnswer: "Cmd+Opt+J",
  },
  {
    question: "navigate().back(). This navigation command in Selenium:",
    questionId: 8,
    answers: [
      "Returns the user to the previous page from the browser history",
      "Allows the user to navigate to the next page according to the browser history",
      "Used to refresh the browser page",
      "Allows the user to open a new window in the browser and follow the specified URL",
      "There is no such command",
    ],
    rightAnswer:
      "Returns the user to the previous page from the browser history",
  },
  {
    question: "navigate().forward(). This navigation command in Selenium:",
    questionId: 9,
    answers: [
      "Returns the user to the previous page from the browser history",
      "Allows the user to navigate to the next page according to the browser history",
      "Used to refresh the browser page",
      "Allows the user to open a new window in the browser and follow the specified URL",
      "There is no such command",
    ],
    rightAnswer:
      "Allows the user to navigate to the next page according to the browser history",
  },
  {
    question: "navigate().refresh(). This navigation command in Selenium:",
    questionId: 10,
    answers: [
      "Returns the user to the previous page from the browser history",
      "Allows the user to navigate to the next page according to the browser history",
      "Used to refresh the browser page",
      "Allows the user to open a new window in the browser and follow the specified URL",
      "There is no such command",
    ],
    rightAnswer: "Used to refresh the browser page",
  },
  {
    question: "navigate().to(). This navigation command in Selenium:",
    questionId: 11,
    answers: [
      "Returns the user to the previous page from the browser history",
      "Allows the user to navigate to the next page according to the browser history",
      "Used to refresh the browser page",
      "Allows the user to open a new window in the browser and follow the specified URL",
      "There is no such command",
    ],
    rightAnswer:
      "Allows the user to open a new window in the browser and follow the specified URL",
  },
  {
    question: "Which of the following is a bug report attribute",
    questionId: 12,
    answers: [
      "Summary",
      "Attachments",
      "Status",
      "Severity",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Continuous Integration",
  },
  {
    question:
      "Testing that deals with the security of the application and aims to prevent problems that could affect the integrity and stability of the application:",
    questionId: 13,
    answers: [
      "Penetration testing",
      "Fuzzy testing",
      "Ramp testing",
      "Vulnerability testing",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Vulnerability testing",
  },
  {
    question:
      "______ is an existing defect that has not yet caused the failure because the conditions required to trigger the defect are not met",
    questionId: 14,
    answers: [
      "Hidden defect and disguised defect",
      "Hidden defect",
      "Disguised defect",
      "Defect",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Hidden defect",
  },
  {
    question: "Testing outside of normal performance is",
    questionId: 15,
    answers: [
      "Stress testing",
      "Performance testing",
      "Functional testing",
      "Centiliter",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Stress testing",
  },
  {
    question:
      "The tester runs a test to evaluate whether it meets the user's request to fill in a specific field using a drop-down list containing a list of values. The tester performs",
    questionId: 16,
    answers: [
      "Stress testing",
      "Regression testing",
      "White box testing",
      "Black box testing",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Black box testing",
  },
  {
    question: "Checking the onBlur field is done",
    questionId: 17,
    answers: [
      "When we hover over the field",
      "When we start entering data",
      "When we press the submit button",
      "After entering data",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "When we press the submit button",
  },
  {
    question: "What's wrong appealing to Smoke and sanity tests?",
    questionId: 18,
    answers: [
      "If both are running, do sanity tests first and then smoke testing",
      "Sanity Testing is also called Tester Acceptance Testing",
      "Smoke and sanity tests can be performed using an automation tool",
      "Smoke testing performed for a specific build is also called build verification test",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer:
      "If both are running, do sanity tests first and then smoke testing",
  },
  {
    question: "The Paradox Pesticide Testing Principle suggests that",
    questionId: 19,
    answers: [
      "Finding and eliminating defects does not help if the system is unstable",
      "Testing is done differently in a different context",
      "Test cases should be reviewed and revised regularly",
      "Clustering modules that contain most of the defects",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Test cases should be reviewed and revised regularly",
  },
  {
    question:
      "What kind of testing allows a tester to evaluate the software's behavior when exceptions are thrown?",
    questionId: 20,
    answers: [
      "Injection test malfunction",
      "Passive testing",
      "Fuzzy testing",
      "Centiliter",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Injection test malfunction",
  },
  {
    question: "White box testing does not concern",
    questionId: 21,
    answers: [
      "Decision-making",
      "Causes and effects of coverage",
      "Multiple coverage conditions",
      "Coverage Statement",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Causes and effects of coverage",
  },
  {
    question:
      "Which of the following is not part of specification-based testing?",
    questionId: 22,
    answers: [
      "State transition",
      "Decision table",
      "Boundary value analysis",
      "Data stream",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Data stream",
  },
  {
    question: "What is the order of priority testing?",
    questionId: 23,
    answers: [
      "System >> Reception >> Integration",
      "System >> Integration >> Acceptance Testing",
      "Module >> Integration >> System testing",
      "Module >> System >> Acceptance test",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Module >> Integration >> System testing",
  },
  {
    question:
      "Application does not allow the configuration expected by the client, is an example",
    questionId: 24,
    answers: [
      "High severity and high priority",
      "High severity and low priority",
      "Low Severity and Low Priority",
      "Low Severity and High Priority",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "High severity and low priority",
  },
  {
    question:
      "What is the balance of effort required to fix a defect in the requirements phase, design phase, coding phase, and implementation phase?",
    questionId: 25,
    answers: [
      "1: 8: 12: 100",
      "1: 4: 7: 10",
      "1: 10: 100: 1000",
      "1: 6: 10: 1000",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "1: 6: 10: 1000",
  },
  {
    question: "What is the percentage of software development costs?",
    questionId: 26,
    answers: [
      "10-20",
      "40-50",
      "5-10",
      "70-80",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "40-50",
  },
  {
    question: "Which of the following is not an iterative model?",
    questionId: 27,
    answers: [
      "Incremental",
      "Spiral Model",
      "V model",
      "RAD",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "V model",
  },
  {
    question: "Verification and validation uses",
    questionId: 28,
    answers: [
      "External resources only",
      "Only internal resources",
      "External and Internal resources, respectively",
      "Internal and external resources, respectively",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Internal and external resources, respectively",
  },
  {
    question:
      "Upon opening a link to a website, the user receives the message 'This section of our website is under construction.'' Then what is this mistake?",
    questionId: 29,
    answers: [
      "URL error",
      "Functional error",
      "Structural error",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "All options are incorrent",
  },
  {
    question:
      "Is a testing technique that involves testing with different ranges of valid and invalid inputs a specific module or component functionality?",
    questionId: 30,
    answers: [
      "Baseline testing",
      "Gorilla Testing",
      "Monkey testing",
      "Agile testing",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Gorilla Testing",
  },
  {
    question: "Focus testing falls under _______",
    questionId: 31,
    answers: [
      "Usability testing",
      "Component testing",
      "Acceptance testing",
      "Performance testing",
      "All options are correct",
      "All options are incorrent",
    ],
    rightAnswer: "Usability testing",
  },
];

export default TestingTheory;