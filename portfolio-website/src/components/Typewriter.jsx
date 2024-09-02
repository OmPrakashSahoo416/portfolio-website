"use client";
// import { DocumentTextIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import AnimText from "./2";



const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Typewriter() {
  return (
    
        <motion.span
          variants={itemVariants}
          className="inline h-full w-full "
        >
          <AnimText delay={1} />
        </motion.span>
      
  );
}
