import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/api/users/signup",
                method: "POST",
                body: user,
            }),
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/api/users/login",
                method: "POST",
                body: user,
            }),
        }),
        // creating product
        createProduct: builder.mutation({
            query: (product) => ({
                url: "/api/products",
                body: product,
                method: "POST",
            }),
        }),

        // deleteProduct: builder.mutation({
        //     query: ({ product_id, user_id }) => ({
        //         url: `/products/${product_id}`,
        //         body: {
        //             user_id,
        //         },
        //         method: "DELETE",
        //     }),
        // }),

        // updateProduct: builder.mutation({
        //     query: (product) => ({
        //         url: `/products/${product.id}`,
        //         body: product,
        //         method: "PATCH",
        //     }),
        // }),

        // add to cart
        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: "/api/products/add-to-cart",
                body: cartInfo,
                method: "POST",
            }),
        }),
        // remove from cart
        removeFromCart: builder.mutation({
            query: (body) => ({
                url: "/api/products/remove-from-cart",
                body,
                method: "POST",
            }),
        }),

        // increase cart
        increaseCartProduct: builder.mutation({
            query: (body) => ({
                url: "/api/products/increase-cart",
                body,
                method: "POST",
            }),
        }),

        // decrease cart
        decreaseCartProduct: builder.mutation({
            query: (body) => ({
                url: "/api/products/decrease-cart",
                body,
                method: "POST",
            }),
        }),
        // create order
        createOrder: builder.mutation({
            query: (body) => ({
                url: "/orders",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useCreateProductMutation,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useIncreaseCartProductMutation,
    useDecreaseCartProductMutation,
    useCreateOrderMutation,
    // useDeleteProductMutation,
    // useUpdateProductMutation,
} = appApi;

export default appApi;
