import React from "react";
import { Link } from "react-router-dom";

import iconFacebook from "../assets/faFacebook.svg";
import iconInstagram from "../assets/faInstagram.svg";
import iconGithub from "../assets/faGithub.svg";

function SocialMedia() {
  return (
    <div>
      <Link to="https://www.facebook.com/" target="_blank">
        <img src={iconFacebook} alt="Facebook Link" />
      </Link>
      <Link to="https://www.instagram.com/" target="_blank">
        <img src={iconInstagram} alt="Instagram Link" />
      </Link>
      <Link to="https://github.com/" target="_blank">
        <img src={iconGithub} alt="Github Link" />
      </Link>
    </div>
  );
}

export default SocialMedia;
