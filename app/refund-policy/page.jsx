import React from 'react'

function page() {
  return (
<div className="bg-pink-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
  {/* Header Section */}
  <header className="text-center mb-12">
    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
      Refund Policy
    </h1>
    <p className="text-gray-600 text-lg">
      We want you to be fully satisfied with your purchase. Here’s our policy on returns and refunds.
    </p>
  </header>

  {/* Refund Policy Content */}
  <section className="space-y-8 text-gray-700 leading-relaxed">
    {/* Eligibility for Refund */}
    <div>
      <h2 className="text-xl font-medium text-gray-800 mb-2">1. Eligibility for Refund</h2>
      <p>
        To be eligible for a return, the item must be unused, in the original packaging, and in the same condition you received it. Returns are accepted within 30 days of purchase.
      </p>
    </div>
    
    {/* Process for Returns and Refunds */}
    <div>
      <h2 className="text-xl font-medium text-gray-800 mb-2">2. Process for Returns and Refunds</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Contact us via email with your order number and reason for return.</li>
        <li>Once your return is approved, we will send you a return shipping label.</li>
        <li>After we receive and inspect the returned item, we will issue a refund to your original payment method.</li>
      </ul>
    </div>

    {/* Refund Processing Time */}
    <div>
      <h2 className="text-xl font-medium text-gray-800 mb-2">3. Refund Processing Time</h2>
      <p>
        Refunds typically take 5-10 business days to process once approved, depending on your bank or card issuer.
      </p>
    </div>

    {/* Exclusions */}
    <div>
      <h2 className="text-xl font-medium text-gray-800 mb-2">4. Exclusions</h2>
      <p>
        Items marked as “Final Sale” or “Non-Refundable” are not eligible for returns or refunds.
      </p>
    </div>
  </section>

  {/* Footer Navigation */}
  <footer className="text-center mt-12">
    <a href="/" className="text-pink-600 hover:text-pink-800">
      Back to Home
    </a>
  </footer>
</div>

  )
}

export default page