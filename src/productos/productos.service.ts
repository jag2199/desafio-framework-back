import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interface/productos.interface';
@Injectable()
export class ProductsService {
    constructor(private productModel: Model<Product>) { }
    async getProducts(): Promise<Product[]> {
        return await this.productModel.find();
    }
    async postProduct(product: Product): Promise<Product> {
        return await this.productModel.create(product);
    }
    async putProduct(id: Number, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, { ...product });
    }
    async deleteProduct(id: Number): Promise<Product> {
        return await this.productModel.findByIdAndRemove(id);
    }
}