import { OptimizedImage as Img } from "./image"
import { FadeWrapper } from "./FadeWrapper"
import { FormattedAboutData } from "../types"
import styles from "./About.module.css"

interface AboutProps {
  data: FormattedAboutData
}

export const About = ({ data }: AboutProps) => {
  if (!data?.edges || data.edges.length === 0) {
    return (
      <FadeWrapper>
        <div className={styles.wrapper}>
          <div style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h3>No about data available</h3>
            <p>Configure your Airtable API key to load about information.</p>
          </div>
        </div>
      </FadeWrapper>
    )
  }

  const aboutInfo = data.edges[0].node

  return (
    <FadeWrapper>
      <div className={styles.wrapper}>
        {aboutInfo.data.AboutPic?.localFiles?.[0] && (
          <div className={styles.imageWrapper}>
            <Img image={aboutInfo.data.AboutPic.localFiles[0]} />
          </div>
        )}
        <div className={styles.text}>
          <div className={styles.headline}>
            <p className={styles.largeBody}>{aboutInfo.data.Headline}</p>
          </div>
          <div className={styles.info}>
            {aboutInfo.data.P1 && (
              <>
                <p className={styles.aboutText}>{aboutInfo.data.P1}</p>
                <br />
                <br />
              </>
            )}
            {aboutInfo.data.P2 && (
              <>
                <p className={styles.aboutText}>{aboutInfo.data.P2}</p>
                <br />
                <br />
              </>
            )}
            {aboutInfo.data.P3 && (
              <>
                <p className={styles.aboutText}>{aboutInfo.data.P3}</p>
                <br />
                <br />
              </>
            )}
            {aboutInfo.data.P4 && (
              <>
                <p className={styles.aboutText}>{aboutInfo.data.P4}</p>
                <br />
                <br />
              </>
            )}
            {aboutInfo.data.P5 && (
              <>
                <p className={styles.boldAboutText}>{aboutInfo.data.P5}</p>
                <br />
                <br />
              </>
            )}
            {aboutInfo.data.P6 && (
              <>
                <p className={styles.boldAboutText}>{aboutInfo.data.P6}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </FadeWrapper>
  )
}
