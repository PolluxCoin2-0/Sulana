"use client";
import Image from "next/image";
import React, { useState } from "react";
import SilverPool from "../../assests/SilverPool.svg";
import GoldPool from "../../assests/GoldPool.svg";
import PlatinumPool from "../../assests/Platnium Pool.svg";
import DiamondPool from "../../assests/Diamond Pool.svg";
import CrownDiamondPool from "../../assests/CrownDiamondPool.svg";
import SUL from "../../assests/SUL.svg";
import Stake from "../../assests/Stake.svg";
import Mint from "../../assests/Mint.svg";
import MintedTransactions from "./MintedTransactions";
import ShimmerEffect from "@/app/components/ShimmerEffect";

const transactions = [
  {
    amount: "100.00",
    mintRatio: "1:1",
    investDate: "2024-11-17",
    lastMint: "2024-11-15",
    mintReward: "10.00",
  },
  {
    amount: "200.00",
    mintRatio: "1:2",
    investDate: "2024-11-10",
    lastMint: "2024-11-12",
    mintReward: "20.00",
  },
  {
    amount: "200.00",
    mintRatio: "1:2",
    investDate: "2024-11-10",
    lastMint: "2024-11-12",
    mintReward: "20.00",
  },
  {
    amount: "200.00",
    mintRatio: "1:2",
    investDate: "2024-11-10",
    lastMint: "2024-11-12",
    mintReward: "20.00",
  },
  {
    amount: "200.00",
    mintRatio: "1:2",
    investDate: "2024-11-10",
    lastMint: "2024-11-12",
    mintReward: "20.00",
  },
  {
    amount: "200.00",
    mintRatio: "1:2",
    investDate: "2024-11-10",
    lastMint: "2024-11-12",
    mintReward: "20.00",
  },
];

