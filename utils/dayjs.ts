import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import advanced from 'dayjs/plugin/advancedFormat'

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(advanced)

module.exports = dayjs
