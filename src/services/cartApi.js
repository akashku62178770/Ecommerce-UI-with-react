import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.awsugn.biz/carts/" }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
    registerCart: builder.mutation({
      query: (cart) => {
        return {
          url: "{id}/items /",
          method: "POST",
          body: cart,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useRegisterCartMutaion } = cartApi;
