import Config from '../config';
import express, { Response } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';

import { DocumentNode } from 'graphql';

interface startServerProps {
  typeDefs: DocumentNode;
  resolvers: {};
  connectDB?: () => void;
}

export const startServer = async ({
  typeDefs,
  resolvers,
  connectDB,
}: startServerProps) => {
  const app = express();
  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.get('/', (_, res: Response) => {
    res.send('<h1>Welcome to My First Apollo GraphQL API with Typescript</h1>');
  });

  app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));

  if (connectDB) await connectDB();

  await httpServer.listen(Config.PORT, () => {
    console.log(`Server listening on port ${Config.PORT}`);
  });
};
