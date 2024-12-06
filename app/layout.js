"use client";
import Header from "./common/Header";
import Footer from "./component/Footer";
import "./globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "@/app/features/user";
import { Pacifico, Playfair_Display } from '@next/font/google';
import Script from "next/script";
import { useEffect } from "react";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });

  useEffect(() => {
    const adjustBannerSize = () => {
      const iframe = document.querySelector("#adsterra-banner iframe");
      if (iframe) {
        const width = window.innerWidth > 768 ? 468 : 100; // Full width for smaller screens (tablets and mobile)
        const height = (width * 60) / 468; // Maintain aspect ratio (width:468px, height:60px)
        iframe.style.width = `${width}px`;
        iframe.style.height = `${height}px`;
      }
    };

    adjustBannerSize(); // Call once on initial load

    window.addEventListener("resize", adjustBannerSize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", adjustBannerSize); // Cleanup on unmount
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <title>Rennys Luxe</title>
        <meta name="description" content="Welcome to Renny Luxe, where beauty meets self-care!, we believe that healthy, radiant skin is a reflection of inner wellness. Our curated collection of premium skincare products is designed to cater to all skin types and concerns, empowering you to embrace your natural beauty." />
        <meta name="keywords" content="skincare, beauty, self-care, healthy skin, moisturizers, serums, cleansers" />
        <meta name="author" content="Jayeoba VIctor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${playfairDisplay.className} overflow-x-hidden font-playfair`}>
        {/* Adsterra Script */}
        <Script id="adsterra-config" strategy="afterInteractive">
          {`
            atOptions = {
              'key': '5523f85d85655310e1bfe15c05164232',
              'format': 'iframe',
              'height': 60,
              'width': 468,
              'params': {}
            };
          `}
        </Script>
        <Script id="adsterra-banner" src="adsterra-invoke.js" strategy="afterInteractive" />

        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
