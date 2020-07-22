import React, { useState } from "react"
import { Formik, ErrorMessage } from "formik"
import * as yup from "yup"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
  Title,
  Wrapper,
  TheForm,
  Button,
  StyledFormikField,
  StyledFormikForm,
  StyledFormikError,
  StyledMailChimpResult,
} from "../styles/StyledSignup"

const validationSchema = yup.object({
  email: yup.string().email().required(),
})

const extractEmailRegex = /<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>/g

const Signup = () => {
  // const [errmsg, setErrmsg] = useState("")
  const [result, setResult] = useState("")
  return (
    <Wrapper>
      <Title>JOIN OUR NEWSLETTER</Title>
      <TheForm>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true)
            // make async call
            // unfortunately this does not work on Firefox
            // developer edition.
            addToMailchimp(data.email)
              .then(res => {
                setResult(res)
                console.log(res)
              })
              .catch(error => {})
            setSubmitting(false)
          }}
        >
          {({ isSubmitting, errors, touched }) => {
            return (
              <>
                <StyledFormikForm>
                  <StyledFormikField
                    placeholder="Email"
                    name="email"
                    type="text"
                  />
                  <Button disabled={isSubmitting} type="submit">
                    Submit
                  </Button>
                </StyledFormikForm>
                <StyledFormikError name="email" component="div" />
                {result.msg && (
                  <StyledMailChimpResult>
                    {result.msg.replace(extractEmailRegex, "")}
                  </StyledMailChimpResult>
                )}
              </>
            )
          }}
        </Formik>
      </TheForm>
    </Wrapper>
  )
}

export default Signup
