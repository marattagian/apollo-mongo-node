const Task = require('../database/models/taks')

const resolvers = {
  Query: {
    getAllTasks: async () => {
      const tasks = await Task.find()
      return tasks
    },
  },
  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args
      const newTask = new Task({ title, description })
      await newTask.save()
      return newTask
    },
  },
}

module.exports = { resolvers }
