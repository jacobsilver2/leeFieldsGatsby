'use client'

import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { usePrevious } from '../hooks'
import styles from '../styles/Signup.module.css'

const validationSchema = yup.object({
  email: yup.string().email().required(),
})

const extractEmailRegex = /<a[\s]+([^>]+)>((?:.(?!<\/a>))*.)<\/a>/g

interface MailchimpResponse {
  result: string
  msg: string
}

const addToMailchimp = async (email: string): Promise<MailchimpResponse> => {
  const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  if (!mailchimpUrl) {
    return {
      result: 'error',
      msg: 'Mailchimp URL not configured'
    }
  }

  try {
    await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ EMAIL: email }),
      mode: 'no-cors',
    })

    return {
      result: 'success',
      msg: 'Thank you for subscribing!'
    }
  } catch (error) {
    return {
      result: 'error',
      msg: 'Something went wrong. Please try again.'
    }
  }
}

interface SignupProps {
  location: string
}

export const Signup = ({ location }: SignupProps) => {
  const [result, setResult] = useState<MailchimpResponse>({ result: '', msg: '' })
  const prevRoute = usePrevious(location)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (location !== prevRoute) {
      setResult({ result: '', msg: '' })
      setKey((prev) => prev + 1)
    }
  }, [location, prevRoute])

  return (
    <div className={styles.wrapper} key={key}>
      <div className={styles.content}>
        <h3 className={styles.title}>JOIN OUR NEWSLETTER</h3>
        <div className={styles.theForm}>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              addToMailchimp(data.email)
                .then((res) => {
                  setResult(res)
                })
                .catch(() => {
                  setResult({
                    result: 'error',
                    msg: 'Something went wrong. Please try again.'
                  })
                })
                .finally(() => {
                  setSubmitting(false)
                  resetForm()
                })
            }}
          >
            {({ isSubmitting, errors, touched, values }) => {
              return (
                <>
                  <Form className={styles.formikForm}>
                    <Field
                      className={styles.formikField}
                      placeholder="Email"
                      name="email"
                      type="text"
                    />
                    <button
                      className={styles.button}
                      disabled={
                        isSubmitting ||
                        (Object.keys(errors).length > 0 && Object.keys(touched).length > 0)
                      }
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                  {values.email.length > 0 && (
                    <ErrorMessage className={styles.formikError} name="email" component="div" />
                  )}
                  {result.msg && Object.keys(errors).length === 0 && (
                    <p className={styles.mailChimpResult}>
                      {result.msg.replace(extractEmailRegex, '')}
                    </p>
                  )}
                </>
              )
            }}
          </Formik>
        </div>
      </div>
    </div>
  )
}
