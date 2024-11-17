"use client";
import React from "react";
import Logo from "../../../../assests/LogoWithText.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname); // Log the pathname to check

  const routesToHideNavbar = ["/", "/login", "/register"];
  const shouldShowNavbar = routesToHideNavbar.some(route => pathname.startsWith(route));
  console.log("gfgfhgf", shouldShowNavbar)

  if (shouldShowNavbar) return null;

  return (
    <nav className="w-full bg-black shadow-[0px_1px_15px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <Image src={Logo} alt="sulmine-logo" width={0} height={0} className="w-[60%]" />
        </div>

        {/* Connect Wallet Button */}
        <button className="bg-gradient-to-r from-[#572EAC] to-[#8922B3] text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
