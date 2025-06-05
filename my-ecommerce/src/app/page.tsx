/**
 * Main front end React page component (homepage)
 * Role: renders the UI, fetches product data from the API 
 */

import { findAllProducts } from "../../lib/products";
import { initMongoose } from "../../lib/mongoose";
import SearchableProductList from "../../components/SearchableProductList";


export default async function Home() {
  await initMongoose();     // connect to mongoDB
  const products = await findAllProducts(); // fetch products from mongoDB

  const plainProducts = JSON.parse(JSON.stringify(products)); // convert Mongoose doc to plain objects

  // render client component with data
    return (
        <SearchableProductList products={plainProducts} />     
  );
}
