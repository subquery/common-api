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

## Research & design:


### Problem 1: 

We want to record the extrinsic and its data from the chain, so we need to determine a fixed entity structure. However, extrinsic will have different versions, and its structure is changed. Especially for the customized substrate chain, the field in some entities may be unknown. The challenge is is when a new version of extrinsic appears, we can’t know if it fit in the entity struct we currently define

##### Solution 1-1:

Now, we have designed `ExtrinsicV4` in our entity, which represents extrinsic version 4 and its structure in the current version. Respectively, a new entity needs to be defined for new versions of extrinsic.

###### Pros: 

The structure of different versions will be fixed, and there is no need to update the table structure when there is a new version.

###### Cons: 

When the query needs to traverse all extrinsic, or when aggregate data is needed, this design will not be friendly.


### Problem 2: 

We define an entity of ‘AccountBalance’ to record the latest (current) account balance status, and we want to support balance with multiple `Asset`.We already know balance can be obtained through `api.query.system.account`, but it is not certain in what scenario and when to trigger this update. We cannot cover 100% events/extrinsic that affect the account balance, especially there will be unknown events in a cutomized chain, and in subquery project it will be large workload job to add filters for all known events.  Also, different chain describe asset differently, we need store them separately. 

##### Solution 2-1:

When indexing to one of the blocks, we extract all the accountId and assetId involved in all event/extrinsic. In this approach, all accounts in the current block that may have a ‘potential’ balance change will be updated.

If a chain support multiple assets, `AccountBalance` id which is formed by `account_id - assert_id`, which represent balance for this account in this asset. Else only `account_id` will be stored.


###### Pros: 
Will not miss any update for the account.

###### Cons:
For some accounts whose actual balance has not changed, we have also repeatedly checked their accounts. For example, a block contains a large number of different accountId, only one or two account balances actually changed, and we need to query all of them one by one. 


### Improvement:
 
Create an entity to record the change of account balance and record the type of transaction as detailed as possible.




