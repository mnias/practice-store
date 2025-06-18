import ProductGroup from '../common/product-group/product-group';
import { ProductGroup as ProductGroupType } from '@/types/product-group/product-group';

const productGroup: ProductGroupType = {
  title: 'You might also like',
  products: [
    {
      id: 1,
      name: 'New Arrival',
      src: '/products/checkered-shirt.png',
      star: 4.5,
      price: 100,
      listPrice: 120,
    },
    {
      id: 2,
      name: 'New Arrival',
      src: '/products/checkered-shirt.png',
      star: 4.5,
      price: 100,
      listPrice: 120,
    },
    {
      id: 3,
      name: 'New Arrival',
      src: '/products/checkered-shirt.png',
      star: 4.5,
      price: 100,
      listPrice: 120,
    },
    {
      id: 4,
      name: 'New Arrival',
      src: '/products/checkered-shirt.png',
      star: 4.5,
      price: 100,
      listPrice: 120,
    },
  ],
};

export default function YouMightAlsoLike() {
  return (
    <div className="mx-auto">
      <ProductGroup productGroup={productGroup} />
    </div>
  );
}
