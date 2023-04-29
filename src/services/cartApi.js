import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.awsugn.biz/carts/" }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getUserCart: builder.mutation({
      query: (access_token) => {
        return {
          url: "/",
          method: "GET",
          headers: {
            // "Content-type": "application/json",
            authorization: `JWT ${access_token}`,
          },
        };
      },
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useRegisterCartMutaion } = cartApi;
