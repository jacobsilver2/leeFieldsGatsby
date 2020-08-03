import styled from "styled-components"

export const Wrapper = styled.div`
  /* max-width: 1500px; */
  width: 100%;
  display: grid;
  /* align-items: stretch; */
  margin: 0 auto;
  /* for this case, auto-fill is necessary.  */
  /* If an item category has less than 3 items, we still want the 3-column grid to be used. */
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  /* Designers prefer full-width with 3 column max, so now we need breakpoints  */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "image"
    "content"
    "purchase";
  grid-gap: 20px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
export const Card = styled.div`
  margin: 2rem 0;
  /* display: flex; */
  /* flex-direction: column; */
  /* min-height: 700px; */
  /* display: grid; */
  /* grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); */
`

export const Purchase = styled.div`
  align-self: end;
  height: 4rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  .purchaseText {
    width: 100%;
    text-align: center;
  }
  &:hover {
    background-color: black;
    .purchaseText {
      color: white;
    }
  }
`

export const Image = styled.img`
  width: 100%;
`

export const Content = styled.div`
  margin: 0;
  margin-bottom: 2rem;
  .title {
    /* margin: -1rem 0; */
    line-height: 5rem;
    font-size: 2.4rem;
  }
  .price {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
  br {
    line-height: 2.4rem;
  }
`

export const ItemName = styled.p`
  font-weight: 500;
`
