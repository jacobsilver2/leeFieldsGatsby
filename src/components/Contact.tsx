import { useMemo } from 'react'
import { useWindowSize } from '../hooks'
import { FadeWrapper } from './FadeWrapper'
import { FormattedContactData } from '../types'
import styles from './Contact.module.css'

interface ContactProps {
  data: FormattedContactData
}

export const Contact = ({ data }: ContactProps) => {
  const size = useWindowSize()

  const mappedData = useMemo(() => {
    if (!data?.edges || data.edges.length === 0) {
      return null
    }

    return data.edges
      .sort((a, b) => a.node.data.Order - b.node.data.Order)
      .map((contact) => {
      const { data, id } = contact.node
      return (
        <FadeWrapper key={id}>
          <div className={styles.contactCard}>
            {size.width >= 828
              ? data.Role && <h4 className={styles.title}>{data.Role?.toUpperCase()}</h4>
              : data.Role && (
                  <h3 className={styles.titleMobile}>{data.Role?.toUpperCase()}</h3>
                )}
            {data.Agency && <p className={styles.info}>{data.Agency}</p>}
            {data.Name1 && (
              <p className={styles.info}>
                <a href={`mailto: ${data.Email1}`}>{data.Name1}</a>
              </p>
            )}
            {data.Name2 && (
              <p className={styles.info}>
                <a href={`mailto: ${data.Email2}`}>{data.Name2}</a>
              </p>
            )}
          </div>
        </FadeWrapper>
      )
    })
  }, [data, size.width])

  if (!data?.edges || data.edges.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h3>No contact data available</h3>
          <p>Configure your Airtable API key to load contact information.</p>
        </div>
      </div>
    )
  }

  return <div className={styles.wrapper}>{mappedData}</div>
}
