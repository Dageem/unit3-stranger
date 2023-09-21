import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const StrangersApi= createApi({
    reducerPath: "strangersApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT/posts'}),
    endpoints: (builder)=>({
        getPosts: builder.query({
            query: ()=>"/"
        })
    })
})


export const {useGetPostsQuery}= StrangersApi;