import express from 'express'

import { router } from './routes/noticies'

const PORT = 3000
const app = express()

app.use('/api', router)

const server = app.listen(PORT, () =>
  console.log(`Server is listening PORT: ${PORT}`)
)


