import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// Configuration for persisting walletReducer in session storage
const persistConfigSession = {
  key: "wallet",
  storage: storageSession,
};

// Persist reducers with their respective configurations
const persistedWalletReducer = persistReducer(persistConfigSession, walletReducer);

// Configure store with persisted reducers
const store = configureStore({
  reducer: {
    wallet: persistedWalletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ], // Ignore redux-persist actions for serializability checks
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };