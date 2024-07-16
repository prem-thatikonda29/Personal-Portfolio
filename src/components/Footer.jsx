import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function Footer() {
  return (
    <motion.footer
      //   variants={textVariant()}
      className="w-full h-20 bg-black-200 overflow-hidden"
    >
      <ul className="flex flex-row justify-center h-full w-full items-center gap-5 md:gap-8">
        <li className="text-secondary sm:text-sm">
          <a href="https://www.instagram.com/14prem._" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="md:text-3xl text-xl"
            />
          </a>
        </li>

        <li className="text-secondary sm:text-sm">
          <a
            href="https://www.linkedin.com/in/premthatikonda29/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="md:text-3xl text-xl"
            />
          </a>
        </li>

        <li className="text-secondary sm:text-sm">
          <a href="https://x.com/_not_prem_" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="md:text-3xl text-xl" />
          </a>
        </li>

        <li className="text-secondary sm:text-sm">
          <a href="https://github.com/prem-thatikonda29" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="md:text-3xl text-xl" />
          </a>
        </li>
      </ul>
      {/* </div> */}
    </motion.footer>
  );
}

export default Footer;
