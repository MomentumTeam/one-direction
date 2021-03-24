import { createSlice } from '@reduxjs/toolkit';

export const personalInformationSlice = createSlice({
  name: 'PersonalInformation',
  initialState: {
    heName: "",
    enName:"",
    displayName:"",
    phoneNumber:0000000000,
    computerName:"",
    personalNumber:0
  },
  reducers: {
    update: (state, action) => {
      state[action.payload.field] = action.payload;
    },
  },
});

export const { update } = personalInformationSlice.actions;

export const selectPersonalInformation =  state => state.PersonalInformation;

export default personalInformationSlice.reducer;
