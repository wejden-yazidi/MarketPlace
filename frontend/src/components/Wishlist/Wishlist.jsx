import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../../styles/styles";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      id: 1,
      name: "product1",
      price: 100,
      description: "test",
      image: "https://shopo.quomodothemes.website/assets/images/product-1.jpg",
    },
    {
      id: 2,
      name: "product2",
      price: 200,
      description: "test",
      image: "https://shopo.quomodothemes.website/assets/images/product-2.jpg",
    },
    {
      id: 3,
      name: "product3",
      price: 300,
      description: "test",
      image: "https://shopo.quomodothemes.website/assets/images/product-3.jpg",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        {/* Item length */}
        <div className={`${styles.noramlFlex} p-4`}>
          <AiOutlineHeart size={25} />
          <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
        </div>
        {/* cart Single Items */}
        <br />
        <div className="w-full border-t">
          {cartData &&
            cartData.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            TND{totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" tile="Add to cart" />
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
