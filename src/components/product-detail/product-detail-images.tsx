import Image from 'next/image';
import StarRating from '../common/button/star-rating';

export default function ProductDetailImages() {
  return (
    <div className="mx-auto w-full">
      <div className="max-w-[1250px] px-4">
        <div className="flex w-full flex-col lg:flex-row lg:gap-10">
          <div className="flex flex-1 flex-col-reverse gap-4 md:flex-row">
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
          <div className="mt-6 flex flex-1 flex-col lg:mt-0">
            <h2 className="line-clamp-2 text-2xl font-bold md:text-4-5xl">
              checkered shirt checkered shirt checkered shirt checkered shirt checkered shirt checkered shirt
            </h2>
            <StarRating starRating={4.5} starSize={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
