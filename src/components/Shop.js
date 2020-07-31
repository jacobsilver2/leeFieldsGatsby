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

const ShopComponent = ({ items, category }) => {
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
              {item.Colored_LP_Price && (
                <p className="price">Colored Vinyl: ${item.Colored_LP_Price}</p>
              )}
              {item.LP_Price && <p className="price">LP: ${item.LP_Price}</p>}
              {item.CD_Price && <p className="price">CD: ${item.CD_Price}</p>}
              {item.Price && <p className="price">${item.Price}</p>}
              {/* this next line is to compensate for the extra height from the music prices */}
              {/* removing the extra spaces for when we are in single column view */}
              {/* or when category is all (cause that's the only time Music and Apparel will be) */}
              {/* on the same grid */}
              {item.Type !== "Music" && size.width > 855 && category === "all" && (
                <>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </>
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
