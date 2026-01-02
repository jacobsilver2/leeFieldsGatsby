import { type ImgHTMLAttributes } from "react"
import Image from "next/image"

interface ImageData {
  extension?: string
  publicURL?: string
  childImageSharp?: {
    fluid?: {
      src: string
    }
  }
}

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  image: ImageData | string
  alt?: string
}

export function OptimizedImage({ image, alt = "", ...theRest }: OptimizedImageProps) {
  if (!image) {
    return null
  }

  if (typeof image !== 'string' && image.extension === "gif") {
    return <img src={image.publicURL} alt={alt} {...theRest} />
  }

  const src = typeof image === 'string' ? image : (image.childImageSharp?.fluid?.src || '')

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        {...theRest}
      />
    </div>
  )
}
