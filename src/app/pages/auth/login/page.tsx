import React from "react";
import Image from "next/image";
import { WalletIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../assests/LogoWithText.svg"; // Adjust logo path as needed
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(137, 34, 179, 0.7) 0%, rgba(90, 100, 214, 0.7) 30%, rgba(185, 77, 228, 0.7) 63.5%, rgba(93, 99, 214, 0.7) 100%)",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-lg rounded-xl p-12 shadow-2xl">
        {/* Logo and Brand Name */}
        <div className="text-center mb-4">
          <Image
            src={Logo} // Replace with your logo path
            alt="Sulmine Logo"
            width={250} // Adjust logo width
            height={60} // Adjust logo height
            className="mx-auto"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          {/* Register Button */}
          <Link href="/pages/auth/register">
          <button
            className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-900 shadow-xl transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Register
          </button>
          </Link>

          {/* Connect Wallet Button */}
          <Link href="/pages/dashboard"
            className="w-full py-4 rounded-xl text-black font-semibold bg-white/20 backdrop-blur-lg border border-white/40 hover:bg-white/30 transition duration-300 flex items-center justify-center shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
          
            <WalletIcon className="h-6 w-6 mr-3 text-black" />
            Connect Wallet
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/80 text-sm">
          <p>By logging in, you agree to our</p>
          <a
            href="#"
            className="text-white/90 hover:text-white underline"
          >
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Animation Container */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tl from-purple-600 to-blue-500 opacity-20 animate-pulse"></div>
    </div>
  );
};

export default Login;
