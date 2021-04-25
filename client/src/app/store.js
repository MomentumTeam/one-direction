import { configureStore } from '@reduxjs/toolkit';
import SystemsReducer from '../features/systems/SystemsSlice';
import FoldersSlice from '../features/sharingFolders/SharingFoldersSlice';
import userSlice from '../features/user/userSlice';

export default configureStore({
  reducer: {
    systems: SystemsReducer,
    folders: FoldersSlice,
    user: userSlice
  },
});
