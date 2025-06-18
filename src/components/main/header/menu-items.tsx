import Image from 'next/image';
import Link from 'next/link';

export default function MenuItems() {
  return (
    <div className="flex items-center gap-3">
      <Image className="flex md:hidden" src="/ic_search_black.svg" alt="search black icon" width={24} height={24} />
      <Link href="/cart">
        <Image className="shrink-0" src="/ic_cart.svg" alt="cart icon" width={24} height={24} />
      </Link>
      <Image className="shrink-0" src="/ic_mypage.svg" alt="mypage icon" width={24} height={24} />
    </div>
  );
}
