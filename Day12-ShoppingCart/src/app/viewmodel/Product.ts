export default class Product {
  imgSrc: string
  title: string
  description: string
  price: number
  rating: number = -1 // -1 means not yet rated
  inStock: boolean = true

  constructor(img: string, title: string, descr: string, price: number, rating?: number, inStock?: boolean) {
    this.imgSrc = img
    this.title = title
    this.description = descr
    this.price = price
    this.rating = rating
    this.inStock = inStock
  }

  get imgUrl(): string {
    return `assets/img/products/${this.imgSrc}`
  }
}