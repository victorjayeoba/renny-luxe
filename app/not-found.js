"use client"
import { motion } from 'framer-motion';
import { FaSadTear } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function NotFoundPage() {

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaSadTear className="text-6xl text-[#A67B5B] mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you are looking for doesn’t exist or has been moved.</p>
        <Link
        href={"/products"}
          className="px-4 py-2 bg-[#A67B5B] text-white rounded-lg shadow-md hover:text-[#605ba6] transition"
        
        >
        Let us go shopping!!
        </Link>
      </motion.div>
    </div>
  );
}
