import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import { profile } from "../content";

const ICONS = {
  github: [AiFillGithub, "GitHub"],
  linkedin: [FaLinkedinIn, "LinkedIn"],
  scholar: [SiGooglescholar, "Google Scholar"],
  orcid: [SiOrcid, "ORCID"],
  email: [AiOutlineMail, "Email"],
};

function Social({ className = "home-about-social-links", iconClass = "icon-colour home-social-icons" }) {
  return (
    <ul className={className}>
      {Object.entries(ICONS)
        .filter(([k]) => profile.links[k])
        .map(([k, [Icon, label]]) => (
          <li className="social-icons" key={k}>
            <a href={profile.links[k]} target="_blank" rel="noreferrer" className={iconClass} aria-label={label} title={label}>
              <Icon />
            </a>
          </li>
        ))}
    </ul>
  );
}

export default Social;
