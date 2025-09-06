import { useState, useEffect } from "react";
import { coursesList } from "../data/courseslist";
import { slugify } from "../utils/slugify";
import { Link } from "react-router-dom";
export default function ModernNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Close mobile menu on desktop
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    const handleClickOutside = (event) => {
      // Close mobile menu if clicking outside
      if (mobileMenuOpen && !event.target.closest("nav")) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
    }
    
    .dropdown-enter {
      opacity: 0;
      transform: translateY(-10px);
    }
    
    .dropdown-enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s ease-out;
    }
    
    .mobile-menu-enter {
      opacity: 0;
      transform: translateX(-100%);
    }
    
    .mobile-menu-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 0.3s ease-out;
    }
    
    .hamburger-line {
      transition: all 0.3s ease;
    }
    
    .hamburger-active .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger-active .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger-active .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    /* Hover dropdown styles */
    .dropdown-container:hover .dropdown-menu {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }

    .dropdown-menu {
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.2s ease-out;
      display: none;
    }

    .dropdown-container:hover .dropdown-arrow {
      transform: rotate(180deg);
    }
  `;

  return (
    <div className="bg-gray-50">
      <style>{styles}</style>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-indigo-600">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  newus
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </Link>

                {/* Desktop Dropdown */}
                <div className="relative dropdown-container">
                  <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center dropdown-trigger">
                    Programs
                    <svg
                      className="ml-1 h-4 w-4 transition-transform duration-200 dropdown-arrow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {/* Full Width Dropdown Menu */}
                  <div
                    className="dropdown-menu absolute left-0 right-0 top-full w-screen bg-white shadow-lg border-t border-gray-200 z-40"
                    style={{ left: "calc(-54vw + 36%)", width: "100vw" }}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/*Programming */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <svg
                              className="mr-3 h-6 w-6 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              ></path>
                            </svg>
                            Programming
                          </h3>
                          <div className="space-y-2">
                            {coursesList
                              .filter(
                                (fill) =>
                                  fill.navbar === true &&
                                  fill.type === "Programming"
                              )
                              .slice(0, 5)
                              .map((item, i) => {
                                const link = slugify(item.name);
                                return (
                                  <Link
                                    key={i}
                                    to={`/courses/${link}`}
                                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-150"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              })}
                          </div>
                        </div>

                        {/* Design */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <svg
                              className="mr-3 h-6 w-6 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              ></path>
                            </svg>
                            Design
                          </h3>
                          <div className="space-y-2">
                            {coursesList
                              .filter(
                                (fill) =>
                                  fill.navbar === true && fill.type === "Design"
                              )
                              .map((item, i) => {
                                const link = slugify(item.name);
                                return (
                                  <Link
                                    key={i}
                                    to={`/courses/${link}`}
                                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-150"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              })}
                          </div>
                        </div>

                        {/* Business */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <svg
                              className="mr-3 h-6 w-6 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 5l2 2"
                              ></path>
                            </svg>
                            Business
                          </h3>
                          <div className="space-y-2">
                            {coursesList
                              .filter(
                                (fill) =>
                                  fill.navbar === true &&
                                  fill.type === "Business"
                              )
                              .map((item, i) => {
                                const link = slugify(item.name);
                                return (
                                  <Link
                                    key={i}
                                    to={`/courses/${link}`}
                                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-150"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              })}
                          </div>
                        </div>

                        {/* Short Term */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            <svg
                              className="mr-3 h-6 w-6 text-indigo-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            Short Term
                          </h3>
                          <div className="space-y-2">
                            {coursesList
                              .filter(
                                (fill) =>
                                  fill.navbar === true &&
                                  fill.coursetype === "Short"
                              )
                              .map((item, i) => {
                                const link = slugify(item.name);
                                return (
                                  <Link
                                    key={i}
                                    to={`/courses/${link}`}
                                    className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-150"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              })}
                          </div>
                        </div>
                      </div>

                      {/* Call to Action Section */}
                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              Ready to get started?
                            </h4>
                            <p className="text-sm text-gray-600">
                              Let's discuss your project and bring your ideas to
                              life.
                            </p>
                          </div>
                          <div className="flex space-x-4">
                            <Link
                              to="/courses"
                              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                              Browse All Courses
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Portfolio</a> */}
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link
                to="/courses"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className={`hamburger-menu p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200 ${
                  mobileMenuOpen ? "hamburger-active" : ""
                }`}
                onClick={toggleMobileMenu}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="hamburger-line block h-0.5 w-6 bg-current mb-1"></span>
                  <span className="hamburger-line block h-0.5 w-6 bg-current mb-1"></span>
                  <span className="hamburger-line block h-0.5 w-6 bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden absolute z-80 w-full ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              onClick={toggleMobileMenu}
              to="/"
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href="/about"
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </Link>

            {/* Mobile Dropdown */}
            <Link
              onClick={toggleMobileMenu}
              to="/courses"
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            >
              Programs
            </Link>
            <Link
              onClick={toggleMobileMenu}
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 pb-2">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
