import MenuItems from './MenuItems';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="flex flex-1 justify-center">
      <div className="flex h-[96px] w-full max-w-[1240px] flex-1 items-center justify-between gap-[40px] px-4 py-6 md:justify-start">
        <Navbar />
        <SearchBar />
        <MenuItems />
      </div>
    </header>
  );
}
