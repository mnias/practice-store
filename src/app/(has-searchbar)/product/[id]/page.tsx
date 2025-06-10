import ProductCategory from '@/components/product-detail/product-category';
import ProductDetailImages from '@/components/product-detail/product-detail-images';

export default function ProductDetailPage() {
  return (
    <div className="mx-auto w-full max-w-[1256px] border-t border-t-black/10">
      <ProductCategory />
      <ProductDetailImages />
    </div>
  );
}
