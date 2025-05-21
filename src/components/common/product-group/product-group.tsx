import Product from '@/components/common/product/product';
import { ProductGroup as ProductGroupType } from '@/types/product-group/product-group';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useEffect, useState } from 'react';

interface Props {
  productGroup: ProductGroupType;
}

export default function ProductGroup({ productGroup }: Props) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  // 브라우저 크기 변경 시 Swiper 업데이트
  useEffect(() => {
    const handleResize = () => {
      if (swiper) {
        swiper.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [swiper]);

  return (
    <div className="w-full py-10">
      <div className="w-full pb-8 text-center text-3xl font-bold md:text-5xl">{productGroup.title}</div>
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={10}
        observer={true}
        observeParents={true}
        resizeObserver={true}
        updateOnWindowResize={true}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          390: {
            slidesPerView: 2.2,
          },
          640: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {productGroup.products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
