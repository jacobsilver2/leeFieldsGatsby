import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 1500px;
  display: grid;
  margin: 0 auto;
  padding: 0 0.5rem;
  width: 100%;
  /* for this case, auto-fill is necessary.  */
  /* If an item category has less than 3 items, we still want the 3-column grid to be used. */
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
export const Card = styled.div`
  display: grid;
  margin: 2rem 0;
`

export const Purchase = styled.div`
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

export const Image = styled.img`
  width: 100%;
  /* min-width: 600px; */
  @media only screen and (max-width: 828px) {
    min-width: 400px;
    /* margin: 0; */
    /* width: 100%; */
  }
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
`

export const ItemName = styled.p`
  font-weight: 500;
`
