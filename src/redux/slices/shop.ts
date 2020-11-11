import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { createTracing } from 'trace_events';

export interface StoreDetails {
  name: string;
  category: string;
  employees: string[];
}

export interface StoreData {
  id: string;
  data: StoreDetails;
}

export interface CategoryData {
  category: string;
  numberOfProducts: number;
}

export interface ProductDetails {
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
}

export interface ProductData {
  id: string;
  data: ProductDetails;
}

export interface ShopData {
  store: StoreData;
  categories: CategoryData[];
  products: ProductData[];
}

const initialState: ShopData = {
  store: {
    id: '',
    data: {
      name: '',
      category: '',
      employees: [],
    },
  },
  categories: [],
  products: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setStoreData(state, action: PayloadAction<StoreData>) {
      state.store = { ...state.store, ...action.payload };
    },
    removeStoreData(state) {
      state.store = { ...initialState.store };
    },
    setCategoriesData(state, action: PayloadAction<CategoryData[]>) {
      state.categories = [...action.payload];
    },
    removeCategoriesData(state) {
      state.categories = [...initialState.categories];
    },
    setProductsData(state, action: PayloadAction<ProductData[]>) {
      state.products = [...action.payload];
    },
    removeProductsData(state) {
      state.products = [...initialState.products];
    },
  },
});

export const {
  setStoreData,
  removeStoreData,
  setCategoriesData,
  removeCategoriesData,
  setProductsData,
  removeProductsData,
} = shopSlice.actions;

export default shopSlice.reducer;
