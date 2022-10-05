import { Document } from 'mongoose'
export interface Product extends Document {
    _id?: String;
    titulo: String;
    descripcion: String;
    timestamp: String;
    precio: Number;
    img: String;
    codigo: String;
}