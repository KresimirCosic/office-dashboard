import { configureStore } from '@reduxjs/toolkit';

import userInterfaceReducer from './slices/userInterface';
import authenticationReducer from './slices/authentication';

const store = configureStore({
  reducer: {
    userInterface: userInterfaceReducer,
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
