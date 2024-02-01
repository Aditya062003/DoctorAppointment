import React from "react";
import Doc from "../assets/images/homedoc.png";
import Doc2 from "../assets/images/dochome2.png";

const Home = () => {
  return (
    <div className="bg-[#1E1E1E] bg-opacity-5 min-h-screen">
      <div className="flex mb-4 items-center mx-8 py-4 justify-evenly">
        <div>
          <div className="text-4xl font-medium w-[40rem] text-[#007E85] my-4">
            Providing Quality Healthcare for a Brighter and Healthy Future
          </div>
          <div className="text-xl text-gray-500 w-[40rem] font-light">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </div>
          <div className="flex justify-start">
            <div className="bg-[#007E85] w-fit text-lg my-6 text-white font-medium px-5 py-2 rounded-lg">
              Book an Appointment
            </div>
            <div className="text-[#007E85] w-fit text-lg my-6 font-medium px-5 py-2 rounded-lg">
              Contact Us
            </div>
          </div>
        </div>
        <img src={Doc} className="w-[31rem] h-[36rem]" alt="" />
      </div>
      <div className="text-center mb-12 my-6 mx-auto">
        <div className="text-[#007E85] text-3xl my-6 font-medium text-center">
          Our results in numbers
        </div>

        <div className="flex my-8 justify-evenly items-center">
          <div className="">
            <p className="text-4xl text-[#007E85] font-bold">99%</p>
            <p className="text-gray-500 my-2 text-2xl">Customer satisfaction</p>
          </div>
          <div>
            <p className="text-4xl text-[#007E85] font-bold">15k</p>
            <p className="text-gray-500 my-2 text-2xl">Online Patients</p>
          </div>
          <div>
            <p className="text-4xl text-[#007E85] font-bold">12k</p>
            <p className="text-gray-500 my-2 text-2xl">Patients Recovered</p>
          </div>
          <div>
            <p className="text-4xl text-[#007E85] font-bold">240%</p>
            <p className="text-gray-500 my-2 text-2xl">Company growth</p>
          </div>
        </div>
      </div>
      <div className="flex mt-24 items-center justify-evenly">
        <div>
          <div className="font-medium text-[#007E85] text-2xl">
            You have lots of reasons to choose us
          </div>
          <div className="text-xl font-light mt-8 w-[27rem]">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </div>
          <div className="flex gap-6">
            <div className="bg-[#007E85] w-fit text-lg my-6 text-white font-medium px-5 py-2 rounded-full">
              Get Started
            </div>
            <div className="text-[#007E85] w-fit text-lg my-6 bg-white font-medium px-5 py-2 rounded-full">
              Talk to Sales
            </div>
          </div>
        </div>
        <img src={Doc2} className="w-[34rem] h-[26rem]" alt="" />
      </div>
    </div>
  );
};

export default Home;
