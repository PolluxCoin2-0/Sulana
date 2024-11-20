"use client";
import React from "react";
import Logo from "../../../../assests/LogoWithText.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setDataObject, setIsLogin } from "@/redux/slice";
import { toast } from "react-toastify";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const routesToHideNavbar = ["/", "/login", "/auth/register", "/auth/login"];
  const shouldHideNavbar = routesToHideNavbar.includes(pathname); // Check for exact match

  if (shouldHideNavbar) return null;

   // Handle Sign Out
   const handleSignOut = () => {
    // Dispatch to reset the state
    dispatch(setIsLogin(false));
    dispatch(setDataObject(undefined));
    // Navigate to home or login page
    router.push("/");
    // Show toast message
    toast.success("Successfully signed out!");
  };

  return (
    <nav className="px-0 md:px-0 lg:px-6 w-full bg-black shadow-[0px_1px_15px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm z-50">
      <div className=" mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <Image src={Logo} alt="sulmine-logo" width={0} height={0} className="w-[70%] md:w-[60%]" />
        </div>

        {/* Connect Wallet Button */}
        <button
        onClick={handleSignOut}
        className="whitespace-nowrap bg-gradient-to-r from-[#572EAC] to-[#8922B3] text-sm md:text-base text-white font-medium px-3 md:px-6 py-2 rounded-lg shadow-lg 
        hover:scale-105 transition-transform">
         Sign out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
