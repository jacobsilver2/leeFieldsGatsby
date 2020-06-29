import styled from "styled-components"
import { Form } from "formik"

export const StyledSignup = styled.div`
  /* margin: auto; */
  /* min-height: ${({ theme }) => theme.spacing["40"]}; */
`

export const Wrapper = styled.div`
  border-top: 1px solid black;
  min-height: 40rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  /* grid-gap: 4rem; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`

export const Content = styled.div`
  /* display: block; */
  max-width: 1300px;
`

export const Title = styled.h3`
  align-self: end;
  text-align: center;
  /* margin: 5rem auto; */
`

export const StyledFormik = styled(Form)`
  display: flex;
  justify-content: space-between;
`

export const TheForm = styled.div`
  margin: auto;
  align-self: center;
  width: 50%;
  /* max-width: 80%; */
  border-bottom: 1px solid black;
`

export const StyledForm = styled.div`
  /* margin: 0 auto; */
  /* padding: 5rem 0; */
  /* max-width: 80%; */
  /* min-width: 50%; */
  input[type="text"] {
    flex-grow: 1;
    border: 0;
    background-color: ${({ theme }) => theme.color.offWhite};
    font-size: ${({ theme }) => theme.fontSize.h5};
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-size: ${({ theme }) => theme.fontSize.h5};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: ${({ theme }) => theme.fontSize.h5};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-size: ${({ theme }) => theme.fontSize.h5};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-size: ${({ theme }) => theme.fontSize.h5};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
  }
  button[type="submit"] {
    /* font-size: 100px; */
    font-size: ${({ theme }) => theme.fontSize.h5};
    font-weight: normal;
    border: 0;
    background-color: ${({ theme }) => theme.color.offWhite};
    &:hover {
      opacity: 50%;
    }
  }
`

export const Underline = styled.div`
  border-bottom: 1px solid black;
`
