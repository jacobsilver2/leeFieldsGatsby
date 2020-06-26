import React from "react"
import styled from "styled-components"
import { StyledBigLogo } from "../styles/StyledBigLogo"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
`

const Purchase = styled.div`
  min-height: 4rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: black;
    .purchaseText {
      color: white;
    }
  }
`

const ShopComponent = ({ items }) => {
  console.log(items)

  const mappedItems = items
    .sort((a, b) => a.Order - b.Order)
    .map(item => {
      return (
        <Card key={item.id}>
          {item.Shop_Image && (
            <img src={item.Shop_Image[0].url} alt="shop_image" />
          )}
          {item.Name && <h5>{item.Name}</h5>}
          {item.Colored_LP_Price && (
            <p>Colored Vinyl: ${item.Colored_LP_Price}</p>
          )}
          {item.LP_Price && <p>LP: ${item.LP_Price}</p>}
          {item.CD_Price && <p>CD: ${item.CD_Price}</p>}
          {item.Price && <p>${item.Price}</p>}
          <Purchase>
            <a className="purchaseText" href={item.PurchaseLink}>
              <p>Purchase</p>
            </a>
          </Purchase>
        </Card>
      )
    })

  return <Wrapper>{mappedItems}</Wrapper>
}

export default ShopComponent
