const Task = require('../database/models/taks')

const resolvers = {
  Query: {
    getAllTasks: async () => {
      const tasks = await Task.find()
      return tasks
    },
    getTask: async (_, { id }) => {
      const task = await Task.findById(id)
      return task
    }
  },
  Mutation: {
    createTask: async (_, args) => {
      const { title, description } = args.task
      const newTask = new Task({ title, description })
      await newTask.save()
      return newTask
    },
    deleteTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id)
      return 'task deleted successfuly'
    },
    updateTask: async (_, { id, task }) => {
      const updatedTask = await Task.findByIdAndUpdate(id, {
        $set: task
      }, {new: true})
      return updatedTask
    }
  },
}

module.exports = { resolvers }
