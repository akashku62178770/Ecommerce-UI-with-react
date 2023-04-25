import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { userAuthApi } from './services/userAuthApi'
import { userAuthApi } from "../services/userAuthApi";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);
// setupApi(store.dispatch);



// import { configureStore } from '@reduxjs/toolkit'
// import { setupApi } from '@reduxjs/toolkit/query'
// import { userAuthApi } from './userAuthApi'

// const store = configureStore({
//   reducer: {
//     [userAuthApi.reducerPath]: userAuthApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userAuthApi.middleware),
// })

// setupApi(store.dispatch)
