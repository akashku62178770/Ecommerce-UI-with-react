import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

// https://api.awsugn.biz/auth/users/ to see user info
// https://api.awsugn.biz/auth/users/me/ to edit and check user info
// https://api.awsugn.biz/auth/jwt/create to login and get access and refresh tokens
// https://api.awsugn.biz/auth/jwt/refresh to refresh the access token

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.awsugn.biz/auth/" }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "users/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "jwt/create",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: "profile/",
          method: "GET",
          headers: {
            // "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: "changepassword/",
          method: "POST",
          body: actualData,
          headers: {
            // "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: "send-reset-password-email/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
            // authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `/reset-password/${id}/${token}/`,
          method: "POST",
          body: actualData,
          headers: {
            "Content-type": "application/json",
            // authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetLoggedUserQuery,
  useChangeUserPasswordMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
} = userAuthApi;
