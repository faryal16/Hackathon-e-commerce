import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`*[_type == "product"]{
    _id,
    name,
  description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl" : image.asset->url
    }`)

export const sixPro = defineQuery(`*[_type == "product" ][11..16]{
    _id,
    name,
  description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl" : image.asset->url
    }`)
export const Chairs = defineQuery(`*[_type == "product" ][12..15]{
    _id,
    name,
  description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl" : image.asset->url
    }`)
export const fourPro = defineQuery(`*[_type == "product" && category == "Chair" ][0..3]{
    _id,
    name,
  description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl" : image.asset->url
    }`)
export const Featured = defineQuery(`*[_type == "product" ][6..9]{
    _id,
    name,
  description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl" : image.asset->url
    }`)

    export const Unique = defineQuery(`*[_type == "product" &&  name == "Stylish Golden Metal Legs Mint Blue Fabric Velvet Sofa Leisure Armchair"]{
      _id,
      name,
    description,
      price,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      "imageUrl" : image.asset->url
      }`)
    export const Hero = defineQuery(`*[_type == "product" &&  name == "Luxury Flower Shell Sofa Chair"]{
      _id,
      name,
    description,
      price,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      "imageUrl" : image.asset->url
      }`)
    export const DiscountQuery = defineQuery(`*[_type == "product" &&  name == "Armchair Tortuga"]{
      _id,
      name,
    description,
      price,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      "imageUrl" : image.asset->url
      }`)
    export const FirstQuery = defineQuery(`*[_type == "product" &&  name == "Nautilus Lounge Chair"]{
      _id,
      name,
    description,
      price,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      "imageUrl" : image.asset->url
      }`)
    export const SecondQuery = defineQuery(`*[_type == "product" &&  name == "Replica Hans Wegner Wishbone Chair"]{
      _id,
      name,
    description,
      price,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      "imageUrl" : image.asset->url
      }`)
    export const ThirdQuery = defineQuery(`*[_type == "product" &&  name == "Alpha Chair – Solid Ebonised Oak"]{
      _id,
      name,
    description,
      price,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category,
      "imageUrl" : image.asset->url
      }`)
      export const ItemQuery = defineQuery(`*[_type == "product" &&  name == "Liberty Wood 63' Floating Entertainment Center"]{
        _id,
        name,
      description,
        price,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category,
        "imageUrl" : image.asset->url
        }`)