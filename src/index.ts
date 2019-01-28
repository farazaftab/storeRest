import {load as dotenv} from 'dotenv'

import createApp from './app/createApp'


dotenv()

const start = async () => {
  try {
    const app = await createApp()
    const port = process.env.PORT || 3000

    app.listen(port, () => {
      console.info(`App running on port ${port}...`)
    })
  } catch (e) {
    console.info(e.toString())

    process.exit(1)
  }
}

start()
