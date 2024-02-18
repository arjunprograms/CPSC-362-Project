import { createReducer, createSlice } from "@reduxjs/toolkit";


const initialState = {

    user: JSON.parse(window?.localStorage.getItem("user")) ?? {},
    edit : false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout(state) {
            state.user = null;
            localStorage?.removeItem("user");
        },
    },
});

export default userSlice.reducer;

export function UserLogin(user) {
    return (dispatch, getState) => {
        dispatch(userSlice.actions.login(user));
    };
}

export function Logout() {
    return (dispatch, getState) => {
        dispatch(userSlice.action.logout());
    };
}

