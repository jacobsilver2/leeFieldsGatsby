declare module 'is_js' {
  interface IsStatic {
    email: (value: string) => boolean
    url: (value: string) => boolean
    empty: (value: unknown) => boolean
    not: {
      empty: (value: unknown) => boolean
      [key: string]: unknown
    }
    [key: string]: unknown
  }

  const is: IsStatic
  export default is
}
