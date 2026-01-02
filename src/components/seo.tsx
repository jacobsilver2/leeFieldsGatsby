import Head from "next/head"

const siteMetadata = {
  title: 'Lee Fields',
  description: 'Lee Fields & The Expressions homepage',
  author: 'Jacob Silver',
  siteUrl: 'https://www.leefieldsandtheexpressions.com',
}

interface MetaTag {
  name?: string
  property?: string
  content: string
}

interface MetaImage {
  src: string
  width: number
  height: number
}

interface SEOProps {
  description?: string
  lang?: string
  meta?: MetaTag[]
  title: string
  image?: MetaImage
}

export function SEO({ description = '', lang = 'en', meta = [], title, image: metaImage }: SEOProps) {
  const metaDescription = description || siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${siteMetadata.siteUrl}${metaImage.src}`
      : null

  return (
    <Head>
      <title>{title ? `${title} | ${siteMetadata.title}` : siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={metaImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && (
        <>
          <meta property="og:image" content={image || ''} />
          <meta property="og:image:width" content={metaImage.width.toString()} />
          <meta property="og:image:height" content={metaImage.height.toString()} />
        </>
      )}
      {meta && meta.length > 0 && meta.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
    </Head>
  )
}
