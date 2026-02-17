import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductIem from "./ProductIem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          deleniti odio aliquam tempora! Tempore alias fugit eius expedita nihil
          nobis inventore, natus aliquid aut, nisi mollitia ipsam earum.
          Exercitationem, natus.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductIem
            key={index}
            image={item.image}
            name={item.name}
            id={item._id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
