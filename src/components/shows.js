import React, { useEffect, useState } from "react"
import Airtable from "airtable"
import { Title, Wrapper } from "../styles/StyledShowsComponent"
import ShowsList from "./showsList"
import sortShowsByDate from "../lib/sortShowsByDate"
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
      <Title>On Tour Now</Title>
      {isLoading && <p>I'm Loading</p>}
      {!isLoading && <ShowsList shows={sortShowsByDate(shows)} />}
    </Wrapper>
  )
}

export default Shows
