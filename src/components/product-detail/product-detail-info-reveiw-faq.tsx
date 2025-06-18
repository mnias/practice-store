'use client';

import { Review as ReviewType } from '@/types/review/review.interface';
import { useState } from 'react';
import ReviewLook from '../common/review/review-look';

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

export default function ProductDetailInfoReviewFaq() {
  const [currentTab, setCurrentTab] = useState<number>(1);

  return (
    <>
      <div className="mt-12.5 flex h-8 w-full flex-row md:mt-20 md:h-10">
        <button
          className={`${currentTab === 0 ? 'border-b-2 border-b-black font-extrabold' : 'border-b-gray-10'} w-1/3 cursor-pointer border-b-1 text-center`}
          onClick={() => setCurrentTab(0)}
        >
          Product Detail
        </button>
        <button
          className={`${currentTab === 1 ? 'border-b-2 border-b-black font-extrabold' : 'border-b-gray-10'} w-1/3 cursor-pointer border-b-1 text-center`}
          onClick={() => setCurrentTab(1)}
        >
          Rating & Reviews
        </button>
        <button
          className={`${currentTab === 2 ? 'border-b-2 border-b-black font-extrabold' : 'border-b-gray-10'} w-1/3 cursor-pointer border-b-1 text-center`}
          onClick={() => setCurrentTab(2)}
        >
          FAQs
        </button>
      </div>
      <div className="flex flex-col">
        <div className="my-7 text-xl font-extrabold md:my-8 md:text-2xl">All Reviews</div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
          {reviews.map(review => {
            return (
              <div key={review.id} className="h-55 md:h-60">
                <ReviewLook review={review} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button className="mt-6 h-12 w-50 rounded-[62px] border-1 border-gray-10 md:mt-8 md:h-13 md:w-60">
            Load More Reviews
          </button>
        </div>
      </div>
    </>
  );
}
