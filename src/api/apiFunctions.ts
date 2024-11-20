import { 
  // getRequest,
   postRequest, 
  // putRequest
 } from "./apiGenericMethods";
import API_ENDPOINTS from "./apiEndpoints"; // Import the API endpoints
import axios from "axios";
import { BroadcastResponse, getbalanceInterface, LoginApiResponse, referralRewardInterface, registerInterface, stakeBalanceInterface, Transaction,userAllStakesResponseInterface,userDetailsInterface } from "@/interface";

const FULL_NODE_TRANSACTION_URL = process.env.NEXT_PUBLIC_FULL_NODE_TRANSACTION_URL || "";

// APPROVAL
export const approvalApi = async(walletAddress:string, amount:string):Promise<stakeBalanceInterface>=>{
    return postRequest<stakeBalanceInterface>(API_ENDPOINTS.transaction.approval,{walletAddress, amount});
}

//   GET BALANCE OF USER
export const getBalanceApi = async (walletAddress:string): Promise<getbalanceInterface> =>{
    return postRequest<getbalanceInterface>(API_ENDPOINTS.user.getBalance,{walletAddress},"");
}

// STAKE SUL BALANCE
export const stakeSulBalanceApi = async(walletAddress:string, amount:string, referrer:string):Promise<stakeBalanceInterface>=>{
    return postRequest<stakeBalanceInterface>(API_ENDPOINTS.user.stakeBalance,{walletAddress, amount, referrer});
}

// REGISTER
export const registerApi = async(walletAddress:string, depositAmount:string, referredBy:string):Promise<registerInterface>=>{
    return postRequest<registerInterface>(API_ENDPOINTS.auth.register,{walletAddress, depositAmount, referredBy});
}

// LOGIN
export const loginApi = async (walletAddress: string): Promise<LoginApiResponse> => {
    return postRequest<LoginApiResponse>(API_ENDPOINTS.auth.login, { walletAddress }, "");
  };

// Broadcast API
export const broadcastApi = async (transaction: Transaction): Promise<BroadcastResponse> => {
  try {
    const broadcastResponse = await axios.post(
      `${FULL_NODE_TRANSACTION_URL}/wallet/broadcasttransaction`,
      transaction
    );

    return broadcastResponse?.data as BroadcastResponse;
  } catch (error) {
    console.error("Error broadcasting transaction:", error);
    throw new Error("Failed to broadcast transaction.");
  }
};

// GET USER DETAILS
export const getUserDetailsApi = async (walletAddress:string): Promise<userDetailsInterface> =>{
  return postRequest<userDetailsInterface>(API_ENDPOINTS.user.getUserDetails,{walletAddress},"");
}

// CLAIM REWARD
export const claimRewardApi = async (walletAddress:string): Promise<stakeBalanceInterface> =>{
  return postRequest<stakeBalanceInterface>(API_ENDPOINTS.user.claimReward,{walletAddress},"");
}

// GET USER REFERRAL REWARD
export const referralRewardApi = async (walletAddress:string): Promise<referralRewardInterface> =>{
  return postRequest<referralRewardInterface>(API_ENDPOINTS.user.getReferralRewards,{walletAddress},"");
}

// GET USER ALL STAKES
export const userAllStakesApi = async (walletAddress:string): Promise<userAllStakesResponseInterface> =>{
  return postRequest<userAllStakesResponseInterface>(API_ENDPOINTS.user.getAllUserStakes,{walletAddress},"");
}

// MINT USER
export const mintUserApi = async (walletAddress:string, stakeIndex:number): Promise<stakeBalanceInterface> =>{
  return postRequest<stakeBalanceInterface>(API_ENDPOINTS.user.mintUser,{walletAddress, stakeIndex},"");
}
