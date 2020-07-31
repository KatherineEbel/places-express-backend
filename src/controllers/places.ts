import { Request, Response } from 'express'
import { PLACES } from '../model/placesData'
import { HttpException } from '../error/HttpException'
import { Place } from '../model/place'

export const getPlaces = (req: Request, res: Response) => {
  res.send(PLACES)
}

export const getPlaceById = (req: Request, res: Response) => {
  const { id } = req.params
  const place = PLACES.find((p) => p.id === id)
  if (!place) {
    throw new HttpException(404, 'Resource not found')
  }
  res.status(200).send(place)
}

export const getUserPlaces = (req: Request, res: Response) => {
  const { id } = req.params
  const places = PLACES.filter((p) => p.userId === id)
  res.status(places ? 200 : 404).send(places ? places : { error: 'Not Found' })
}

export const createPlace = (req: Request, res: Response) => {
  const { title, description, address, lat, lng, userId } = req.body
  const place: Place = {
    title,
    description,
    address,
    location: {
      lat: +lat,
      lng: +lng,
    },
    userId,
    id: `p${PLACES.length + 1}`,
  }
  PLACES.push(place)
  res.status(201).send(place)
}
