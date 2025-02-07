import { createClient } from '@sanity/client'
import axios from 'axios'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion:  '2025-01-18'
})

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    })
    console.log(`Image uploaded successfully: ${asset._id}`)
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error.message)
    return null
  }
}

// Function to import product data
async function importData() {
  try {
    console.log('Fetching products from API...')
    const response = await axios.get('https://next-ecommerce-template-4.vercel.app/api/product')

    const products = response.data.products
    if (!Array.isArray(products)) {
      throw new Error('Fetched data is not a valid array of products')
    }

    console.log(`Fetched ${products.length} products`)

    for (const product of products) {
      if (!product || !product.name || !product.imagePath) {
        console.error('Invalid product data:', product)
        continue // Skip invalid products
      }

      console.log(`Processing product: ${product.name}`)

      // Upload product image to Sanity
      let imageRef = null
      if (product.imagePath) {
        imageRef = await uploadImageToSanity(product.imagePath)
      }

      // Create Sanity product object
   const sanityProduct = {
  _type: 'product',
  name: product.title,
  description: product.description,
  price: product.price,
  // Remove or ignore priceWithoutDiscount
  rating: product.rating?.rate || 0,
  ratingCount: product.rating?.count || 0,
  tags: product.category ? [product.category] : [],
  sizes: [],
  image: imageRef ? {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: imageRef,
    },
  } : undefined,
}


      console.log(`Uploading product to Sanity: ${sanityProduct.name}`)
      const result = await client.create(sanityProduct)
      console.log(`Product uploaded successfully: ${result._id}`)
    }

    console.log('Data import completed successfully!')
  } catch (error) {
    console.error('Error importing data:', error.message)
  }
}

// Run the import function
importData()
