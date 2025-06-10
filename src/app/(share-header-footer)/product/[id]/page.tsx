import ProductCategory from '@/components/product-detail/product-category';
import ProductDetailImages from '@/components/product-detail/product-detail-images';
import ProductDetailInfoReviewFaq from '@/components/product-detail/product-detail-info-reveiw-faq';
import YouMightAlsoLike from '@/components/product-detail/you-might-also-like';

export default function ProductDetailPage() {
  return (
    <div className="mx-auto w-full max-w-[1256px] border-t border-t-black/10">
      <ProductCategory />
      <ProductDetailImages />
      <ProductDetailInfoReviewFaq />
      <YouMightAlsoLike />
    </div>
  );
}
