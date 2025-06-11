import Product from '../common/product/product';

interface Props {
  title: string;
}

const products = [
  {
    id: 1,
    name: 'New Arrival',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 2,
    name: 'New Arrival',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 3,
    name: 'New Arrival',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 4,
    name: 'New Arrival',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 5,
    name: 'Best Seller',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 6,
    name: 'Best Seller',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 7,
    name: 'Best Seller',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 8,
    name: 'Best Seller',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
  {
    id: 9,
    name: 'Best Seller',
    src: '/products/checkered-shirt.png',
    star: 4.5,
    price: 100,
    listPrice: 120,
  },
];

export default function CategoryProducts({ title }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-extrabold md:text-3xl">{title}</div>
      </div>
      <div className="flex flex-wrap gap-5">
        {products.map(product => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className="border-t border-gray-200 pt-5"></div>
    </div>
  );
}
