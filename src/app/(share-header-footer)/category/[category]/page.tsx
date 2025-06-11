import CategoryFilter from '@/components/category/category-filter';
import CategoryProducts from '@/components/category/category-products';

export default function CatgegoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="mx-auto flex w-full max-w-[1256px] flex-row gap-5 border-t border-t-black/10 pt-14 md:pt-17">
      <div className="hidden md:block">
        <CategoryFilter />
      </div>
      <CategoryProducts title={decodeURIComponent(params.category)} />
    </div>
  );
}
