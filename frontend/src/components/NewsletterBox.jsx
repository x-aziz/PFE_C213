import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  const Service_ID = "service_67szr7u";
  const template_ID = "template_221hwx1";
  const Public_Key = "nHOvSBH3oFXw0aQmj";
  const form = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(Service_ID, template_ID, form.current, { publicKey: Public_Key })
      .then(
        () => {
          toast.success("SUCCESS!");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Sign up for our newsletter and receive exclusive offers, discounts, and
        updates.
      </p>
      <form
        onSubmit={onSubmitHandler}
        ref={form}
        className="w-full sm:w-1/2 flex flex-col items-center gap-3 mx-auto  my-6 border p-3"
      >
        <input
          className="w-full sm:flex-1 border p-2"
          type="text"
          placeholder="Enter your Name "
        />
        <input
          className="w-full sm:flex-1 border p-2"
          type="email"
          name="user_email"
          placeholder="Enter your Email "
        />
        <textarea
          className="w-full sm:flex-1 border p-2"
          id=""
          name="message"
          placeholder="type you message"
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
