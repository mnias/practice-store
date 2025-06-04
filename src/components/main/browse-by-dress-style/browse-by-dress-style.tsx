import Image from 'next/image';

export default function BrowseByDressStyle() {
  return (
    <div className="mx-auto w-full max-w-[1256px] bg-[#f0f0f0] px-6 pt-10 md:p-16">
      <div className="mb-6 w-full text-center text-3xl font-bold md:mb-16 md:text-5xl">BROWSE BY DRESS STYLE</div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="relative h-[200px] object-cover md:h-[289px] md:flex-1/3">
            <span className="absolute top-4 left-6 z-1 text-2xl font-bold md:top-6 md:left-9 md:text-4xl">Casual</span>
            <Image
              fill
              src="/casual.png"
              alt="casual img"
              sizes="(max-width: 768px) 33vw, 33%"
              className="rounded-[1.25rem] object-cover"
            />
          </div>
          <div className="relative h-[200px] md:h-[289px] md:flex-2/3">
            <span className="absolute top-4 left-6 z-1 text-2xl font-bold md:top-6 md:left-9 md:text-4xl">Formal</span>
            <Image
              fill
              src="/formal.png"
              alt="formal img"
              sizes="(max-width: 768px) 67vw, 67%"
              className="rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="relative h-[200px] object-cover md:h-[289px] md:flex-2/3">
            <span className="absolute top-4 left-6 z-1 text-2xl font-bold md:top-6 md:left-9 md:text-4xl">Party</span>
            <Image
              fill
              src="/party.png"
              alt="party img"
              sizes="(max-width: 768px) 33vw, 33%"
              className="rounded-[1.25rem] object-cover"
            />
          </div>
          <div className="relative h-[200px] md:h-[289px] md:flex-1/3">
            <span className="absolute top-4 left-6 z-1 text-2xl font-bold md:top-6 md:left-9 md:text-4xl">Gym</span>
            <Image
              fill
              src="/gym.png"
              alt="gym img"
              sizes="(max-width: 768px) 67vw, 67%"
              className="rounded-[1.25rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
