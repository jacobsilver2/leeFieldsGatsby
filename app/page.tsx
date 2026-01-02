import { fetchVideosData, fetchShowsData } from '../src/lib/airtable'
import { HomeClient } from '../src/components/HomeClient'

export default async function IndexPage() {
  const [videos, shows] = await Promise.all([
    fetchVideosData(),
    fetchShowsData()
  ])

  return <HomeClient videos={videos} shows={shows} />
}
