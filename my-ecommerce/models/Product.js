/**
 * Defines Mongoose schema for Product
 * Specifies the structure of product documents in MongoDB, provides methods to query product collection
 */

import { model, models, Schema } from "mongoose";
 

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product