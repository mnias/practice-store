'use client';
import Image from 'next/image';
import { useState } from 'react';
import RangeSlider from '../common/button/range-slider';
import ColorSelector from '../common/button/color-selector';
import TextSelector from '../common/button/text-selector';

export default function CategoryFilter() {
  // 가격 필터 범위 설정
  const MIN_PRICE = 0;
  const MAX_PRICE = 1000;

  // 현재 선택된 가격 범위 상태
  const [selectedMinPrice, setSelectedMinPrice] = useState<number>(MIN_PRICE);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number>(MAX_PRICE);

  // 색상 선택 , 사이즈 선택택
  const [selectedColor, setSelectedColor] = useState<string>(`#00C12B`);
  const [selectedText, setSelectedText] = useState<string>(`Large`);

  // 각 섹션의 접힘/펼침 상태 관리
  const [isPriceExpanded, setIsPriceExpanded] = useState<boolean>(true);
  const [isColorsExpanded, setIsColorsExpanded] = useState<boolean>(true);
  const [isSizeExpanded, setIsSizeExpanded] = useState<boolean>(true);

  // 가격 범위 변경 핸들러
  const handlePriceChange = (min: number, max: number) => {
    setSelectedMinPrice(min);
    setSelectedMaxPrice(max);

    // 여기에 필터링 로직 추가 가능
    console.log(`Price range changed: $${min} - $${max}`);
  };

  // 섹션 토글 핸들러
  const toggleSection = (section: 'price' | 'colors' | 'size') => {
    switch (section) {
      case 'price':
        setIsPriceExpanded(!isPriceExpanded);
        break;
      case 'colors':
        setIsColorsExpanded(!isColorsExpanded);
        break;
      case 'size':
        setIsSizeExpanded(!isSizeExpanded);
        break;
    }
  };

  return (
    <div className="flex h-auto w-[295px] flex-col gap-4">
      <div className="flex flex-row justify-between border-b border-gray-200 pb-4 text-xl font-extrabold">
        <div>Filters</div>
        <button className="cursor-pointer">
          <Image src="/ic_filter.svg" alt="filter icon" width={24} height={24} />
        </button>
      </div>
      {/* <div className="flex flex-row justify-between">
        <div>T-shirts</div>
        <button>
          <Image src="/ic_simple_arrow.svg" alt="simple arrow icon" width={16} height={16} />
        </button>
      </div> */}

      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-extrabold">Price</div>
          <button
            className={`transform cursor-pointer transition-transform duration-300 ${
              isPriceExpanded ? 'rotate-270' : 'rotate-90'
            }`}
            onClick={() => toggleSection('price')}
          >
            <Image src="/ic_simple_arrow.svg" alt="toggle price" width={24} height={24} />
          </button>
        </div>

        {/* 수정된 RangeSlider 컴포넌트 사용 - 접힘/펼침 상태에 따라 표시 */}
        {isPriceExpanded && (
          <RangeSlider
            minPrice={MIN_PRICE}
            maxPrice={MAX_PRICE}
            initialMin={selectedMinPrice}
            initialMax={selectedMaxPrice}
            onPriceChange={handlePriceChange}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-extrabold">Colors</div>
          <button
            className={`transform cursor-pointer transition-transform duration-300 ${
              isColorsExpanded ? 'rotate-270' : 'rotate-90'
            }`}
            onClick={() => toggleSection('colors')}
          >
            <Image src="/ic_simple_arrow.svg" alt="toggle colors" width={24} height={24} />
          </button>
        </div>

        {/* 색상 선택기 - 접힘/펼침 상태에 따라 표시 */}
        {isColorsExpanded && (
          <ColorSelector
            colors={[`#00C12B`, `#F50606`, `#F5DD06`, `#F57906`, `#06CAF5`, `#063AF5`, `#7D06F5`, `#F506A4`, `#000000`]}
            onChange={setSelectedColor}
            selectedColor={selectedColor}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-extrabold">Size</div>
          <button
            className={`transform cursor-pointer transition-transform duration-300 ${
              isSizeExpanded ? 'rotate-270' : 'rotate-90'
            }`}
            onClick={() => toggleSection('size')}
          >
            <Image src="/ic_simple_arrow.svg" alt="toggle size" width={24} height={24} />
          </button>
        </div>

        {/* 사이즈 선택 영역 - 접힘/펼침 상태에 따라 표시 */}
        {isSizeExpanded && (
          <TextSelector
            texts={['Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large']}
            selectedText={selectedText}
            onChange={setSelectedText}
          />
        )}
      </div>
    </div>
  );
}
