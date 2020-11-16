import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationData {
  id: string;
  message: string;
}

export interface UserInterfaceData {
  gridView: boolean;
  productsPerPage: number;
  currentPage: number;
  notifications: NotificationData[];
}

const initialState: UserInterfaceData = {
  gridView: false,
  productsPerPage: 5,
  currentPage: 1,
  notifications: [],
};

const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    turnOnGridView(state) {
      state.gridView = true;
    },
    turnOffGridView(state) {
      state.gridView = false;
    },
    setProductsPerPage(state, action: PayloadAction<number>) {
      state.productsPerPage = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    resetInterfaceData(state) {
      state.gridView = false;
      state.productsPerPage = 5;
      state.currentPage = 1;
    },
    createNotification(state, action: PayloadAction<NotificationData>) {
      state.notifications.push(action.payload);
    },
    deleteNotification(state, action: PayloadAction<string>) {
      const index = state.notifications.findIndex(
        (notification) => notification.id === action.payload
      );
      if (index > -1) state.notifications.splice(index, 1);
    },
  },
});

export const {
  turnOnGridView,
  turnOffGridView,
  setProductsPerPage,
  setCurrentPage,
  resetInterfaceData,
  createNotification,
  deleteNotification,
} = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
