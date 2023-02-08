import { PORT } from '../config';
import express, { Request, Response } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';

import { DocumentNode } from 'graphql';

interface startServerProps {
  typeDefs: DocumentNode;
  resolvers: {};
}

export const startServer = async ({
  typeDefs,
  resolvers,
}: startServerProps) => {
  const app = express();
  const httpServer = http.createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));

  httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};
