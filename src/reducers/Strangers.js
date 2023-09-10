import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";



export const StrangersApi= createApi({
    reducerPath: "strangersApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT/posts'}),
    endpoints: (builder)=>({
        getStrangersByTitle: builder.query({
            query:(title)=>'strangers/'+title,
        }),
        getTitle: builder.query({
            query: ()=>"title"
        })
    })
})


export const {useGetStrangerByTitleQuery, useGetTitleQuery}= StrangersApi;