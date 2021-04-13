import { NextApiRequest, NextApiResponse } from 'next'
import { init } from '../../utils/sentry'

init()

const doAsyncWork = (): any => {
  Promise.reject(new Error('API Test 1'))
}
doAsyncWork()

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
