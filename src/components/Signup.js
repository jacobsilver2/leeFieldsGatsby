import React from "react"
import { Formik } from "formik"
import * as yup from "yup"
import {
  StyledSignup,
  Title,
  StyledForm,
  Wrapper,
  StyledFormik,
} from "../styles/StyledSignup"

const validationSchema = yup.object({
  email: yup.string().email().required(),
})

const Signup = () => {
  //   const [field, meta] = useField(props)

  return (
    <StyledSignup>
      <Wrapper>
        <Title>JOIN OUR NEWSLETTER</Title>
        <StyledForm>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true)
              // make async call
              console.log(data)
              setSubmitting(false)
            }}
          >
            {({ values, isSubmitting, handleChange, handleBlur, errors }) => (
              <StyledFormik>
                <input
                  placeholder="Email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                />
                <button disabled={isSubmitting} type="submit">
                  Submit
                </button>
              </StyledFormik>
            )}
          </Formik>
        </StyledForm>
      </Wrapper>
    </StyledSignup>
  )
}

export default Signup
