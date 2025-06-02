import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="hidden flex-1 rounded-[62px] bg-[#f0f0f0] px-4 py-3 lg:flex">
      <Image className="pr-3" src="/ic_search.svg" alt="search icon" width={24} height={24} />
      <input className="flex flex-1 outline-0" placeholder="Search for Products..." />
    </div>
  );
}
