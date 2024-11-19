import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the state
interface WalletState {
  dataObject: object;
}

// Define the initial state based on the WalletState type
const initialState: WalletState = {
  dataObject: {},
};

// Create the slice with proper types for reducers
const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setDataObject: (state, action: PayloadAction<object>) => {
      state.dataObject = action.payload;
    },
  },
});

// Export the action and reducer
export const { setDataObject } = walletSlice.actions;
export default walletSlice.reducer;
