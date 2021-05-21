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
                    state.userObj[key].prefix = action.payload[key].prefix;
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
            let changeInPrefix = false;
            let phoneNumber;

            if (("Computer_Option" in changes)) {
                changeInComputerOption = true;
            }
            if (("prefix" in changes)) {
                changeInPrefix = true;
            }

            if (("communicationType" in changes)) {
                console.log('communicationType in changes')
                changeInCommunication = true;
                console.log('changes.communicationType', changes.communicationType)

                if (changes.communicationType === 1) {
                    console.log('1')
                    if (changeInPrefix === true) {
                        console.log('prefix')
                        if ("More_Contact_Information" in changes) {
                            console.log('yes More_Contact_Information')
                            phoneNumber = changes.prefix + changes.More_Contact_Information;
                            changes["More_Contact_Information"] = phoneNumber;
                        }
                        else {
                            console.log('no More_Contact_Information')
                            phoneNumber = changes.prefix + state.userObj.More_Contact_Information;
                            changes["More_Contact_Information"] = phoneNumber;

                        }
                    }
                    else {
                        console.log('noooooo predix in changes')
                        if ("More_Contact_Information" in changes) {
                            console.log('More_Contact_Information in changes only')
                            phoneNumber = state.userObj.Ui_Properties["prefix"] + changes.More_Contact_Information;
                            changes["More_Contact_Information"] = phoneNumber;
                        }
                    }
                }
            }
            else {
                console.log('communicationType in state')
                if (state.userObj.Ui_Properties["communicationType"] === 1) {
                    console.log('1')
                    if (changeInPrefix === true) {
                        console.log('prefix')
                        if ("More_Contact_Information" in changes) {
                            console.log('yes More_Contact_Information')
                            phoneNumber = changes.prefix + changes.More_Contact_Information;
                            changes["More_Contact_Information"] = phoneNumber;
                        }
                        else {
                            console.log('no More_Contact_Information')
                            phoneNumber = changes.prefix + state.userObj.More_Contact_Information;
                            changes["More_Contact_Information"] = phoneNumber;

                        }
                    }
                    else {
                        console.log('noooooo prefix in changes')
                        if ("More_Contact_Information" in changes) {
                            console.log('More_Contact_Information in changes only')
                            phoneNumber = state.userObj.Ui_Properties["prefix"] + changes.More_Contact_Information;
                            changes["More_Contact_Information"] = phoneNumber;
                        }
                    }
                }
            }
            console.log('phoneNumber', phoneNumber);
            console.log('changeInPrefix', changeInPrefix)

            const UiPropertiesObj = { stage: changes.stage > state.userObj.Ui_Properties["stage"] ? changes.stage : state.userObj.Ui_Properties["stage"], communicationType: changeInCommunication ? changes.communicationType : state.userObj.Ui_Properties["communicationType"], Computer_Option: changeInComputerOption ? changes.Computer_Option : state.userObj.Ui_Properties["Computer_Option"], prefix: changeInPrefix ? changes.prefix : state.userObj.Ui_Properties["prefix"] };
            changes["Ui_Properties"] = UiPropertiesObj;

            delete changes.stage;
            delete changes.communicationType;
            delete changes.Computer_Option;
            delete changes.prefix;
            console.log('changes', changes);
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