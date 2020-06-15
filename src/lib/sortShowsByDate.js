import moment from "moment"

const sortShowsByDate = shows => {
  return shows.sort((a, b) => moment(a.Date).diff(moment(b.Date)))
}

export default sortShowsByDate
