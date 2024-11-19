const API_ENDPOINTS = {
    auth: {
      login: "/signIn",
      register: "/signUp",
    },
    user: {
      getBalance: "/getBalanceOf",
      stakeBalance: "/stakeSulaana",
    },
    tokenReturns: {
      userTotalReturns: "/getUserTotalReturn",
      totalRoiReturns: "/getTotalRoiReturn",
      totalReferralReturns: "/getUserReferralRewards",
    },
    mint: {
      userMint:"/mint",
      getMintTime:"/getMintDate",
      updateMintTime:"/updateMintDate",
    },
    DB:{
      saveToDB : "/createCycle",
      getFromDB : "/getAllCycles"
    },
    referral :{
      directReferral : "/getAllReferrals",
    },
    transaction:{
      approval:"/approval",
    }
  };
  
  export default API_ENDPOINTS;