import React from "react"
import FadeWrapper from "./FadeWrapper"
import {
  Wrapper,
  Card,
  Image,
  Content,
  ItemName,
  Purchase,
} from "../styles/StyledShop"
import useWindowSize from "../hooks/useWindowSize"

function isInt(n) {
  return n % 1 === 0
}

const ShopComponent = ({ items }) => {
  const size = useWindowSize()
  const mappedItems = items
    .sort((a, b) => a.Order - b.Order)
    .map(item => {
      return (
        <FadeWrapper key={item.id}>
          <Card>
            {item.Shop_Image && (
              <Image src={item.Shop_Image[0].url} alt="shop_image" />
            )}
            <Content>
              {item.Name && <ItemName className="title">{item.Name}</ItemName>}
              {item.LP_Price && (
                <p className="price">
                  LP: $
                  {isInt(item.LP_Price)
                    ? item.LP_Price
                    : item.LP_Price.toFixed(2)}
                  {item.CD_Price &&
                    ` - CD: $${
                      isInt(item.CD_Price)
                        ? item.CD_Price
                        : item.CD_Price.toFixed(2)
                    }`}
                </p>
              )}
              {item.Price && (
                <p className="price">
                  ${isInt(item.Price) ? item.Price : item.Price.toFixed(2)}
                </p>
              )}
            </Content>
            <Purchase>
              <a
                className="purchaseText"
                href={item.PurchaseLink}
                target="_blank"
                rel="noreferrer"
              >
                <p>Purchase</p>
              </a>
            </Purchase>
          </Card>
        </FadeWrapper>
      )
    })

  return <Wrapper>{mappedItems}</Wrapper>
}

export default ShopComponent
