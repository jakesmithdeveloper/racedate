import React from "react";

import TwitterLogo from "../resources/twitterLogo.png";
import GitHubLogo from "../resources/githubLogo.png";

const Footer = () => {
  return (
    <div className="flex footer items-center justify-center my-5">
      <a
        className="text-2xl md:text-3xl mx-2 text-gray-700 dark:text-white-cream"
        href="https://www.jakesmith.info"
      >
        jakesmith.info
      </a>
      <a href="https://twitter.com/JakeSmith_c">
        <img className="mx-2 w-logo h-logo " src={TwitterLogo} alt="" />
      </a>
      <a href="https://github.com/jakesmithdeveloper/racedate">
        <img className="mx-2 w-logo h-logo " src={GitHubLogo} alt="" />
      </a>
    </div>
  );
};

export default Footer;
