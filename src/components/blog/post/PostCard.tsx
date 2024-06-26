import React from 'react'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { IPost } from '../../../types'

interface IPostCard {
  post: IPost
}

export default function PostCard({ post }: IPostCard) {
  return (
    <div className={'w-full h-44 flex mb-2 border-b-[1px] p-2'}>
      <div className={'flex flex-col w-3/4 h-full justify-between'}>
        <h1 className={'font-bold text-size-big-title'}>
          {post.frontmatter.title}
        </h1>
        <p className={'text-size-body text-dark-gray-color'}>{post.excerpt}</p>
        <h5 className={'text-size-subbody text-dark-gray-color'}>
          {post.frontmatter.date}
        </h5>
        <div className={'w-fit bg-c-light-color text-center rounded-xl'}>
          <h3 className={'px-2 py-1 text-c-green-color text-size-subbody'}>
            {post.frontmatter.category}
          </h3>
        </div>
      </div>
      <div className={'w-1/4 h-full'}>
        {post.frontmatter?.headerImg ? (
          <GatsbyImage
            image={
              getImage(
                post.frontmatter?.headerImg.childImageSharp
                  ?.gatsbyImageData as IGatsbyImageData,
              )!
            }
            alt={post.frontmatter.title}
            className={'object-cover w-full h-full'}
          />
        ) : (
          <div className={'w-full h-full bg-light-gray-color'}></div>
        )}
      </div>
    </div>
  )
}
