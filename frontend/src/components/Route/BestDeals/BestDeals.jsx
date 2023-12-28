import React, { useEffect, useState } from "react";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { productData } from "../../../static/data.js";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sorting products based on total_sell in descending order
    const sortedProducts = productData.sort((a, b) => b.total_sell - a.total_sell);
    // Selecting the first five products
    const firstFive = sortedProducts.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <section className={`${styles.section} py-12 bg-gray-100`}>
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Explore Best Deals</h2>
          <p className="text-gray-500">Discover top-selling products at unbeatable prices.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
