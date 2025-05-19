import Brands from '@/components/main/brands/Brands';
import Header from '@/components/main/header/Header';
import Promotion from '@/components/main/promotion/promotion';

export default function Home() {
  return (
    // <div className="flex w-full flex-col items-center">
    <>
      <Header />
      <Promotion />
      <Brands />
    </>
    // </div>
  );
}
