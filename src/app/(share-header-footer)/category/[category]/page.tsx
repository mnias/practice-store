import CategoryFilter from '@/components/category/category-filter';
import CategoryProducts from '@/components/category/category-products';

export default function CatgegoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="mx-auto flex w-full max-w-[1256px] flex-row border-t border-t-black/10 px-2 pt-14 md:pt-17">
      <div className="hidden h-auto w-[295px] rounded-[20px] border border-gray-10 px-4 py-3 md:block md:px-5 md:py-4">
        <CategoryFilter />
      </div>
      <div className="pl-4 md:pl-5">
        <CategoryProducts title={decodeURIComponent(params.category)} />
      </div>
    </div>
  );
}
