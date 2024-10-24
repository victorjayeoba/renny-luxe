import Header from "./common/Header";
import "./globals.css";

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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <title>Rennys Luxe</title> 
        <meta name="description" content="Welcome to [Your Brand Name], where beauty meets self-care! At [Your Brand Name], we believe that healthy, radiant skin is a reflection of inner wellness. Our curated collection of premium skincare products is designed to cater to all skin types and concerns, empowering you to embrace your natural beauty." />
        <meta name="keywords" content="skincare, beauty, self-care, healthy skin, moisturizers, serums, cleansers" />
        <meta name="author" content="Jayeoba VIctor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <meta charSet="UTF-8" />
        <link rel="icon" href="./favicon.ico" /> 
      </head>
      <body className={`${playfairDisplay.className} font-playfair`}>       
        <Header />
        {children}
      </body>
    </html>
  );
}
