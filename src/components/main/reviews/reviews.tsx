'use client';

import { Review as ReviewType } from '@/types/review/review.interface';
import Image from 'next/image';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Review from './reveiw';
import { useState } from 'react';

const reviews: ReviewType[] = [
  {
    id: 1,
    name: 'John Doe',
    reviewContents: 'This is an amazing product! Highly recommend it to everyone.',
    starRating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    reviewContents: 'Great quality and fast shipping. Will buy again!',
    starRating: 4,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    reviewContents: 'Not what I expected, but still a decent purchase.',
    starRating: 3,
  },
  {
    id: 4,
    name: 'Bob Brown',
    reviewContents: 'Excellent customer service and a fantastic product!',
    starRating: 5,
  },
  {
    id: 5,
    name: 'Charlie White',
    reviewContents: 'Good value for money, but the size runs small.',
    starRating: 4,
  },
  {
    id: 6,
    name: 'Diana Green',
    reviewContents: 'I love this! It fits perfectly and looks great.',
    starRating: 5,
  },
];

export default function Reviews() {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const onClickPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const onCLickNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mx-6 mt-12.5 flex max-w-[1240px] flex-row justify-between md:mx-6 md:mt-[5rem] xl:mx-auto xl:w-full">
        <span className="text-5xl font-bold">OUR HAPPY CUSTOMERS</span>
        <div className="flex flex-row gap-4">
          <button onClick={onClickPrev} className="cursor-pointer">
            <Image src="/arrow_left.svg" alt="previous review" width={24} height={24} />
          </button>
          <button onClick={onCLickNext} className="cursor-pointer">
            <Image className="rotate-180" src="/arrow_left.svg" alt="next review" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-10">
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={20}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          breakpoints={{
            390: {
              slidesPerView: 1,
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
            },
            480: {
              slidesPerView: 1.2,
            },
            540: {
              slidesPerView: 1.4,
            },
            640: {
              slidesPerView: 1.6,
            },
            870: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 3.2,
            },
            1440: {
              slidesOffsetBefore: 100,
              slidesOffsetAfter: 100,
              slidesPerView: 3.6,
            },
            1680: {
              slidesOffsetBefore: 100,
              slidesOffsetAfter: 100,
              slidesPerView: 4,
            },
          }}
        >
          {reviews.map(review => {
            return (
              <SwiperSlide key={review.id}>
                <Review review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
