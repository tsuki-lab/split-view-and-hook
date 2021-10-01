export type BlogContent = MicroCMSContent<{
  title: string,
  body: string
}>

export type Methods = {
  get: {
    query?: MicroCMSContentQuery,
    resBody: BlogContent
  }
}
