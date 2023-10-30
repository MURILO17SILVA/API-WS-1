import { Router } from 'express'
import { ProductController } from '../controllers/ProductController'
import { Product } from '../entity/Product'

export const productsRouter = Router()
const productCtrl = new ProductController()

productsRouter.post('/', async (req, res) => {
  const { description, price, quantity } = req.body

  const errorMessages: string[] = []

  if (!description) {
    errorMessages.push('Description cannot be empty')
  }

  const priceNumber = Number(price)
  if (isNaN(priceNumber) || priceNumber <= 0) {
    errorMessages.push('Invalid price')
  }

  const quantityNumber = Number(quantity)
  if (isNaN(quantityNumber) || quantityNumber < 0) {
    errorMessages.push('Invalid quantity')
  }

  if (errorMessages.length === 0) {
    const product = new Product()
    product.description = description
    product.price = priceNumber
    product.quantity = quantityNumber

    const savedProduct = await productCtrl.createProduct(product)
    return res.status(201).json({ message: 'Product registered', product: savedProduct })
  }

  return res.status(400).json({ errorMessages })
})

productsRouter.get('/:id', async (req, res) => {
  const productId = parseInt(req.params.id)
  const product = await productCtrl.getProductById(productId)

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  return res.status(200).json({ product })
})

productsRouter.get('/description/:description', async (req, res) => {
  const description = req.params.description
  const products = await productCtrl.getProductsByDescription(description)

  return res.status(200).json({ products })
})

export default productsRouter
