import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    folders: ["C:\\Users\\Liora Yacob","C:\\Users\\Liora Yacob\\my-one","C:\\Users\\Liora Yacob\\one-direction"]
};


export const FoldersSlice = createSlice({
    name: "folders",
    initialState,
    reducers: {
        Add: (state, action) => {
            state.folders = [...state.folders, action.payload];

        },

    }
});


export const selectFolders = (state) => state.folders.folders;


export const { Add } = FoldersSlice.actions;
export default FoldersSlice.reducer;