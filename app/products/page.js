"use client"
// app/search/page.js (or the appropriate file path)
import React from 'react';
import SearchComponent from '../component/SearchComponent';
import { useSearchParams } from 'next/navigation';

/* export async function generateMetadata({ searchParams }) {
  const { s } = searchParams; // Extract the search parameter
  return {
    title: `Search results for ${s}`, // Example of using the search term in the title
    description: `Find products related to ${s}`,
  };
}
 */
function Page() {
  const searchParams = useSearchParams(); // Get the search parameters
  const searchTerm = searchParams.get('s') || ""; // Extract the 's' parameter or default to an empty string

  return (
    <SearchComponent searchTerm={searchTerm} />
  );
}

export default Page;
