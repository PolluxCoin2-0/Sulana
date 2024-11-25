"use client";
import { getAllReferralsTreeWeb2Api } from "@/api/apiFunctions";
import { ReferralData } from "@/interface";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReferralEarnings: React.FC = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const userStateData = useSelector((state: RootState) => state?.wallet);
  const [referralEarnings, setReferralEarnings] = useState<ReferralData | null>(null);

  useEffect(() => {
    if (userStateData?.isLogin) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const userReferralTreeData = await getAllReferralsTreeWeb2Api(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ0MjY2YmVkYTY5ZDNmODM5ZmIxNjIiLCJyb2xlIjoiVVNFUiIsImp0aSI6IjEzMmQ3ODZhZTA5YWY4NjBlZGJiM2JmN2JhMTYwYzljOTk3ZmVlZTkiLCJ3YWxsZXRBZGRyZXNzIjoiUFBEdWR5NnVBUkxrSDE4Y3REN1JWVEZMbVRLcVZCR05WbyIsImlhdCI6MTczMjUzNjQ5MX0.6POV4Km1LNqfrTjatwcZ5CihJIrhS7GQaC0GgN5R9-g",
      1
    );
    console.log({userReferralTreeData})
    setReferralEarnings(userReferralTreeData);
  };

  const toggleLevel = (level: number) => {
    setExpandedLevel(expandedLevel === level ? null : level);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-lg">
      {/* Total Balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <p className="text-xl font-bold mb-4 truncate">
    Wallet Address: {userStateData?.dataObject?.walletAddress || "N/A"}
  </p>
  <p className="text-xl font-bold mb-4">
    Total Balance: ₹{referralEarnings?.data?.data?.allLevelFunds || 0}
  </p>
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
          {/* Dynamically map levels */}
          {Object.keys(referralEarnings?.data?.data || {})
            .filter((key) => key.startsWith("level") && key.endsWith("Count"))
            .map((key, index) => {
              const level = index + 1;
              const countKey = `level${level}Count`;
              const depositKey = `level${level}TotalDeposit`;
              const referralsKey = `level${level}Referrals`;
              const referrals =
                referralEarnings?.data?.data?.[referralsKey] || [];

              return (
                <React.Fragment key={level}>
                  {/* Level Row */}
                  <tr className="hover:bg-gray-50">
                    <td className="p-2 border text-center">{level}</td>
                    <td className="p-2 border text-center">
                      {referralEarnings?.data?.data?.[countKey] || 0}
                    </td>
                    <td className="p-2 border text-center">
                      ₹{referralEarnings?.data?.data?.[depositKey] || 0}
                    </td>
                    <td className="p-2 border text-center">
                      <button
                        className="text-blue-500 focus:outline-none"
                        onClick={() => toggleLevel(level)}
                      >
                        {expandedLevel === level ? "▲" : "▼"}
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Referrals Table */}
                  {expandedLevel === level && (
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
                            {referrals.map((referral, index) => (
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
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralEarnings;
