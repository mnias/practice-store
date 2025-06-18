'use client';
import { useEffect, useState } from 'react';

interface RangeSliderProps {
  minPrice: number;
  maxPrice: number;
  initialMin?: number;
  initialMax?: number;
  onPriceChange?: (minPrice: number, maxPrice: number) => void;
  className?: string;
}

export default function RangeSlider({
  minPrice = 0,
  maxPrice = 1000,
  initialMin,
  initialMax,
  onPriceChange,
  className = '',
}: RangeSliderProps) {
  // 초기값을 props로 받거나 기본값 설정
  const initialMinValue = initialMin !== undefined ? initialMin : minPrice;
  const initialMaxValue = initialMax !== undefined ? initialMax : maxPrice;

  // 현재 선택된 가격 (실제 가격 값)
  const [currentMinPrice, setCurrentMinPrice] = useState<number>(initialMinValue);
  const [currentMaxPrice, setCurrentMaxPrice] = useState<number>(initialMaxValue);

  // 슬라이더 위치값 (0-100 사이의 퍼센트)
  const [minSliderPos, setMinSliderPos] = useState<number>(
    ((initialMinValue - minPrice) / (maxPrice - minPrice)) * 100,
  );
  const [maxSliderPos, setMaxSliderPos] = useState<number>(
    ((initialMaxValue - minPrice) / (maxPrice - minPrice)) * 100,
  );

  // 최소값 슬라이더 변경 핸들러
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPos = Number(e.target.value);
    // 최소값이 최대값보다 크지 않도록 제한 (최소 5% 간격 유지)
    if (newMinPos < maxSliderPos - 5) {
      setMinSliderPos(newMinPos);

      // 퍼센트 위치를 실제 가격으로 변환
      const newPrice = Math.round(((maxPrice - minPrice) * newMinPos) / 100 + minPrice);
      setCurrentMinPrice(newPrice);

      // 상위 컴포넌트에 변경 알림
      if (onPriceChange) {
        onPriceChange(newPrice, currentMaxPrice);
      }
    }
  };

  // 최대값 슬라이더 변경 핸들러
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPos = Number(e.target.value);
    // 최대값이 최소값보다 작지 않도록 제한 (최소 5% 간격 유지)
    if (newMaxPos > minSliderPos + 5) {
      setMaxSliderPos(newMaxPos);

      // 퍼센트 위치를 실제 가격으로 변환
      const newPrice = Math.round(((maxPrice - minPrice) * newMaxPos) / 100 + minPrice);
      setCurrentMaxPrice(newPrice);

      // 상위 컴포넌트에 변경 알림
      if (onPriceChange) {
        onPriceChange(currentMinPrice, newPrice);
      }
    }
  };

  // props가 변경되면 상태값 업데이트
  useEffect(() => {
    if (initialMin !== undefined && initialMax !== undefined) {
      setCurrentMinPrice(initialMin);
      setCurrentMaxPrice(initialMax);
      setMinSliderPos(((initialMin - minPrice) / (maxPrice - minPrice)) * 100);
      setMaxSliderPos(((initialMax - minPrice) / (maxPrice - minPrice)) * 100);
    }
  }, [initialMin, initialMax, minPrice, maxPrice]);

  return (
    <div className={`relative ${className}`}>
      {/* Track background */}
      <div className="relative h-2 w-full rounded-md bg-gray-200">
        {/* Progress bar */}
        <div
          className="absolute h-full rounded-md bg-black"
          style={{
            left: `${minSliderPos}%`,
            width: `${maxSliderPos - minSliderPos}%`,
          }}
        />
      </div>

      <div className="relative">
        {/* Min value slider */}
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={minSliderPos}
          onChange={handleMinChange}
          className="pointer-events-none absolute -top-1 -left-[2px] h-2 w-full appearance-none bg-transparent outline-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:shadow-md [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:shadow-md [&:focus]:outline-none [&:focus::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(0,0,0,0.1)]"
          style={{ zIndex: 3 }}
          aria-label="Minimum price"
        />

        {/* Max value slider */}
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={maxSliderPos}
          onChange={handleMaxChange}
          className="pointer-events-none absolute -top-1 -right-[2px] h-2 w-full appearance-none bg-transparent outline-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:shadow-md [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:shadow-md [&:focus]:outline-none [&:focus::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(0,0,0,0.1)]"
          style={{ zIndex: 4 }}
          aria-label="Maximum price"
        />
      </div>

      {/* Price display */}
      <div className="mt-6 flex justify-between text-sm">
        <span>${currentMinPrice}</span>
        <span>${currentMaxPrice}</span>
      </div>
    </div>
  );
}
