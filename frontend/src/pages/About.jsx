import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px] "
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Top Of Vip was born out of passion and for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea:to provide a platform where customers can easily
            discover. explore .and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception.we've worked tirelessly to curate a diverse
            selection of hight-quality products that cater to every taste and
            preference.From fashion and beauty to electronics and home
            essentials,we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <b className="text-gray-800">
            Our Mission at Top of Vip is to empower customer with
            choices,convenience experience that exceeds expectations ,from
            browsing and ordering to delivery and beyond.
          </b>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600 ">
            Top of Vip strives to maintain a high level of customer satisfaction
            through our robust quality assurance program. Our staff are experts
            in identifying and addressing issues promptly, ensuring that all our
            products meet or exceed customer expectations.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600 ">
            Top of Vip offers a convenient shopping experience, with our
            easy-to-use
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600 ">
            Top of Vip   offers exceptional customer service, with our dedicated
            support team ready to help you with any issues you may encounter.
            They are here to guide you through your shopping experience, from
            choosing the right product to arranging a convenient delivery.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
