'use client';

import CartProduct from '@/components/common/product/cart-product';
import { useState } from 'react';

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
];

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState(products);

  const onClickDelete = (productId: number) => {
    setCartProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <div className="mx-auto flex w-full max-w-[1256px] flex-col border-t border-t-black/10 px-4">
      <div className="mt-[50px] mb-[20px] text-3xl font-bold md:mt-[70px] md:mb-[24px] md:text-5xl">Cart</div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-2/3 flex-col gap-4 divide-y divide-gray-10 rounded-[20px] border border-gray-10 p-4 md:gap-6 md:px-5 md:py-6">
          {cartProducts.length === 0 ? (
            cartProducts.map(product => (
              <div key={product.id} className="pb-4 md:pb-6">
                <CartProduct product={product} onClickDelete={onClickDelete} />
              </div>
            ))
          ) : (
            <div className="text-2xl font-extrabold">Your cart is empty.</div>
          )}
        </div>
        <div className="flex-1/3 rounded-[20px] border border-gray-10">결제~</div>
      </div>
    </div>
  );
}
