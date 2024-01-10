import path from "path";
import { writeFile } from "fs/promises";
import { printSchema } from "graphql";

import { generateSchema, startServer } from "./server";


const main = async () => {
  const [_, __, cmd] = process.argv;

  switch (cmd) {
    case undefined: return await startServer();
    case "--generate-schema": {
      const schema = await generateSchema();
      const p = path.resolve(__dirname, '../src/server/__generated__/schema.graphql');

      return await writeFile(p, printSchema(schema));
    }
    default:
      console.log("Unknown server command.");
  }
};

main();
