import Image from 'next/image';

interface Props {
  subtotalPrice: number;
  deliveryFee: number;
}

export default function TotalPrice({ subtotalPrice, deliveryFee }: Props) {
  return (
    <div className="flex min-w-[300px] flex-col gap-4 px-4 py-3 md:gap-6 md:px-6 md:py-5">
      <div className="text-xl font-extrabold md:text-2xl">Order Summary</div>
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex flex-row justify-between">
          <div className="text-base text-gray-60 md:text-xl">Subtotal</div>
          <div className="text-base font-extrabold md:text-xl">${subtotalPrice}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-base text-gray-60 md:text-xl">Discount (-20%)</div>
          <div className="text-base font-extrabold text-red-600 md:text-xl">-${(subtotalPrice * 0.2).toFixed(2)}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-base text-gray-60 md:text-xl">Delivery Fee</div>
          <div className="text-base font-extrabold md:text-xl">${deliveryFee}</div>
        </div>
        <div className="h-[1px] bg-gray-10" />
        <div className="flex flex-row justify-between">
          <div className="text-base md:text-xl">Subtotal</div>
          <div className="text-base font-extrabold md:text-xl">
            ${(subtotalPrice - subtotalPrice * 0.2 + deliveryFee).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex h-[42px] flex-1 flex-row items-center rounded-[62px] bg-[#f0f0f0] lg:h-[48px]">
          <Image className="mr-3 ml-4" src="/ic_letter.svg" alt="letter icon" width={24} height={24} />
          <input className="w-full bg-transparent pr-4 text-[14px] outline-0 md:text-base" placeholder="promo code" />
        </div>
        <button className="h-[42px] min-w-24 cursor-pointer rounded-[62px] bg-black text-[14px] font-medium whitespace-nowrap text-white md:w-28 md:text-base lg:h-[48px]">
          Apply
        </button>
      </div>
      <button className="h-[54px] cursor-pointer rounded-[62px] bg-black text-base text-white md:h-[60px]">
        Go to Check out
      </button>
    </div>
  );
}
