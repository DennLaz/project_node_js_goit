// import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import authSlice from "./auth/authSlice";

// const persistConfig = {
//   key: "token",
//   storage,
//   whitelist: ["token"],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authSlice);

// const rootReducer = combineReducers({
//   auth: persistedAuthReducer,
// });

// export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./auth/authSlice";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedReducer,
});

export default rootReducer;
