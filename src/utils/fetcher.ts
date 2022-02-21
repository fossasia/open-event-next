export default async function fetcher(url) {
  try {
    const data = await fetch(url).then((res) => res.json())
    return [data, null]
  } catch (err) {
    return [null, err]
  }
}
