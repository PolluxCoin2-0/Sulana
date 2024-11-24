"use client";
import { TransactionInterface } from "@/interface";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { unstakeApi, userAllStakesApi } from "@/api/apiFunctions";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ShimmerEffect from "../components/ShimmerEffect";
import { SignBroadcastTransactionStatus } from "@/lib/signBroadcastTransactionStatus";

const StakeUnstakePage: React.FC = () => {
  const router = useRouter();
  const [isComponentLoading, setComponentLoading] = useState <boolean>(false);
  const userStateData = useSelector((state: RootState)=>state?.wallet);
  const [allStakedArray, setAllStakedArray] = useState<TransactionInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async()=>{
    setComponentLoading(true);
    const stakesDataArray = await userAllStakesApi(userStateData?.dataObject?.token as string);
    console.log({stakesDataArray});
    const updatedStakes = stakesDataArray.data.transactions.map((item: TransactionInterface) => ({
      ...item,
      isLoading: false, // Once data is fetched, set isLoading to false
    }));
    console.log("page stakeUnstake",updatedStakes);
    setAllStakedArray(updatedStakes);
    setComponentLoading(false);
  }

  useEffect(()=>{
    if(userStateData?.isLogin){
     fetchData();
    }
  },[])

  if(!userStateData?.isLogin){
    router.push("/");
   }
 
   if (isComponentLoading) {
     return <ShimmerEffect />;
   }

  const handleUnstakeFunc = async (e: React.MouseEvent<HTMLButtonElement>, index:number, ): Promise<void> => {
    e.preventDefault();
    
    if(isLoading){
      toast.warning("Unstaking in progress");
      return;
    }

    try {
      setIsLoading(true);
      setAllStakedArray((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = { ...updatedState[index], isLoading: true };
        return updatedState;
      });
      
     const unstakeApiData =  await unstakeApi(userStateData?.dataObject?.walletAddress as string, index);

     if (!unstakeApiData?.data?.transaction) {
      toast.error("Mint Failed!");
      throw new Error("Mint Failed!");
    }

    // SIGN TRANSACTION
    const signBroadcastTransactionStatusFuncRes = await SignBroadcastTransactionStatus(unstakeApiData?.data?.transaction);
      if (signBroadcastTransactionStatusFuncRes.transactionStatus !== "SUCCESS") {
        toast.error("Transaction failed!");
        throw new Error("Transaction failed!");
      }
  
      toast.success("Unstake successful!");
     await fetchData(); 
    } catch (error) {
      toast.error("Failed to unstake!");
      console.error(error);
    } finally{
      setAllStakedArray((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = { ...updatedState[index], isLoading: false };
        return updatedState;
      });
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black px-2 md:px-4 py-7">
      <div className="bg-gradient-to-b from-[rgba(43,37,90,0.34)] to-[rgba(200,200,200,0.09)] rounded-xl border-gray-400 border-[1px] border-opacity-30 p-4 my-4 w-full overflow-x-auto">
        {/* Header Section */}
        <div className="bg-[#212D49] rounded-xl text-white flex flex-row items-center justify-between py-2 min-w-[850px] md:min-w-0">
          <p className="font-bold px-8 py-2 w-[25%] text-left">Invest Date</p>
          <p className="font-bold px-8 py-2 w-[25%] text-center">Amount</p>
          <p className="font-bold px-4 py-2 w-[25%] text-center">
            Maturity Date
          </p>
          <p className="font-bold px-8 py-2 w-[25%] text-right">Unstake</p>
        </div>

        {/* Data Row Section */}
        {allStakedArray.map((item, index) => {
          return (
            <>
              {!item.isUnstaked && (
                <Link href={`https://poxscan.io/transactions-detail/${item?.trxId}`}
                  className="text-white flex flex-row items-center justify-between pt-4 min-w-[850px] md:min-w-0 pb-2 border-b border-gray-400 border-opacity-30 last:border-0"
                  key={index}
                >
                  <p className="px-8 py-2 w-[25%] text-left">{new Date(item?.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                  <p className="px-4 py-2 w-[25%] text-center">
                    {item?.amount}
                  </p>
                  <p className="px-4 py-2 w-[25%] text-left lg:text-center">
                    {new Date(item?.maturityDuration).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                  </p>
                  <div className="lg:w-[25%] px-4 flex justify-end">
                    {item.isLoading ? (
                      <div className="w-full lg:w-[40%] rounded-xl flex justify-center bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] ">
                        <Loader />
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleUnstakeFunc(e, index)}
                        className="w-full lg:w-[40%] bg-gradient-to-r from-[rgba(137,34,179,0.7)] via-[rgba(90,100,214,0.7)] to-[rgba(185,77,228,0.7)] 
         text-white text-lg font-semibold px-4 py-2 rounded-xl transform hover:scale-105 transition delay-300"
                      >
                        Unstake
                      </button>
                    )}
                  </div>
                </Link>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default StakeUnstakePage;