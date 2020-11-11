import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from './slices/authentication';
import shopReducer from './slices/shop';

const rootStore = configureStore({
  reducer: {
    authentication: authenticationReducer,
    shop: shopReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;
