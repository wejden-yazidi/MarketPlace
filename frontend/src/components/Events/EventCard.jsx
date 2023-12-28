import React from 'react';
import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = () => {
    return (
        <div  className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
          <div className="w-full lg:-w[50%] m-auto">
          <img src="https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
      <h2 className={`${styles.productTitle}`}>MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty</h2>
        <p>Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
             D
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
             D
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown  />
       </div>
        </div>
    );
};

export default EventCard;
