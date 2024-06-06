import React from "react";
import "./skills.css";
import CertificationComponent from "./../certification/certification";
import data from "./../../../public/data/data-language.json";

export default function Skills() {
  const groupByCategory = (data) => {
    const groupedData = {};

    data.forEach((item) => {
      const categories = Array.isArray(item.kategori)
        ? item.kategori
        : [item.kategori];
      categories.forEach((category) => {
        if (!groupedData[category]) {
          groupedData[category] = [];
        }
        groupedData[category].push(item);
      });
    });

    return groupedData;
  };

  const groupedData = groupByCategory(data.data_language);
  return (
    <>
      <div className="skills mt-[50px]">
        <h2 className="text-center lg:text-[60px] uppercase">
          Skills & Expertise
        </h2>
        <div className="space-x-[5px] mt-[40px] text-center mx-auto space-y-[20px]">
          {data.data_language.map((item, index) => (
            <div key={index} className="inline-block text-center">
              <img
                src={`/img/tools/${item.gambar}`}
                className="w-[120px] border dark:border-none max-sm:w-[80px] text-center bg-gray-200 dark:bg-transparent"
                alt={item.tittle}
              />
              <p className="mt-[5px]  text-center ">{item.tittle}</p>
            </div>
          ))}
        </div>

        <CertificationComponent className="mt-[40px]" />
      </div>
    </>
  );
}
