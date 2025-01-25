import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import Title from "@/components/Title";
import { getAllCategories, getProductsByCategory } from "@/sanity/helpers";
import { client } from "@/sanity/lib/client";
import React from "react";
interface Props {
  params: Promise<{ slug: string }>;
}

const CategoriesPage = async ({ params }: Props) => {
  const { slug } = await params;
  console.log('Slug:', slug);
  const categories = await getAllCategories();
  // const products = await getProductsByCategory(slug);
  // console.log(products)
let products = null
try{
    // Modify the query to search by slug.current
        const productQuery = `*[_type == "product" && references(*[_type == "category" && slug.current == $slug]._id)] | order(name asc)`;
    
        // Fetch product data from Sanity
        products = await client.fetch(productQuery, { slug });
    
        // Log product data to verify the result
        console.log('Product Data:', products);
}
catch(error){
    console.error('Error fetching product:', error);
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Error</h1>
        <p className="text-gray-600">There was an error fetching the product.</p>
      </div>
    );
}


  return (
    <div className="flex flex-col items-center justify-top  bg-gray-100">
        <Title title={"Category"} tag={"Category"}/>
      <Container className="p-8 bg-white rounded-lg shadow-md mt-3">
        <h1 className="text-2xl md:text-3xl font-bold">
          Search results for{" "}
          <span className="text-pink-700">
            {slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
            Collection
          </span>
        </h1>
        <ProductList products={products}  categories={categories} />
      </Container>
    </div>
  );
};

export default CategoriesPage;