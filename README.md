<br />
<div align="center">
  <img src="./assets/logo.png" alt="mail package manager logo" height="150" />
  <h1>
    <font color="#9E4D3B">Mail Package Manager</font>
  </h1>
</div>
<p align="center">
  <br />
  <img alt="NodeJS" src="https://img.shields.io/badge/Nodejs%4020.5.1-green">
  <img alt="NestJS" src="https://img.shields.io/badge/Nestjs%4010.0.0-red">
  <img alt="Typescript" src="https://img.shields.io/badge/Typescript%40latest-blue">
  <br />
</p>

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Environment variables](#environment-variables)
- [Running the app](#running-the-app)
- [Test](#test)

## Description

This is a backend application for managing mail and packages for a residence.

## Installation

```bash
$ npm install
```

## Environment variables

Create a `.env` file with the following in the root

```bash
DATABASE_URL=<DATABASE_URL>

AUTH_SECRET=<AUTH_SECRET>
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
