import Image from 'next/image';

interface Props {
  starRating: number;
}

export default function StarRating({ starRating }: Props) {
  const fullStars = Math.floor(starRating);
  const extraStar = starRating % 1;

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <div key={`full-${index}`} className="relative mr-1 h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]">
          <Image src={`/ic_star.svg`} alt="Full star" fill className="object-cover" />
        </div>
      ))}
      {extraStar > 0 && (
        <div className="relative mr-1 h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - extraStar * 100}% 0 0)`,
            }}
          >
            <Image src={`/ic_star.svg`} alt="Partial star" fill className="object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}
