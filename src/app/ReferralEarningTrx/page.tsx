"use client";
import React, { useEffect, useState } from "react";

interface ReferralEarning {
  id: string;
  referredUser: string;
  earningAmount: number;
  date: string;
}

const mockReferralData: ReferralEarning[] = [
  { id: "1", referredUser: "user123", earningAmount: 50, date: "2024-11-21T09:43:47.675Z" },
  { id: "2", referredUser: "user456", earningAmount: 100, date: "2024-11-20T08:15:30.675Z" },
  { id: "3", referredUser: "user789", earningAmount: 25, date: "2024-11-19T14:10:20.675Z" },
];

const ReferralEarnings: React.FC = () => {
  const [referralEarnings, setReferralEarnings] = useState<ReferralEarning[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock API call
  const fetchReferralEarnings = async () => {
    try {
      // Simulate a delay and fetching data
      setLoading(true);
      setTimeout(() => {
        setReferralEarnings(mockReferralData); // Replace this with an API call
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to fetch referral earnings:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReferralEarnings();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-lg font-bold mb-4">Referral Earnings</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : referralEarnings.length === 0 ? (
        <p className="text-center">No referral earnings found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Referred User</th>
              <th className="p-2 border">Earning Amount</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {referralEarnings.map((earning, index) => (
              <tr key={earning.id} className="hover:bg-gray-50">
                <td className="p-2 border text-center">{index + 1}</td>
                <td className="p-2 border text-center">{earning.referredUser}</td>
                <td className="p-2 border text-center">₹{earning.earningAmount}</td>
                <td className="p-2 border text-center">{formatDate(earning.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReferralEarnings;
