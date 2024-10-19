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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover the best skincare products tailored for your unique needs. Nourish and rejuvenate your skin with our organic, dermatologist-approved solutions." />
        <meta name="keywords" content="skincare, organic skincare, dermatologist-approved, beauty, skincare products, skin treatments" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Discover Your Perfect Skincare Routine" />
        <meta property="og:description" content="Explore our range of organic, dermatologist-approved skincare products that nourish and rejuvenate your skin." />
        <meta property="og:image" content="https://example.com/path-to-your-image.jpg" />
        <meta property="og:url" content="https://renny-luxe.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Your Perfect Skincare Routine" />
        <meta name="twitter:description" content="Explore our range of organic, dermatologist-approved skincare products that nourish and rejuvenate your skin." />
        <meta name="twitter:image" content="https://example.com/path-to-your-image.jpg" />

        <title>Discover Your Perfect Skincare Routine</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className={`${playfairDisplay.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
