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
      state = {
        ...state,
        authenticated: true,
        username: action.payload,
      };
    },
    logout(state) {
      state = {
        ...state,
        authenticated: false,
        username: '',
      };
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
