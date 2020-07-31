import { Router } from 'express'
import {
  createPlace,
  getPlaceById,
  getPlaces,
  getUserPlaces,
} from '../controllers/places'

const router: Router = Router()

router.get(`/`, getPlaces)

router.get(`/:id`, getPlaceById)

router.get(`/user/:id`, getUserPlaces)

router.post(`/`, createPlace)

export { router as placesRouter }
