import React, { useEffect, useContext, useState } from "react"
import Airtable from "airtable"
import styled from "styled-components"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import ShopComponent from "../components/Shop"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appbWJrpD7eQdDKdq"
)

const ULWrapper = styled.ul`
  display: flex;
`

const LIElement = styled.li`
  padding-right: 1rem;
  cursor: pointer;
`

const ShopPage = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [category, setCategory] = useState("all")
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF", type: "TICKER_OFF" })
    base("Shop")
      .select({ view: "Shop", maxRecords: 100 })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            setItems(items => items.concat(record.fields))
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

  let filteredItems
  switch (category) {
    case "all":
      filteredItems = items
      break
    case "music":
      filteredItems = items.filter(item => item.Type === "Music")
      break
    case "apparel":
      filteredItems = items.filter(item => item.Type === "Apparel")
      break
    case "posters":
      filteredItems = items.filter(item => item.Type === "Posters")
      break
    case "etc":
      filteredItems = items.filter(item => item.Type === "Etc.")
      break
    default:
      break
  }

  return (
    <>
      <SEO title="Store" />
      <ULWrapper>
        <LIElement onClick={() => setCategory("all")}>
          <p>Shop All</p>
        </LIElement>
        <LIElement onClick={() => setCategory("music")}>
          <p>Music</p>
        </LIElement>
        <LIElement onClick={() => setCategory("apparel")}>
          <p>Apparel</p>
        </LIElement>
        <LIElement onClick={() => setCategory("posters")}>
          <p>Posters</p>
        </LIElement>
        <LIElement onClick={() => setCategory("etc")}>
          <p>Etc.</p>
        </LIElement>
      </ULWrapper>
      {isLoading ? <p>Loading...</p> : <ShopComponent items={filteredItems} />}
    </>
  )
}

export default ShopPage
