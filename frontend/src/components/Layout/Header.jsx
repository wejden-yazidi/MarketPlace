import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "./DropDown.jsx"; // Add the missing import statement for the DropDown component
import { categoriesData } from "../../static/data";
import Navbar from "./Navbar.jsx";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <header className={`${styles.section} bg-gray-100 p-4 shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg?fbclid=IwAR0FpFj_FRWYbsetuf66EYlwS2JSE6LJjw8m3wQFd9syPxGgc3Z4FnZIc5A"
            alt="logo"
            className="h-12"
          />
        </Link>

        {/* Search box */}
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-800"
            />
            <AiOutlineSearch
              size={24}
              className="absolute right-4 top-2 text-gray-500"
            />

            {searchData && searchData.length !== 0 && (
              <div className="absolute top-12 min-h-[30vh] bg-white shadow-md z-10 p-4 rounded-md">
                {searchData.map((product, index) => (
                  <Link
                    key={index}
                    to={`/product/${product.name.replace(/\+/g, "-")}`}
                  >
                    <div className="flex items-center py-2">
                      <img
                        src={product.image_Url[0].url}
                        alt=""
                        className="w-8 h-8 mr-2 rounded-full"
                      />
                      <h1 className="text-gray-700">{product.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="inline-flex items-center">
            <Link
              to="/seller"
              className="border border-blue-500 px-4 py-2 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
            >
              <span className="flex items-center">
                Become Seller
                <IoIosArrowForward className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
          <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button
              className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
            >
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          </div>
        </div>
        {/* navitems */}
        <div className={`${styles.noramlFlex}`}>
          <Navbar active={activeHeading} />
        </div>

        <div className="flex">
          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineHeart 
              size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#FEB139] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
             0
              </span>
            
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineShoppingCart
              size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#FEB139] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
             1
              </span>
             
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
             <Link to="/login">
             <CgProfile 
              size={30} color="rgb(255 255 255 / 83%)" />
              </Link>
            
              {/* <span className="absolute right-0 top-0 rounded-full bg-[#FEB139] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
             0
              </span> */}
             
            </div>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
