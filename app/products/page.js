// app/products/page.js

import React, { Suspense } from 'react';
import SearchComponent from '../component/SearchComponent';

// Optionally generate metadata dynamically
export async function generateMetadata({ searchParams }) {
  const { s } = searchParams; // Extract the search parameter
  return {
    title: `Search results for ${s}`, // Use search param for title
    description: `Find products related to ${s}`, // Dynamic description
  };
}

// Ensure to wrap in Suspense
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
