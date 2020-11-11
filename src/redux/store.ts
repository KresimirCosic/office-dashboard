import { configureStore } from '@reduxjs/toolkit';

import userInterfaceReducer from './slices/userInterface';
import authenticationReducer from './slices/authentication';
import shopReducer from './slices/shop';

const store = configureStore({
  reducer: {
    userInterface: userInterfaceReducer,
    authentication: authenticationReducer,
    shop: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
