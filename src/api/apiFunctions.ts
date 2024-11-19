import { getRequest, postRequest, putRequest } from "./apiGenericMethods";
import API_ENDPOINTS from "./apiEndpoints"; // Import the API endpoints

// APPROVAL
export const approvalApi = async(walletAddress:string, amount:string):Promise<object>=>{
    return postRequest<object>(API_ENDPOINTS.transaction.approval,{walletAddress, amount});
}

// REGISTER
export const registerApi = async(walletAddress:string, depositAmount:string, referredBy:string):Promise<object>=>{
    return postRequest<object>(API_ENDPOINTS.auth.register,{walletAddress, depositAmount, referredBy});
}

// STAKE SUL BALANCE
export const stakeSulBalanceApi = async(walletAddress:string, amount:string, referrer:string):Promise<object>=>{
    return postRequest<object>(API_ENDPOINTS.user.stakeBalance,{walletAddress, amount, referrer});
}

// LOGIN
export const loginApi = async (walletAddress: string): Promise<object> => {
    return postRequest<object>(API_ENDPOINTS.auth.login, { walletAddress }, "");
  };

//   GET BALANCE OF USER
export const getBalanceApi = async (walletAddress:string): Promise<object> =>{
    return postRequest<object>(API_ENDPOINTS.user.getBalance,{walletAddress},"");
}