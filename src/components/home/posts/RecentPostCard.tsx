import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { node } from '../../../types'
import Tag from '../../common/Tag'
import { navigate } from 'gatsby'

interface IRecentPostCard {
  data: node
}

export default function RecentPostCard({ data }: IRecentPostCard) {
  return (
    <div className='relative group flex flex-col items-center w-full gap-5 rounded-md h-auto border-[1px]'>
      <GatsbyImage
        className='object-cover w-full h-40 rounded-md'
        image={
          getImage(
            data.frontmatter.headerImg.childImageSharp
              .gatsbyImageData as IGatsbyImageData,
          )!
        }
        alt={data.frontmatter.title}
      />
      <h2 className='px-3 font-bold text-size-body text-[#5F6F52]'>
        {data.frontmatter.title}
      </h2>
      <span className='px-3 font-bold text-size-subbody min-h-[36px] text-medium-gray-color line-clamp-2'>
        {data.excerpt}
      </span>
      <div className='flex justify-start w-full gap-2 px-3 pb-2'>
        <Tag size='small' name={data.frontmatter.category} />
      </div>
      <div className='absolute rounded-lg flex flex-col items-center gap-3 justify-center w-full h-full opacity-0 group-hover:opacity-100 bg-[#323232]'>
        <h3 className='text-[14px] text-bold text-white'>
          {data.frontmatter.title}
        </h3>
        <button
          onClick={() => navigate(`/blog/${data.frontmatter.slug}`)}
          className='hover:bg-white hover:text-black w-2/3 border-[1px] text-bold border-white p-3 text-white border-solid rounded-lg'
        >
          상세보기
        </button>
      </div>
    </div>
  )
}
