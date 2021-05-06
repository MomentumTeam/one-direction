import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    systems: [
    ],
    systemsOptions: [{ value: 'OutLook' }, { value: 'Photo Shop' }, { value: 'Photo Shop' }]
};


export const SystemsSlice = createSlice({
    name: "systems",
    initialState,
    reducers: {
        setSystems: (state, action) => {
            if (action.payload) {
                const systems = action.payload.split(',');
                const res = [];
                systems.forEach(element => {
                    res.push({ systemName: element });
                });
                state.systems = res;
                // const exist = [];
                // systems.forEach(element => {
                //     exist.push({ value: element })

                // });    
                // console.log('exist', exist)
                // console.log("f", exist.concat(state.systemsOptions))
                // state.systemsOptions = exist.concat(state.systemsOptions);

            }

            // const uniqueOptions = Array.from(new Set(state.systemsOptions.map(a => a.value)))
            //     .map(value => {
            //         console.log('value', value)
            //         return state.systemsOptions.find(a => a.value === value)
            //     })
            // console.log("uniqueOptions", uniqueOptions);
            // state.systemsOptions = uniqueOptions;
        },
        updateSystems: (state, action) => {
            console.log('actionnnnnnnnnnnnnnnnnnnnnnnn', action.payload)
            state.systems = action.payload;
        },
        AddToExistingList: (state, action) => {
            state.systems = [...state.systems, action.payload]; //add to list
            state.systemsOptions = state.systemsOptions.filter((options) => options.value !== action.payload.systemName); //remove from options of selcet
        },
        RemoveFromExistingList: (state, action) => {
            state.systems = state.systems.filter((system) => system.systemName !== action.payload.systemName); //remove from list
            state.systemsOptions = [...state.systemsOptions, { value: action.payload.systemName }]; //return option to select
        },
    }
});


export const selectSystems = (state) => state.systems.systems;
export const selectSystemsOptions = (state) => state.systems.systemsOptions;


export const { AddToExistingList, RemoveFromExistingList, setSystems, updateSystems } = SystemsSlice.actions;
export default SystemsSlice.reducer;