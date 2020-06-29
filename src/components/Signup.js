import React from "react"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Title,
  StyledForm,
  Wrapper,
  StyledFormik,
  Content,
  TheForm,
} from "../styles/StyledSignup"

const validationSchema = yup.object({
  email: yup.string().email().required(),
})

const Signup = () => {
  return (
    <Wrapper>
      <Title>JOIN OUR NEWSLETTER</Title>
      <TheForm>
        <StyledForm>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true)
              // make async call
              // console.log(data)
              setSubmitting(false)
            }}
          >
            {({ values, isSubmitting, handleChange, handleBlur, errors }) => (
              <StyledFormik>
                <label>
                  <input
                    placeholder="Email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                  />
                </label>
                <button disabled={isSubmitting} type="submit">
                  Submit
                </button>
              </StyledFormik>
            )}
          </Formik>
        </StyledForm>
      </TheForm>
    </Wrapper>
  )
}

export default Signup
