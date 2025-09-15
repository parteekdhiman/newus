import React, { useState } from "react";
import { api, getClientMetadata } from '../utils/api.js';

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !phone) {
      showAlert("Please fill in all required fields.", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("Please enter a valid email address.", "error");
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-()]/g, ""))) {
      showAlert("Please enter a valid phone number.", "error");
      return;
    }

    try {
      const result = await api.submitLead({
        source: 'contact',
        payload: formData,
        meta: getClientMetadata()
      });

      if (result.ok) {
        if (result.emailSent) {
          setShowSuccessMessage(true);
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } else {
          showAlert("Message sent but there was an issue. We'll get back to you soon.");
        }
      } else {
        showAlert("Something went wrong. Please try again.");
      }
    } catch {
      showAlert("Network error. Please check your connection and try again.");
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const showAlert = (message) => {
    alert(message);
  };

  const handleInputFocus = (e) => {
    e.target.parentElement.classList.add("transform", "scale-[1.02]");
    e.target.classList.add("shadow-lg");
  };

  const handleInputBlur = (e) => {
    e.target.parentElement.classList.remove("transform", "scale-[1.02]");
    e.target.classList.remove("shadow-lg");
  };

  const handleSuccessMessageClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSuccessMessage();
    }
  };

  return (
    <>
      <title>Newus Dharamshala || Contact us</title>
      <div
        className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen py-8 px-4 relative overflow-hidden"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-animation absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-animation absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-animation absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-animation absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Illustration and text */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Let's Start a
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {" "}
                    Conversation
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We're here to help bring your ideas to life. Drop us a message
                  and let's create something amazing together!
                </p>
              </div>

              {/* Modern illustration */}
              <div className="flex justify-center lg:justify-start mb-8">
                <svg
                  width="400"
                  height="300"
                  viewBox="0 0 400 300"
                  className="max-w-full h-auto"
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#667eea", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#764ba2", stopOpacity: 1 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="grad2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#f093fb", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#f5576c", stopOpacity: 1 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="grad3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#4facfe", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#00f2fe", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>

                  {/* Main device */}
                  <rect
                    x="150"
                    y="80"
                    width="100"
                    height="140"
                    rx="20"
                    fill="url(#grad1)"
                    opacity="0.9"
                  />
                  <rect
                    x="160"
                    y="90"
                    width="80"
                    height="100"
                    rx="8"
                    fill="white"
                    opacity="0.9"
                  />

                  {/* Screen content */}
                  <rect
                    x="170"
                    y="100"
                    width="60"
                    height="4"
                    rx="2"
                    fill="#667eea"
                    opacity="0.6"
                  />
                  <rect
                    x="170"
                    y="110"
                    width="40"
                    height="4"
                    rx="2"
                    fill="#667eea"
                    opacity="0.4"
                  />
                  <rect
                    x="170"
                    y="120"
                    width="50"
                    height="4"
                    rx="2"
                    fill="#667eea"
                    opacity="0.4"
                  />

                  {/* Floating message bubbles */}
                  <g className="floating-animation">
                    <ellipse
                      cx="80"
                      cy="120"
                      rx="35"
                      ry="25"
                      fill="url(#grad2)"
                      opacity="0.8"
                    />
                    <text
                      x="80"
                      y="125"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="600"
                    >
                      Hello!
                    </text>
                  </g>

                  <g className="floating-animation">
                    <ellipse
                      cx="320"
                      cy="100"
                      rx="40"
                      ry="30"
                      fill="url(#grad3)"
                      opacity="0.8"
                    />
                    <text
                      x="320"
                      y="105"
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="600"
                    >
                      Let's Chat
                    </text>
                  </g>

                  {/* Decorative elements */}
                  <circle cx="100" cy="60" r="8" fill="#fbbf24" opacity="0.7" />
                  <circle
                    cx="300"
                    cy="200"
                    r="12"
                    fill="#10b981"
                    opacity="0.7"
                  />
                  <circle cx="50" cy="200" r="6" fill="#ef4444" opacity="0.7" />
                  <circle
                    cx="350"
                    cy="50"
                    r="10"
                    fill="#8b5cf6"
                    opacity="0.7"
                  />

                  {/* Connection lines */}
                  <path
                    d="M 115 120 Q 140 110 150 130"
                    stroke="url(#grad2)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                  />
                  <path
                    d="M 285 100 Q 260 110 250 130"
                    stroke="url(#grad3)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    Quick Response
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We'll get back to you within 24 hours
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    Personalized
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Tailored solutions for your needs
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-xl">🔒</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Secure</h3>
                  <p className="text-gray-400 text-sm">
                    Your information is safe with us
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll be in touch soon!
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name fields in a row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                        placeholder="newus"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                        placeholder="Dharamshala"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                      placeholder="newusdharamshala@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
                      placeholder="86796-86796"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your project or how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus:ring-4 focus:ring-purple-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message Modal */}
        {showSuccessMessage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4 z-50 backdrop-blur-sm"
            onClick={handleSuccessMessageClick}
          >
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl transform scale-100 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Message Sent!
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Thank you for reaching out! We've received your message and will
                get back to you within 24 hours.
              </p>
              <button
                onClick={closeSuccessMessage}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold shadow-lg"
              >
                Perfect!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
