import { Module } from '@nestjs/common';
import { productSchema } from './productos.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './productos.service';
import { ProductosController } from './productos.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: productSchema }]),
  ],

  providers: [ProductsService],

  controllers: [ProductosController],
})
export class ProductsModule { }
