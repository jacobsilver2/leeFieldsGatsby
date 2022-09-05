import moment from 'moment'

export const sortShowsByDate = (shows) => {
  return shows.sort((a, b) => moment(a.Date).diff(moment(b.Date)))
}
