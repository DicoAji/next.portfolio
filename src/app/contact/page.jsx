import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="mt-[50px]">
      <div className="lg:container space-y-[80px]">
        <h1 className="text-center max-md:text-[40px] lg:text-[60px] uppercase">
          Hire Me For Your Amazing Project
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <p>
              "Ready to create something unique, innovative, and impactful?
              Let’s bring your vision to life. Have questions or ideas? Just
              reach out and say hello!"
            </p>
            <div className="space-y-[10px] mt-[50px]">
              <p>—— +6288200330XXXX</p>
              <p>—— dicoaji12@gmail.com</p>
              <p>—— Kradenan, Grobogan, Central Java, INA</p>
            </div>
          </div>
          <div className="bg-[#EAEAEA] lg:py-[80px] lg:w-[70%] w-full mx-auto lg:px-[30px] px-[10px] py-[40px] form_mail max-lg:mt-[80px]">
            <form action="" className="space-y-[40px]">
              <input type="email" placeholder="Your email Address" />
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" placeholder="Mail"></textarea>
              <button
                type="submit"
                className="uppercase ml-auto block py-2 px-5 text-white bg-black hover:underline"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
