import Product from '@/components/common/product/product';
import { ProductGroup as ProductGroupType } from '@/types/product-group/product-group';

interface Props {
  productGroup: ProductGroupType;
}

export default function ProductGroup({ productGroup }: Props) {
  return (
    <div className="py-10 pl-4 md:px-25 md:py-18">
      <div className="md:6 w-full pb-8 text-center text-3xl font-bold md:text-5xl">{productGroup.title}</div>
      <div className="flex gap-5">
        {productGroup.products.map(product => {
          return (
            <Product
              key={product.name}
              product={{
                name: product.name,
                src: product.src,
                star: product.star,
                price: product.price,
                listPrice: product.listPrice,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
