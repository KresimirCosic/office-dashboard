import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthenticationData {
  authenticated: boolean;
  username: string;
}

const initialState: AuthenticationData = {
  authenticated: false,
  username: '',
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.authenticated = true;
      state.username = action.payload;
    },
    logout(state) {
      state.authenticated = false;
      state.username = '';
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
