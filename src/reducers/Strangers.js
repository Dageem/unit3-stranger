//C: this import is missing something on the end "@reduxjs/toolkit/query/..."
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const StrangersApi = createApi({
  reducerPath: "strangersApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT/posts",
  }),
  endpoints: (builder) => ({
    //C: your routes should be searching for posts not strangers

    //C: this route does not exist in the api. is it needed???
    getStrangersByTitle: builder.query({
      query: (title) => "strangers/" + title,
    }),
    //C: this route here should be the only one that you need and the query endpoint is not title. should it be anything more than a "/"???
    //C: i think this route should also be called something that has to do with posts because that is what it is retreiving. if you change it make sure you change your hook exports below
    getTitle: builder.query({
      query: () => "title",
    }),
  }),
});

export const { useGetStrangerByTitleQuery, useGetTitleQuery } = StrangersApi;
