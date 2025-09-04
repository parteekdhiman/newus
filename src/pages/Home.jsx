import React from "react";
import HeroSlider from "../components/HeroSlider";
import ProfessionalServices from "../components/ProfessionalServices";
import Into from "../components/Into";
import StatisticsSection from "../components/StatisticsSection";
import SliderPartners from "../components/Sliderparteners";
import BusinessPartners from "../components/BusinessPartners";

function Home() {
  return (
    <>
      <HeroSlider />
      <section className="py-20 bg-white container mx-auto px-6">
        <Into />
      </section>
      <SliderPartners />
      <StatisticsSection />
      <ProfessionalServices />
      <BusinessPartners />
    </>
  );
}

export default Home;
