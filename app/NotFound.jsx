// pages/404.js
"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NotFound() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1 
        className="text-6xl font-bold text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-8 px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        More Info
      </button>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white p-6 rounded-md text-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p>It seems you're lost. Click anywhere outside to close.</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
