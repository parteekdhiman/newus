import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Number of slides

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 xs:top-20 left-5 xs:left-10 w-16 h-16 xs:w-32 xs:h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl floating-animation"></div>
          <div className="absolute top-20 xs:top-40 right-10 xs:right-20 w-12 h-12 xs:w-24 xs:h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-xl floating-animation"></div>
          <div className="absolute bottom-16 xs:bottom-32 left-1/6 xs:left-1/4 w-20 h-20 xs:w-40 xs:h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl floating-animation"></div>
          <div className="absolute bottom-10 xs:bottom-20 right-5 xs:right-10 w-14 h-14 xs:w-28 xs:h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 blur-xl floating-animation"></div>
        </div>

        {/* Slider Container */}
        <div className="slider-container relative z-10 min-h-screen">
          {/* Slide 1: Full Stack with DS Tech Stack */}
          <div
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === 0
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 container-padding py-8 xs:py-12 sm:py-20 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 md:gap-8 lg:gap-10 xl:gap-16 w-full items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="mb-4 xs:mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold">
                      🚀 Advanced Program
                    </span>
                  </div>
                  <h1 className="hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 xs:mb-6 leading-tight">
                    Full Stack with <br className="hidden xs:block" />
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Data Science
                    </span>
                  </h1>
                  <p className="hero-description text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 xs:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Master the complete web development stack plus cutting-edge
                    data science technologies. Build intelligent applications
                    with AI/ML integration.
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="tech-stack-container flex flex-wrap justify-center lg:justify-start gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-6 xs:mb-8">
                    {[
                      "JavaScript",
                      "Python",
                      "Machine Learning",
                      "Artificial Intelligence",
                    ].map((tech, index) => (
                      <div
                        key={tech}
                        className="tech-icon bg-opacity-20 backdrop-blur-sm rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 flex items-center space-x-1 xs:space-x-2"
                      >
                        <div
                          className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded flex items-center justify-center ${
                            index === 0
                              ? "bg-orange-500"
                              : index === 1
                              ? "bg-blue-500"
                              : index === 2
                              ? "bg-green-500"
                              : "bg-purple-500"
                          }`}
                        >
                          <span className="text-xs xs:text-xs md:text-sm font-bold text-white">
                            {index === 0
                              ? "JS"
                              : index === 1
                              ? "Py"
                              : index === 2
                              ? "ML"
                              : "AI"}
                          </span>
                        </div>
                        <span className="text-xs xs:text-xs sm:text-sm font-medium text-white hidden xs:block">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="cta-buttons flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
                    <Link  className="cta-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm xs:text-base">
                      Start Learning
                    </Link>
                    <button className="cta-button border-2 border-white text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base">
                      View Curriculum
                    </button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden sm:flex justify-center lg:justify-center order-1 lg:order-2">
                  <div className="relative">
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl opacity-20 absolute -top-2 xs:-top-4 -left-2 xs:-left-4"></div>
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-cyan-400 to-purple-600 bg-opacity-5 backdrop-blur-sm rounded-3xl p-3 xs:p-4 md:p-6 lg:p-8 relative">
                      <TechCard
                        icon={
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        }
                        title="Full Stack + Data Science"
                        items={[
                          "Frontend Development",
                          "Backend Development",
                          "Data Analysis",
                          "Machine Learning",
                          "AI Integration",
                        ]}
                        colors={[
                          "bg-cyan-400",
                          "bg-blue-400",
                          "bg-purple-400",
                          "bg-pink-400",
                          "bg-green-400",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Full Stack Tech Stack */}
          <div
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === 1
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 container-padding py-8 xs:py-12 sm:py-20 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 md:gap-8 lg:gap-10 xl:gap-16 w-full items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="mb-4 xs:mb-6">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold">
                      💻 Core Program
                    </span>
                  </div>
                  <h1 className="hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 xs:mb-6 leading-tight">
                    Full Stack <br className="hidden xs:block" />
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      Development
                    </span>
                  </h1>
                  <p className="hero-description text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 xs:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Become a complete web developer with expertise in both
                    frontend and backend technologies. Build modern, scalable
                    web applications.
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="tech-stack-container flex flex-wrap justify-center lg:justify-start gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-6 xs:mb-8">
                    {["React", "Node.js", "MongoDB", "HTML/CSS"].map(
                      (tech, index) => (
                        <div
                          key={tech}
                          className="tech-icon bg-opacity-20 backdrop-blur-sm rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 flex items-center space-x-1 xs:space-x-2"
                        >
                          <div
                            className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded flex items-center justify-center ${
                              index === 0
                                ? "bg-blue-600"
                                : index === 1
                                ? "bg-green-600"
                                : index === 2
                                ? "bg-green-500"
                                : "bg-orange-500"
                            }`}
                          >
                            <span className="text-xs xs:text-xs md:text-sm font-bold text-white">
                              {index === 0
                                ? "R"
                                : index === 1
                                ? "N"
                                : index === 2
                                ? "M"
                                : "H"}
                            </span>
                          </div>
                          <span className="text-xs xs:text-xs sm:text-sm font-medium text-white hidden xs:block">
                            {tech}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="cta-buttons flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button className="cta-button bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm xs:text-base">
                      Start Learning
                    </button>
                    <button className="cta-button border-2 border-white text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base">
                      View Curriculum
                    </button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden sm:flex justify-center lg:justify-center order-1 lg:order-2">
                  <div className="relative">
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-green-400 to-blue-600 rounded-3xl opacity-20 absolute -top-2 xs:-top-4 -left-2 xs:-left-4"></div>
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-green-400 to-blue-600 bg-opacity-10 backdrop-blur-sm rounded-3xl p-3 xs:p-4 md:p-6 lg:p-8 relative">
                      <TechCard
                        icon={
                          <path
                            fillRule="evenodd"
                            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        }
                        title="Full Stack Development"
                        items={[
                          "Frontend Frameworks",
                          "Backend APIs",
                          "Database Management",
                          "Cloud Deployment",
                          "Version Control",
                        ]}
                        colors={[
                          "bg-blue-400",
                          "bg-green-400",
                          "bg-yellow-400",
                          "bg-purple-400",
                          "bg-pink-400",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Data Science Tech Stack */}
          <div
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === 2
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 container-padding py-8 xs:py-12 sm:py-20 h-full flex items-center">
              <div className="grid lg:grid-cols-2 w-full items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="mb-4 xs:mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold">
                      📊 Analytics Program
                    </span>
                  </div>
                  <h1 className="hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 xs:mb-6 leading-tight">
                    Data Science <br className="hidden xs:block" />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Tech Stack
                    </span>
                  </h1>
                  <p className="hero-description text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 xs:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Master the art of data analysis, machine learning, and AI.
                    Transform raw data into actionable insights and build
                    intelligent systems.
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="tech-stack-container flex flex-wrap justify-center lg:justify-start gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-6 xs:mb-8">
                    {["Python", "TensorFlow", "Scikit-learn", "Pandas"].map(
                      (tech, index) => (
                        <div
                          key={tech}
                          className="tech-icon bg-opacity-20 backdrop-blur-sm rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 flex items-center space-x-1 xs:space-x-2"
                        >
                          <div
                            className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded flex items-center justify-center ${
                              index === 0
                                ? "bg-blue-500"
                                : index === 1
                                ? "bg-orange-500"
                                : index === 2
                                ? "bg-red-500"
                                : "bg-yellow-500"
                            }`}
                          >
                            <span className="text-xs xs:text-xs md:text-sm font-bold text-white">
                              {index === 0
                                ? "Py"
                                : index === 1
                                ? "TF"
                                : index === 2
                                ? "SK"
                                : "PD"}
                            </span>
                          </div>
                          <span className="text-xs xs:text-xs sm:text-sm font-medium text-white hidden xs:block">
                            {tech}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="cta-buttons flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button className="cta-button bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm xs:text-base">
                      Start Learning
                    </button>
                    <button className="cta-button border-2 border-white text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base">
                      View Curriculum
                    </button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden sm:flex justify-center lg:justify-center order-1 lg:order-2">
                  <div className="relative">
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-3xl opacity-20 absolute -top-2 xs:-top-4 -left-2 xs:-left-4"></div>
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-purple-400 to-pink-600 bg-opacity-10 backdrop-blur-sm rounded-3xl p-3 xs:p-4 md:p-6 lg:p-8 relative">
                      <TechCard
                        icon={
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        }
                        title="Data Science"
                        items={[
                          "Data Analysis",
                          "Machine Learning",
                          "Deep Learning",
                          "Data Visualization",
                          "Statistical Analysis",
                        ]}
                        colors={[
                          "bg-purple-400",
                          "bg-pink-400",
                          "bg-blue-400",
                          "bg-green-400",
                          "bg-yellow-400",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4: Graphics and Animation */}
          <div
            className={`slide absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === 3
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 container-padding py-8 xs:py-12 sm:py-20 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 md:gap-8 lg:gap-10 xl:gap-16 w-full items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="mb-4 xs:mb-6">
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold">
                      🎨 Creative Program
                    </span>
                  </div>
                  <h1 className="hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 xs:mb-6 leading-tight">
                    Graphics & <br className="hidden xs:block" />
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      Animation
                    </span>
                  </h1>
                  <p className="hero-description text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 xs:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Create stunning visual experiences with cutting-edge design
                    tools. Master 3D modeling, animation, and digital art for
                    games, films, and web.
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="tech-stack-container flex flex-wrap justify-center lg:justify-start gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-6 xs:mb-8">
                    {["Blender", "Photoshop", "After Effects", "Unity"].map(
                      (tech, index) => (
                        <div
                          key={tech}
                          className="tech-icon bg-opacity-20 backdrop-blur-sm rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 flex items-center space-x-1 xs:space-x-2"
                        >
                          <div
                            className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded flex items-center justify-center ${
                              index === 0
                                ? "bg-orange-600"
                                : index === 1
                                ? "bg-blue-600"
                                : index === 2
                                ? "bg-purple-600"
                                : "bg-green-600"
                            }`}
                          >
                            <span className="text-xs xs:text-xs md:text-sm font-bold text-white">
                              {index === 0
                                ? "Bl"
                                : index === 1
                                ? "Ps"
                                : index === 2
                                ? "Ae"
                                : "Un"}
                            </span>
                          </div>
                          <span className="text-xs xs:text-xs sm:text-sm font-medium text-white hidden xs:block">
                            {tech}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="cta-buttons flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button className="cta-button bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm xs:text-base">
                      Start Learning
                    </button>
                    <button className="cta-button border-2 border-white text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base">
                      View Curriculum
                    </button>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="hidden sm:flex justify-center lg:justify-center order-1 lg:order-2">
                  <div className="relative">
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-orange-400 to-red-600 rounded-3xl opacity-20 absolute -top-2 xs:-top-4 -left-2 xs:-left-4"></div>
                    <div className="visual-card w-48 h-48 xs:w-64 xs:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-orange-400 to-red-600 bg-opacity-10 backdrop-blur-sm rounded-3xl p-3 xs:p-4 md:p-6 lg:p-8 relative">
                      <TechCard
                        icon={
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        }
                        title="Graphics & Animation"
                        items={[
                          "3D Modeling",
                          "Motion Graphics",
                          "Digital Art",
                          "Game Design",
                          "Visual Effects",
                        ]}
                        colors={[
                          "bg-orange-400",
                          "bg-red-400",
                          "bg-yellow-400",
                          "bg-purple-400",
                          "bg-pink-400",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-4 xs:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2 xs:space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`slide-dot w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white w-4 xs:w-6"
                    : "bg-white bg-opacity-50 hover:bg-opacity-100"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="nav-arrow absolute left-2 xs:left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur-sm rounded-full p-2 xs:p-2 sm:p-3 transition-all duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 text-black" />
        </button>
        <button
          className="nav-arrow absolute right-2 xs:right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-40 backdrop-blur-sm rounded-full p-2 xs:p-2 sm:p-3 transition-all duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-black" />
        </button>
      </section>
    </>
  );
};

// Reusable TechCard component
const TechCard = ({ icon, title, items, colors }) => (
  <div className="text-center text-white h-full flex flex-col justify-center">
    <div className="mb-2 xs:mb-3 md:mb-4 lg:mb-6">
      <svg
        className="w-8 h-8 xs:w-12 xs:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-2 xs:mb-4"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        {icon}
      </svg>
    </div>
    <h3 className="text-sm xs:text-lg sm:text-xl md:text-2xl font-bold mb-2 xs:mb-4">
      {title}
    </h3>
    <div className="space-y-1 xs:space-y-1.5 md:space-y-2 lg:space-y-3 text-left text-xs xs:text-sm">
      {items.map((item, index) => (
        <div key={item} className="flex items-center">
          <div
            className={`w-1.5 h-1.5 xs:w-2 xs:h-2 ${colors[index]} rounded-full mr-2 xs:mr-3 flex-shrink-0`}
          ></div>
          <span className="leading-tight">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HeroSlider;
