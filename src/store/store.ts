import {configureStore} from "@reduxjs/toolkit";
import {globalStore} from "./globalStore.ts";
import {api} from "../api/api.ts";


export const store = configureStore({
    reducer: globalStore,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>