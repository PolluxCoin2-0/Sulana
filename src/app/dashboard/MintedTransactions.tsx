import { MintTransactionInterface } from "@/interface";
import Link from "next/link";
import React from "react";

const MintedTransactions: React.FC<{ transactions: MintTransactionInterface[] }> = ({ transactions }) => {
  return (
    <div className="bg-gradient-to-b from-[rgba(43,37,90,0.34)] to-[rgba(200,200,200,0.09)] rounded-xl border border-gray-400 border-opacity-30 p-4 w-full overflow-x-auto">
      {/* Table Header */}
      <div className="bg-[#212D49] rounded-xl text-white flex flex-row items-center justify-between py-2 min-w-[850px] md:min-w-0">
        <p className="font-bold px-8 py-2 w-[50%] text-left">Transaction</p>
        <p className="font-bold px-4 py-2 w-[25%] text-center">Mint Time</p>
        <p className="font-bold px-8 py-2 w-[25%] text-right">Amount</p>
      </div>

      {/* Transactions */}
      {transactions.map((transaction, index) => (
        <Link href={`https://poxscan.io/transactions-detail/${transaction?.trxId}`}
          key={index}
          className="text-white flex flex-row items-center justify-between pt-4 pb-2 border-b border-gray-400 border-opacity-30 last:border-0 min-w-[850px] md:min-w-0"
        >
          <p className="block xl:hidden px-8 py-2 w-[50%] text-left">{`${transaction?.trxId.slice(0,10)}...${transaction?.trxId.slice(-10)}`}</p>
          <p className="hidden xl:block px-8 py-2 w-[50%] text-left">{transaction?.trxId}</p>
          <p className="px-4 py-2 w-[25%] text-center">{new Date(transaction?.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          <p className="px-8 py-2 w-[25%] text-right">{transaction?.amount}</p>
        </Link>
      ))}
    </div>
  );
};

export default MintedTransactions;
