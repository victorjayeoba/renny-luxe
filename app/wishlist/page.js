"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Retrieve and parse wishlist from local storage
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
            {wishlist.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="space-y-4">
                    {wishlist.map((item) => (
                        <Link  key={item.id} className='block' href={`/products/${item.id}`}>
                             <div className="border rounded-lg p-4 shadow">
                            <Image src={item.main_image} alt={item.main_image} width={100} height={100}/>
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-gray-700">${item.price.toLocaleString()}</p>
                        </div>
                        </Link>
                   
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
