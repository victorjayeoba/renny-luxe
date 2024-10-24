"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrash, FaWhatsapp } from "react-icons/fa";

const CheckoutPage = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  // State for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update item quantity
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === "increment" ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  // Function to send checkout details to WhatsApp
  const sendToWhatsApp = () => {
    // Check if all form fields are filled
    if (!fullName || !email || !address || !city || !postalCode || !country) {
      alert("Please fill in all the fields before proceeding.");
      return;
    }

    const phoneNumber = "2347026702294";
    let message = `Checkout details:\n\nName: ${fullName}\nEmail: ${email}\nAddress: ${address}\nCity: ${city}\nPostal Code: ${postalCode}\nCountry: ${country}\n\n`;

    cartItems.forEach((item) => {
      message += `Product: ${item.name}\nQuantity: ${item.quantity}\n\n`;
    });

    message += `Total: ₦${total.toFixed(2)}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="container mx-auto py-12 px-3">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Cart Items Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>
              Your cart is empty. <Link href="/products">Continue shopping.</Link>
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center mb-6">
                <Image
                  src={item.main_image}
                  width={100}
                  height={100}
                  alt={item.name}
                  className="rounded-lg"
                />
                <div className="flex flex-col items-center gap-3 basis-[60%]">
                  <div className="flex flex-col text-center ">
                    <h3 className="text-lg font-semibold line-clamp-2">{item.name}</h3>
                    <p className="text-gray-600">₦{item.price}</p>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, "decrement")}
                      className="p-2 bg-gray-200 rounded-l"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increment")}
                      className="p-2 bg-gray-200 rounded-r"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <div className="basis-[10%]">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 ml-4 basis-[10%] mx-auto bg-slate-200 hover:bg-slate-400 p-5 rounded-full transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary Section */}
        <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>₦{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p>₦{shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <p>Total</p>
            <p>₦{total.toFixed(2)}</p>
          </div>

          {/* Checkout Form */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Shipping Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="p-2 border rounded-lg"
                required
              />
            </form>

            {/* Confirm Order Button */}
            <div onClick={sendToWhatsApp} className="my-3">
              <button className="bg-[#A67B5B] w-full flex gap-1 item-center justify-center py-2 text-white font-semibold rounded-lg hover:bg-[#d38244]">
                <span>Continue on Whatsapp</span>
                <span>
                  <FaWhatsapp className="mt-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
