import React from 'react'

function page() {
  return (
    <div className="bg-pink-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
    {/* Header Section */}
    <header className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-lg">
        Your privacy is important to us. This policy explains how we handle your personal information.
      </p>
    </header>
  
    {/* Privacy Content */}
    <section className="space-y-8 text-gray-700 leading-relaxed">
      {/* Example Section */}
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">1. Data Collection</h2>
        <p>
          We collect information you provide directly, such as your name, email address, and payment information, to enhance your experience with our services.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">2. Data Usage</h2>
        <p>
          The data we collect is used to improve our services, communicate with you, and provide a better shopping experience. We may also use data for marketing purposes.
        </p>
      </div>
  
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">3. Third-Party Sharing</h2>
        <p>
          We do not share your information with third parties except as necessary to provide our services or as required by law.
        </p>
      </div>
  
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">4. Cookies</h2>
        <p>
          Our website uses cookies to enhance your experience. You can choose to disable cookies, though some features may be limited.
        </p>
      </div>
  
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-2">5. User Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal information at any time. Please contact us to exercise these rights.
        </p>
      </div>
  
      {/* Add more sections as needed */}
    </section>

  </div>
  
  )
}

export default page