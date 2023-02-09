import mongoose from 'mongoose';
import { MONGODB_URI } from '../../config';

export const connectDB = async () => {
  try {
    if (!MONGODB_URI) throw new Error('Database URI is required');

    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`DB '${conn.connection.name}' is connected`);
  } catch (error) {
    console.error(`An error has ocurred: ${error}`);
    process.exit(1);
  }
};
