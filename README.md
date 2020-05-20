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

## Environmental variable
Replace yoursupersecuresecret with whatever key you would like to use
```sh
echo JWT_SECRET=yoursupersecuresecret > .env
```

## Usage

```sh
npm start
```

## Schema
```ts
type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  body: String!
  User: User!
  comments: [Comment!]!
  createdAt: String!
  updatedAt: String!
}

type Comment {
  id: ID!
  text: String!
  User: User!
  Post: Post!
}

input CreateUserInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}

type LoginOutput {
  token: String!
  user: User!
}

input CreatePostInput {
  UserId: Int!
  title: String!
  body: String!
}

input CreateCommentInput {
  UserId: Int!
  PostId: Int!
  text: String!
}

enum OrderByType {
  ASC
  DESC
}

input UpdateUserProfileInput {
  userId: ID!
  firstName: String!
  lastName: String!
  email: String!
}

input UpdatePasswordInput {
  userId: ID!
  oldPassword: String!
  newPassword: String!
}

type Query {
  users(limit: Int, offset: Int, order: OrderByType): [User!]!
  posts(limit: Int, offset: Int, order: OrderByType): [Post!]!
  comments(limit: Int, offset: Int, order: OrderByType): [Comment!]!
  getPostById(id: Int!): Post!
  getUserById(id: Int!): User!
  getPostsByUserId(UserId: Int!, order: OrderByType): [Post!]!
}

type Mutation {
  signUp(data: CreateUserInput!): User!
  login(data: LoginInput): LoginOutput!
  createPost(data: CreatePostInput!): Post!
  createComment(data: CreateCommentInput): Comment!
  updateUserProfile(data: UpdateUserProfileInput!): User!
  changePassword(data: UpdatePasswordInput!): User!
}
```

## Author

🧑🏾‍💻 **collinsmuriuki**

* Github: [@collinsmuriuki](https://github.com/collinsmuriuki)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [collinsmuriuki](https://github.com/collinsmuriuki).<br />
This project is [MIT](LICENSE) licensed.
