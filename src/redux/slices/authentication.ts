import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  id: string;
  displayName: string;
}

export interface AuthenticationData {
  authenticated: boolean;
  user: UserData;
}

const initialState: AuthenticationData = {
  authenticated: false,
  user: {
    id: '',
    displayName: '',
  },
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticationData(state, action: PayloadAction<UserData>) {
      state = {
        authenticated: true,
        user: { ...action.payload },
      };
    },
    updateUserData(state, action: PayloadAction<Partial<UserData>>) {
      state.user = { ...state.user, ...action.payload };
    },
    removeAuthenticationData(state) {
      state = {
        authenticated: false,
        user: {
          id: '',
          displayName: '',
        },
      };
    },
  },
});

export const {
  setAuthenticationData,
  updateUserData,
  removeAuthenticationData,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
