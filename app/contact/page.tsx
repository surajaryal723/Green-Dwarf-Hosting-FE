"use client";
import { useState } from "react";
import Breadcrumb from "../components/BreadCrumb";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <Breadcrumb title="Contact Us"></Breadcrumb>
      <div className="w-full flex justify-between p-[100px] contact bg-[#EFEEEC]">
        <div className="w-1/2 flex flex-col gap-4 cl pr-[50px]">
          <h2 className="text-[2.2rem] leading-[2.8rem]  section-heading">
            Get In Touch
          </h2>
          <p className="">
            Have a question? Need help with your hosting? We’re here for you —
            24/7.
            <br />
            <br />
            At Green Dwarf Hosting, we believe in real, human support. Whether
            you are looking for technical assistance, sales advice, or just want
            to learn more about our services, our team is always ready to
            assist.
          </p>
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-1">
              <h4 className="font-medium text-xl">Our Location</h4>
              <h4>#325 3132 26 St NE, Calgary, AB</h4>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h4 className="font-medium text-xl">Call Us</h4>
              <h4>+1 (234) 567-8900</h4>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h4 className="font-medium text-xl">Mail Us</h4>
              <h4>info@greendwarfhosting.com</h4>
            </div>
          </div>
        </div>
        <div className="w-1/2 cr bg-white p-[30px]">
          <form className="w-full flex flex-col gap-10 ">
            <div className="w-full flex flex-row gap-5 form-fields">
              <input
                type="text"
                name="firstname"
                placeholder="First Name*"
                required
                onChange={handleChange}
                className="text-sm lg:w-1/2 outline-none border-solid border-[1px] border-[#EDEDE9] transition-all duration-300 bg-[#EDEDE9] px-4 mb:px-6 py-2 mb:py-4 rounded-[3px] placeholder-black focus:border-solid focus:border-[1px] focus:border-[var(--secondary-color)]"
              />
              <input
                type="text"
                placeholder="Last Name*"
                name="lastname"
                required
                onChange={handleChange}
                className="text-sm lg:w-1/2 outline-none border-solid border-[1px] border-[#EDEDE9] transition-all duration-300 bg-[#EDEDE9] px-4 mb:px-6 py-2 mb:py-4 rounded-[3px] placeholder-black focus:border-solid focus:border-[1px] focus:border-[var(--secondary-color)]"
              />
            </div>
            <div className="w-full flex form-fields flex-row gap-5">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                onChange={handleChange}
                className="text-sm lg:w-1/2 outline-none border-solid border-[1px] border-[#EDEDE9] transition-all duration-300 bg-[#EDEDE9] px-4 mb:px-6 py-2 mb:py-4 rounded-[3px] placeholder-black focus:border-solid focus:border-[1px] focus:border-[var(--secondary-color)]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
                onChange={handleChange}
                className="text-sm lg:w-1/2 outline-none border-solid border-[1px] border-[#EDEDE9] transition-all duration-300 bg-[#EDEDE9] px-4 mb:px-6 py-2 mb:py-4 rounded-[3px] placeholder-black focus:border-solid focus:border-[1px] focus:border-[var(--secondary-color)]"
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                className="text-sm w-full outline-none border-solid border-[1px] border-[#EDEDE9] transition-all duration-300 bg-[#EDEDE9] px-4 mb:px-6 py-2 mb:py-4 rounded-[3px] placeholder-black focus:border-solid focus:border-[1px] focus:border-[var(--secondary-color)]"
                rows={5}
                placeholder="Write your message here....*"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full">
              <input
                type="submit"
                value="Submit Form"
                className="bg-[var(--secondary-color)] hover:bg-blue-800 transition-all text-white px-10 py-[12px] rounded-[5px] text-[1rem] font-medium flex items-center gap-2 w-fit cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4012924.128524057!2d78.289765!3d10.821166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1744303919837!5m2!1sen!2sin" height="450" style={{border:0,width:'100%'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}
