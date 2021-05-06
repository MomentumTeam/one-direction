import { createSlice } from "@reduxjs/toolkit";

export const personalInformationSlice = createSlice({
  name: "PersonalInformation",
  initialState: {
    chnages: {},
  },
  reducers: {
    setChanges: (state, action) => {
      console.log('action pi', action.payload)
      state.chnages = action.payload;
    },
  },
});

export const { setChanges } = personalInformationSlice.actions;

export const selectPersonalInformation = (state) => state.PersonalInformation;

export default personalInformationSlice.reducer;
