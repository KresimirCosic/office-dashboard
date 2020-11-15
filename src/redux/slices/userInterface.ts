import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInterfaceData {
  gridView: boolean;
  productsPerPage: number;
  currentPage: number;
}

const initialState: UserInterfaceData = {
  gridView: false,
  productsPerPage: 5,
  currentPage: 1,
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
  },
});

export const {
  turnOnGridView,
  turnOffGridView,
  setProductsPerPage,
  setCurrentPage,
  resetInterfaceData,
} = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
