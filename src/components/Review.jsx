import React from "react";
import Marquee from "react-fast-marquee";
import review from "../data/review";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Package() {
  return (
    <div className="slider pb-16 bg-[#1c1929]">
      <div className="slider-title">
        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Our Students Reviews
        </h3>
      </div>
      <div>
        <Marquee speed={50} delay={0}>
          <ul className=" flex gap-4 mx-2">
            {review.map((com, index) => {
              const { id,image_path,image_extension } = com;
              return (
                <li key={index} className="list-none ml-0">
                  <div className="rounded-lg text-center bg-white flex justify-center items-center border-2 border-red-950" style={{width:"500px", height:"250px" }}>
                    <LazyLoadImage src={`${image_path}${id}.${image_extension}`} alt={image_path} effect="blur" style={{width:"400px", height:"200px" , objectFit:"contain"}}/>
                  </div>
                </li>
              );
            })}
          </ul>
        </Marquee>
      </div>
    </div>
  );
}

export default Package;







