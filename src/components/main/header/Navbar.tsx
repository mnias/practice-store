import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="items-center gap-[40px] md:flex">
      <div className="flex gap-4">
        <Image className="flex md:hidden" src="/ic_menu.svg" width={24} height={24} alt="menu icon" />
        <Link className="text-[32px] font-bold" href="/">
          SAMPLE
        </Link>
      </div>
      <div className="hidden gap-[24px] md:flex">
        <Link className="" href="/shop">
          Shop
        </Link>
        <Link className="" href="/on-sale">
          On Sale
        </Link>
        <Link className="" href="/new-arrivals">
          New Arrivals
        </Link>
        <Link className="" href="/brands">
          Brands
        </Link>
      </div>
    </nav>
  );
}
