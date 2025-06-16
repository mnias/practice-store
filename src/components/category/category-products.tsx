'use client';
import { useState } from 'react';
import Product from '../common/product/product';
import Image from 'next/image';
import BottomSheet from '../common/modal/bottom-sheet';
import CategoryFilter from './category-filter';

interface Props {
  title: string;
}

const products = [
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
  {
    id: 9,
    name: 'Best Seller',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
];

export default function CategoryProducts({ title }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="text-2xl font-extrabold md:text-3xl">{title}</div>
        <button className="block md:hidden" onClick={() => setIsBottomSheetOpen(true)}>
          <Image src="/ic_filter.svg" alt="filter icon" width={16} height={16} />
        </button>
        <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} height="medium">
          <CategoryFilter />
        </BottomSheet>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>

      <div className="flex flex-row justify-between border-t border-gray-200 pt-5">
        <button className="flex h-9 w-22.5 flex-row items-center justify-center gap-2 rounded-[8px] border border-gray-10 font-medium md:w-27.5">
          <Image src="/arrow_left.svg" alt="previous icon" width={20} height={20} />
          Previous
        </button>
        <div>
          <button
            className={`h-9 w-9 ${currentPage === 1 ? 'bg-[#000]/6' : ''} md:h-10 md:w-10`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className={`h-9 w-9 ${currentPage === 2 ? 'bg-[#000]/6' : ''} md:h-10 md:w-10`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className={`h-9 w-9 ${currentPage === 3 ? 'bg-[#000]/6' : ''} md:h-10 md:w-10`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>
          <button
            className={`h-9 w-9 ${currentPage === 4 ? 'bg-[#000]/6' : ''} md:h-10 md:w-10`}
            onClick={() => setCurrentPage(4)}
          >
            4
          </button>
          <button
            className={`h-9 w-9 ${currentPage === 5 ? 'bg-[#000]/6' : ''} md:h-10 md:w-10`}
            onClick={() => setCurrentPage(5)}
          >
            5
          </button>
        </div>
        <button className="flex h-9 w-22.5 flex-row items-center justify-center gap-2 rounded-[8px] border border-gray-10 font-medium md:w-27.5">
          Next
          <Image src="/arrow_left.svg" alt="previous icon" width={20} height={20} className="rotate-180" />
        </button>
      </div>
    </div>
  );
}
