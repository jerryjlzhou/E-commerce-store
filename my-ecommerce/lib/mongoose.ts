/**
 * Contains utility code to sert up and initialize a Mongoose connection to MongoDB 
 * Handles connection to the database once, prevents multiple conenctions during development 
 */

import mongoose, { mongo } from "mongoose";

export async function initMongoose() {
    if (mongoose.connection.readyState == 1) {
        return mongoose.connection.asPromise();

    }

    return await mongoose.connect(process.env.MONGODB_URL || "");

}