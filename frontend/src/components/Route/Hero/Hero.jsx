import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-cover bg-center ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg)",
      }}
    >
      <div className={`${styles.section} w-full 800px:w-[60%] text-center text-white py-16`}>
        <h1
          className={`text-4xl md:text-6xl font-semibold leading-tight mb-4 text-[#FEB139]`}
        >
          Discover the Art <br /> of Home Decor
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#FEB139]">
          Elevate your living space with our curated selection of unique and inspiring home decor pieces.
          Immerse yourself in a world of creativity, where every item tells a story.
          Explore the possibilities for a home that reflects your style and personality.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} text-lg`}>
            <span className="font-semibold">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
