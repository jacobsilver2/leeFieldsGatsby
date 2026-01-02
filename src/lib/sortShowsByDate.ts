import type { ShowRecord } from '../types'

export const sortShowsByDate = (shows: ShowRecord[]): ShowRecord[] => {
  return shows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
