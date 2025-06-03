import Image from 'next/image';

export default function MenuItems() {
  return (
    <div className="flex items-center gap-3">
      <Image className="flex md:hidden" src="/ic_search_black.svg" alt="search black icon" width={24} height={24} />
      <Image className="shrink-0" src="/ic_cart.svg" alt="cart icon" width={24} height={24} />
      <Image className="shrink-0" src="/ic_mypage.svg" alt="mypage icon" width={24} height={24} />
    </div>
  );
}
