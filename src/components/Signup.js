import React, { useState, useEffect } from "react"
import { Formik } from "formik"
import * as yup from "yup"
import is from "is_js"
import addToMailchimp from "gatsby-plugin-mailchimp"
import usePrevious from "../hooks/usePrevious"
import {
  Title,
  Wrapper,
  TheForm,
  Button,
  StyledFormikField,
  StyledFormikForm,
  StyledFormikError,
  StyledMailChimpResult,
  Content,
} from "../styles/StyledSignup"

const validationSchema = yup.object({
  email: yup.string().email().required(),
})

// this is to shorten the success message returned from mailchimp.
const extractEmailRegex = /<a[\s]+([^>]+)>((?:.(?!<\/a>))*.)<\/a>/g

const Signup = ({ location }) => {
  const [result, setResult] = useState("")
  const prevRoute = usePrevious(location.pathname)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (location.pathname !== prevRoute) {
      setResult("")
    }
  }, [location.pathname !== prevRoute])

  return (
    <Wrapper
      key={
        location.pathname === prevRoute ? key : () => setKey(prev => prev + 1)
      }
    >
      <Content>
        <Title>JOIN OUR NEWSLETTER</Title>
        <TheForm>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              // make async call
              // unfortunately this does not work on Firefox
              // developer edition.
              addToMailchimp(data.email)
                .then(res => {
                  setResult(res)
                })
                .catch(error => {})
              setSubmitting(false)
              resetForm()
            }}
          >
            {({ isSubmitting, errors, touched, values }) => {
              return (
                <>
                  <StyledFormikForm>
                    <StyledFormikField
                      placeholder="Email"
                      name="email"
                      type="text"
                    />
                    <Button
                      disabled={
                        isSubmitting ||
                        (is.not.empty(errors) && is.not.empty(touched))
                      }
                      type="submit"
                    >
                      Submit
                    </Button>
                  </StyledFormikForm>
                  {is.not.empty(values.email) && (
                    <StyledFormikError name="email" component="div" />
                  )}
                  {result.msg && is.empty(errors) && (
                    <StyledMailChimpResult>
                      {result.msg.replace(extractEmailRegex, "")}
                    </StyledMailChimpResult>
                  )}
                </>
              )
            }}
          </Formik>
        </TheForm>
      </Content>
    </Wrapper>
  )
}

export default Signup
