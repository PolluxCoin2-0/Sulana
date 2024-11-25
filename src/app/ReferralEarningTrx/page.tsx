"use client";
import { getAllReferralsTreeWeb2Api } from "@/api/apiFunctions";
import { ReferralData } from "@/interface";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const mockData: ReferralData = {
  allLevelFunds: 1150,
  levels: [
    {
      level: 1,
      count: 8,
      totalDeposit: 650,
      referrals: [
        {
          walletAddress: "PBJ71JpQUz3u1oRwZxhC2YdotiFma8jWQg",
          referredBy: "PPDudy6uARLkH18ctD7RVTFLmTKqVBGNVo",
          createdAt: "2024-11-25T07:30:51.683Z",
          depositAmount: 150,
        },
        {
          walletAddress: "PHLeQwd5HcTsQ1hkmqjZLkFhvpyneuj7Yk",
          referredBy: "PPDudy6uARLkH18ctD7RVTFLmTKqVBGNVo",
          createdAt: "2024-11-25T07:31:56.205Z",
          depositAmount: 150,
        },
        // Add other referrals...
      ],
    },
    {
      level: 2,
      count: 1,
      totalDeposit: 150,
      referrals: [
        {
          walletAddress: "PBtkano5cJrAy2xP9GJCPq3NT3XCdcqfVQ",
          referredBy: "PBJ71JpQUz3u1oRwZxhC2YdotiFma8jWQg",
          createdAt: "2024-11-25T07:36:31.326Z",
          depositAmount: 150,
        },
      ],
    },
    // Add other levels...
  ],
};

const ReferralEarnings: React.FC = () => {
  const [data] = useState(mockData);
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const userStateData = useSelector((state: RootState)=>state?.wallet);
  const [referralEarnings, setReferralEarnings]= useState<ReferralData | null>(null)
  
  useEffect(()=>{
    if(userStateData?.isLogin){
     fetchData();
    }
  },[])

  const fetchData = async() =>{
const userReferralTreeData = await getAllReferralsTreeWeb2Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ0MjY2YmVkYTY5ZDNmODM5ZmIxNjIiLCJyb2xlIjoiVVNFUiIsImp0aSI6IjEzMmQ3ODZhZTA5YWY4NjBlZGJiM2JmN2JhMTYwYzljOTk3ZmVlZTkiLCJ3YWxsZXRBZGRyZXNzIjoiUFBEdWR5NnVBUkxrSDE4Y3REN1JWVEZMbVRLcVZCR05WbyIsImlhdCI6MTczMjUzNjQ5MX0.6POV4Km1LNqfrTjatwcZ5CihJIrhS7GQaC0GgN5R9-g",1)
console.log("--------------------------------", userReferralTreeData)
setReferralEarnings(userReferralTreeData)
console.log(referralEarnings)
  }


  const toggleLevel = (level: number) => {
    setExpandedLevel(expandedLevel === level ? null : level);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-lg">
      {/* Total Balance */}
      <div className="text-xl font-bold mb-6">
        Total Balance: ₹{referralEarnings?.data?.data.allLevelFunds}
      </div>

      {/* Main Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Level</th>
            <th className="p-2 border">Total Wallets</th>
            <th className="p-2 border">Total Investments</th>
            <th className="p-2 border">See More</th>
          </tr>
        </thead>
        <tbody>
          {referralEarnings?.data?.data && referralEarnings?.data?.data.levels.map((levelData) => (
            <React.Fragment key={levelData.level}>
              {/* Level Row */}
              <tr className="hover:bg-gray-50">
                <td className="p-2 border text-center">{levelData.level}</td>
                <td className="p-2 border text-center">{levelData.count}</td>
                <td className="p-2 border text-center">
                  ₹{levelData.totalDeposit}
                </td>
                <td className="p-2 border text-center">
                  <button
                    className="text-blue-500 focus:outline-none"
                    onClick={() => toggleLevel(levelData.level)}
                  >
                    {expandedLevel === levelData.level ? "▲" : "▼"}
                  </button>
                </td>
              </tr>

              {/* Expanded Referrals Table */}
              {expandedLevel === levelData.level && (
                <tr>
                  <td colSpan={4} className="p-2 border bg-gray-50">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 border">Sr. No</th>
                          <th className="p-2 border">Wallet Address</th>
                          <th className="p-2 border">Amount</th>
                          <th className="p-2 border">Joining Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {levelData.referrals.map((referral, index) => (
                          <tr key={index}>
                            <td className="p-2 border text-center">
                              {index + 1}
                            </td>
                            <td className="p-2 border text-center">
                              {referral.walletAddress}
                            </td>
                            <td className="p-2 border text-center">
                              ₹{referral.depositAmount}
                            </td>
                            <td className="p-2 border text-center">
                              {formatDate(referral.createdAt)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralEarnings;
