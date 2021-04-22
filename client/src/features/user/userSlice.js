import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromServer, updateUserInServer } from "./userAPI";


export const getUser = createAsyncThunk("user/getUser", async () => {
    console.log('getUser')
    const user = await getUserFromServer();
    return user;
});

export const updateUser = createAsyncThunk("user/updateUser", async (_, { getState }) => {
    try {
        const { userObj } = getState().user;

        const user = await updateUserInServer(userObj);
        return user;
    }
    catch (e) {
        throw e;
    }
});


export const userSlice = createSlice({
    name: "user",

    initialState: {
        userObj: {},
        loading: false,
    },

    reducers: {
        update: (state, action) => {
            state.userObj = action.payload;
        },
    },

    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            console.log('action', action.payload);
            state.userObj = action.payload;
            state.loading = false;
        },
        [getUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getUser.rejected]: (state, action) => {
        }
    }
});

export const { update } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUserObj = (state) => state.user.userObj;
export const selectLoading = (state) => state.user.loading;

export default userSlice.reducer;