'use client';
/* eslint-disable @next/next/no-img-element */
import { Product as ProductType } from '@/types/product/product.interface';
import StarRating from '../button/star-rating';
import Link from 'next/link';

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  return (
    <div className="">
      <Link href={`/product/${product.id}`}>
        <img
          className=""
          src={product?.src}
          alt={`${product?.name} image`}
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
        <div className="text-bold line-clamp-2 cursor-pointer pt-2 text-[1rem] break-words md:pt-4 md:text-[1.25rem]">
          {product.name}
        </div>
      </Link>
      <div className="mt-1 flex items-center md:mt-2">
        <StarRating starRating={4.5} />
        <div className="text-xs md:text-sm">
          <span>4.5/</span>
          <span className="text-black/60">5</span>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2.5 md:mt-2">
        <div className="font-bold text-black">{`12,000`}</div>
        <div className="font-bold text-[#000]/40 line-through">{`16,000`}</div>
        <div className="flex h-5 w-10 items-center justify-center rounded-[62px] bg-[#f33]/10 text-[0.625rem] font-medium text-[#f33] md:h-7 md:w-14 md:text-xs">{`-25%`}</div>
      </div>
    </div>
  );
}
