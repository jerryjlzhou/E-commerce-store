import Product from "../models/Product";

export async function findAllProducts() {
  return await Product.find().exec();
}