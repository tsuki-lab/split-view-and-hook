import type { NextPage } from 'next'
import {getStaticPaths, getStaticProps, Props} from './[contentId].hook'

const PageComponent: NextPage<Props> = (props) => {
  return (
    <div>
      <main>
        <h1>
          {props.title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: props.body}} />
      </main>
    </div>
  )
}

export default PageComponent
export {getStaticProps, getStaticPaths}
