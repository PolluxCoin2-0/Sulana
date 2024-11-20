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

interface UserDetailsData {
    depositAmount: number;
    totalROI: number;
    referrer: string;
    referralCount: number;
    eligibleForSilverPool: boolean;
    eligibleForGoldPool: boolean;
    eligibleForPlatinumPool: boolean;
    eligibleForDiamondPool: boolean;
    eligibleForCrownDiamondPool: boolean;
    silverReward: number;
    goldReward: number;
    platinumReward: number;
    diamondReward: number;
    crownDiamondReward: number;
  }
  
  interface userDetailsInterface {
    data: UserDetailsData;
    message: string;
  }

  interface walletStateInterface {
    dataObject?:{
        _id?: string,
        walletAddress?: string,
        depositAmount?: number,
        referralCode?: string,
        referredBy?: string,
        deviceType?: string,
        deviceToken?: string,
        isDeleted?: boolean,
        isBlocked?: boolean,
        createdAt?: string,
        updatedAt?: string,
        __v?: number,
        token?: string
        type?: string,
        expire?: number,
        refreshToken?: {
            expiresIn?: string
        },
        message?: string
    },
    isLogin: boolean;
  }

  interface referralRewardInterface {
    data: number;
    message : string;
  }

 interface Stake {
    amount: number; 
    startTime: string; 
    lastMintedAt: string; 
    mintCount: number; 
    maturityDuration: number; 
    beforeMaturityDuration: number; 
    isUnstaked: boolean; 
    isLoading?: boolean;
  }
  
interface userAllStakesResponseInterface {
    data: Stake[];
  }

export type {
    LoginApiResponse,
    getbalanceInterface,
    registerInterface,
    stakeBalanceInterface,
    Transaction,
    BroadcastResponse,
    userDetailsInterface,
    UserDetailsData,
    walletStateInterface,
    referralRewardInterface,
    userAllStakesResponseInterface,
    Stake,
}