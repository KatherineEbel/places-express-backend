import { NextFunction, Request, Response } from 'express'
import { HttpException } from '../error/HttpException'

export const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(err.status || 500)
  const { status, message = 'Server Error' } = err
  res.json({ status, message })
}
