import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebookF,
  faXTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import social_media from "./../../../public/data/social_media";

const iconMap = {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faDribbble,
};
export default function Footer() {
  return (
    <div className="footer container mt-[20px] pb-[10px]">
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="max-md:text-center">
          <small>© 2024 Dico Portfolio </small>
        </div>
        <div className="flex md:justify-end justify-center max-md:mt-[15px]">
          <div className="space-x-[32px] social_media flex">
            {social_media.map((social) => (
              <Link key={social.label} href={social.href} passHref>
                <FontAwesomeIcon
                  className="icon  dark:text-[#626262]"
                  icon={iconMap[social.icon]}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
