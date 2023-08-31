import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../type-global/user-types.ts";

const initialState = {
    user: <IUser>{}
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {reducer, actions} = userSlice