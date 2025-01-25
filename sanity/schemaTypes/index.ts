import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { salesType } from './saleType'
import { categoryType } from './categoryType'
import { orderType } from './orderType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, salesType, categoryType, orderType],
}
