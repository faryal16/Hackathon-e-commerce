// utils/fetchProducts.ts

import { sanityFetch } from "./live";


export const fetchProducts = async (query: string) => {
  try {
    const products = await sanityFetch({ query });
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
