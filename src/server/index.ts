import "reflect-metadata";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import { PrismaClient } from '@prisma/client';

import { resolvers } from "../../prisma/generated/type-graphql";

const prisma = new PrismaClient();

const PORT = 3000;

const startServer = async () => {
  const schema = await buildSchema({
    resolvers: resolvers,
    validate: false,
  });
  
  const yoga = createYoga({ 
    schema,
    context: () => ({ prisma }),
  });
  
  const server = createServer(yoga);

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();
