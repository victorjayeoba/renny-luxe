"use client";

import React, { useRef, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

// Your Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const LocationMap = () => {
  const [isMounted, setIsMounted] = useState(false); // State to check if component is mounted
  const [selectedBranch, setSelectedBranch] = useState(null); // State for selected branch

    // Create refs for input fields
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
  // Define branch locations
  const branches = [
    {
      name: "Lagos - Balogun Market",
      position: { lat: 6.4541, lng: 3.3947 },
      address: "Balogun Market, Lagos Island, Lagos, Nigeria",
    },
    {
      name: "Abuja - Wuse Market",
      position: { lat: 9.0634, lng: 7.4689 },
      address: "Wuse Market, Zone 5, Abuja, Nigeria",
    },
    {
      name: "Kano - Kurmi Market",
      position: { lat: 12.0022, lng: 8.5919 },
      address: "Kurmi Market, Kano, Nigeria",
    },
    {
      name: "Onitsha - Onitsha Main Market",
      position: { lat: 6.1510, lng: 6.7850 },
      address: "Onitsha Main Market, Anambra, Nigeria",
    },
    {
      name: "Ibadan - Bodija Market",
      position: { lat: 7.3975, lng: 3.9160 },
      address: "Bodija Market, Ibadan, Oyo State, Nigeria",
    },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch("https://formspree.io/f/mldedvqj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        alert("Thanks for reaching out!");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.errors[0].message}`);
      }
    } catch (error) {
      alert("There was a problem submitting your form.");
      console.error("Form submission error:", error);
    }
  };
  useEffect(() => {
    setIsMounted(true); // Set mounted state to true after component mounts
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 text-lg">We’d love to hear from you! Visit one of our locations or reach out online.</p>
      </header>

      {/* Contact Form */}
      <section className="mb-12">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              ref={nameRef} // Attach ref
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              ref={emailRef} // Attach ref
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              required
              ref={messageRef} // Attach ref
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Locations</h2>

        {isMounted && (
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={{ height: "400px", width: "100%" }}
              center={{ lat: 9.0820, lng: 8.6753 }}
              zoom={6}
            >
              {branches.map((branch, index) => (
                <Marker
                  key={index}
                  position={branch.position}
                  onClick={() => setSelectedBranch(branch)}
                />
              ))}
              {selectedBranch && (
                <InfoWindow
                  position={selectedBranch.position}
                  onCloseClick={() => setSelectedBranch(null)}
                >
                  <div>
                    <strong>{selectedBranch.name}</strong>
                    <br />
                    {selectedBranch.address}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        )}
      </section>
    </div>
  );
};

export default LocationMap;
