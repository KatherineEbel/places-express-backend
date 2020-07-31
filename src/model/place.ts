export interface Place {
  id?: string
  title: string
  description: string
  address: string
  location: {
    lat: number
    lng: number
  }
  userId: string
}
