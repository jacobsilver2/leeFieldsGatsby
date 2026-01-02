import Airtable, { FieldSet, Records } from 'airtable'
import type {
  AirtableMusicFields,
  AirtableContactFields,
  AirtableAboutFields,
  AirtableVideoFields,
  AirtableNewsFields,
  AirtableShopFields,
  AirtableShowFields,
  MusicRecord,
  ContactRecord,
  AboutRecord,
  VideoRecord,
  NewsRecord,
  ShopRecord,
  ShowRecord,
} from '../types'

const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API

const bases = {
  music: 'app9H2woW0pkX1sAp',
  contact: 'app6qEeLArKEzLqYs',
  about: 'app6qEeLArKEzLqYs',
  videos: 'appYs2klR189DEnJM',
  news: 'app8mx3RXq0g2M7EF',
  shop: 'appbWJrpD7eQdDKdq',
  shows: 'appF7yJr2igkrU9jh',
} as const

type BaseName = keyof typeof bases

const getAirtableBase = (baseName: BaseName) => {
  const base = new Airtable({ apiKey }).base(bases[baseName])
  return base
}

export const fetchMusicData = async (): Promise<MusicRecord[]> => {
  const base = getAirtableBase('music')
  const records: Records<FieldSet> = await base('Music').select().all()

  return records.map((record): MusicRecord => {
    const fields = record.fields  as unknown as AirtableMusicFields
    return {
      id: record.id,
      title: fields.Record,
      year: fields.Year,
      image: fields.Image?.[0]?.url || '',
      imageThumb: fields.Image?.[0]?.thumbnails?.large?.url || '',
      listenLink: fields.Listen,
      bandcampLink: fields.Buy,
      order: fields.Order || 0,
    }
  }).sort((a, b) => a.order - b.order)
}

export const fetchContactData = async (): Promise<ContactRecord[]> => {
  const base = getAirtableBase('contact')
  const records: Records<FieldSet> = await base('Contact').select().all()

  return records.map((record): ContactRecord => {
    const fields = record.fields as unknown as AirtableContactFields
    return {
      id: record.id,
      agency: fields.Agency,
      email1: fields.Email1,
      name1: fields.Name1,
      order: fields.Order || 0,
      role: fields.Role,
    }
  })
}

export const fetchAboutData = async (): Promise<AboutRecord | null> => {
  const base = getAirtableBase('about')
  const records: Records<FieldSet> = await base('About').select().all()

  if (records.length > 0) {
    const record = records[0]
    const fields = record.fields as unknown as AirtableAboutFields
    return {
      id: record.id,
      headline: fields.Headline,
      p1: fields.P1,
      p2: fields.P2,
      p3: fields.P3,
      p4: fields.P4,
      p5: fields.P5,
      p6: fields.P6,
      aboutPic: fields.AboutPic?.[0]?.url || '',
      aboutPicThumb: fields.AboutPic?.[0]?.thumbnails?.large?.url || '',
    }
  }

  return null
}

export const fetchVideosData = async (): Promise<VideoRecord[]> => {
  const base = getAirtableBase('videos')
  const records: Records<FieldSet> = await base('Videos').select().all()

  return records.map((record): VideoRecord => {
    const fields = record.fields as unknown as AirtableVideoFields
    return {
      id: record.id,
      title: fields.Video_Title,
      url: fields.Video_URL,
      videoStill: fields.Video_Still?.[0]?.url || '',
      videoStillThumb: fields.Video_Still?.[0]?.thumbnails?.large?.url || '',
      order: fields.Video_Order || 0,
    }
  }).sort((a, b) => a.order - b.order)
}

export const fetchNewsData = async (): Promise<NewsRecord[]> => {
  const base = getAirtableBase('news')
  const records: Records<FieldSet> = await base('News').select().all()

  return records.map((record): NewsRecord => {
    const fields = record.fields as unknown as AirtableNewsFields
    return {
      id: record.id,
      headline: fields.Headline,
      link: fields.Link,
      listed: fields.Listed,
    }
  }).filter(item => item.listed)
}

export const fetchShopData = async (): Promise<ShopRecord[]> => {
  const base = getAirtableBase('shop')
  const records: Records<FieldSet> = await base('Shop').select({ view: 'Shop', maxRecords: 100 }).all()

  return records.map((record): ShopRecord => {
    const fields = record.fields as unknown as AirtableShopFields
    const price = fields.Price || fields.LP_Price || 0
    return {
      id: record.id,
      title: fields.Name,
      price: price.toString(),
      image: fields.Shop_Image?.[0]?.url || '',
      imageThumb: fields.Shop_Image?.[0]?.thumbnails?.large?.url || '',
      link: fields.PurchaseLink,
      category: fields.Type,
      order: fields.Order,
      preorder: fields.Preorder,
    }
  }).sort((a, b) => a.order - b.order)
}

export const fetchShowsData = async (): Promise<ShowRecord[]> => {
  const base = getAirtableBase('shows')
  const records: Records<FieldSet> = await base('Shows').select({ view: 'Future', maxRecords: 100 }).all()

  return records.map((record): ShowRecord => {
    const fields = record.fields as unknown as AirtableShowFields
    return {
      id: record.id,
      date: fields.Date,
      venue: fields.Venue,
      location: fields.Location,
      ticketLink: fields.URL,
      active: fields.Listed,
    }
  }).filter(item => item.active)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
