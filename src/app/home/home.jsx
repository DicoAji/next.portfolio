import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebookF,
  faXTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import "./home.css";
import Link from "next/link";
import social_media from "./../../../public/data/social_media";

const iconMap = {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faDribbble,
};

export default function Home() {
  return (
    <>
      <div className="hero max-lg:mt-[50px] ">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 grid-flow-cols-1 ">
            <div className="flex justify-start lg:ml-[100px] ">
              <div className="space-y-[30px] max-lg:translate-x-[5px]  my-auto relative w-full">
                <h3>–– Hello</h3>
                <div class="lg:relative lg:h-[70px] w-full ">
                  <h1 class="uppercase hero_dico lg:absolute lg:left-0 lg:top-0 lg:right-[-200px]">
                    I'm Dico Aji Prasetyo
                  </h1>
                </div>
                <div className="space-y-[10px]">
                  <p>Informatics Students, Diponegoro University </p>
                  <p>
                    A Front End Developer, Web Developer, UX / UI Designer,
                    Programmer.
                  </p>
                </div>
                <Link href="" className="block">
                  <button className="bg-transparent border btn-square">
                    Download CV
                  </button>
                </Link>
                <div className="mt-[20px] max-md:hidden">
                  <div className="flex home_social_media space-x-[25px] items-center">
                    {social_media.map((social) => (
                      <Link key={social.label} href={social.href} passHref>
                        <FontAwesomeIcon
                          className="icon mx-auto my-auto inline-block dark:text-[#626262]"
                          icon={iconMap[social.icon]}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-lg:mt-[84px] ">
              <img
                src="/img/hero.png"
                className="lg:w-[80%] w-full sm:h-[100vh] lg:object-cover object-contain lg:ml-auto "
                alt="heroimg"
              />
            </div>

            <div className="hidden w-[75%] mt-[20px] mx-auto max-md:block home_icon_sosial ">
              <div className="flex justify-between">
                {social_media.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="inline-block"
                    passHref
                  >
                    <FontAwesomeIcon
                      className="icon  my-auto inline-block dark:text-[#626262]"
                      icon={iconMap[social.icon]}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
