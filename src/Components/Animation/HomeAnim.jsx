import React from 'react';
import "./HomeAnim.css";
import { motion } from 'framer-motion';

const HomeAnim = () => {
  return (
    <section className="preloder">
      <motion.h2
        key="heading"
        initial={{ bottom: "18vh" }}
        animate={{ bottom: "-20vh" }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
      >
        Vipul Malviya
      </motion.h2>
      <motion.div
        key="a"
        className="a"
        initial={{ left: "0%" }}
        animate={{ left: "-300%" }}
        exit={{ left: ["-300%", "0%"] }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        key="b"
        className="b"
        initial={{ right: "0%" }}
        animate={{ right: "-300%" }}
        exit={{ right: ["-300%", "0%"] }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
      />
    </section>
  );
};

export default HomeAnim;
