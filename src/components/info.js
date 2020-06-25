import React, { useState } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const Selector = styled.p`
  opacity: ${({ active }) => (active ? "100%" : "50%")};
  cursor: pointer;
`

const Shows = ({ data }) => {
  const [active, setActive] = useState("About")

  return (
    <Wrapper>
      <div>
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
      </div>
      {active === "About" && <About />}
      {active === "Contact" && <Contact data={data} />}
    </Wrapper>
  )
}

export default Shows
