import React from "react"
import { Formik } from "formik"
import * as yup from "yup"
import {
  Title,
  Wrapper,
  TheForm,
  Form,
  Input,
  Button,
  Content,
} from "../styles/StyledSignup"

const validationSchema = yup.object({
  email: yup.string().email().required(),
})

const Signup = () => {
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
            // console.log(data)
            setSubmitting(false)
          }}
        >
          {({ values, isSubmitting, handleChange, handleBlur, errors }) => (
            <Form>
              <Input
                border={errors.email && "1px solid red"}
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              />
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </TheForm>
    </Wrapper>
  )
}

export default Signup
