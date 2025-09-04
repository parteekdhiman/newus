import React, { useEffect, useRef } from "react";
import { coursesList } from "../data/courseslist";
import { Link, Navigate } from "react-router-dom";
import { slugify } from "../utils/slugify";
const Courses = () => {
  const courseCardsRef = useRef([]);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const currentCards = courseCardsRef.current;
    currentCards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      currentCards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const _handleViewCourseClick = (courseName) => {
    Navigate(`/coursescontent?course=${courseName}`);
    console.log(courseName);
  };

  return (
    <>
    <title>Newus Dharamshala || Courses</title>
      <div className="bg-gray-50 font-sans">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Flagship Programs
            </h1>
            <p className="text-gray-600 text-lg">
              Transform your career with our comprehensive programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Array.isArray(coursesList) &&
              coursesList.length > 0 &&
              coursesList
                .filter((fill) => fill.coursetype === "Flagship")
                .map((course) => {
                  const {
                    name,
                    description,
                    duration,
                    image,
                    placement,
                    type,
                  } = course;
                  const id = slugify(name);
                  return (
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" key={id}>
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-48 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {type}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-3">
                        <div className="w-full flex gap-3 pb-2">
                          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-emerald-600 to-teal-800 rounded-full px-3 py-1 text-white text-xs">
                            {duration}
                          </span>
                          {placement && (
                            <span className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-3 py-1 text-white text-xs">
                              100% Job Assistance
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{name}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {description.substring(0, 100)}...
                        </p>

                        {/* Author & Button */}
                        <div className="flex items-center justify-between">
                          <Link to={`/courses/${id}`} className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition">
                            View course
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="text-center mb-16 mt-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Placement Assistance Programs
            </h1>
            <p className="text-gray-600 text-lg">
              Transform your career with our comprehensive programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Array.isArray(coursesList) &&
              coursesList.length > 0 &&
              coursesList
                .filter((fill) => fill.coursetype === "Assistance")
                .map((course) => {
                  const {
                    name,
                    description,
                    duration,
                    image,
                    placement,
                    type,
                  } = course;
                  const id = slugify(name);
                  return (
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" key={id}>
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-48 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {type}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-3">
                        <div className="w-full flex gap-3 pb-2">
                          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-emerald-600 to-teal-800 rounded-full px-3 py-1 text-white text-xs">
                            {duration}
                          </span>
                          {placement && (
                            <span className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-3 py-1 text-white text-xs">
                              100% Job Assistance
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{name}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {description.substring(0, 100)} ...
                        </p>

                        {/* Author & Button */}
                        <div className="flex items-center justify-between">
                          <Link to={`/courses/${id}`} className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition">
                            View course
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="text-center mb-16 mt-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Short Term Programs
            </h1>
            <p className="text-gray-600 text-lg">
              Transform your career with our comprehensive programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Array.isArray(coursesList) &&
              coursesList.length > 0 &&
              coursesList
                .filter((fill) => fill.coursetype === "Short")
                .map((course) => {
                  const {
                    name,
                    description,
                    duration,
                    image,
                    placement,
                    type,
                  } = course;
                  const id = slugify(name);
                  return (
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" key={id}>
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-48 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {type}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-3">
                        <div className="w-full flex gap-3 pb-2">
                          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-emerald-600 to-teal-800 rounded-full px-3 py-1 text-white text-xs">
                            {duration}
                          </span>
                          {placement && (
                            <span className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-3 py-1 text-white text-xs">
                              100% Job Assistance
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{name}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {description.substring(0, 100)} ...
                        </p>

                        {/* Author & Button */}
                        <div className="flex items-center justify-between">
                          <Link to={`/courses/${id}`} className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition">
                            View course
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
