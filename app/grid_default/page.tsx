import ProductCard from '@/components/ProductCard';
import { sanityFetch } from '@/sanity/lib/fetch';
import { urlFor } from '@/sanity/lib/image';
import { allProducts } from '@/sanity/lib/quires';


type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  imageUrl?: string;
};

export default async function Page() {
  // Fetch products from Sanity
  const products: Product[] = await sanityFetch({ query: allProducts });

  return (
    <div className="wrapper flex items-center justify-center py-10">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            sale={
              product.discountPercentage
                ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
                : undefined
            }
            price={product.price.toFixed(2)}
            imgSrc={product.imageUrl ? urlFor(product.imageUrl).url() : '/placeholder-image.png'}
          />
        ))}
      </div>
    </div>
  );
}
