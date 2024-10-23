// app/products/page.js or your appropriate path
import React from 'react';
import SearchComponent from '../component/SearchComponent';

export async function generateMetadata({ searchParams }) {
  const { s } = searchParams; // Extract search param
  return {
    title: `Search results for ${s}`, // Example of dynamic title based on search term
    description: `Find products related to ${s}`,
  };
}

export default function Page() {
  return <SearchComponent />;
}
