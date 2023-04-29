import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { userAuthApi } from './services/userAuthApi'
import { userAuthApi } from "../services/userAuthApi";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import { cartApi } from "../services/cartApi";
export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    auth: authReducer,
    user: userReducer,
    // [cartApi.reducerPath]: cartApi.reducer,
    // cart: cartReducer
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
