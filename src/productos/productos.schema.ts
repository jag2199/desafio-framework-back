import { Schema } from 'mongoose';
export const productSchema = new Schema({
    titulo: String,
    descripcion: String,
    timestamp: String,
    precio: Number,
    img: String,
    codigo: String,
});