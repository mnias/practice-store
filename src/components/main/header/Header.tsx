import MenuItems from './MenuItems';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="mb-24 flex w-full flex-1">
      <div className="fixed top-0 z-10 flex w-full justify-center bg-white">
        <div className="flex h-24 w-full max-w-[1240px] flex-1 items-center justify-between gap-[40px] px-4 py-6 md:justify-start">
          <Navbar />
          <SearchBar />
          <MenuItems />
        </div>
      </div>
    </header>
  );
}
