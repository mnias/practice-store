import Image from 'next/image';

export default function Brands() {
  return (
    <div className="grid h-auto grid-cols-2 items-center justify-items-center gap-8 bg-[#000] px-4 py-8 md:grid-cols-3 lg:grid-cols-5">
      <div className="relative h-[40px] w-[120px] md:h-[50px] md:w-[150px]">
        <Image src={'/versace.svg'} alt="versace logo" fill className="object-contain" />
      </div>
      <div className="relative h-[40px] w-[120px] md:h-[50px] md:w-[150px]">
        <Image src={'/zara.svg'} alt="zara logo" fill className="object-contain" />
      </div>
      <div className="relative h-[40px] w-[120px] md:h-[50px] md:w-[150px]">
        <Image src={'/gucci.svg'} alt="gucci logo" fill className="object-contain" />
      </div>
      <div className="relative h-[40px] w-[120px] md:h-[50px] md:w-[150px]">
        <Image src={'/prada.svg'} alt="prada logo" fill className="object-contain" />
      </div>
      <div className="relative h-[40px] w-[120px] md:h-[50px] md:w-[150px]">
        <Image src={'/ck.svg'} alt="ck logo" fill className="object-contain" />
      </div>
    </div>
  );
}
