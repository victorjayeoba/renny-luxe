import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactUs = () => {
  // Google Maps API Key
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Define branch locations with coordinates
  const branches = [
    { name: "New York", position: { lat: 40.7128, lng: -74.0060 } },
    { name: "London", position: { lat: 51.5074, lng: -0.1278 } },
    { name: "Tokyo", position: { lat: 35.6895, lng: 139.6917 } },
    { name: "Sydney", position: { lat: -33.8688, lng: 151.2093 } },
    // Add more branches as needed
  ];

  // Map settings
  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = { lat: 20, lng: 0 };

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 text-lg">We’d love to hear from you! Visit one of our locations or reach out online.</p>
      </header>

      {/* Contact Form */}
      <section className="mb-12">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Form fields here */}
        </form>
      </section>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Locations</h2>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
          >
            {branches.map((branch, index) => (
              <Marker key={index} position={branch.position} label={branch.name} />
            ))}
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
};

export default ContactUs;
