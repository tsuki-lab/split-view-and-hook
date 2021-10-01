import { microcmsClient } from '@/lib/microcms-client'

export const getStaticProps = async() => {
  const data = await microcmsClient.blog.$get()
  return {
    props: {
      ...data
    }
  }
}
