import React from "react";
import partner from "../data/BusinessPartners";
import {Link} from "react-router-dom"
const BusinessPartners = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Business Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to collaborate with industry-leading companies that
            share our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-6">
          {Array.isArray(partner) &&
            partner.length > 0 &&
            partner.map((item, i) => {
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex items-center justify-center group cursor-pointer">
                  <Link to={item.link}><img src={item.img} alt={item.name} className="h-16 object-contain"/></Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
