import { InvalidData } from './invalid-data.error'

export type DefaultError = {
  message: string
  context?: unknown
}

export const mapError = (data: DefaultError) => {
  switch (data.message) {
    case 'invalid_data':
      return new InvalidData(data.message, data.context)
    default:
      return new Error(data.message)
  }
}
