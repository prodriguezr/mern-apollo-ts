export default {
  PORT: process.env.PORT ? Number(process.env.PORT) : 3300,
  DB_URI: process.env.DB_URI ? process.env.DB_URI : '',
};
