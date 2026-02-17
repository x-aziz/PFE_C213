import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]); // assuming first image is the main one
        return null; // exit after finding the product
      }
      return null; // this return avoids map warnings
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {/* Map through productData.image and render each image */}
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={productData.name}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product details */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name} </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="W-3 5" />
            <img src={assets.star_icon} alt="" className="W-3 5" />
            <img src={assets.star_icon} alt="" className="W-3 5" />
            <img src={assets.star_icon} alt="" className="W-3 5" />
            <img src={assets.star_icon} alt="" className="W-3 5" />
            <img src={assets.star_dull_icon} alt="" className="W-3 5" />
            <p className="pl-2 text-xs">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}{" "}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}{" "}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="text-sm text-gray-500 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py6 text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py6 text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products and services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            show case their products,interact with customers.and conduct
            transactions without the need for a physical presence.E-commerce
            websites have gained immense popularity due to their convenience.
            accessibility,and the global reach they offer.
          </p>
          <p>
            An e-commerce website typically display products or services along
            with detailed descriptions,images,price,and any available variations
            (e.g,sizes,colors).Each product usually has its own dedicated page
            relevant information.
          </p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
