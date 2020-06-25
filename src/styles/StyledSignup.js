import styled from "styled-components"
import { Form } from "formik"

export const StyledSignup = styled.div`
  /* margin: auto; */
  /* min-height: ${({ theme }) => theme.spacing["40"]}; */
`

export const Wrapper = styled.div`
  border-top: 1px solid black;
  min-height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  /* margin: 5rem auto; */
`

export const StyledFormik = styled(Form)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

export const StyledForm = styled.div`
  min-width: 50%;
  input[type="text"] {
    border: 0;
    background-color: ${({ theme }) => theme.color.offWhite};
    font-size: ${({ theme }) => theme.fontSize.h4};
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-size: ${({ theme }) => theme.fontSize.h4};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-size: ${({ theme }) => theme.fontSize.h4};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-size: ${({ theme }) => theme.fontSize.h4};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-size: ${({ theme }) => theme.fontSize.h4};
      color: ${({ theme }) => theme.color.black};
      opacity: 1;
    }
  }
  button[type="submit"] {
    /* font-size: 100px; */
    font-size: ${({ theme }) => theme.fontSize.h4};
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
