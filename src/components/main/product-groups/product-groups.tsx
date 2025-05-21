'use client';

import ProductGroup from '@/components/common/product-group/product-group';
import { ProductGroup as ProductGroupType } from '@/types/product-group/product-group';
import { useState } from 'react';

// interface Props {
//   productGroups: ProductGroupType[];
// }

// export default function ProductGroups({ productGroups }: Props) {
export default function ProductGroups() {
  const [productGroups, setProductGroups] = useState<ProductGroupType[]>([
    {
      title: 'NEW ARRIVALS',
      products: [
        {
          name: 'New Arrival',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
        {
          name: 'New Arrival',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
        {
          name: 'New Arrival',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
        {
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
          name: 'Best Seller',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
        {
          name: 'Best Seller',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
        {
          name: 'Best Seller',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
        {
          name: 'Best Seller',
          src: '/products/checkered-shirt.png',
          star: 4.5,
          price: 100,
          listPrice: 120,
        },
      ],
    },
    // Add more product groups as needed
  ]);
  return (
    <div className="mx-auto w-full max-w-[1240px] divide-y divide-[#000]/10">
      <div className="ml-4 w-full">
        {productGroups.map(productGroup => {
          return <ProductGroup key={productGroup.title} productGroup={productGroup} />;
        })}
      </div>
    </div>
  );
}
