module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src/app",
  language: "typescript",
  schema: "./src/server/__generated__/schema.graphql",
  // excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
};
