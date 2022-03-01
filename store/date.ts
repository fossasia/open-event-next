import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import create from 'zustand'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

type timezoneState = {
  localTimezone: string
  defaultTimezone: string
  setTimezone: (timezone: string) => void
}

export const useTimezone = create<timezoneState>((set) => ({
  localTimezone: dayjs.tz.guess(),
  defaultTimezone: 'Asia/Singapore',
  setTimezone: (localTimezone) => set({ localTimezone }),
}))

export { dayjs }
