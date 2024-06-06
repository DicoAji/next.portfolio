import React from "react";
import ProjectComponent from "./../project/project";
import "./experience.css";

export default function Experience() {
  return (
    <>
      <div className="mt-[50px] text-center">
        <div className="space-y-[150px]">
          <div className="experience">
            <div className="container relative h-full ">
              <h2 className="mb-[20px] max-md:text-[40px] lg:text-[60px] uppercase">
                Experience Jurney
              </h2>
              <div className="space-y-[40px] md:w-[80%] w-full mx-auto">
                <div className=" space-y-[2px]">
                  <div>
                    <h4 className="max-lg:text-[22px]">Editing Coding</h4>
                    <p>📍 Badan Pusat Statistika Grobogan</p>
                    <p className="text-gray-300">July 2023 - August 2023</p>
                    <p className="text-justify">
                      Correct, tidy up and check the code and document contents
                      of the agricultural census results in 2023. Input data
                      that has been checked and corrected into Microsoft Excel
                      with a time of one day 100 documents.
                    </p>
                  </div>
                </div>

                <div className="space-y-[2px]">
                  <h4 className="max-lg:text-[22px]">
                    Machine Learning And Front End Web Independent Studi Program
                  </h4>
                  <p>📍 Dicoding Indonesia</p>
                  <p className="text-gray-300">August 2022 - December 2022</p>
                  <p className="text-justify">
                    Study material comprehension 8 hours a day. Soft skills
                    training class meetings (time management, personal
                    productivity, communication skills, ethical behavior,
                    networking, business presentation, personal branding).
                    Complete coding assignments related to machine learning and
                    web front end.
                  </p>
                </div>

                <div className="space-y-[2px]">
                  <h4 className="max-lg:text-[22px]">Web Developer</h4>
                  <p>📍Dinas Pendidikan dan Kebudayaan Kabupaten Batang</p>
                  <p className="text-gray-300">February 2022 - July 2022</p>
                  <p className="text-justify">
                    Brainstorming with the Dinas, how the flow and what features
                    are presented in the Bandikmenti information system, an
                    information system used as a forum for registering
                    scholarships and managing data on the selection of Batang
                    district scholarship recipients. Coordinate with members of
                    the information system development team. Create the
                    interface of the Bandikmenti information system (UI/UX
                    Design). Develop interface design into a website-based
                    Bandikmenti information system. Conducting feasibility
                    application tests.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ProjectComponent />
        </div>
      </div>
    </>
  );
}
