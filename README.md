# Apollo Server with Node

A GraphQL API made with Node and Apollo server, implemented on a Mongo database.

## Mutations

### Create Task
```graphql
mutation {
  createTask(
    task {
      title: "title"
      description: "some description"
    }
  ) {
    id
    title
    description
  }
}
```

### Update Task
```graphql
mutation {
  updateTask(
    id: <some valid id>
    task {
      title: "title"
      description: "some description"
    }
  ) {
    id
    title
    description
  }
}
```

### Delete Task
```graphql
mutation {
  deleteTask(
    id: <some valid id>
  )
}
```

## Queries

### Get All Tasks
```graphql
query {
  getAllTasks {
    id
    title
    description
  }
}
```

### Get Tasks by Id
```graphql
query {
  getTask(id: <someid>) {
    id
    title
    description
  }
}
```

## Try it

You can check it [here](https://studio.apollographql.com/sandbox/explorer), rember to add the following link as the endpoint https://apollo-mongo-node-production.up.railway.app/graphql
