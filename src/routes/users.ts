import { Router } from 'express'

const router = Router()

router.get(`/`, (req, res) => {
  res.send({ success: true })
})

export { router as usersRouter }
