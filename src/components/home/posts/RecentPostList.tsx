import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IRecentPostsQueryResult } from '../../../types'
import RecentPostCard from './RecentPostCard'

export default function RecentPostList() {
  const data: IRecentPostsQueryResult = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
        nodes {
          frontmatter {
            headerImg {
              childImageSharp {
                gatsbyImageData(width: 400, height: 225, placeholder: BLURRED)
              }
            }
            category
            slug
            title
          }
          excerpt
        }
      }
    }
  `)
  return (
    <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-1'>
      {data.allMdx.nodes.map((item, index) => (
        <RecentPostCard key={index} data={item} />
      ))}
    </div>
  )
}
