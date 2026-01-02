// Airtable Field Types
export interface AirtableMusicFields {
  Record: string
  Year: string
  Image?: Array<{
    url: string
    thumbnails?: {
      large?: {
        url: string
      }
    }
  }>
  Listen: string
  Buy: string
  Order?: number
}

export interface AirtableContactFields {
  Agency: string
  Email1: string
  Name1: string
  Order?: number
  Role: string
}

export interface AirtableAboutFields {
  Headline: string
  P1: string
  P2?: string
  P3?: string
  P4?: string
  P5?: string
  P6?: string
  AboutPic?: Array<{
    url: string
    thumbnails?: {
      large?: {
        url: string
      }
    }
  }>
}

export interface AirtableVideoFields {
  Video_Title: string
  Video_URL: string
  Video_Still?: Array<{
    url: string
    thumbnails?: {
      large?: {
        url: string
      }
    }
  }>
  Video_Order?: number
}

export interface AirtableNewsFields {
  Headline: string
  Link: string
  Listed: boolean
}

export interface AirtableShopFields {
  Name: string
  Price?: number
  LP_Price?: number
  CD_Price?: number
  Shop_Image?: Array<{
    url: string
    thumbnails?: {
      large?: {
        url: string
      }
    }
  }>
  PurchaseLink: string
  Type: string
  Order: number
  Preorder?: boolean
}

export interface AirtableShowFields {
  Date: string
  Venue: string
  Location: string
  URL: string
  Listed: boolean
}

// Transformed Response Types
export interface MusicRecord {
  id: string
  title: string
  year: string
  image: string
  imageThumb: string
  listenLink: string
  bandcampLink: string
  order: number
}

export interface ContactRecord {
  id: string
  agency: string
  email1: string
  name1: string
  order: number
  role: string
}

export interface AboutRecord {
  id: string
  headline: string
  p1: string
  p2?: string
  p3?: string
  p4?: string
  p5?: string
  p6?: string
  aboutPic: string
  aboutPicThumb: string
}

export interface VideoRecord {
  id: string
  title: string
  url: string
  videoStill: string
  videoStillThumb: string
  order: number
}

export interface NewsRecord {
  id: string
  headline: string
  link: string
  listed: boolean
}

export interface ShopRecord {
  id: string
  title: string
  price: string
  image: string
  imageThumb: string
  link: string
  category: string
  order: number
  preorder?: boolean
}

export interface ShowRecord {
  id: string
  date: string
  venue: string
  location: string
  ticketLink: string
  active: boolean
}

// Formatted Data Types (for components)
export interface ImageSharp {
  fluid: {
    src: string
    srcSet: string
    aspectRatio?: number
  }
}

export interface LocalFile {
  childImageSharp: ImageSharp
}

export interface FormattedMusicData {
  allAirtable: {
    edges: Array<{
      node: {
        id: string
        data: {
          Record: string
          Listen: string
          Order: number
          Year: string
          Buy: string
          Preorder: null
          Image: {
            localFiles: LocalFile[]
          }
        }
      }
    }>
  }
}

export interface FormattedContactData {
  edges: Array<{
    node: {
      id: string
      data: {
        Agency: string
        Email1: string
        Email2: null
        Name1: string
        Name2: null
        Role: string
        Order: number
      }
    }
  }>
}

export interface FormattedAboutData {
  edges: Array<{
    node: {
      id: string
      data: {
        Headline: string
        P1: string
        P2?: string | null
        P3?: string | null
        P4?: string | null
        P5?: string | null
        P6?: string | null
        AboutPic: {
          localFiles: LocalFile[]
        }
      }
    }
  }>
}

export interface InfoData {
  contact: FormattedContactData
  about: FormattedAboutData
}

// Context Types
export interface GlobalState {
  isMuted: boolean
  navButtonActive: string
  secondaryMenuActive: boolean
  cnnInView: boolean
  mobileLogoOverride: boolean
  tickerIsVisible: boolean
  videoModalOpen: boolean
}

export type GlobalAction =
  | { type: 'CLOSE_NAV_BUTTON' }
  | { type: 'TOGGLE_SECONDARY_MENU' }
  | { type: 'SECONDARY_MENU_OFF' }
  | { type: 'SECONDARY_MENU_ON' }
  | { type: 'CNN_OFF' }
  | { type: 'CNN_ON' }
  | { type: 'TICKER_OFF' }
  | { type: 'TICKER_ON' }
  | { type: 'MOBILE_LOGO_OVERRIDE' }
  | { type: 'MOBILE_LOGO_OVERRIDE_OFF' }

// Hook Types
export interface WindowSize {
  width: number
  height: number
}
