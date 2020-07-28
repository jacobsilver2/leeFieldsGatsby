import React, { useEffect, useState } from "react"
import Airtable from "airtable"
import { Title, Wrapper } from "../styles/StyledShowsComponent"
import ShowsList from "./showsList"
import sortShowsByDate from "../lib/sortShowsByDate"
import Loading from "./Loading"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appF7yJr2igkrU9jh"
)

const Shows = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [shows, setShows] = useState([])

  useEffect(() => {
    base("Shows")
      .select({ view: "Future", maxRecords: 100 })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            record.fields.Listed === true &&
              setShows(shows => shows.concat(record.fields))
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
          setIsLoading(false)
        }
      )
  }, [])

  return (
    <Wrapper>
      <Title>UPCOMING SHOWS</Title>
      {isLoading && <Loading />}
      {!isLoading && <ShowsList shows={sortShowsByDate(shows)} />}
    </Wrapper>
  )
}

export default Shows
