import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const checkingApi = createApi({
	reducerPath: "checkingApi",
	tagTypes: ["Checking"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/listings" }),
	endpoints: builder => ({
		addListingToBase: builder.mutation({
			query: body => ({
				url: `/add`,
				method: "POST",
				body,
			}),
		}),
		checkListing: builder.mutation({
			query: body => ({
				url: `/check`,
				method: "POST",
				body,
			}),
		}),
		checkListingWeb: builder.mutation({
			query: body => ({
				url: `/check/web`,
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useAddListingToBaseMutation, useCheckListingWebMutation, useCheckListingMutation } =
	checkingApi;
