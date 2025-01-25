import { defineQuery } from "next-sanity";





export const allProducts = defineQuery(`*[_type == "product"]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
    }`)

export const sixPro = defineQuery(`*[_type == "product" ][11..16]{
   _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
    }`)
export const Chairs = defineQuery(`*[_type == "product" ][12..15]{
   _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
    }`)
export const fourPro = defineQuery(`*[_type == "product" && category == "Chair" ][5..8]{
   _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
    }`)
export const Featured = defineQuery(`*[_type == "product"] | order(_createdAt desc)[0...4] {
   _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
}`
)

    export const Unique = defineQuery(`*[_type == "product" &&  name == "Stylish Golden Metal Legs Mint Blue Fabric Velvet Sofa Leisure Armchair"]{
    _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
      }`)
    export const Hero = defineQuery(`*[_type == "product" &&  name == "Luxury Flower Shell Sofa Chair"]{
      _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
      }`)
    export const DiscountQuery = defineQuery(`*[_type == "product" &&  name == "Armchair Tortuga"]{
     _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
      }`)
    export const FirstQuery = defineQuery(`*[_type == "product" &&  name == "Nautilus Lounge Chair"]{
     _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
      }`)
    export const SecondQuery = defineQuery(`*[_type == "product" &&  name == "Replica Hans Wegner Wishbone Chair"]{
     _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
      }`)
    export const ThirdQuery = defineQuery(`*[_type == "product" &&  name == "Alpha Chair – Solid Ebonised Oak"]{
    _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
      }`)
      export const ItemQuery = defineQuery(`*[_type == "product" &&  name == "Liberty Wood 63' Floating Entertainment Center"]{
       _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
        }`)
      export const Slug = defineQuery(`*[_type == "product" &&  _id == $_id][0]{
       _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  slug ,
  image { asset { _ref, _type } },
  price,
  description,
  discount,
  priceWithoutDiscount,
  isFeaturedProduct,
  stock,
  category,
  status
        }`)