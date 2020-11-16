import {
  StoreDetails,
  CategoryData,
  ProductData,
  ProductDetails,
} from '../redux/slices/shop';
import axios, { AxiosResponse } from 'axios';

import { storeEndpoint } from '../constants/api';

type ShopServiceRepsonse =
  | StoreDetails
  | CategoryData
  | CategoryData[]
  | ProductData
  | ProductData[]
  | ProductDetails;

interface IShopService {
  getData: () => Promise<AxiosResponse<ShopServiceRepsonse>>;
}

abstract class ShopService<R extends ShopServiceRepsonse>
  implements IShopService {
  protected storeURL = storeEndpoint;

  constructor(protected resourceURL?: string) {}

  public getData = () => {
    return this.resourceURL
      ? axios.get<R>(`${this.storeURL}/${this.resourceURL}`)
      : axios.get<R>(this.storeURL);
  };
}

export default ShopService;
