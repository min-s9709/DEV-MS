import React from 'react'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: 'easeInOut', y: { duration: 0.5 }, duration: 1.3 }}
      className='grid grid-cols-3 gap-4 max-sm:grid-cols-1'
    >
      {data.allMdx.nodes.map((item, index) => (
        <RecentPostCard key={index} data={item} />
      ))}
    </motion.div>
  )
}
