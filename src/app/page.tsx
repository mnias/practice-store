import Brands from '@/components/main/brands/brands';
import Header from '@/components/main/header/header';
import Promotion from '@/components/main/promotion/promotion';
import ProductGroups from '@/components/main/product-groups/product-groups';
import BrowseByDressStyle from '@/components/main/browse-by-dress-style/browse-by-dress-style';
import Reviews from '@/components/main/reviews/reviews';

export default function Home() {
  return (
    // <div className="flex w-full flex-col items-center">
    <>
      <Header />
      <Promotion />
      <Brands />
      {/* <ProductGroups productGroups={productGroups} /> */}
      <ProductGroups />
      <BrowseByDressStyle />
      <Reviews />
    </>
    // </div>
  );
}
