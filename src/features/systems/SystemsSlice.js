import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    systems: [  
        {
            systemName: "Chrome",
        },
        {
            systemName: "Office",
        },
    ],
    addedSystems: [

    ]
};


export const SystemsSlice = createSlice({
    name: "systems",
    initialState,
    reducers: {
        Add: (state, action) => {
            state.systems = [...state.systems, action.payload];

        },
        AddToExistingList: (state, action) => {
            state.addedSystems = [...state.addedSystems, action.payload];

        },

    }
});


export const selectSystems = (state) => state.systems.systems;
export const selectAddedSystems = (state) => state.systems.addedSystems;


export const { Add, AddToExistingList} = SystemsSlice.actions;
export default SystemsSlice.reducer;