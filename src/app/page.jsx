import React from "react";
import HomeComponent from "./home/home";
import AboutComponent from "./about/about";
import EducationComponent from "./education/education";
export default function index() {
  return (
    <>
      <div className="">
        <HomeComponent />
        <AboutComponent className="lg:mt-[100px] mt-[50px]" />
        <EducationComponent className="lg:mt-[100px] mt-[50px]" />
      </div>
    </>
  );
}
