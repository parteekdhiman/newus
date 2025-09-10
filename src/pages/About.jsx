import React, { useEffect } from "react";
import Into from "../components/Into";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function About() {
  useEffect(() => {
    document.querySelectorAll("button").forEach((button) => {
      const handleClick = function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      };
      button.addEventListener("click", handleClick);
      return () => {
        button.removeEventListener("click", handleClick);
      };
    });
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    }, observerOptions);
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, []); 
  return (
    <>
    <title>Newus Dharamshala || About us</title>
    <div className="bg-white">
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
       
        <div className="absolute inset-0">
          <div className="floating-animation absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-animation absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-animation absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="text-center lg:text-left fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your IT
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Learning Hub
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Welcome to Newus, formerly NIIT Dharamshala Center. We're a
                dynamic hub at the leading edge of information technology,
                dedicated to transforming lives through comprehensive education
                and career solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  Watch Our Story
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
               
                <LazyLoadImage effect="blur" src="https://newus.in/images/other/about_1.jpg" alt="about" className=" w-full max-w-lg h-96 rounded-3xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                2000+
              </div>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">
                Study Abroad Placements
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                15+
              </div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                95%
              </div>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Newus, earlier named as NIIT Dharamshala Center, is your gateway
              to a transformative educational journey. Our dedication to
              transforming lives features a huge range of services designed to
              empower you for success in today's digital world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <LazyLoadImage effect="blur" className=" w-full h-110 rounded-3xl shadow-xl" src="https://newus.in/images/other/about_2.jpg" alt="ceo"/>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Through our rigorous <strong>Training programs</strong>, we
                empower individuals with the abilities and knowledge needed to
                thrive in an ever-evolving global landscape. In collaboration
                with educational establishments, our{" "}
                <strong>School Solutions</strong> introduce cutting-edge
                technology and methodologies, creating environments that foster
                creativity and holistic improvement.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Newus opens doorways to worldwide opportunities with our{" "}
                <strong>Study Abroad programs</strong>, guiding students through
                college choice, applications, and visa strategies. Our dedicated
                division, <strong>Newus Recruiters</strong>, establishes
                meaningful connections between expertise and main groups.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Navigating the complex landscape of{" "}
                <strong>Higher Education</strong>, we provide customized
                steerage on admissions, scholarships, and path picks. Beyond
                academics, our commitment to <strong>Development</strong>{" "}
                encompasses management training, smooth abilities enhancement,
                and profession counseling, making sure people are well-organized
                for fulfillment in all components of life.
              </p>
            </div>
          </div>

          <Into/>

          <div className="mt-20 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At Newus, we see education as a transformative force, and we
              invite you to engage with us to craft a tailor-made path closer to
              a brighter and more pleasurable destiny. Together, we'll unlock
              your potential and shape your future success.
            </p>
          </div>
        </div>
      </section>

      

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we
              work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
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
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push boundaries and embrace new technologies to
                deliver cutting-edge solutions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Honesty and transparency form the foundation of all our
                relationships and business practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
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
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of teamwork and building strong
                partnerships with our clients.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for perfection in every detail and never settle for
                anything less than our best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality. Get in touch with us today and
            discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
