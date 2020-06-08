import React, { useEffect, useState } from "react"
import Airtable from "airtable"
import {
  StyledShowsComponent,
  ContentWrapper,
  CloseButton,
  Title,
  Wrapper,
} from "../styles/StyledShowsComponent"
import ShowsList from "./showsList"

const base = new Airtable({ apiKey: "keyY11TcpoTR646Fh" }).base(
  "appF7yJr2igkrU9jh"
)

const Shows = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [shows, setShows] = useState([])

  useEffect(() => {
    base("Shows")
      .select({ view: "grid", maxRecords: 100 })
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
  console.log(shows)

  const showsList = shows.map(show => {
    return (
      <div>
        <p>{show.Date}</p>
        <p>{show.Location}</p>
        <p>{show.Venue}</p>
        <p>{show.URL}</p>
      </div>
    )
  })

  return (
    <Wrapper>
      <Title>On Tour Now</Title>
      {isLoading && <p>I'm Loading</p>}
      {!isLoading && <ShowsList shows={shows} />}
    </Wrapper>
  )
}

export default Shows
