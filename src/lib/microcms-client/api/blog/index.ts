import { BlogContent } from './_contentId@string'

export type Methods = {
  get: {
    query?: MicroCMSContentsQuery,
    resBody: MicroCMSContents<BlogContent>
  }
}
