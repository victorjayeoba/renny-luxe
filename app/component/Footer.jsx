import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div>
        <a href="/terms-of-services" className="block hover:text-white">
          Terms of Service
        </a>
        <a href="/privacy-policy" className="block hover:text-white">
          Privacy Policy
        </a>
        <a href="/refund-policy" className="block hover:text-white">
          Refund Policy
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-white">
          Facebook
        </a>
        <a href="#" className="hover:text-white">
          Instagram
        </a>
        <a href="#" className="hover:text-white">
          Twitter
        </a>
      </div>
    </div>
    <div className="text-center text-gray-400 mt-4">
      © {new Date().getFullYear()} Rennys-luxe. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer