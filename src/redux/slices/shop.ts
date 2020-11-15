import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    deleteStoreData(state) {
      state.store = { ...initialState.store };
    },
    setCategoriesData(state, action: PayloadAction<CategoryData[]>) {
      state.categories = [...action.payload];
    },
    deleteCategoriesData(state) {
      state.categories = [...initialState.categories];
    },
    setProductsData(state, action: PayloadAction<ProductData[]>) {
      state.products = [...action.payload];
    },
    deleteProductsData(state) {
      state.products = [...initialState.products];
    },
    createProduct(state, action: PayloadAction<ProductData>) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<string>) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );

      state.products.splice(index, 1);
    },
  },
});

export const {
  setStoreData,
  deleteStoreData,
  setCategoriesData,
  deleteCategoriesData,
  setProductsData,
  deleteProductsData,
  createProduct,
  deleteProduct,
} = shopSlice.actions;

export default shopSlice.reducer;
