import React, { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    const goBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        alert('🔙 No previous page to go back to! 😊');
      }
    };

    const performSearch = () => {
      const searchInput = document.getElementById('searchInput');
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        alert(`🔍 Searching for: "${searchTerm}"\n\nIn a real application, this would perform a site search.`);
        searchInput.value = '';
      } else {
        alert('Please enter something to search for! 😊');
      }
    };

    const _navigateTo = (page) => {
      alert(`🌟 Navigating to ${page} page...\n\nIn a real application, this would take you to the ${page} section.`);
    };

    const _goHome = () => {
      alert('🏠 Navigating to home page...');
      // window.location.href = '/'; // Uncomment for actual navigation
    };

    // Add keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && document.getElementById('searchInput') === document.activeElement) {
        performSearch();
      }
      if (e.key === 'Escape') {
        goBack();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Add interactive hover effects
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(element => {
      const handleMouseEnter = () => {
        element.style.transform = 'scale(1.05)';
      };
      const handleMouseLeave = () => {
        element.style.transform = 'scale(1)';
      };
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Floating 404 Numbers */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-white opacity-20 select-none">
            <span className="floating inline-block">4</span>
            <span className="floating inline-block mx-4">0</span>
            <span className="floating inline-block">4</span>
          </div>

          {/* Astronaut SVG */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bounce-gentle">
            <svg width="120" height="120" viewBox="0 0 120 120" className="text-white">
              {/* Astronaut helmet */}
              <circle cx="60" cy="45" r="25" fill="currentColor" opacity="0.9" />
              <circle cx="60" cy="45" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />

              {/* Astronaut body */}
              <rect x="45" y="65" width="30" height="35" rx="15" fill="currentColor" opacity="0.8" />

              {/* Arms */}
              <circle cx="35" cy="75" r="8" fill="currentColor" opacity="0.7" />
              <circle cx="85" cy="75" r="8" fill="currentColor" opacity="0.7" />

              {/* Legs */}
              <rect x="50" y="95" width="8" height="20" rx="4" fill="currentColor" opacity="0.7" />
              <rect x="62" y="95" width="8" height="20" rx="4" fill="currentColor" opacity="0.7" />

              {/* Helmet reflection */}
              <ellipse cx="55" cy="40" rx="8" ry="12" fill="white" opacity="0.3" />

              {/* Face */}
              <circle cx="55" cy="45" r="2" fill="#333" />
              <circle cx="65" cy="45" r="2" fill="#333" />
              <path d="M 58 50 Q 60 52 62 50" stroke="#333" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="glass-effect rounded-2xl p-8 mb-8 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-white opacity-90 mb-6 leading-relaxed">
            Looks like this page got lost in space! 🚀<br />
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => alert('🏠 Navigating to home page...')}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🏠 Go Home
            </button>
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  alert('🔙 No previous page to go back to!');
                }
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-200"
            >
              ← Go Back
            </button>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 text-white opacity-70 text-sm">
          <p>💡 Fun fact: The first 404 error was at CERN in 1992!</p>
        </div>
      </div>

      {/* Floating Stars Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-white opacity-30 pulse-slow">⭐</div>
        <div className="absolute top-40 right-20 text-white opacity-40 pulse-slow">✨</div>
        <div className="absolute bottom-32 left-20 text-white opacity-35 pulse-slow">🌟</div>
        <div className="absolute bottom-20 right-10 text-white opacity-30 pulse-slow">⭐</div>
        <div className="absolute top-60 left-1/2 text-white opacity-25 pulse-slow">✨</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
