import React from 'react'

function page() {
  return (
    <div className="bg-pink-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
    {/* Header Section */}
    <header className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Terms of Service
      </h1>
      <p className="text-gray-600 text-lg">
        Welcome to our Terms of Service. Please review the terms carefully.
      </p>
    </header>
  
    {/* Terms Content */}
    <section className="space-y-8 text-gray-700 leading-relaxed">
      {/* Example Section */}
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">1. Introduction</h2>
        <p>
          Welcome to our skincare website. By accessing or using our services, you agree to be bound by the terms and conditions outlined here.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">2. User Responsibilities</h2>
        <p>
          Users are expected to adhere to all applicable laws and refrain from engaging in any harmful, fraudulent, or misleading activities.
        </p>
      </div>
  
      {/* Additional Sections as needed */}
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">3. Payment Terms</h2>
        <p>
          All purchases made on our website are subject to payment terms. Payment information is protected and processed securely.
        </p>
      </div>
  
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">4. Returns and Refunds</h2>
        <p>
          Our refund policy provides customers with options in the event they are not fully satisfied with a purchase. Please review the policy in detail.
        </p>
      </div>
      
      {/* More sections if necessary */}
    </section>
  
    {/* Footer Section */}
    <footer className="text-center mt-12">
      <a href="/" className="text-pink-600 hover:text-pink-800">
        Back to Home
      </a>
    </footer>
  </div>
  
  )
}

export default page