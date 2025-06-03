import Image from 'next/image';

export default function NewsLetter() {
  return (
    <div className="z-1 mx-auto w-full max-w-screen-xl px-4">
      <div className="flex min-h-[180px] w-full flex-col items-center justify-between gap-8 rounded-[1.25rem] bg-[#000] px-6 py-8 md:flex-row md:px-16 md:py-9 lg:max-w-[1240px]">
        <div className="flex flex-col text-3xl font-bold text-[#fff] lg:text-[2.5rem]">
          <div className="hidden lg:block">STAY UPTO DATE ABOUT</div>
          <div className="hidden lg:block">OUR LATEST OFFERS</div>
          <div className="block lg:hidden">STAY UPTO DATE</div>
          <div className="block lg:hidden">ABOUT OUR</div>
          <div className="block lg:hidden">LATEST OFFERS</div>
        </div>
        <div className="flex w-full flex-col gap-[14px] md:w-auto">
          <div className="flex h-[42px] w-full flex-row items-center rounded-[62px] bg-[#fff] md:w-[22.5rem] lg:h-[48px]">
            <Image className="mr-3 ml-4" src="/ic_letter.svg" alt="letter icon" width={24} height={24} />
            <input className="text-[14px] md:text-[16px]" placeholder="Enter your email address" />
          </div>
          <button className="h-[42px] w-full rounded-[62px] bg-[#fff] text-[14px] font-medium md:w-[22.5rem] md:text-[16px] lg:h-[48px]">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
