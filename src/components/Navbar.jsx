import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { coursesList } from "../data/courseslist";
import { slugify } from "../utils/slugify";
const NavbarWithDropdown = () => {
  const coursesBtn = useRef(null);
  const coursesDropdown = useRef(null);
  const chevron = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dropdown with proper state management
  const toggleDropdown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  }, []);

  // Close dropdown
  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle link clicks - close both dropdowns
  const handleLinkClick = useCallback(
    (e, to) => {
      // e.preventDefault();
      console.log(`Navigating to: ${to}`);
      closeDropdown();
      closeMobileMenu();
    },
    [closeDropdown, closeMobileMenu]
  );

  // Handle outside clicks and escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isDropdownOpen &&
        coursesBtn.current &&
        coursesDropdown.current &&
        !coursesBtn.current.contains(e.target) &&
        !coursesDropdown.current.contains(e.target)
      ) {
        closeDropdown();
      }

      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeDropdown();
        closeMobileMenu();
      }
    };

    if (isDropdownOpen || isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen, isMobileMenuOpen, closeDropdown, closeMobileMenu]);

  // Handle chevron rotation
  useEffect(() => {
    if (chevron.current) {
      chevron.current.style.transform = isDropdownOpen
        ? "rotate(180deg)"
        : "rotate(0deg)";
    }
  }, [isDropdownOpen]);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                >
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Newus
                  </h1>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  onClick={(e) => handleLinkClick(e, "/about")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                >
                  About
                </Link>

                {/* Courses Dropdown Button */}
                <div className="relative">
                  <button
                    ref={coursesBtn}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                    aria-controls="coursesDropdown"
                    aria-haspopup="true"
                  >
                    <span>Courses</span>
                    <svg
                      ref={chevron}
                      className="w-4 h-4 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <Link
                  to="/contact"
                  onClick={(e) => handleLinkClick(e, "/contact")}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/get-started"
                onClick={(e) => handleLinkClick(e, "/get-started")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobileMenu"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          ref={mobileMenuRef}
          className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={(e) => handleLinkClick(e, "/")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={(e) => handleLinkClick(e, "/about")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              About
            </Link>
            <Link
              to="/courses"
              onClick={(e) => handleLinkClick(e, "/courses")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Courses
            </Link>
            <Link
              to="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Contact
            </Link>
            <Link
              to="/get-started"
              onClick={(e) => handleLinkClick(e, "/get-started")}
              className="block mx-3 mt-4 px-4 py-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Desktop Dropdown Menu */}
      <div
        id="coursesDropdown"
        ref={coursesDropdown}
        className={`bg-white shadow-xl border-b border-gray-100 absolute w-full z-40 transition-all duration-300 ease-out ${
          isDropdownOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
        role="menu"
        aria-labelledby="coursesBtn"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 pb-2">
                Programming
              </h3>
              <div className="space-y-3">
                {coursesList
                  .filter(
                    (fill) =>
                      fill.navbar === true && fill.type === "Programming"
                  )
                  .map((category) => {
                    const id = slugify(category.name);
                    return (
                      <Link
                        key={id}
                        to={`/courses/${id}`}
                        onClick={(e) => handleLinkClick(e, `/courses/${id}`)}
                        className="block group hover:bg-blue-50"
                        role="menuitem"
                      >
                        <div
                          className={`flex items-center space-x-3 p-3 rounded-lg   transition-colors duration-200`}
                        >
                          <div
                            className={`w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white font-bold text-sm px-2 py-1 rounded bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-800">
                              JS
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-gray-900 truncate`}>
                              {category.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 pb-2">
                Design
              </h3>
              <div className="space-y-3">
                {coursesList
                  .filter(
                    (fill) => fill.navbar === true && fill.type === "Design"
                  )
                  .map((category) => {
                    const id = slugify(category.name);

                    return (
                      <Link
                        key={id}
                        to={`/courses/${id}`}
                        onClick={(e) => handleLinkClick(e, `/courses/${id}`)}
                        className="block group hover:bg-purple-50"
                        role="menuitem"
                      >
                        <div
                          className={`flex items-center space-x-3 p-3 rounded-lg} transition-colors duration-200`}
                        >
                          <div
                            className={`w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white font-bold text-sm px-2 py-1 rounded bg-gradient-to-r from-pink-500 to-rose-600  hover:bg-purple-50">
                              JS
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-gray-900 truncate`}>
                              {category.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 pb-2">
                Business
              </h3>
              <div className="space-y-3">
                {coursesList
                  .filter(
                    (fill) => fill.navbar === true && fill.type === "Business"
                  )
                  .map((category) => {
                    const id = slugify(category.name);

                    return (
                      <Link
                        key={id}
                        to={`/courses/${id}`}
                        onClick={(e) => handleLinkClick(e, `/courses/${id}`)}
                        className="block group hover:bg-green-50"
                        role="menuitem"
                      >
                        <div
                          className={`flex items-center space-x-3 p-3 rounded-lg} transition-colors duration-200`}
                        >
                          <div
                            className={`w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white font-bold text-sm px-2 py-1 rounded bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-emerald-600 to-teal-800">
                              BS
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`font-medium text-gray-900 truncate`}>
                              {category.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Ready to start learning?
                </h4>
                <p className="text-gray-600">
                  Join thousands of students already learning with us.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/courses"
                  onClick={(e) => handleLinkClick(e, "/courses")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default NavbarWithDropdown;
