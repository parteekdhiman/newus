export default function ProfessionalServices() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Professional Services
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Empowering your growth through expert guidance and certification
        </p>
      </header>

      {/* Services Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Online Learning Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-bounce">
                <svg
                  className="w-10 h-10 text-blue-600"
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Online Learning
              </h3>
            </div>
          </div>

          {/* ISO Certification Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-center">
              <div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ISO Certification
              </h3>
            </div>
          </div>

          {/* Career Mentoring Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div
                className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 icon-bounce"
                style={{ animationDelay: "1s" }}
              >
                <svg
                  className="w-10 h-10 text-purple-600"
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Career Mentoring
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
