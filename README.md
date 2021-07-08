# SubQuery Common API

We believe that the DApps ecosystem will benefit from a common core API that each parachain can integrate (and extend) to index and expose their chain data for future consumer facing applications (e.g. a wallet, explorer, or other dApp).

We are aiming to create an open-source SubQuery Project for common app and network data. This will be accompanied by documentation and learning materials

## Outcomes

1. __Improve the Interoperability of DApps and Parachains__: Defined and maintained common core data API interface for Polkadot, Kusama, and other parachains. Just like Substrate defines a standard interface API that parachain developers can adopt, extend, and modify - decentralised application developers would benefit from a standard API for common use cases that they can also adopt, extend, and modify.
2. __Attract and Support More Developers in Kusama__: Provide a starting point for consumer facing dApp developers to get started with Polkadot and Kusama

# Running this Project

## In the SubQuery Explorer

This project will soon be uploaded to the SubQuery Explorer for you to play around with

## Run a local version

Requirements:
- [Typescript](https://www.typescriptlang.org/) are required to compile project and define types.  
- Both SubQuery CLI and the generated Project have dependencies that require [Node](https://nodejs.org/en/).
     
Install SubQuery CLI globally on your terminal by using Yarn or NPM:

```shell
# Yarn
yarn global add @subql/cli

# NPM
npm install -g @subql/cli
```

Under the project directory, run the following command to install the project's dependencies.

```shell
# Yarn
yarn install

# NPM
npm install
```

Generate the required GraphQL models

```shell
# Yarn
yarn codegen

# NPM
npm run-script codegen
```

Build the project locally

```shell
# Yarn
yarn build

# NPM
npm run-script build
```

Run following command to run using docker or [read more about different ways to run a SubQuery project](https://doc.subquery.network/run/run.html)

```
docker-compose pull && docker-compose up
```

Open your browser and head to `http://localhost:3000`.

You should see a GraphQL playground is showing in the explorer and the schemas that ready to query. On the top right of the playground, you'll find a Docs button that will open a documentation draw. This documentation is automatically generated and helps you find what entities and methods you can query.
