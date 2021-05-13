import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromServer, updateUserInServer } from "./userAPI";


export const getUser = createAsyncThunk("user/getUser", async () => {
    console.log('getUser')
    const user = await getUserFromServer();
    return user;
});

export const updateUserServer = createAsyncThunk("user/updateUser", async (_, { getState }) => {
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
        updateUserObj: (state, action) => {
            Object.keys(action.payload).forEach((key) => {
                if (key === "Ui_Properties") {
                    state.userObj[key].communicationType = action.payload[key].communicationType;
                    state.userObj[key].Computer_Option = action.payload[key].Computer_Option;
                }
                else {
                    state.userObj[key] = action.payload[key];
                }
            })
        },
        updateStage: (state, action) => {
            console.log('updateStage', action.payload);
            state.userObj.Ui_Properties["stage"] = action.payload > state.userObj.Ui_Properties["stage"] ? action.payload : state.userObj.Ui_Properties["stage"];
        },
        setChanges: (state, action) => {
            let changes = action.payload;
            let changeInCommunication = false;
            let changeInComputerOption = false;

            if (("communicationType" in changes)) {
                changeInCommunication = true;
            }
            if (("Computer_Option" in changes)) {
                changeInComputerOption = true;
            }

            const UiPropertiesObj = { stage: changes.stage > state.userObj.Ui_Properties["stage"] ? changes.stage : state.userObj.Ui_Properties["stage"], communicationType: changeInCommunication ? changes.communicationType : state.userObj.Ui_Properties["communicationType"], Computer_Option: changeInComputerOption ? changes.Computer_Option : state.userObj.Ui_Properties["Computer_Option"] };
            changes["Ui_Properties"] = UiPropertiesObj;
            delete changes.stage;
            delete changes.communicationType;
            state.changes = changes;
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

export const { set, setChanges, updateUserObj, updateStage } = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUserObj = (state) => state.user.userObj;
export const selectLoading = (state) => state.user.loading;

export default userSlice.reducer;