import Head from 'next/head';
import LocationMap from '../component/LocationMap';

function Page() {
  return (
    <>
      <Head>
        <title>Contact Us - Our Locations</title>
        <meta name="description" content="Get in touch with us! Visit our locations or contact us online." />
        <meta name="keywords" content="Contact, Locations, Map, Branches, Skincare , Renny Luxe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com/contact" />
      </Head>
      <div>
        <LocationMap />
      </div>
    </>
  );
}

export default Page;
