import { createSlice } from '@reduxjs/toolkit';

export interface LoaderData {
  open: boolean;
}

export interface MenuData {
  open: boolean;
}

export interface NotifierData {
  open: boolean;
}

export interface UserInterfaceData {
  loader: LoaderData;
  menu: MenuData;
  notifier: NotifierData;
}

const initialState: UserInterfaceData = {
  loader: {
    open: false,
  },
  menu: {
    open: false,
  },
  notifier: {
    open: false,
  },
};

const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    openLoader(state) {
      state.loader = { open: true };
    },
    closeLoader(state) {
      state.loader = { open: false };
    },
    openMenu(state) {
      state.menu = { open: true };
    },
    closeMenu(state) {
      state.menu = { open: false };
    },
    openNotifier(state) {
      state.notifier = { open: true };
    },
    closeNotifier(state) {
      state.notifier = { open: false };
    },
  },
});

export const {
  openLoader,
  closeLoader,
  openMenu,
  closeMenu,
  openNotifier,
  closeNotifier,
} = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
