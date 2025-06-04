'use client';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import { useEffect, useState } from 'react';

/**
 * 기본적으로 별의 크기는 md 이상 1.125rem(18px), 이하는 1rem(16px)로 설정되어 있습니다.
 */

interface Props {
  starRating: number;
  starSize?: number;
}

export default function StarRating({ starRating, starSize = 18 }: Props) {
  const fullStars = Math.floor(starRating);
  const extraStar = starRating % 1;

  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();
  const [sizeInRem, setSizeInRem] = useState(`${starSize / 16}rem`);

  const defaultSize = `${starSize / 16}rem`;

  useEffect(() => {
    setIsMounted(true);
    const isMobile = width < 768;
    // px를 rem으로 변환
    const size = isMobile ? Math.max(starSize * 0.8, 16) : starSize;
    setSizeInRem(`${size / 16}rem`);
  }, [width, starSize]);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, index) => (
        <div
          key={`full-${index}`}
          className="relative mr-1"
          style={{ height: isMounted ? sizeInRem : defaultSize, width: isMounted ? sizeInRem : defaultSize }}
        >
          <Image src={`/ic_star.svg`} alt="Full star" fill className="object-cover" />
        </div>
      ))}
      {extraStar > 0 && (
        <div
          className="relative mr-1"
          style={{ height: isMounted ? sizeInRem : defaultSize, width: isMounted ? sizeInRem : defaultSize }}
        >
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
