import { resolvers, typeDefs } from './graphql';
import { startServer } from './server';

startServer({ typeDefs, resolvers });
