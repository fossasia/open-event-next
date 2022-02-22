export default async function fetcher(url: string) {
  try {
    const data = await fetch(url).then((res) => res.json())
    return [data, null]
  } catch (err) {
    return [null, err]
  }
}
