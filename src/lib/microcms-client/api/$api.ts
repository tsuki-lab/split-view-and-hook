/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './blog'
// prettier-ignore
import { Methods as Methods1 } from './blog/_contentId@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/blog'
  const GET = 'GET'

  return {
    blog: {
      _contentId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
