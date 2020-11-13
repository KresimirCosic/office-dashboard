import { CategoryData } from '../redux/slices/shop';
import ShopService from './ShopService';

class CategoriesService extends ShopService<CategoryData[]> {
  constructor() {
    super('stats/categories');
  }
}

export const categoriesService = new CategoriesService();

export default CategoriesService;
