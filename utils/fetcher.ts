import { instance } from '../src/ky/instance'

export default async function fetcher(
  url: string,
  searchParams: string
): Promise<[data: ServerProp | null, err: any]> {
  try {
    const data: ServerProp = await instance(url, {
      searchParams: searchParams,
    }).json()

    return [data, null]
  } catch (err) {
    return [null, err]
  }
}
