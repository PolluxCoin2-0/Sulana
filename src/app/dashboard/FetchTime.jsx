import { useEffect, useState } from "react";
import { getLastMintTimeFromWeb3} from "@/api/apiFunctions";

// Let's assume the function getLastMintTimeFromWeb3 is async and returns a promise

const FetchTime = ({ userStateData, index }) => {
  const [mintTime, setMintTime] = useState("Fetching time...");

  // Function to fetch the time asynchronously
  const fetchMintTime = async () => {
    try {
      const result = await getLastMintTimeFromWeb3(userStateData?.dataObject?.walletAddress, index);
      setMintTime(result?.data?.lastMintedAt || "No time available");
    } catch (error) {
      console.error("Error fetching mint time:", error);
      setMintTime("Error fetching time");
    }
  };

  useEffect(() => {
    fetchMintTime();
  }, [userStateData, index]);

  return (
    <p>
      {mintTime}
    </p>
  );
};

export default FetchTime;
