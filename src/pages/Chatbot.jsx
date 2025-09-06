import React, { useState, useEffect, useRef, useCallback } from "react";

const courseData = {
  "Full Stack Software Engineering Pro": {
    duration: "720 hrs/1.5 year",
    jobAssistance: "100% Job Assistance",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React JS",
      "Angular JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Python",
      "PHP",
      "Power BI",
    ],
    topics: [
      "Client side: HTML5, CSS3, JavaScript, React js, Angular js",
      "Server side: Python, Php, Node.js, Mysql, Mongodb",
      "Web Framework: Laravel, Django",
      "CMS: Wordpress",
      "Data Science: Python, Statistics, Pandas, Visualization, Power BI, Machine Learning, Deep Learning, NLP",
    ],
    career:
      "Software Engineer, Front end Developer, Back end Developer, React.js Developer, Data Scientist",
  },
  "Full Stack Software Engineering": {
    duration: "480 hours/1 year",
    jobAssistance: "100% Job Assistance",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React JS",
      "Angular JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "Python",
      "PHP",
    ],
    career:
      "Software Engineer, Front end Developer, Back end Developer, React.js Developer",
  },
  "Banking and Finance": {
    duration: "480hrs/1 year",
    jobAssistance: "100% Job Assistance",
    technologies: [
      "Microsoft Excel",
      "Tally Prime",
      "Salesforce",
      "Google Analytics",
    ],
    topics: [
      "Advance Excel Tools and Techniques for Financial Accounting",
      "Computerized Financial Accounting using Tally Prime",
      "Banking Industry & Regulatory Environment",
      "Customer Service For Banking and Finance Industry",
      "Marketing of Financial Services",
      "CIBIL Score, KYC, Global Financial Processes",
    ],
    career:
      "Banking Professional, Financial Analyst, Relationship Manager, Investment Advisor, Credit Analyst",
  },
  "Data Science": {
    duration: "240 hours/6 months",
    jobAssistance: "100% Job Assistance",
    technologies: ["Python", "SQL", "NumPy", "Pandas", "Power BI", "Jupyter"],
    topics: [
      "Python for Data Science",
      "Statistics",
      "Data Manipulation with Pandas",
      "Data Visualization",
      "Machine Learning",
      "Deep Learning",
      "NLP",
    ],
    career: "Data Scientist, Data Analyst, ML Engineer",
  },
  "Digital Marketing with AI Tools": {
    duration: "240hrs/6 months",
    jobAssistance: "100% Job Assistance",
    technologies: ["Wix", "GoDaddy", "Google Ads", "Canva", "AI Tools"],
    topics: [
      "SEO, SEM, Social Media Marketing",
      "Google Ads, Facebook Ads",
      "Content Marketing, Email Marketing",
      "AI tools for marketing",
      "Video creation tools",
    ],
    career:
      "Digital Marketing Specialist, Social Media Manager, SEO Expert, Content Creator",
  },
  "Web Development Using PHP": {
    duration: "240 hours/6 months",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Laravel"],
    career: "PHP Developer, Web Developer, Backend Developer",
  },
  "Web Development Using Python": {
    duration: "240 hours/6 months",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "MySQL"],
    career: "Python Developer, Web Developer, Backend Developer",
  },
  "Artificial Intelligence": {
    duration: "240 hrs/6 months",
    jobAssistance: "100% Job Assistance",
    topics: [
      "Python Programming",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "GenAI",
      "LLM",
      "Langchain",
    ],
    career: "AI Developer, ML Engineer, Data Scientist",
  },
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm your course assistant. Ask me about our programs - Full Stack Development, Data Science, Digital Marketing, Banking & Finance, and AI courses!",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const chatbotPopupRef = useRef(null);
  const chatbotIconRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
    setShowNotification(false);
  };

  const addUserMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
    ]);
  };

  const addBotMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "bot", text: message },
    ]);
  };

  const processMessage = (message) => {
    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes("what courses") ||
      lowerMessage.includes("courses do you offer") ||
      lowerMessage.includes("available courses")
    ) {
      return `<p class="text-gray-800 mb-2 text-sm">We offer these comprehensive courses:</p>
                    <ul class="text-gray-700 space-y-1 text-xs">
                        <li>• <strong>Full Stack Pro</strong> (1.5 years)</li>
                        <li>• <strong>Full Stack</strong> (1 year)</li>
                        <li>• <strong>Data Science</strong> (6 months)</li>
                        <li>• <strong>Banking & Finance</strong> (1 year)</li>
                        <li>• <strong>Digital Marketing</strong> (6 months)</li>
                        <li>• <strong>Web Dev (PHP/Python)</strong> (6 months)</li>
                        <li>• <strong>AI</strong> (6 months)</li>
                    </ul>
                    <p class="text-gray-600 mt-2 text-xs">Ask about any specific course!</p>`;
    }

    if (lowerMessage.includes("full stack")) {
      const proVersion = courseData["Full Stack Software Engineering Pro"];
      const regularVersion = courseData["Full Stack Software Engineering"];

      return `<p class="text-gray-800 mb-2 text-sm">We have two Full Stack programs:</p>
                    <div class="space-y-2">
                        <div class="border-l-2 border-blue-500 pl-2">
                            <h4 class="font-semibold text-gray-800 text-sm">Full Stack Pro (${proVersion.duration})</h4>
                            <p class="text-xs text-gray-600">Includes Data Science</p>
                            <p class="text-xs text-gray-700">Careers: ${proVersion.career}</p>
                        </div>
                        <div class="border-l-2 border-green-500 pl-2">
                            <h4 class="font-semibold text-gray-800 text-sm">Full Stack (${regularVersion.duration})</h4>
                            <p class="text-xs text-gray-700">Careers: ${regularVersion.career}</p>
                        </div>
                    </div>`;
    }

    if (lowerMessage.includes("data science")) {
      const course = courseData["Data Science"];
      return `<div class="border-l-2 border-purple-500 pl-2">
                        <h4 class="font-semibold text-gray-800 text-sm">Data Science (${
                          course.duration
                        })</h4>
                        <p class="text-xs text-gray-700 mt-1"><strong>Tech:</strong> ${course.technologies.join(
                          ", "
                        )}</p>
                        <p class="text-xs text-gray-700 mt-1"><strong>Careers:</strong> ${
                          course.career
                        }</p>
                        <p class="text-xs text-green-600 mt-1">✅ ${
                          course.jobAssistance
                        }</p>
                    </div>`;
    }

    if (
      lowerMessage.includes("digital marketing") ||
      lowerMessage.includes("marketing")
    ) {
      const course = courseData["Digital Marketing with AI Tools"];
      return `<div class="border-l-2 border-pink-500 pl-2">
                        <h4 class="font-semibold text-gray-800 text-sm">Digital Marketing with AI (${
                          course.duration
                        })</h4>
                        <p class="text-xs text-gray-700 mt-1"><strong>Tech:</strong> ${course.technologies.join(
                          ", "
                        )}</p>
                        <p class="text-xs text-gray-700 mt-1"><strong>Careers:</strong> ${
                          course.career
                        }</p>
                        <p class="text-xs text-green-600 mt-1">✅ ${
                          course.jobAssistance
                        }</p>
                    </div>`;
    }

    if (lowerMessage.includes("banking") || lowerMessage.includes("finance")) {
      const course = courseData["Banking and Finance"];
      return `<div class="border-l-2 border-yellow-500 pl-2">
                        <h4 class="font-semibold text-gray-800 text-sm">Banking & Finance (${
                          course.duration
                        })</h4>
                        <p class="text-xs text-gray-700 mt-1"><strong>Tech:</strong> ${course.technologies.join(
                          ", "
                        )}</p>
                        <p class="text-xs text-gray-700 mt-1"><strong>Careers:</strong> ${
                          course.career
                        }</p>
                        <p class="text-xs text-green-600 mt-1">✅ ${
                          course.jobAssistance
                        }</p>
                    </div>`;
    }

    if (
      lowerMessage.includes("ai") ||
      lowerMessage.includes("artificial intelligence")
    ) {
      const course = courseData["Artificial Intelligence"];
      return `<div class="border-l-2 border-red-500 pl-2">
                        <h4 class="font-semibold text-gray-800 text-sm">Artificial Intelligence (${
                          course.duration
                        })</h4>
                        <p class="text-xs text-gray-700 mt-1"><strong>Topics:</strong> ${course.topics.join(
                          ", "
                        )}</p>
                        <p class="text-xs text-gray-700 mt-1"><strong>Careers:</strong> ${
                          course.career
                        }</p>
                        <p class="text-xs text-green-600 mt-1">✅ ${
                          course.jobAssistance
                        }</p>
                    </div>`;
    }

    if (
      lowerMessage.includes("career") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("salary")
    ) {
      return `<p class="text-gray-800 mb-2 text-sm">Career paths from our courses:</p>
                    <div class="space-y-1 text-xs">
                        <p><strong>Tech:</strong> Software Engineer, Data Scientist, AI Developer</p>
                        <p><strong>Finance:</strong> Banking Professional, Financial Analyst</p>
                        <p><strong>Marketing:</strong> Digital Marketing Specialist, SEO Expert</p>
                        <p class="text-green-600 mt-2">✅ 100% Job Assistance included!</p>
                    </div>`;
    }

    if (
      lowerMessage.includes("duration") ||
      lowerMessage.includes("how long")
    ) {
      return `<p class="text-gray-800 mb-2 text-sm">Course durations:</p>
                    <ul class="text-gray-700 space-y-1 text-xs">
                        <li>• <strong>6 months:</strong> Data Science, Digital Marketing, Web Dev, AI</li>
                        <li>• <strong>1 year:</strong> Full Stack, Banking & Finance</li>
                        <li>• <strong>1.5 years:</strong> Full Stack Pro</li>
                    </ul>`;
    }

    return `<p class="text-gray-800 text-sm">I can help you with:</p>
                <ul class="text-gray-700 mt-1 space-y-1 text-xs">
                    <li>• Course information</li>
                    <li>• Career opportunities</li>
                    <li>• Duration & technologies</li>
                    <li>• Job assistance</li>
                </ul>
                <p class="text-gray-600 mt-2 text-xs">Try: "Tell me about Data Science"</p>`;
  };

  const sendMessage = () => {
    const message = userInput.trim();
    if (!message) return;

    addUserMessage(message);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const response = processMessage(message);
      addBotMessage(response);
    }, 800 + Math.random() * 800);
  };

  const handleQuickQuestion = (question) => {
    setUserInput(question);
    sendMessage();
  };

  const handleClickOutside = useCallback((event) => {
    if (
      isOpen &&
      chatbotPopupRef.current &&
      !chatbotPopupRef.current.contains(event.target) &&
      chatbotIconRef.current &&
      !chatbotIconRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      <div className="fixed bottom-6 right-15 lg:right-6 z-50">
        {showNotification && !isOpen && (
          <div
            id="notificationBadge"
            className="notification-badge absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
          >
            1
          </div>
        )}

        <button
          id="chatbotIcon"
          ref={chatbotIconRef}
          className="chatbot-icon bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-300"
          onClick={toggleChatbot}
        >
          {isOpen ? "×" : "💬"}
        </button>
      </div>

      <div
        id="chatbotPopup"
        ref={chatbotPopupRef}
        className={`chatbot-popup fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] z-40 ${
          isOpen ? "show" : ""
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold">Course Assistant</h3>
                  <p className="text-blue-100 text-sm">Online now</p>
                </div>
              </div>
              <button
                id="closeChat"
                className="text-white hover:text-gray-200 text-xl"
                onClick={toggleChatbot}
              >
                ×
              </button>
            </div>
          </div>

          <div
            id="chatContainer"
            ref={chatContainerRef}
            className="chat-container p-4 space-y-3 bg-gray-50"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${
                  msg.type === "user" ? "justify-end" : ""
                }`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                )}
                <div
                  className={`${
                    msg.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800"
                  } rounded-lg p-3 shadow-sm max-w-xs`}
                >
                  <p
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  ></p>
                </div>
                {msg.type === "user" && (
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">👤</span>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div
                id="typingIndicator"
                className="typing-indicator show px-4 pb-2 bg-gray-50"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="dot w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="dot w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="dot w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t bg-white p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                id="userInput"
                ref={inputRef}
                placeholder="Ask about courses..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
              <button
                id="sendButton"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>

            <div className="mt-2">
              <div className="flex flex-wrap gap-1">
                <button
                  className="quick-question bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors duration-200"
                  onClick={() =>
                    handleQuickQuestion("What courses do you offer?")
                  }
                >
                  Courses
                </button>
                <button
                  className="quick-question bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors duration-200"
                  onClick={() =>
                    handleQuickQuestion("Tell me about Full Stack development")
                  }
                >
                  Full Stack
                </button>
                <button
                  className="quick-question bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs transition-colors duration-200"
                  onClick={() => handleQuickQuestion("What careers can I get?")}
                >
                  Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
