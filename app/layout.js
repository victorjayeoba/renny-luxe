
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

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className={`${playfairDisplay.className} `}>
        
      <Header/>
        {children}
      </body>
    </html>
  );
}
