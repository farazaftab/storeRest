import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

import routes from '../routes'

import {httpLoggerMiddleware as httpLogger} from './logger'

export default (): any => {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(httpLogger)

  //await connectDb()

  app.use('/', routes)

  return app
}
