import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { coursesList } from "../data/courseslist";


function SliderCards() {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-white to-purple-50">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>

      <div className="relative max-w-7xl mx-auto px-6">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="pb-12"
        >
          {coursesList.filter((fill) => fill.slider === true).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3">
                  <div className="w-full flex gap-3 pb-2">
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-emerald-600 to-teal-800 rounded-full px-3 py-1 text-white text-xs">
                          {item.duration}
                        </span>
                        { item.placement && <span className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-3 py-1 text-white text-xs">
                          100% Job Assistance
                        </span>}
                      </div>
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description.substring(0, 120)}... read more
                  </p>

                  {/* Author & Button */}
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:opacity-90 transition">
                      View course
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev !absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 text-purple-600"></div>
        <div className="swiper-button-next !absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 text-purple-600"></div>
      </div>
    </div>
  );
}

export default SliderCards;
