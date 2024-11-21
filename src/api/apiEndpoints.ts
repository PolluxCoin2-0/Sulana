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
      mintUser :"/mintForUser",
      checkUserExistOrNot: "/checkUserExistOrNot",
    },
    web2:{
      createStake:"/createStake",
      createMint :"/createMint",
      createClaim : "/createReward",
      updateStakeById:"/updateStakeById",
      getAllUserMintTrx:"/getAllUserMintTrx",
      getAllUserRewardTrx :"/getAllUserRewardTrx",
      getAllStakes:"/getAllStakes",
    },
    transaction:{
      approval:"/approval",
    }
  };
  
  export default API_ENDPOINTS;