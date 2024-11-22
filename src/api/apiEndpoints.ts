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
      getClaimRewardAmount : "/getUserTotalRewards",
      unstake: "/unstake",
      getDirectBonus :"/getDirectBonus",
      getClaimedRewards : "/getClaimedRewards",
    },
    web2:{
      createStake:"/createStake",
      createMint :"/createMint",
      createClaim : "/createReward",
      updateStakeById:"/updateStakeById",
      getAllUserMintTrx:"/getAllUserMintTrx",
      getAllUserRewardTrx :"/getAllUserRewardTrx",
      getAllStakes:"/getAllStakes",
      getAllUserCount:"/getAllUserCount",
    },
    transaction:{
      approval:"/approval",
    }
  };
  
  export default API_ENDPOINTS;