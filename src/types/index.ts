import { IGatsbyImageData } from 'gatsby-plugin-image'

export type node = {
  frontmatter: {
    headerImg: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
    category: string
    title: string
    slug: string
  }
  excerpt: string
}
export interface IPost {
  frontmatter: {
    title: string
    date: string
    category: string
    slug: string
    headerImg?: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  excerpt: string
}

export interface IRecentPostsQueryResult {
  allMdx: {
    nodes: node[]
  }
}
