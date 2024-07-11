import { IGatsbyImageData } from 'gatsby-plugin-image'

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
