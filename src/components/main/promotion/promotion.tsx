import Image from 'next/image';

export default function Promotion() {
  return (
    <div className="flex w-full flex-col md:h-[664px] md:max-h-[664px] md:flex-row">
      <div className="flex flex-col justify-center bg-[#F2F0F1] px-4 pt-10 md:w-1/2 md:pt-0 md:pl-8 lg:pl-25">
        <div className="flex flex-col">
          <span className="text-[36px] leading-[36px] font-bold md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[64px]">
            FIND CLOTHES
          </span>
          <span className="text-[36px] leading-[36px] font-bold md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[64px]">
            THAT MATCHES
          </span>
          <span className="text-[36px] leading-[36px] font-bold md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[64px]">
            YOUR STYLE
          </span>
        </div>
        <div className="mt-8 flex flex-col justify-center text-[12px] text-[#000]/60 lg:max-w-[550px] lg:text-[16px]">
          {/* <span>Browse through our diverse range of meticulously crafted garments, designed</span>
          <span>to bring out your individuality and cater to your sense of style.</span> */}
          <p className="max-w-full md:max-w-[36rem] lg:max-w-[48rem]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
        </div>
        <button className="mt-6 mb-5 h-[52px] rounded-[62px] bg-[#000] text-[#fff] md:w-[210px] lg:mt-8 lg:mb-12">
          Shop Now
        </button>
        <div className="flex flex-row divide-x divide-[#000]/10">
          <div className="pr-8">
            <div className="text-[20px] font-bold md:text-[30px] lg:text-[40px]">200+</div>
            <div className="text-[12px] text-[#000]/60 lg:text-[16px]">Internaltional Brands</div>
          </div>
          <div className="px-8">
            <div className="text-[20px] font-bold md:text-[30px] lg:text-[40px]">200+</div>
            <div className="text-[12px] text-[#000]/60 lg:text-[16px]">High-Quality Products</div>
          </div>
          <div className="pl-8">
            <div className="text-[20px] font-bold md:text-[30px] lg:text-[40px]">200+</div>
            <div className="text-[12px] text-[#000]/60 lg:text-[16px]">Happy Customers</div>
          </div>
        </div>
      </div>
      <div className="relative flex h-[448px] overflow-hidden bg-[#F2F0F1] md:h-[664px] md:w-1/2">
        <Image
          src="/promotion_3.png"
          alt="promotion image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
        />
      </div>
    </div>
  );
}
