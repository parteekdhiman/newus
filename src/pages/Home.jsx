import React from "react";
import { Suspense, lazy } from "react";
const HeroSlider = lazy(() => import("../components/HeroSlider"));
const ProfessionalServices = lazy(() =>
  import("../components/ProfessionalServices")
);
const Into = lazy(() => import("../components/Into"));
const StatisticsSection = lazy(() => import("../components/StatisticsSection"));
const SliderPartners = lazy(() => import("../components/Sliderparteners"));
const BusinessPartners = lazy(() => import("../components/BusinessPartners"));
const Assistance = lazy(() => import("../components/Assistance"));
const Package = lazy(() => import("../components/Package"));
const Review = lazy(() => import("../components/Review"));
function Home() {
  return (
    <>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <HeroSlider />
        <section className="py-20 bg-white container mx-auto px-6">
          <Into />
        </section>
        <SliderPartners />
        <StatisticsSection />
        <ProfessionalServices />
        <BusinessPartners />
        <Assistance />
        <Package />
        <Review />
      </Suspense>
    </>
  );
}

export default Home;
