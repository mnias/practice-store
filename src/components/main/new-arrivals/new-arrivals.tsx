import Product from '@/components/common/product/product';

export default function NewArrivals() {
  return (
    <div className="py-10 pl-4 md:px-25 md:py-18">
      <div className="md:6 w-full pb-8 text-center text-3xl font-bold md:text-5xl">NEW ARRIVALS</div>
      <div className="flex gap-5">
        <Product
          product={{
            name: 'New Arrival',
            src: '/products/checkered-shirt.png',
            star: 4.5,
            price: 100,
            listPrice: 120,
          }}
        />
        <Product
          product={{
            name: 'New Arrival',
            src: '/products/checkered-shirt.png',
            star: 4.5,
            price: 100,
            listPrice: 120,
          }}
        />
        <Product
          product={{
            name: 'New Arrival',
            src: '/products/checkered-shirt.png',
            star: 4.5,
            price: 100,
            listPrice: 120,
          }}
        />
        <Product
          product={{
            name: 'New Arrival',
            src: '/products/checkered-shirt.png',
            star: 4.5,
            price: 100,
            listPrice: 120,
          }}
        />
      </div>
    </div>
  );
}
