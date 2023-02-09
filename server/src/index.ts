import { resolvers, typeDefs } from './graphql';
import { startServer } from './server';
import { connectDB } from './databases/mongo';

startServer({ typeDefs, resolvers, connectDB });
