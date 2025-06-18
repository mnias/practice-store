import Image from 'next/image';

export default function ProductCategory() {
  return (
    <div className="flex flex-col px-4">
      <div className="mt-6 mb-9 flex flex-row gap-3">
        <div className="flex flex-row items-center">
          <span className="mr-1 text-[#000]/60">Home</span>
          <Image src="/ic_simple_arrow.svg" alt="simple arrow icon" width={16} height={16} />
        </div>
        <div className="flex flex-row items-center">
          <span className="mr-1 text-[#000]/60">Men</span>
          <Image src="/ic_simple_arrow.svg" alt="simple arrow icon" width={16} height={16} />
        </div>
        <div className="flex flex-row">
          <span>T-Shirts</span>
        </div>
      </div>
    </div>
  );
}
