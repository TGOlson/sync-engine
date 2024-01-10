import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/api/graphql",
  documents: "src/app/api.ts",
  generates: {
    "src/app/gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
