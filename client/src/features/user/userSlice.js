import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromServer, updateUserInServer } from "./userAPI";


export const getUser = createAsyncThunk("user/getUser", async () => {
    console.log('getUser')
    const user = await getUserFromServer();
    return user;
});

export const updateUser = createAsyncThunk("user/updateUser", async (_, { getState }) => {
    try {
        const { changes } = getState().user;
        const res = await updateUserInServer(changes);
        return res;
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
        changes: {},
    },

    reducers: {
        set: (state, action) => {
            state.userObj = action.payload;
        },
        update: (state, action) => {
            console.log('update action.payload', action.payload)
            Object.keys(action.payload).forEach((key) => {
                console.log('key', key)
                if (key === "stage" || key === "communicationType") {
                    console.log("wowwwwwwwwww");
                    state.userObj.Ui_Properties[key] = action.payload[key];
                }
                else {
                    // console.log("key eeeeeeeeeeeeeee",key);

                    state.userObj[key] = action.payload[key];

                }
            })
            console.log('state.userObj', typeof state.userObj.Ui_Properties)

        },

        setChanges: (state, action) => {
            // console.log('setChanges action.payload', action.payload)
            let changeInCommunication=false;
            if (("communicationType" in action.payload)) { 
                changeInCommunication = true;
            }

            const UiPropertiesString = { stage: action.payload.stage, communicationType: changeInCommunication ? action.payload.communicationType : state.userObj.Ui_Properties["communicationType"] };
            action.payload["Ui_Properties"] = JSON.stringify(UiPropertiesString);
            delete action.payload.stage;
            delete action.payload.communicationType;

            state.changes = action.payload;
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

export const { set, setChanges, update } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUserObj = (state) => state.user.userObj;
export const selectLoading = (state) => state.user.loading;

export default userSlice.reducer;