export const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3300;
export const MONGODB_URI: string = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : '';
