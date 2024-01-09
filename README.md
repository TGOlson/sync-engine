## sync-engine

Sync engine for building fast and scalable fullstack applications.

Based on Linear architecture (see: [Scaling the Linear Sync Engine](https://www.youtube.com/watch?v=Wo2m3jaJixU&t=215s)).

Design doc: https://docs.google.com/document/d/1bRGZz7YL1sd_YNg3AiyfbPUT2cLwgcOtFyp1dcpaqGI/edit?usp=sharing

### dev

To start everything, simply run:

```sh
$ docker compose up -d
```

This create four docker containers

* `webpack`: bundles TS files, rebuilds on changes
* `nginx`: serves static content, routes api requests to server
* `server`: runs api server
* `db`: manages a postgres instance

To make changes to the app, simply modify files in `src`.

### typechecking

This project is configured to run a TypeScript typecheck on each build. If you have a type error, it will show up in the log for the `webpack` container. 

However, it's sometimes nicer to get that feedback locally (or even better, in your IDE). To do so simply install the node modules locally (and optionally run typescript):

```sh
$ npm install
$ npm run typecheck
```

### migrations and generated code

This project uses `prisma` as an ORM to manage db connections, create schemas and models, and run queries. It's pretty nifty and works quite well with TypeScript! See https://www.prisma.io/.

In general `prisma` works as expected with the `docker compose` flow.

1. To run a migration, connect to the `server` container and run:

```sh
$ npx prisma migrate dev --name <migration name>
```

2. If you want types from the generated `prisma/client` to be available locally, run:

```sh
$ npx prisma generate
```

For now, running both commands on each schema change isn't too bad. Later on, it might be better to move `prisma generate` (or `migrate`) into a build step. 
