import React, { useState, useRef, useEffect } from "react"
import { globalHistory } from "@reach/router"
import { onRouteUpdate } from "../../gatsby-browser"
import { Formik, resetForm } from "formik"
import * as yup from "yup"
import is from "is_js"
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

const extractEmailRegex = /<a[\s]+([^>]+)>((?:.(?!<\/a>))*.)<\/a>/g

const Signup = ({ location }) => {
  console.log(resetForm)
  // console.log(location)
  // console.log(onRouteUpdate)
  // console.log(props)
  // const [errmsg, setErrmsg] = useState("")
  const [result, setResult] = useState("")

  // useEffect(() => {
  //   // set the location on initial load
  //   if (!myRef.current.location) {
  //     console.log("hi")
  //     myRef.current.location = location
  //     console.log(myRef.current)
  //   }
  //   // then make sure dialog is closed on route change
  //   else if (myRef.current.location !== location) {
  //     console.log("yo")
  //     myRef.current.resetForm()
  //     myRef.current.location = location
  //   }
  // })

  useEffect(() => {
    globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        console.log("pushed")
      }
    })
  }, [])

  return (
    <Wrapper>
      <Title>JOIN OUR NEWSLETTER</Title>
      <TheForm>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            // console.log(actions)
            setSubmitting(true)
            // make async call
            // unfortunately this does not work on Firefox
            // developer edition.
            addToMailchimp(data.email)
              .then(res => {
                setResult(res)
                // console.log(res)
              })
              .catch(error => {})
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ isSubmitting, errors, touched, values }) => {
            // {
            //   touched && setResult("")
            // }
            // console.log(values)
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
    </Wrapper>
  )
}

export default Signup
