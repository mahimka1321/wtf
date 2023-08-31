import {combineReducers} from "@reduxjs/toolkit";
import {api} from "../api/api.ts";
import {userSlice} from "../slices/user-slices/user.slice.ts";


export const globalStore = combineReducers({
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
})