import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    folders: []
};


export const FoldersSlice = createSlice({
    name: "folders",
    initialState,
    reducers: {
        setFolders: (state, action) => {
            state.folders = action.payload;
        },
        update: (state, action) => {
            state.folders =action.payload;
        },
        RemoveFolder: (state, action) => {
            state.folders = state.folders.filter((folder) => folder !== action.payload);
        },
    }
});


export const selectFolders = (state) => state.folders.folders;


export const { update, RemoveFolder,setFolders } = FoldersSlice.actions;
export default FoldersSlice.reducer;