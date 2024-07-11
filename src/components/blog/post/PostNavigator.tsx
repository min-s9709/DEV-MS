import { Link } from 'gatsby'
import React from 'react'

interface IPostNavigator {
  previous?: {
    frontmatter: {
      title: string
      slug: string
    }
  }
  next?: {
    frontmatter: {
      title: string
      slug: string
    }
  }
}
export default function PostNavigator({ previous, next }: IPostNavigator) {
  return (
    <div className={'grid grid-cols-2 gap-3 w-full'}>
      <div className={'w-full mr-auto'}>
        {previous && (
          <Link
            to={`/blog/${previous.frontmatter?.slug}`}
            className={
              'flex flex-col w-full h-24 border-[1px] bg-[#F7F8FA] hover:bg-[#EEEFF1] rounded-md p-3'
            }
          >
            <h2 className={'text-dark-gray-color'}>이전 포스트</h2>
            <h2 className={'line-clamp-2'}>{previous.frontmatter?.title}</h2>
          </Link>
        )}
      </div>
      <div className={'w-full ml-auto'}>
        {next && (
          <Link
            className={
              'flex flex-col w-full h-24 border-[1px] bg-[#F7F8FA] hover:bg-[#EEEFF1] rounded-md p-3'
            }
            to={`/blog/${next.frontmatter?.slug}`}
          >
            <h2 className={'text-dark-gray-color'}>다음 포스트</h2>
            <h2 className={'line-clamp-2'}>{next.frontmatter?.title}</h2>
          </Link>
        )}
      </div>
    </div>
  )
}
