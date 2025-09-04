import React from "react";
import SliderPartners from "./Sliderparteners";

const StatisticsSection = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Total Students */}
          <div className="stat-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <div className="text-6xl mb-4 icon-bounce">🎓</div>
            <div className="counter text-5xl font-bold text-white mb-2">
              74,000+
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Total Students
            </h3>
          </div>

          {/* Placed Students */}
          <div className="stat-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <div
              className="text-6xl mb-4 icon-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              💼
            </div>
            <div className="counter text-5xl font-bold text-white mb-2">
              12,000+
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Placed Students
            </h3>
          </div>

          {/* Years of Experience */}
          <div className="stat-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <div
              className="text-6xl mb-4 icon-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              ⭐
            </div>
            <div className="counter text-5xl font-bold text-white mb-2">
              26+
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Years of Experience
            </h3>
          </div>

          {/* Hiring Partners */}
          <div className="stat-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <div
              className="text-6xl mb-4 icon-bounce"
              style={{ animationDelay: "0.6s" }}
            >
              🤝
            </div>
            <div className="counter text-5xl font-bold text-white mb-2">
              111+
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Hiring Partners
            </h3>
          </div>
        </div>
      </div>
      {/* <SliderPartners/> */}
    </section>
  );
};

export default StatisticsSection;
