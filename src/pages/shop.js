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

const ShopPage = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [category, setCategory] = useState("all")
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF" })
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
        <li>
          <button onClick={() => setCategory("all")}>Shop All</button>
        </li>
        <li>
          <button onClick={() => setCategory("music")}>Music</button>
        </li>
        <li>
          <button onClick={() => setCategory("apparel")}>Apparel</button>
        </li>
        <li>
          <button onClick={() => setCategory("posters")}>Posters</button>
        </li>
        <li>
          <button onClick={() => setCategory("etc")}>Etc.</button>
        </li>
      </ULWrapper>
      {isLoading ? <p>Loading...</p> : <ShopComponent items={filteredItems} />}
    </>
  )
}

export default ShopPage
