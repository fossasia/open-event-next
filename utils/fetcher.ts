import { instance } from '../src/ky/instance'

interface Props {
  url: string
  method?: string
}

export default async function fetcher({
  url,
  method = 'GET',
}: Props): Promise<[data: ServerProp | null, err: any]> {
  try {
    const data: ServerProp = await instance(url, {
      method: method,
    }).then((res) => res.json())

    return [data, null]
  } catch (err) {
    return [null, err]
  }
}
