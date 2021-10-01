type MicroCMSContent<T> = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string
} & T

type MicroCMSContents<T> = {
  contents: T[],
  totalCount: number,
  offset: number,
  limit: number
}

type MicroCMSContentQuery = {
  draftKey?: string,
  fields?: string,
  depth?: number
}

type MicroCMSContentsQuery = {
  draftKey?: string,
  offset?: number,
  limit?: number,
  orders?: string,
  q?: string,
  fields?: string,
  ids?: string,
  filters?: string,
  depth?: number
}