const DashBoard: React.FC = () => {
  const [isComponentLoading, setComponentLoading] = useState <boolean>(false);
  if (isComponentLoading) {
    return <ShimmerEffect />;
  }
  return (
    <div className="min-h-screen bg-black px-2 md:px-4 py-7">
      {/* Referral Link Section */}
      <div
        className="bg-[linear-gradient(90.11deg,rgba(137,34,179,0.264)_0.11%,rgba(43,37,90,0.1782)_47.67%,rgba(105,26,139,0.264)_99.92%)]
         py-[18px] px-4 lg:px-8 rounded-xl flex justify-between items-center"
      >
        <p className="text-white font-bold text-base truncate">
          Referral link: <span className="font-normal">dvlkjvflsdkjvjkssderbh4dnbsfnd54sn5fb4g4</span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
          />
        </svg>
      </div>

      {/* Main Content Section */}
      <div className="py-8 rounded-lg grid gap-6 lg:grid-cols-[78%,20%] md:grid-cols-1">
  {/* First Subdiv */}
  <div className="space-y-5 flex flex-col">
    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Individual Stats */}
      {[{ value: "0.00", text: "Stake Balance", icon: Stake },
        { value: "0.00", text: "Mint Balance", icon: Mint },
        { value: "0.00", text: "Referral Earnings", icon: "🎉", button: "View" }]
        .map(({ value, text, icon, button }, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[rgba(43,37,90,0.67)] to-[rgba(200,200,200,0.67)] px-6 py-3 rounded-xl flex flex-row justify-between items-center"
          >
            <div className="flex flex-col space-y-1 justify-start">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {value}
              </span>
              <span className="text-xs md:text-sm text-gray-300">{text}</span>
            </div>
            {!button && (
              <Image
                src={icon}
                height={0}
                width={0}
                alt={text}
                className="w-[20%] md:w-[15%]"
              />
            )}
            {button && (
              <button className="text-xs md:text-sm bg-[#D2D2D2] rounded-2xl py-[6px] px-3 md:px-4 font-bold text-black cursor-pointer">
                {button}
              </button>
            )}
          </div>
        ))}
    </div>

    {/* Action Buttons */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Stake Token Section */}
      <div className="border border-black bg-gradient-to-r from-[rgba(138,34,179,0.34)] via-[rgba(43,37,90,0.25)] to-[rgba(105,26,139,0.44)] rounded-xl px-6 md:px-8 py-8 md:py-10 flex flex-col justify-between">
        <p className="text-white font-bold text-2xl md:text-3xl">STAKE TOKEN</p>
        <div className="grid grid-cols-[70%,26%] gap-4 my-8 pb-10 border-b border-gray-400 border-opacity-30">
          <div className="rounded-xl border border-gray-400 border-opacity-30 bg-sul-background px-5 md:px-7 py-3">
            <p className="text-white font-semibold text-xl md:text-2xl">0.0000</p>
            <p className="text-[#DFDFDF] text-sm">Enter Amount</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-sul-background rounded-xl border border-gray-400 border-opacity-30">
            <Image src={SUL} alt="sul-image" height={0} width={0} className="w-[20%] md:w-[28%]" priority />
            <p className="text-white font-medium text-sm md:text-base pt-1">SUL</p>
          </div>
        </div>
        <button className="mt-1 w-full bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] text-white text-lg md:text-2xl font-semibold px-6 py-3 md:py-4 rounded-2xl transform hover:scale-105 transition-transform delay-200">
          STAKE
        </button>
      </div>

      {/* Claim Token Section */}
      <div className="border border-black bg-gradient-to-r from-[rgba(138,34,179,0.34)] via-[rgba(43,37,90,0.25)] to-[rgba(105,26,139,0.44)] rounded-xl px-6 md:px-8 py-8 md:py-10 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="text-white font-bold text-2xl md:text-3xl">CLAIM TOKEN</p>
          <div className="flex items-center space-x-1 cursor-pointer">
            <p className="text-white text-xs md:text-sm font-thin">View Rewards</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-[70%,26%] gap-4 my-8 pb-10 border-b border-gray-400 border-opacity-30">
          <div className="rounded-xl border border-gray-400 border-opacity-30 bg-sul-background px-5 md:px-7 py-3">
            <p className="text-white font-semibold text-xl md:text-2xl">10.000</p>
            <p className="text-[#DFDFDF] text-sm">Reward</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-sul-background rounded-xl border border-gray-400 border-opacity-30">
            <Image src={SUL} alt="sul-image" height={0} width={0} className="w-[20%] md:w-[28%]" priority />
            <p className="text-white font-medium text-sm md:text-base pt-1">SUL</p>
          </div>
        </div>
        <button className="mt-1 w-full bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] text-white text-lg md:text-2xl font-semibold px-6 py-3 md:py-4 rounded-2xl transform hover:scale-105 transition-transform delay-200">
          CLAIM REWARD
        </button>
      </div>
    </div>
  </div>

  {/* Second Subdiv */}
  <div className="space-y-4 md:space-y-[12px] flex flex-col justify-between">
    {[{ value: "0.00", text: "Silver Pool", gradient: "bg-silver-pool", imagePath: SilverPool },
      { value: "0.00", text: "Gold Pool", gradient: "bg-gold-pool", imagePath: GoldPool },
      { value: "0.00", text: "Platinum Pool", gradient: "bg-platinum-pool", imagePath: PlatinumPool },
      { value: "0.00", text: "Diamond Pool", gradient: "bg-diamond-pool", imagePath: DiamondPool },
      { value: "0.00", text: "Crown Diamond Pool", gradient: "bg-crown-diamond-pool", imagePath: CrownDiamondPool }]
      .map(({ value, text, gradient, imagePath }, idx) => (
        <div
          key={idx}
          className={`bg-opacity-30 px-4 py-3 lg:py-4 xl:py-[10px] rounded-xl flex items-center justify-between text-white ${gradient}`}
        >
          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-2xl font-bold">{value}</span>
            <span className="text-xs md:text-sm font-normal">{text}</span>
          </div>
          <Image
            src={imagePath}
            alt={text}
            height={0}
            width={0}
            className="w-[20%] md:w-[15%]"
          />
        </div>
      ))}
  </div>
      </div>

      {/* Mint Table */}
      <div className="bg-gradient-to-b from-[rgba(43,37,90,0.34)] to-[rgba(200,200,200,0.09)] rounded-xl border-gray-400 border-[1px] border-opacity-30 p-4 my-4 w-full overflow-x-auto">
  {/* Header Section */}
  <div className="bg-[#212D49] rounded-xl text-white flex flex-row items-center justify-between py-2 min-w-[850px] md:min-w-0">
    <p className="font-bold px-8 py-2 w-[20%] text-left">Amount</p>
    <p className="font-bold px-4 py-2 w-[20%] text-center">Mint Ratio</p>
    <p className="font-bold px-4 py-2 w-[20%] text-center">Invest Date</p>
    <p className="font-bold px-4 py-2 w-[20%] text-center">Last Mint</p>
    <p className="font-bold px-8 py-2 w-[20%] text-right">Mint Reward</p>
  </div>

  {/* Data Row Section */}
  <div className="text-white flex flex-row items-center justify-between pt-4 min-w-[850px] md:min-w-0">
    <p className="px-8 py-2 w-[20%] text-left">100.00</p>
    <p className="px-4 py-2 w-[20%] text-center">1:1</p>
    <p className="px-4 py-2 w-[20%] text-left lg:text-center">2024-11-17</p>
    <p className="px-0 lg:px-4 py-2 w-[20%] text-left lg:text-center">2024-11-15</p>
    <div className="lg:w-[20%] px-4 flex justify-end">
      <button
        className="w-full lg:w-[50%] bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] 
        text-white text-lg font-semibold px-4 py-2 rounded-xl transform hover:scale-105 transition delay-300"
      >
        Mint
      </button>
    </div>
  </div>
</div>


      {/* Transaction Table */}
      <p className="font-bold text-white text-3xl mt-8 mb-4 pl-2 ">Transactions</p>
      <MintedTransactions transactions={transactions} />
    </div>
  );
};

export default DashBoard;
