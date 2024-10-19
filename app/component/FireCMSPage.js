// src/FireCMSPage.js
"use client"; // Make sure this is a client component

import React from 'react';
import { FireCMS } from 'firecms';
import { firestore } from '../firebaseConfig';
 // Adjust the path as necessary

const FireCMSPage = () => {
  return (
    <FireCMS
      title="My FireCMS"
      firestore={firestore} // Use Firestore as needed
      // Add other props as needed
    />
  );
};

export default FireCMSPage;
