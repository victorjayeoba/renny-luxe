import React, { useState } from "react";

const NewsletterModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
    setEmail(""); // Clear the input after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm mx-auto">
        <h2 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full px-3 py-2 mb-4"
            required
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#A67B5B] text-white rounded px-4 py-2 hover:bg-[#946c4b]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
