import React from 'react'
import { render, fireEvent } from '../testUtils'
import Index from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    interface Props {
      events: ServerData[]
      upcomingEvents: ServerData[]
      groups: ServerData[]
    }

    const events: ServerData[] = [
      {
        type: 'event',
        attributes: {
          name: 'Event One',
          startsAt: new Date('March 12, 2022 1:45:00'),
          endsAt: new Date('March 15, 2022, 1:44:00'),
          thumbnailImageUrl:
            'https://api.eventyay.com/static/media/events/2764/thumbnail/TXAvdWNJQV/86acb2e9-7034-40fd-96fc-7453d1b58059.jpg',
          timezone: 'Europe/Berlin',
          online: false,
        },
      },
      {
        type: 'event',
        attributes: {
          name: 'Event Two',
          startsAt: new Date('February 12, 2022 2:00:00'),
          endsAt: new Date('February 17, 2022, 1:59:00'),
          thumbnailImageUrl:
            'https://api.eventyay.com/static/media/events/2764/thumbnail/TXAvdWNJQV/86acb2e9-7034-40fd-96fc-7453d1b58059.jpg',
          timezone: 'Singapore',
          online: false,
        },
      },
    ]
    const upcomingEvents: ServerData[] = [...events]
    const groups: ServerData[] = [
      {
        type: 'group',
        attributes: {
          name: 'Group One',
          thumbnailImageUrl:
            'https://api.eventyay.com/static/media/events/40/thumbnail/V3FyRzk3WF/059a6ce5-b592-448d-ac00-ca7185be4adf.jpg',
          about: 'This is some random test string about group one',
          followerCount: 3,
        },
      },
      {
        type: 'group',
        attributes: {
          name: 'Group Two',
          thumbnailImageUrl:
            'https://api.eventyay.com/static/media/events/40/thumbnail/V3FyRzk3WF/059a6ce5-b592-448d-ac00-ca7185be4adf.jpg',
          about: 'This is some random test string about group two',
          followerCount: 3,
        },
      },
    ]
    const props: Props = { events, upcomingEvents, groups }
    const { asFragment } = render(
      <Index events={events} upcomingEvents={upcomingEvents} groups={groups} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
