import Brands from '@/components/main/brands/brands';
import Header from '@/components/main/header/Header';
import NewArrivals from '@/components/main/new-arrivals/new-arrivals';
import Promotion from '@/components/main/promotion/promotion';

export default function Home() {
  return (
    // <div className="flex w-full flex-col items-center">
    <>
      <Header />
      <Promotion />
      <Brands />
      <NewArrivals />
    </>
    // </div>
  );
}
