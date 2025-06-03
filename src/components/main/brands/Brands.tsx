import Image from 'next/image';

export default function Brands() {
  return (
    <div className="bg-[#000] px-4 py-8">
      {/* 모바일: 두 줄 레이아웃 */}
      <div className="flex flex-col md:hidden">
        {/* 첫 번째 줄 - 3개 로고 */}
        <div className="flex justify-center space-x-8">
          <div className="relative h-[24px] w-[118px]">
            <Image src={'/versace.svg'} alt="versace logo" fill className="object-contain" />
          </div>
          <div className="relative h-[27px] w-[64px]">
            <Image src={'/zara.svg'} alt="zara logo" fill className="object-contain" />
          </div>
          <div className="relative h-[26px] w-[110px]">
            <Image src={'/gucci.svg'} alt="gucci logo" fill className="object-contain" />
          </div>
        </div>

        {/* 두 번째 줄 - 2개 로고 (가운데 정렬) */}
        <div className="mt-8 flex justify-center space-x-20">
          <div className="relative h-[32px] w-[127px]">
            <Image src={'/prada.svg'} alt="prada logo" fill className="object-contain" />
          </div>
          <div className="relative h-[22px] w-[135px]">
            <Image src={'/ck.svg'} alt="ck logo" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* 태블릿/데스크톱: 한 줄 레이아웃 */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
        <div className="relative h-[34px] w-[167px]">
          <Image src={'/versace.svg'} alt="versace logo" fill className="object-contain" />
        </div>
        <div className="relative h-[38px] w-[91px]">
          <Image src={'/zara.svg'} alt="zara logo" fill className="object-contain" />
        </div>
        <div className="relative h-[36px] w-[156px]">
          <Image src={'/gucci.svg'} alt="gucci logo" fill className="object-contain" />
        </div>
        <div className="relative h-[21px] w-[194px]">
          <Image src={'/prada.svg'} alt="prada logo" fill className="object-contain" />
        </div>
        <div className="relative h-[34px] w-[207px]">
          <Image src={'/ck.svg'} alt="ck logo" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
