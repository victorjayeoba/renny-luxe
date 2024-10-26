"use client"
import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedEmail(email)
    setIsSubmitted(true)
    setEmail(""); // Clear the input after submission
  };
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-6 xl:flex justify-between items-center">
        <div>
          <a  target='_blank'  href="/terms-of-service" className="block hover:text-white">
            Terms of Service
          </a>
          <a  target='_blank'  href="/privacy-policy" className="block hover:text-white">
            Privacy Policy
          </a>
          <a  target='_blank'  href="/refund-policy" className="block hover:text-white">
            Refund Policy
          </a>
               {/* Contact Information Section */}
      <div className="mt-4">
        <div className="text-start text-gray-400">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p>Email: <a href="mailto:info@rennys-luxe.com" className="hover:text-white">info@rennys-luxe.com</a></p>
          <p>Phone: <a href="tel:+2347026702294" className="hover:text-white">+2347026702294</a></p>
          <p>Address: 1234 Luxurious St, Lagos, State.</p>
        </div>
      </div>

        </div>
        <div className="flex basis-[50%] max-w-md flex-col space-y-4">
        <div className="">
        <h2 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border text-black rounded w-full px-3 py-2 mb-4"
            required
          />
        
          <div className="flex ">
          {!isSubmitted ?
            <button
              type="submit"
              className="bg-[#A67B5B] text-white rounded px-4 py-2 hover:bg-[#946c4b]"
            >
              Subscribe
            </button>
             : <p className='text-lime-300'> Thanks for subscribing {submittedEmail}</p>}
          </div>
        </form>

    </div>
    <div className='flex flex-wrap space-x-5'>
    <a target='_blank' href={`https://wa.me/2347026702294?text="Hey Renny Luxe!, I need some producs"`} className="hover:text-white">
            Whatsapp
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/victor-jayeoba-400b96253" className="hover:text-white">
            Linkedin
          </a>
          <a target='_blank' href="https://x.com/VickyJay_media/" className="hover:text-white">
            Twitter
          </a>
    </div>
  
        </div>
      </div>

 
      <div className="text-center text-gray-400 mt-4">
        © {new Date().getFullYear()} Rennys-luxe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
