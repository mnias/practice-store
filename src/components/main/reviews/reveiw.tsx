import StarRating from '@/components/common/button/star-rating';
import { Review as ReviewType } from '@/types/review/review.interface';
import React from 'react';

interface Props {
  review: ReviewType;
}

export default function Review({ review }: Props) {
  const reviewRef = React.useRef<HTMLDivElement>(null);
  const [isBlur, setIsBlur] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBlur(false);
        } else {
          setIsBlur(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }

    const currentRef = reviewRef.current;

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`flex h-[10rem] w-[22.5rem] flex-col gap-3 rounded-[20px] border border-[#000]/10 p-6 transition-all duration-300 ease-in-out md:h-[15rem] md:w-[25rem] ${isBlur ? 'opacity-50 blur-sm' : 'blur-0 opacity-80'} `}
      ref={reviewRef}
    >
      <StarRating starRating={review.starRating} />
      <div>
        {review.name}
        {review.id}
      </div>
      <div>{review.reviewContents}</div>
    </div>
  );
}
