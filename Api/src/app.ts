import express from 'express'
import { Routes } from './interfaces/routes.interface'
import { dbConnection } from './databases/db'
import { connect, disconnect } from 'mongoose'
import { PORT } from './config'
import compression from 'compression'
import helmet from 'helmet'
import hpp from 'hpp'

class App {
  public app: express.Application
  public env: string
  public port: string | number

  constructor(routes: Routes[]) {
    this.app = express()
    this.env = 'development'
    this.port = PORT || 3001

    this.connectToDatabase()
    this.initializeMiddlewares()
    this.initializeRoutes(routes)
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info('=================================')
      console.info(`======= ENV: ${this.env} =======`)
      console.info(`App listening on the port ${this.port}`)
      console.info('=================================')
    })
  }

  public async closeDatabaseConnection() {
    try {
      await disconnect()
      console.info('Disconnected from MongoDB')
    } catch (error) {
      console.error('Error closing MongoDB connection: ', error)
    }
  }

  private async connectToDatabase() {
    await connect(dbConnection.url)
    console.info('Connected to MongoDB')
  }

  private initializeMiddlewares() {
    this.app.use(hpp())
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/', route.router)
    })
  }
}

export default App
