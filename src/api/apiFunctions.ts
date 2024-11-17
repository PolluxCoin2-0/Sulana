import { getRequest, postRequest, putRequest } from "./apiGenericMethods";
import API_ENDPOINTS from "./apiEndpoints"; // Import the API endpoints

// LOGIN
export const loginApi = async (walletAddress: string): Promise<any> => {
    return postRequest<any>(API_ENDPOINTS.auth.login, { walletAddress }, "");
  };

// REGISTER
