// import Head from 'next/head'
// import { activateAndSetCookie } from '../utils/i18n'
// import { Trans } from '@lingui/macro'
// import dayjs from 'dayjs'
// import { useTimezone } from '../store/useTimezone'

import EventCard from '../src/components/templates/event/eventCard'

export default function Home({ details }): JSX.Element {
  // const localTimezone = useTimezone((state) => state.localTimezone)
  // const defaultTimezone = useTimezone((state) => state.defaultTimezone)
  // const setTimezone = useTimezone((state) => state.setTimezone)
  // const handleTimeZone = (e: any) => {
  //   setTimezone(e.target.value)
  // }

  return (
    <>
      {details.map((event) => {
        const attrs = event.attributes

        return (
          <EventCard
            key={attrs.name}
            name={attrs.name}
            img={attrs['original-img-url']}
            startsAt={attrs['starts-at']}
            endsAt={attrs['endsAt']}
          />
        )
      })}
    </>
  )
}

export async function getStaticProps(context) {
  try {
    const resp = await fetch(`https://api.eventyay.com/v1/events?cache=true
    &filter=[{"and":[{"name":"state","op":"eq","val":"published"},{"name":"privacy","op":"eq","val":"public"},{"name":"is-featured","op":"eq","val":true}]},{"or":[{"name":"ends-at","op":"ge","val":"2022-02-11T06:47:30.094Z"}]}]
    &page[size]=6
    &public=true
    &sort=starts-at`)
    const data = await resp.json()
    const eventData = data.data

    return { props: { eventData }, revalidate: 10 }
  } catch (err) {
    return { notFound: true }
  }
}
