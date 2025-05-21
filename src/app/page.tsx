import Brands from '@/components/main/brands/brands';
import Header from '@/components/main/header/Header';
import Promotion from '@/components/main/promotion/promotion';
import ProductGroups from '@/components/main/product-groups/product-groups';

export default function Home() {
  return (
    // <div className="flex w-full flex-col items-center">
    <>
      <Header />
      <Promotion />
      <Brands />
      {/* <ProductGroups productGroups={productGroups} /> */}
      <ProductGroups />
    </>
    // </div>
  );
}
