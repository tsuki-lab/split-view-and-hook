import { microcmsClient } from '@/lib/microcms-client'
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

type Params = {
  contentId: string
}

export type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async(context: GetStaticPropsContext<Params>) => {
  const contentId = context.params?.contentId

  if (!contentId) throw Error('undefined contentId')

  const data = await microcmsClient.blog._contentId(contentId).$get()
  return {
    props: {
      ...data
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async() => {
  const data = await microcmsClient.blog.$get()
  const paths = data.contents.map(content => ({params: {contentId: content.id}}))

  return {
    paths,
    fallback: true
  }
}
