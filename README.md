## sync-engine

Sync engine for building fast and scalable applications. 

Based on Linear architecture (see: [Scaling the Linear Sync Engine](https://www.youtube.com/watch?v=Wo2m3jaJixU&t=215s)).

Design doc: https://docs.google.com/document/d/1bRGZz7YL1sd_YNg3AiyfbPUT2cLwgcOtFyp1dcpaqGI/edit?usp=sharing

### dev

To start the application, simply run:

```sh
$ docker compose up -d
```

This command instantiates multiple docker containers, which install dependencies, build the app and server (watching for files changes), and run the node server.

Alternatively, the application can be run locally without docker using `npm install` and varies commands detailed in `package.json`.
