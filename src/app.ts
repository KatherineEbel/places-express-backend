import express from 'express'
import { PORT } from './config/constants'
import { placesRouter } from './routes/places'
import { usersRouter } from './routes/users'
import { errorMiddleware } from './middlewares/errorMiddleware'

const app = express()

app.use(express.json())
app.use(`/api/places`, placesRouter)
app.use(`/api/users`, usersRouter)

app.use(errorMiddleware)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
