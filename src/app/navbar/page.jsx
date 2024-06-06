"use client";
import { useState } from "react";
import "./navbar.css";
import Link from "next/link";
import useDarkMode from "./../component/toggleDarkMode";

export default function Navbar({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="navbar border-b  dark:bg-[#040704] bg-white sticky z-50 top-0 left-0">
      <nav className=" lg:container border-gray-200">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            href="#"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h3 className="block max-lg:hidden uppercase">Dico Aji .</h3>
            <img
              src="/logo.svg"
              className="w-[25px] hidden dark:hidden max-lg:block "
              alt=""
            />
            <img
              src="/logo_dark.svg"
              className="w-[25px] hidden dark:block md:dark:hidden max-lg:block "
              alt=""
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <button
              onClick={toggleDarkMode}
              className="  w-10 h-10 flex items-center justify-center"
            >
              <img src="/img/sun.svg" className="w-[25px] dark:hidden" alt="" />
              <img
                src="/img/moon.svg"
                className="w-[25px] hidden dark:block"
                alt=""
              />
            </button>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  md:hidden "
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <img
                src="/bars.svg"
                className="w-[25px] max-md:dark:hidden"
                alt=""
              />
              <img
                src="/bars_dark.svg"
                className="w-[25px] hidden max-md:dark:block  "
                alt=""
              />
            </button>
          </div>
          <div
            class={`hidden w-full md:block md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul class="flex flex-col menu  md:p-0 mt-4 text-center  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
              <li>
                <Link href="/" class="" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experience" class="" aria-current="page">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" class="" aria-current="page">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
