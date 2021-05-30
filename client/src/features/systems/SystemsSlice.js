import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    systems: [],
    systemsBackUp: [],
    allOptions: [{ value: 'OutLook' }, { value: 'Photo Shop' }, { value: 'Lync' }, { value: 'Power Point' }, { value: 'Word' }, { value: 'Fuck You' }],
    systemsOptions: [],
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
                state.systemsBackUp = systemsObj; //set systems to copy

                let allOptions = current(state).allOptions;

                state.systemsOptions = filterSystemsOptions(systems, allOptions);  //filter systems options
            }
        },
        updateSystems: (state, action) => {
            state.systems = action.payload;
            state.systemsBackUp = action.payload;

            let allOptions = current(state).allOptions;
            let systemsString = action.payload.map((systems) => systems.systemName);  
            state.systemsOptions = filterSystemsOptions(systemsString, allOptions);  //filter systems options (here as well in case of error)
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

function filterSystemsOptions(systems, allOptions) {  //functions to filter systems options

    let filterdOptions = allOptions.filter((option) => {
        const existsInSystems = systems.includes(option.value);
        return !existsInSystems;
    });
    return filterdOptions;
}

export const selectSystems = (state) => state.systems.systems;
export const selectSystemsBackUp = (state) => state.systems.systemsBackUp;
export const selectSystemsOptions = (state) => state.systems.systemsOptions;


export const { AddToExistingList, RemoveFromExistingList, setSystems, updateSystems } = SystemsSlice.actions;
export default SystemsSlice.reducer;