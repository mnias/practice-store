'use client';

import Image from 'next/image';

interface Props {
  amount?: number;
  onChange?: (amount: number) => void;
}

export default function AmountButton({ amount, onChange }: Props) {
  return (
    <div className="flex h-full w-full flex-row items-center justify-between rounded-[62px] bg-[#f0f0f0] px-4">
      <button
        className="cursor-pointer"
        onClick={() => {
          if (onChange && amount && amount > 1) {
            onChange(amount - 1);
          } else if (onChange) {
            onChange(1);
          }
        }}
      >
        <Image width={20} height={20} src="/ic_minus.svg" alt="minus icon" />
      </button>
      {amount}
      <button className="cursor-pointer" onClick={() => onChange && onChange((amount ?? 1) + 1)}>
        <Image width={20} height={20} src="/ic_plus.svg" alt="plus icon" />
      </button>
    </div>
  );
}
