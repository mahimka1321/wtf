import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {URL_API} from "../utils/utlis.ts";
import {ICities, IUser} from "../type-global/user-types.ts";


export const api = createApi({
    reducerPath: "api",
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({
        baseUrl: URL_API
    }),
    endpoints: (builder) => ({
        getUser: builder.query<IUser[], object>({
            query: () => '/users',
            providesTags: () => [{type: 'Users'}]
        }),
        getCities: builder.query<ICities[], object>({
            query: () => '/cities'
        }),
        getOneCities: builder.query<ICities, string | undefined>({
            query: (id) => `/cities/${id}`
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                body: user,
                method: 'POST'
            }),
            invalidatesTags: () => [{type: 'Users'}]
        }),
        byCities: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: () => [{type: 'Users'}]
        }),
        byTour: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: () => [{type: 'Users'}]
        })
    })
})

export const {useGetUserQuery, useCreateUserMutation, useByTourMutation, useByCitiesMutation, useGetOneCitiesQuery, useGetCitiesQuery} = api