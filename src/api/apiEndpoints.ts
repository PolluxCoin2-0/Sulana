const API_ENDPOINTS = {
    auth: {
      login: "/signIn",
      register: "/signUp",
    },
    user: {
      getBalance: "/getBalanceOf",
      stakeBalance: "/stakeSulaana",
      getUserDetails : "/getUser",
      claimReward : "/claimReward",
      getReferralRewards : "/getUserReferralRewards",
      getAllUserStakes : "/getAllUserStakes",
      mintUser :"/mintForUser",
    },
    transaction:{
      approval:"/approval",
    }
  };
  
  export default API_ENDPOINTS;