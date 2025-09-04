import React from "react";

function Into() {
  return (
    <>
      {/* Our Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Training Programs */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Training Programs
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Rigorous training programs that empower individuals with
            cutting-edge skills and knowledge for the evolving tech landscape.
          </p>
        </div>

        {/* School Solutions */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            School Solutions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Cutting-edge technology and methodologies for educational
            institutions, fostering creativity and holistic development.
          </p>
        </div>

        {/* Study Abroad */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Study Abroad</h3>
          <p className="text-gray-600 leading-relaxed">
            Global opportunities with comprehensive guidance on college
            selection, applications, and visa strategies.
          </p>
        </div>

        {/* Recruitment Services */}
        <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Newus Recruiters
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Establishing meaningful connections between talent and leading
            organizations for career advancement.
          </p>
        </div>

        {/* Higher Education */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Higher Education
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Customized guidance on admissions, scholarships, and career path
            selection for academic success.
          </p>
        </div>

        {/* Development Programs */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Development Center
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Leadership training, soft skills enhancement, and career counseling
            for comprehensive personal growth.
          </p>
        </div>
      </div>
    </>
  );
}

export default Into;
