"use client"; 
import { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer); 
  }, [onClose]);

  const toastVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0 },   
    exit: { opacity: 0, y: 20 },   
  };

  return (
<motion.div
  className="fixed bottom-4 left-4 bg-pink-600 text-white p-4 rounded shadow-lg z-50"
  variants={toastVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  transition={{ duration: 0.5 }}
>
  {message}
</motion.div>


  );
};
