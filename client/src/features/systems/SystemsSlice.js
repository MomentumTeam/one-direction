import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    systems: [
        {
            systemName: "Chrome",
            usage: "aaaa aaaa",
            rate: 2,
        },
        {
            systemName: "Office",
            usage: "bbbbb bbbbb",
            rate: 3,
        },
    ],
    systemsOptions: [ { value: 'OutLook' }, { value: 'Photo Shop' }]
};


export const SystemsSlice = createSlice({
    name: "systems",
    initialState,
    reducers: {
        AddToExistingList: (state, action) => {
            state.systems = [...state.systems, action.payload]; //add to list
            state.systemsOptions = state.systemsOptions.filter((options) => options.value !== action.payload.systemName); //remove from options of selcet
        },
        RemoveFromExistingList: (state, action) => {
            state.systems = state.systems.filter((system) => system.systemName !== action.payload.systemName); //remove from list
            state.systemsOptions = [...state.systemsOptions, {value:action.payload.systemName}]; //return option to select
        },
    }
});


export const selectSystems = (state) => state.systems.systems;
export const selectSystemsOptions = (state) => state.systems.systemsOptions;


export const { AddToExistingList, RemoveFromExistingList } = SystemsSlice.actions;
export default SystemsSlice.reducer;