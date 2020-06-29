import React, { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 4rem;
  /* width: 100%; */
  /* margin: 0 ${({ theme }) => theme.spacing[4]}; */
`

const Selector = styled.p`
  opacity: ${({ active }) => (active ? "100%" : "50%")};
  cursor: pointer;
  padding-bottom: 1.5rem;
`

const Selection = styled.div`
  margin-top: 10rem;
`

const Content = styled.div``

const Shows = ({ data }) => {
  const [active, setActive] = useState("About")
  return (
    <Wrapper>
      <Selection>
        <Selector
          onClick={() => setActive("About")}
          active={active === "About"}
        >
          About
        </Selector>
        <Selector
          onClick={() => setActive("Contact")}
          active={active === "Contact"}
        >
          Contact
        </Selector>
      </Selection>
      <Content>
        {active === "About" && <About data={data.about} />}
        {active === "Contact" && <Contact data={data.contact} />}
      </Content>
    </Wrapper>
  )
}

export default Shows
