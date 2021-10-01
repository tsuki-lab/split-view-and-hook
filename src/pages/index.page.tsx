import { pagesPath } from '@/lib/$path'
import { microcmsClient } from '@/lib/microcms-client'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'

const PageComponent: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <div>
      <main>
        <h1>
          Blog
        </h1>
        <p>{props.totalCount}件</p>
        <ul>
          {props.contents.map(content => (
            <li key={content.id}>
              <Link href={pagesPath.blog._contentId(content.id).$url()}>
                <a>{content.title}</a>
              </Link>
            </li>
          ))}
        </ul>

      </main>
    </div>
  )
}

export const getStaticProps = async() => {
  const data = await microcmsClient.blog.$get()
  return {
    props: {
      ...data
    }
  }
}

export default PageComponent
