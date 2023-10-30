import { Repository } from 'typeorm'
import { Product } from '../entity/Product' 
import { AppDataSource } from '../data-source'

export class ProductController {
  private _repo: Repository<Product>

  constructor() {
    this._repo = AppDataSource.getRepository(Product)
  }

  async createProduct(product: Product) {
    const savedProduct = await this._repo.save(product)
    return savedProduct
  }

  async findProducts() {
    const products = await this._repo.find() 
    return products
  }

  async findProductById(id: number) {
    const product = await this._repo.findOne(id)
    return product
  }

  async updateProduct(id: number, updatedProductData: Partial<Product>) {
    const result = await this._repo.update(id, updatedProductData) 
    return result
  }

  // Adicione os métodos que faltam aqui

  async getProductById(productId: number) {
    const product = await this._repo.findOne(productId)
    return product
  }

  async getProductsByDescription(description: string) {
    const products = await this._repo.find({ where: { description } });
    return products;
  }
}
