import { motion } from "framer-motion";
import React from "react";

import "./styles.scss";
import Button from "../../Containers/Button";
import Phone from "./Phone";


const LandingIntro = () => {
  return (
    <div className="Li__wrapper bg__gradient">
      <div className="Li__info">
        <motion.h1
          className={"Li__heading-1"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          className={"Li__heading-2"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Real Time.
        </motion.h1>

        <motion.p
          className={"Li__para"}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="Li__flexbtn"
          initial={{ x: -5, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          tranistion={{ duration: 1, delay: 0.75 }}
        >
          <a href="/dashboard">
            <Button text='Dashboard'/>
          </a>
          <Button text='share' outlined={true} />

        </motion.div>
      </div>
      <Phone />
    </div>
  );
};

export default LandingIntro;
