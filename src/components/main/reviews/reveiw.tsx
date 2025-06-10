import ReviewLook from '@/components/common/review/review-look';
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
      ref={reviewRef}
      className={`${isBlur ? 'opacity-50 blur-sm' : 'blur-0 opacity-80'} h-[10rem] w-[22.5rem] transition-all duration-300 ease-in-out md:h-[15rem] md:w-[25rem]`}
    >
      <ReviewLook review={review} />
    </div>
  );
}
