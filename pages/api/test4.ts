import { NextApiRequest, NextApiResponse } from 'next'
import * as Sentry from '@sentry/node'
import { init } from '../../utils/sentry'

init()

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    throw new Error('API test 4')
  } catch (error) {
    Sentry.captureException(error)
  }

  // Flushing before returning is necessary if deploying to Vercel, see
  // https://vercel.com/docs/platform/limits#streaming-responses
  await Sentry.flush(2000)
  res.status(200).json({ name: 'John Doe' })
}

export default handler
