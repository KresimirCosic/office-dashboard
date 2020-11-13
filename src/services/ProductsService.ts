import { ProductDetails, ProductData } from '../redux/slices/shop';
import axios, { AxiosResponse } from 'axios';

import ShopService from './ShopService';

interface IProductsService {
  getProduct: (id: string) => Promise<AxiosResponse<ProductDetails>>;
  createProduct: (product: ProductDetails) => Promise<AxiosResponse<string>>;
  deleteProduct: (id: string) => Promise<AxiosResponse<string>>;
}

class ProductsService
  extends ShopService<ProductData[]>
  implements IProductsService {
  constructor() {
    super('products');
  }

  public getProduct = (id: string) => {
    return axios.get<ProductDetails>(
      `${this.storeURL}/${this.resourceURL}/${id}`
    );
  };

  public createProduct = (product: ProductDetails) => {
    return axios.post<string>(`${this.storeURL}/${this.resourceURL}`, product);
  };

  public deleteProduct = (id: string) => {
    return axios.delete<string>(`${this.storeURL}/${this.resourceURL}/${id}`);
  };
}

export const productsService = new ProductsService();

export default ProductsService;
