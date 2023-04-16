// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// // import { userAuthApi } from './services/userAuthApi'
// import { userAuthApi } from "../services/userAuthApi";
// import authReducer from "../features/authSlice";
// import userReducer from "../features/userSlice";
// export const store = configureStore({
// reducer: {
// [userAuthApi.reducerPath]: userAuthApi.reducer,
// auth: authReducer,
// user: userReducer,
// },
// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware().concat(userAuthApi.middleware),
// });

// setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./statusSlice";

export const store = configureStore({
  reducer: {
    status: statusReducer, //the key here is query to access queryReducer. it should be the same as the querySlice name which we gave it "query"
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
