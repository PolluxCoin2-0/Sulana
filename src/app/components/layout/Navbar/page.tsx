"use client";
import React, { useEffect, useRef } from "react";
import Logo from "@/assests/LogoWithText.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setDataObject, setIsLogin } from "@/redux/slice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const userStateData = useSelector((state: RootState) => state?.wallet);

  const routesToHideNavbar = ["/", "/login", "/auth/register", "/auth/login"];
  const shouldHideNavbar = routesToHideNavbar.includes(pathname); // Check for exact match

  // Handle Sign Out
  const handleSignOut = () => {
    // Dispatch to reset the state
    dispatch(setIsLogin(false));
    dispatch(setDataObject(undefined));

    // Show toast message
    toast.success("Successfully signed out!");

    // Navigate to home or login page
    router.push("/");
  };

  // Create a ref to track if event listener has been added
  const eventListenerAdded = useRef(false);

  // Handle wallet address change event
  useEffect(() => {
    const handleChange = (event: CustomEvent<{ wallet_address: string }>) => {
      if (
        event.detail.wallet_address !==
        (userStateData?.dataObject?.walletAddress as string)
      ) {
        toast.error(
          "Attention: Your wallet address has changed. Please log in again."
        );
        handleSignOut();
      }
    };

    if (userStateData?.isLogin && !eventListenerAdded.current) {
      // Add custom event listener
      document.addEventListener("Wallet Change", handleChange as EventListener);
      eventListenerAdded.current = true;
    }

    return () => {
      if (eventListenerAdded.current) {
        document.removeEventListener(
          "Wallet Change",
          handleChange as EventListener
        );
        eventListenerAdded.current = false;
      }
    };
  }, [userStateData?.isLogin, userStateData?.dataObject?.walletAddress]);

  if (shouldHideNavbar) return null;

  return (
    <nav className="px-0 md:px-0 lg:px-6 w-full bg-black shadow-[0px_1px_15px_0px_rgba(255,255,255,0.2)] backdrop-blur-sm z-50">
      <div className=" mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <Image
            src={Logo}
            alt="sulmine-logo"
            width={0}
            height={0}
            className="w-[70%] md:w-[60%]"
          />
        </div>

        <div className="flex items-center space-x-2 md:space-x-8">
          <p className="text-white font-bold text-base md:text-xl cursor-pointer">
            Unstake
          </p>
          {/* Connect Wallet Button */}
          <button
            onClick={handleSignOut}
            className="whitespace-nowrap bg-gradient-to-r from-[#572EAC] to-[#8922B3] text-sm md:text-base text-white font-medium px-3 md:px-6 py-2 rounded-lg shadow-lg 
        hover:scale-105 transition-transform"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
