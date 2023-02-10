import mongoose from 'mongoose';

import Config from '../../config';
import { MongoServerError } from 'mongodb';

export const connectDB = async () => {
  try {
    if (!Config.DB_URI) throw new Error('Database URI is required');

    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(Config.DB_URI);

    console.log(`DB '${conn.connection.name}' is connected`);
  } catch (err: any) {
    console.error(`An error has ocurred: \n${err.message}`);
    process.exit(1);
  }
};
