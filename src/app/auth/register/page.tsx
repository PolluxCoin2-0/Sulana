"use client";
import React from "react";
import { WalletIcon, CurrencyDollarIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const RegistrationPage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(137, 34, 179, 0.9) 0%, rgba(90, 100, 214, 0.9) 30%, rgba(185, 77, 228, 0.9) 63.5%, rgba(93, 99, 214, 0.9) 100%)",
      }}
    >
      {/* Moving Balls */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full w-8 h-8 md:w-12 md:h-12 opacity-80 animate-smoothMove"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
              animation: `moveBall ${Math.random() * 10 + 5}s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Registration Card */}
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-5 md:p-8 w-full max-w-md lg:max-w-lg xl:max-w-xl transform z-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-4 md:mb-6 tracking-wide">
          SULMINE REGISTRATION
        </h1>
        <form className="space-y-4 md:space-y-8">
          {/* Wallet Address Input */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Wallet Address"
              className="w-full px-10 md:px-14 py-3 md:py-5 rounded-xl bg-white/10 text-white placeholder:text-white/70 focus:ring-1 focus:ring-black focus:outline-none focus:shadow-lg transition duration-300"
            />
            <WalletIcon className="absolute top-1/2 left-3 md:left-4 h-6 w-6 md:h-8 md:w-8 text-white/60 group-focus-within:text-black transform -translate-y-1/2 transition duration-300" />
          </div>
          {/* Amount Input */}
          <div className="relative group">
            <input
              type="number"
              inputMode="numeric"
              placeholder="Amount"
              className="w-full px-10 md:px-14 py-3 md:py-5 rounded-xl bg-white/10 text-white placeholder:text-white/70 focus:ring-1 focus:ring-black focus:outline-none focus:shadow-lg transition duration-300 appearance-none"
            />
            <CurrencyDollarIcon className="absolute top-1/2 left-3 md:left-4 h-6 w-6 md:h-8 md:w-8 text-white/60 group-focus-within:text-black transform -translate-y-1/2 transition duration-300" />
          </div>
          {/* Referral Wallet Address Input */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Referral Wallet Address"
              className="w-full px-10 md:px-14 py-3 md:py-5 rounded-xl bg-white/10 text-white placeholder:text-white/70 focus:ring-1 focus:ring-black focus:outline-none focus:shadow-lg transition duration-300"
            />
            <UserIcon className="absolute top-1/2 left-3 md:left-4 h-6 w-6 md:h-8 md:w-8 text-white/60 group-focus-within:text-black transform -translate-y-1/2 transition duration-300" />
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 md:py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-xl hover:shadow-purple-800/50 transform hover:scale-105 transition duration-300"
          >
            Register
          </button>
        </form>
        {/* Terms and Conditions */}
        <p className="text-xs md:text-sm text-white/70 mt-4 md:mt-6 text-center">
          By registering, you agree to our{" "}
          <a
            href="#"
            className="text-purple-300 hover:text-purple-800 underline"
          >
            Terms & Conditions
          </a>
          .
        </p>
        {/* Login Link */}
        <p className="text-xs md:text-sm text-white/70 mt-2 text-center">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-purple-300 hover:text-purple-800 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
