import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    systems: [],
    systemsOptions: [{ value: 'OutLook' }, { value: 'Photo Shop' }, { value: 'Lync' }, { value: 'Power Point' }, { value: 'Word' }, { value: 'Fuck You' }]
};


export const SystemsSlice = createSlice({
    name: "systems",
    initialState,
    reducers: {
        setSystems: (state, action) => {
            if (action.payload) {
                const systems = action.payload.split(',').map(function (item) {
                    return item.trim();
                });
                const systemsObj = [];
                systems.map(name => {
                    systemsObj.push({ systemName: name });
                });

                state.systems = systemsObj; //set systems

                let systemsOptions = current(state).systemsOptions;
                systemsOptions = systemsOptions.filter((option) => {
                    const existsInSystems = systems.includes(option.value);
                    return !existsInSystems;
                });

                state.systemsOptions = systemsOptions;  //filter systems options
            }
        },
        updateSystems: (state, action) => {
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