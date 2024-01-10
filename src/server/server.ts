import "reflect-metadata";
import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import { PrismaClient } from '@prisma/client';

import { resolvers } from "./__generated__/type-graphql";

const prisma = new PrismaClient();

const PORT = 3000;

export const generateSchema = async () => {
  return await buildSchema({
    resolvers: resolvers,
    validate: false,
  });
};

export const startServer = async () => {
  const schema = await generateSchema();
  
  const yoga = createYoga({ 
    schema,
    context: () => ({ prisma }),
  });
  
  const server = createServer(yoga);

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};
