export default function YouMightAlsoLike() {
  return (
    <div className="mx-auto w-full max-w-[1256px] border-t border-t-black/10 py-8">
      <h2 className="mb-4 text-2xl font-bold">You might also like</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Placeholder for product cards */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="rounded-lg border p-4 shadow-sm">
            <div className="mb-4 h-40 bg-gray-200"></div>
            <h3 className="mb-2 text-lg font-semibold">Product {index + 1}</h3>
            <p className="text-gray-600">$19.99</p>
          </div>
        ))}
      </div>
    </div>
  );
}
