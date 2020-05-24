<h1 align="center">sequelize + graphql 🧘🏽‍♂️</h1>
<p>
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A graphql server with jwt authentication built with nodejs, sequelize + postgres and graphql-yoga. This is very exprimental and a lot of rules have been bent to achieve some feats. However, everything works as it should.

## Install

```sh
npm install
```

## Create database and migrate
```sh
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

## Environmental variables
Replace yoursupersecuresecret with whatever key you would like to use
```sh
echo JWT_SECRET=yoursupersecuresecret > .env
```

## Usage

```sh
npm run dev
```

## Schema
View [here](src/schema.graphql)

## Author

🧑🏾‍💻 **collinsmuriuki**

* Github: [@collinsmuriuki](https://github.com/collinsmuriuki)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [collinsmuriuki](https://github.com/collinsmuriuki).<br />
This project is [MIT](LICENSE) licensed.
