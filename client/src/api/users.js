import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
	reducerPath: "usersApi",
	tagTypes: ["User"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/users" }),
	endpoints: builder => ({
		getUserInfo: builder.query({
			query: username => ({
				url: `/${username}`,
				method: "GET",
			}),
		}),
		getAllUsers: builder.query({
			query: () => ({
				url: `/`,
				method: "GET",
			}),
		}),
		changeRole: builder.mutation({
			query: ({ username, ...body }) => ({
				url: `/${username}/role`,
				method: "PUT",
				body,
			}),
		}),
	}),
});

export const { useGetUserInfoQuery, useGetAllUsersQuery, useChangeRoleMutation } = usersApi;
