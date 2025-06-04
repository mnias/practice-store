'use client';
import Image from 'next/image';
import StarRating from '../common/button/star-rating';
import ColorSelector from '../common/button/color-selector';
import { useState } from 'react';
import TextSelector from '../common/button/text-selector';

export default function ProductDetailImages() {
  const [selectedColor, setSelectedColor] = useState<string>(`#4F4631`);
  const [selectedText, setSelectedText] = useState<string>(`Large`);

  return (
    <div className="mx-auto w-full">
      <div className="max-w-[1250px] px-4">
        <div className="flex w-full flex-col lg:flex-row lg:gap-10">
          <div className="md:max-h-auto flex w-full flex-col-reverse gap-4 md:flex-row lg:max-w-1/2 lg:self-start">
            {/* 썸네일 영역 */}
            <div className="flex flex-row gap-3 md:w-1/4 md:flex-col lg:flex">
              <div className="aspect-square w-1/3 overflow-hidden rounded-[20px] md:w-full">
                <div className="relative h-full w-full">
                  <Image
                    src="/products/checkered-shirt.png"
                    alt="checkered-shirt"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 37.5vw"
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="aspect-square w-1/3 overflow-hidden rounded-[20px] md:w-full">
                <div className="relative h-full w-full">
                  <Image
                    src="/products/checkered-shirt.png"
                    alt="checkered-shirt"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 37.5vw"
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="aspect-square w-1/3 overflow-hidden rounded-[20px] md:w-full">
                <div className="relative h-full w-full">
                  <Image
                    src="/products/checkered-shirt.png"
                    alt="checkered-shirt"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 37.5vw"
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* 메인 이미지 영역 */}
            <div className="mt-3 aspect-square w-full overflow-hidden rounded-[20px] md:mt-0 md:w-3/4">
              <div className="relative h-full w-full">
                <Image
                  src="/products/checkered-shirt.png"
                  alt="checkered-shirt"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 37.5vw"
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>

          {/* 상품 정보 영역 */}
          <div className="mt-6 flex w-full flex-col gap-3 lg:mt-0 lg:w-1/2 lg:gap-4">
            <h2 className="line-clamp-2 text-2xl font-bold md:text-4-5xl">
              checkered shirt checkered shirt checkered shirt checkered shirt checkered shirt checkered shirt
            </h2>
            <StarRating starRating={4.5} starSize={24} />
            <div className="flex flex-row items-center gap-2.5">
              <div className="text-[24px] font-extrabold lg:text-[32px]">{`12,000`}</div>
              <div className="text-[24px] font-extrabold text-[#000]/40 line-through lg:text-[32px]">{`16,000`}</div>
              <div className="flex h-5 w-10 items-center justify-center rounded-[62px] bg-[#f33]/10 text-[0.625rem] font-medium text-[#f33] md:h-7 md:w-14 md:text-xs">{`-25%`}</div>
            </div>

            <div className="line-clamp-2 text-sm text-gray-60 md:text-base">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it
              offers superior comfort and style. This graphic t-shirt which is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </div>
            <div className="h-[1px] w-full bg-gray-10" />
            <div className="text-sm text-gray-60 md:text-base">Select Colors</div>
            <ColorSelector
              colors={[`#4F4631`, `#314F4A`, `#31344F`]}
              onChange={setSelectedColor}
              selectedColor={selectedColor}
            />
            <div className="h-[1px] w-full bg-gray-10" />
            <div className="text-sm text-gray-60 md:text-base">Choose Size</div>
            <TextSelector
              texts={['Small', 'Medium', 'Large', 'X-Large']}
              selectedText={selectedText}
              onChange={setSelectedText}
            />
            <div className="h-[1px] w-full bg-gray-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
