import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    folders: ["C:\\Users\\Liora Yacob", "C:\\Users\\Liora Yacob\\my-one", "C:\\Users\\Liora Yacob\\one-direction"]
};


export const FoldersSlice = createSlice({
    name: "folders",
    initialState,
    reducers: {
        AddFolders: (state, action) => {
            let folders = action.payload.map(obj => obj.folderPath);
            state.folders = state.folders.concat(folders)
        },

        RemoveFolder: (state, action) => {
            state.folders = state.folders.filter((folder) => folder !== action.payload);
        },
    }
});


export const selectFolders = (state) => state.folders.folders;


export const { AddFolders, RemoveFolder } = FoldersSlice.actions;
export default FoldersSlice.reducer;