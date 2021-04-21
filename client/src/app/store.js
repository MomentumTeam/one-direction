import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import SystemsReducer from '../features/systems/SystemsSlice';
import FoldersSlice from '../features/sharingFolders/SharingFoldersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    systems: SystemsReducer,
    folders: FoldersSlice
  },
});
