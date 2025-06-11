import CategoryFilter from '@/components/category/category-filter';
import CategoryProducts from '@/components/category/category-products';

export default function CatgegoryPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1256px] flex-row border-t border-t-black/10 pt-14 md:pt-17">
      <CategoryFilter />
      <CategoryProducts />
    </div>
  );
}
