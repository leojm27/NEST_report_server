# NEST_report_server

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Levantar Docker

docker compose up -d


## Prisma
Es un ORM para Posgresql, Mongodb, etc.
Docu: https://docs.nestjs.com/recipes/prisma

1- npm i prisma --save-dev
2- invocar CLI: npx prisma init
3- genera un '.env' con la variable DATABASE_URL, que lleva la config de nuestra conexion a la BD.
4- prisma client: npm i @prima/client


