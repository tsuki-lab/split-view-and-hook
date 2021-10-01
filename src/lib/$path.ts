/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  blog: {
    _contentId: (contentId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[contentId]' as const, query: { contentId }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
