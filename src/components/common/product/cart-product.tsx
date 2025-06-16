'use client';
import { Product } from '@/types/product/product.interface';
import Image from 'next/image';
import AmountButton from '../button/amount-button';
import { useState } from 'react';

interface Props {
  product: Product;
}

export default function CartProduct({ product }: Props) {
  const [amount, setAmount] = useState<number>(1);

  return (
    <div className="flex h-auto w-full flex-row gap-3 md:gap-4">
      <Image src={product.src} alt={`${product.name} image`} width={124} height={124} />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-row justify-between">
          <div className="line-clamp-1 text-base font-extrabold md:text-xl">{product.name}</div>
          <button className="cursor-pointer">
            <Image src="/ic_trash_can.svg" alt="trash can icon" width={24} height={24} />
          </button>
        </div>
        <div>Size: Large</div>
        <div>Color: White</div>
        <div className="mt-3 flex flex-row justify-between">
          <div className="text-xl font-extrabold md:text-2xl">${product.price}</div>
          <div className="min-h[32px] md:min-h[44px] min-w-[105px] md:min-w-[126px]">
            <AmountButton amount={amount} onChange={setAmount} />
          </div>
        </div>
      </div>
    </div>
  );
}
