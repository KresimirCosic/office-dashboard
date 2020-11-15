import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from './slices/authentication';
import shopReducer from './slices/shop';
import userInterfaceReducer from './slices/userInterface';

const rootStore = configureStore({
  reducer: {
    authentication: authenticationReducer,
    shop: shopReducer,
    userInterface: userInterfaceReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
