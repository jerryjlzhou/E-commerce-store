/**
 * API route that handles HTTP requests to api/products
 * On request, it initializes the database connection, fetches all products from 
 * MongoDB using Product model, retuns them as JSON.
 * Front end calls this API to get product data
 */

import { initMongoose } from "../../lib/mongoose";
import Product from "../../models/Product";


export async function findAllProducts() {
    return Product.find().exec()
}
export default async function handle(req, res) {
    await initMongoose();
    const {ids} = req.query;
    if (ids) {
        const idsArray = ids.split(',');
        res.json( 
            await Product.find({
                '_id':{$in:idsArray}
            }).exec()
        );
    } else{
        res.json(await findAllProducts())
    }

}