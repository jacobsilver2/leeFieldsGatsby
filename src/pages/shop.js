import React, { useEffect, useContext, useState } from "react"
import Airtable from "airtable"
import styled from "styled-components"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import ShopComponent from "../components/Shop"
import Loading from "../components/Loading"
import FadeWrapper from "../components/FadeWrapper"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appbWJrpD7eQdDKdq"
)

const ULWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* width: 50%; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* font-size: ${({ theme }) => theme.fontSize.xl}; */
    width: 100%;
  }

`

const LIElement = styled.li`
  padding-right: 1rem;
  opacity: ${({ active }) => (active ? "1" : "50%")};
  .text {
    cursor: pointer;
  }
  @media only screen and (max-width: 828px) {
    h5 {
      font-size: 4vw;
    }
  }
`

const ShopContainer = styled.div`
  /* max-width: 1920px; */
  margin-top: 2rem;
  margin-bottom: 8rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0;
  }
`

const ShopPage = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [category, setCategory] = useState("all")
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <FadeWrapper>
      <SEO title="Shop" />
      <ShopContainer>
        <ULWrapper>
          <LIElement
            active={category === "all"}
            onClick={() => setCategory("all")}
          >
            <h5 className="text">Shop All</h5>
          </LIElement>
          <LIElement
            active={category === "music"}
            onClick={() => setCategory("music")}
          >
            <h5 className="text">Music</h5>
          </LIElement>
          <LIElement
            active={category === "apparel"}
            onClick={() => setCategory("apparel")}
          >
            <h5 className="text">Apparel</h5>
          </LIElement>
          <LIElement
            active={category === "posters"}
            onClick={() => setCategory("posters")}
          >
            <h5 className="text">Posters</h5>
          </LIElement>
          <LIElement
            active={category === "etc"}
            onClick={() => setCategory("etc")}
          >
            <h5 className="text">Etc.</h5>
          </LIElement>
        </ULWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <ShopComponent category={category} items={filteredItems} />
        )}
      </ShopContainer>
    </FadeWrapper>
  )
}

export default ShopPage
