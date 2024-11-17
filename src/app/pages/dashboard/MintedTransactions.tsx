import React from "react";

interface Transaction {
  amount: string;
  mintRatio: string;
  investDate: string;
  lastMint: string;
  mintReward: string;
}

const MintedTransactions: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div className="bg-gradient-to-b from-[rgba(43,37,90,0.34)] to-[rgba(200,200,200,0.09)] rounded-xl border border-gray-400 border-opacity-30 p-4">
      {/* Table Header */}
      <div className="bg-[#212D49] rounded-xl text-white flex flex-row items-center justify-between py-2">
        <p className="font-bold px-8 py-2 w-[20%] text-left">Amount</p>
        <p className="font-bold px-4 py-2 w-[20%] text-center">Mint Ratio</p>
        <p className="font-bold px-4 py-2 w-[20%] text-center">Invest Date</p>
        <p className="font-bold px-4 py-2 w-[20%] text-center">Last Mint</p>
        <p className="font-bold px-8 py-2 w-[20%] text-right">Mint Reward</p>
      </div>

      {/* Transactions */}
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="text-white flex flex-row items-center justify-between pt-4"
        >
          <p className="px-8 py-2 w-[20%] text-left">{transaction.amount}</p>
          <p className="px-4 py-2 w-[20%] text-center">{transaction.mintRatio}</p>
          <p className="px-4 py-2 w-[20%] text-center">{transaction.investDate}</p>
          <p className="px-4 py-2 w-[20%] text-center">{transaction.lastMint}</p>
          <p className="px-8 py-2 w-[20%] text-right">{transaction.mintReward}</p>
        </div>
      ))}
    </div>
  );
};

export default MintedTransactions;
