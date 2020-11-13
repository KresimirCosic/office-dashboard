import { StoreDetails } from '../redux/slices/shop';
import ShopService from './ShopService';

class StoreService extends ShopService<StoreDetails> {
  constructor() {
    super();
  }
}

export const storeService = new StoreService();

export default StoreService;
