import React from "react";
import Image from "next/image";
import Link from "next/link";
import certifications from "./../../../public/data/data_certification.json";

export default function Certification() {
  return (
    <div className="certification mt-[150px]">
      <h2 className="text-center max-md:text-[40px] lg:text-[60px] uppercase">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-[40px]">
        {certifications.data_certification.map((cert, index) => (
          <div key={index} className="flex border dark:border-none">
            <div className="flex space-x-[20px]  ">
              <div className="flex items-center">
                <img
                  src={`/img/${cert.gambar}`}
                  className="w-[150px] object-cover inline-block dark:hidden h-fit my-auto  "
                  alt={cert.nama}
                />
                <img
                  src={`/img/${cert.gambar_dark}`}
                  className="w-[150px] object-cover hidden dark:inline-block h-fit my-auto "
                  alt={cert.nama}
                />
              </div>

              <div className="py-[50px] flex items-center  ">
                <div>
                  <p className="font-light underline dark:no-underline">
                    {cert.nama}
                  </p>
                  <p className="text-gray-400">{cert.institusi}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
