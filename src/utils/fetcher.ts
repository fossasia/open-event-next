export default async function fetcher(url: string) {
  try {
    const data = await fetch(url)
    const res = await data.json()
    return [res, null]
  } catch (err) {
    return [null, err]
  }
}
