"use client"
import Header from "./common/Header";
import Footer from "./component/Footer";
import "./globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "@/app/features/user"
import { Pacifico, Playfair_Display, Lobster } from '@next/font/google';


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
    reducer:{
      user : userReducer,
    }
  })
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
      <body className={`${playfairDisplay.className} font-playfair`}>       
        <Provider store={store} >
        <Header />
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
