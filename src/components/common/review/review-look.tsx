import { Review as ReviewType } from '@/types/review/review.interface';
import StarRating from '../button/star-rating';

interface Props {
  review: ReviewType;
}

export default function ReviewLook({ review }: Props) {
  return (
    <div className={`flex h-full w-full flex-col gap-3 rounded-[20px] border border-[#000]/10 p-6`}>
      <StarRating starRating={review.starRating} />
      <div>
        {review.name}
        {review.id}
      </div>
      <div>{review.reviewContents}</div>
    </div>
  );
}
