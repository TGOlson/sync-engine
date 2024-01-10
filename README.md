## sync-engine

Sync engine for building fast and scalable fullstack applications.

Based on Linear architecture (see: [Scaling the Linear Sync Engine](https://www.youtube.com/watch?v=Wo2m3jaJixU&t=215s)).

Design doc: https://docs.google.com/document/d/1bRGZz7YL1sd_YNg3AiyfbPUT2cLwgcOtFyp1dcpaqGI/edit?usp=sharing

### dev

Install deps

```sh
$ npm install
```

Run dev build (note: required `watchman` to be installed for `relay-compiler --watch` subcommand)

```sh
$ npm run dev
```

Then navigate to `localhost:8080`. `localhost:8080/api/graphql` can be used to load the graphql explorer.

### migrations and generated code

This project uses `prisma` as an ORM to manage db connections, create schemas and models, and run queries. It's pretty nifty and works quite well with TypeScript! See https://www.prisma.io/.

1. To run a migration:

```sh
$ npx prisma migrate dev --name <migration name>
```

2. To re-generate types for `prisma/client`:

```sh
$ npx prisma generate
```

3. To generate a graphql schema:

```sh
$ node dist/server.bundle.js --generate-schema
```

TODO: should automate some of these steps in the build pipeline
