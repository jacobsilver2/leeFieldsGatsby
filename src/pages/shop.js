import Airtable from 'airtable'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import FadeWrapper from '../components/FadeWrapper'
import Loading from '../components/Loading'
import Seo from '../components/seo'
import ShopComponent from '../components/Shop'
import { GlobalDispatchContext } from '../context'

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  'appbWJrpD7eQdDKdq',
)

const ULWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    max-height: 6rem;
  }
`

const LIElement = styled.li`
  padding-right: 2rem;
  h5 {
    margin-top: 1rem;
  }
  opacity: ${({ active }) => (active ? '1' : '50%')};
  .text {
    cursor: pointer;
  }
  @media only screen and (max-width: 828px) {
    h5 {
      margin-top: 1rem;
      font-size: 4vw;
    }
  }
`

const ShopContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 8rem;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0;
  }
`

const ShopPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [category, setCategory] = useState('all')
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
    base('Shop')
      .select({ view: 'Shop', maxRecords: 100 })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            setItems((items) => items.concat(record.fields))
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            console.error(err)
            return
          }
          setIsLoading(false)
        },
      )
  }, [])

  let filteredItems
  switch (category) {
    case 'all':
      filteredItems = items
      break
    case 'music':
      filteredItems = items.filter((item) => item.Type === 'Music')
      break
    case 'apparel':
      filteredItems = items.filter((item) => item.Type === 'Apparel')
      break
    case 'posters':
      filteredItems = items.filter((item) => item.Type === 'Poster')
      break
    case 'etc':
      filteredItems = items.filter((item) => item.Type === 'Etc.')
      break
    default:
      break
  }

  return (
    <FadeWrapper>
      <Seo title="Shop" />
      <ShopContainer>
        <ULWrapper>
          <LIElement
            active={category === 'all'}
            onClick={() => setCategory('all')}
          >
            <h5 className="text">Shop All</h5>
          </LIElement>
          <LIElement
            active={category === 'music'}
            onClick={() => setCategory('music')}
          >
            <h5 className="text">Music</h5>
          </LIElement>
          <LIElement
            active={category === 'apparel'}
            onClick={() => setCategory('apparel')}
          >
            <h5 className="text">Apparel</h5>
          </LIElement>
          <LIElement
            active={category === 'posters'}
            onClick={() => setCategory('posters')}
          >
            <h5 className="text">Posters</h5>
          </LIElement>
          <LIElement
            active={category === 'etc'}
            onClick={() => setCategory('etc')}
          >
            <h5 className="text">Etc.</h5>
          </LIElement>
        </ULWrapper>
        {isLoading ? <Loading /> : <ShopComponent items={filteredItems} />}
      </ShopContainer>
    </FadeWrapper>
  )
}

export default ShopPage
