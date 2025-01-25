
import ProductList from '@/components/ProductList';
import Title from '@/components/Title';
import { getAllProducts } from '@/sanity/helpers';
import Image from 'next/image';





export default async function Page() {
  // Fetch products from Sanity
    const products = await getAllProducts()
    // const categories = await getAllCategories()

  return (
    <div className="">
<Title title={'Grid Default'} tag={'Grid Default'}/>
    <div className="wrapper flex items-center justify-center py-10">
 <ProductList products={products} title={true} categories={[]} />
    </div>
    <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
            <Image src="/images/4.png" alt="logo" width={500} height={300} />
          </div>
    </div>
  );
}
