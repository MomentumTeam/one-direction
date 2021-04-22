import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import SystemsReducer from '../features/systems/SystemsSlice';
import FoldersSlice from '../features/sharingFolders/SharingFoldersSlice';
import userSlice from '../features/user/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    systems: SystemsReducer,
    folders: FoldersSlice,
    user: userSlice
  },
});
