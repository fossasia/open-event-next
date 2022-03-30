import ky from 'ky'

const BASE_URL = 'https://api.eventyay.com/v1'

export const instance = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    Accept: 'application/vnd.api+json',
  },
})
