import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="flex flex-col gap-5">
          <img src={assets.logo} className="mb-5 w-20" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            neque tellus. Sed ut erat et arcu aliquet ullamcorper. Duis auctor
            posuere felis, non pulvinar neque condimentum.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex  flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex  flex-col gap-1 text-gray-600">
            <li>1-212-456-789</li>
            <li>CONTACT@GMAIL.COM</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ TopOfVip.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
