require('dotenv').config()
const { connect }  = require('mongoose')

exports.connectDB = async () => {
  try {
    await connect(process.env.MONGODB_CONNSTRING)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}
