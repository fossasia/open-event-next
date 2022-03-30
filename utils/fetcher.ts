import { instance } from '../src/ky/instance'

interface Props {
  url: string
}

export default async function fetcher({
  url,
}: Props): Promise<[data: ServerProp | null, err: any]> {
  try {
    const data: ServerProp = await instance.get(url).json()

    return [data, null]
  } catch (err) {
    return [null, err]
  }
}
