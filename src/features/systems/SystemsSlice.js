import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    systems: [
        {
            systemName: "Chrome",
            logo: "/img/systems/crome.png"
        },
        {
            systemName: "Office",
            logo: "/img/systems/office.png"
        },
    ]
};


export const SystemsSlice = createSlice({
    name: "systems",
    initialState,
    reducers: {
        Add: (state, action) => {
            state.systems = [...state.systems, action.payload ];

        },

    }
});


export const selectSystems = (state) => state.systems.systems;


export const { Add } = SystemsSlice.actions;
export default SystemsSlice.reducer;