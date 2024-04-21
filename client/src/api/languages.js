import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const languagesApi = createApi({
	reducerPath: "languagesApi",
	tagTypes: ["Languages"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/languages" }),
	endpoints: builder => ({
		getAllLanguages: builder.query({
			query: () => ({
				url: `/`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetAllLanguagesQuery } = languagesApi;
