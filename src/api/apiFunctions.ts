import { 
  // getRequest,
   postRequest, 
  // putRequest
 } from "./apiGenericMethods";
import API_ENDPOINTS from "./apiEndpoints"; // Import the API endpoints
import axios from "axios";

const FULL_NODE_TRANSACTION_URL = process.env.NEXT_PUBLIC_FULL_NODE_TRANSACTION_URL || "";
interface LoginApiResponse {
    statusCode: number;
    data: object;
  }

  
  interface getbalanceInterface{
    data: number;
  }

  interface registerInterface{
    data: object | string;
message : string;
statusCode: number;
  }
  
  interface stakeBalanceInterface {
    data: {
      transaction: object ; // The 'transaction' is optional, adjust as needed
    };
    message: string;
  }

  // Define the types for the transaction and response
interface Transaction {
  [key: string]: object; // Define more specific fields if you know the structure
}

interface BroadcastResponse {
  result: boolean; // Adjust based on actual API response fields
  txid: string;
}

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

