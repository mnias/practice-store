'use client';

import ProductGroup from '@/components/common/product-group/product-group';
import { ProductGroup as ProductGroupType } from '@/types/product-group/product-group';

// interface Props {
//   productGroups: ProductGroupType[];
// }

// export default function ProductGroups({ productGroups }: Props) {

const productGroups: ProductGroupType[] = [
  {
    title: 'NEW ARRIVALS',
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
  },
  {
    title: 'TOP SELLING',
    products: [
      {
        id: 5,
        name: 'Best Seller',
        src: '/products/checkered-shirt.png',
        star: 4.5,
        price: 100,
        listPrice: 120,
      },
      {
        id: 6,
        name: 'Best Seller',
        src: '/products/checkered-shirt.png',
        star: 4.5,
        price: 100,
        listPrice: 120,
      },
      {
        id: 7,
        name: 'Best Seller',
        src: '/products/checkered-shirt.png',
        star: 4.5,
        price: 100,
        listPrice: 120,
      },
      {
        id: 8,
        name: 'Best Seller',
        src: '/products/checkered-shirt.png',
        star: 4.5,
        price: 100,
        listPrice: 120,
      },
    ],
  },
  // Add more product groups as needed
];

export default function ProductGroups() {
  return (
    <div className="mx-auto w-full max-w-[1256px] divide-y divide-[#000]/10">
      {productGroups.map(productGroup => {
        return <ProductGroup key={productGroup.title} productGroup={productGroup} />;
      })}
    </div>
  );
}
