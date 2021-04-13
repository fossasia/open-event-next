import { NextApiRequest, NextApiResponse } from 'next'
import { init } from '../../utils/sentry'

init()

const work = (): never => {
  throw new Error('API Test 3')
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  work()

  res.status(200).json({ name: 'John Doe' })
}

export default handler
