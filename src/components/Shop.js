import React from "react"
import styled from "styled-components"
// import { StyledBigLogo } from "../styles/StyledBigLogo"

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`
const Card = styled.div`
  display: grid;
  width: 600px;
  margin: 2rem 0;
  min-height: 800px;
  @media only screen and (max-width: 600px) {
    max-width: 400px;
    /* width: 100%; */
  }
  /* align-items: center; */
  /* flex-direction: column; */
  /* max-height: 800px; */
  /* max-width: 600px; */
`

const Purchase = styled.div`
  align-self: end;
  height: 4rem;
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

const Image = styled.img`
  width: 100%;
`

const Content = styled.div`
  margin: 0;
  .title {
    font-size: 2.4rem;
  }
  .price {
    font-size: 2rem;
    font-weight: normal;
  }
`

const ShopComponent = ({ items }) => {
  // console.log(items)

  const mappedItems = items
    .sort((a, b) => a.Order - b.Order)
    .map(item => {
      return (
        <Card key={item.id}>
          {item.Shop_Image && (
            <Image src={item.Shop_Image[0].url} alt="shop_image" />
          )}
          <Content>
            {item.Name && <h5 className="title">{item.Name}</h5>}
            {item.Colored_LP_Price && (
              <p className="price">Colored Vinyl: ${item.Colored_LP_Price}</p>
            )}
            {item.LP_Price && <p className="price">LP: ${item.LP_Price}</p>}
            {item.CD_Price && <p className="price">CD: ${item.CD_Price}</p>}
            {item.Price && <p className="price">${item.Price}</p>}
          </Content>
          <Purchase>
            <a
              className="purchaseText"
              href={item.PurchaseLink}
              target="_blank"
            >
              <p>Purchase</p>
            </a>
          </Purchase>
        </Card>
      )
    })

  return <Wrapper>{mappedItems}</Wrapper>
}

export default ShopComponent
