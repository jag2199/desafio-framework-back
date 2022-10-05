import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './interface/productos.interface';
import { ProductsService } from './productos.service';
@Controller('productos')
export class ProductosController {
    constructor(private productService: ProductsService) {
        this.productService = productService
    }
    @Get()
    async getProducts(): Promise<Product[]> {
        return await this.productService.getProducts()
    }
    @Post()
    async postProducts(@Body() product: Product): Promise<Product> {
        return await this.productService.postProduct(product)
    }
}
