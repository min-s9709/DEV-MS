import React from 'react'
import Seo from '../../components/seo/Seo'
import { graphql } from 'gatsby'
import Layout from '../../components/common/Layout'
import MarkDownProvider from '../../components/blog/post/MarkDownProvider'
import PostHeader from '../../components/blog/post/PostHeader'
import PostNavigator from '../../components/blog/post/PostNavigator'
import PostProfile from '../../components/blog/post/PostProfile'

interface IPostDetail {
  data: Queries.PostDetailQuery
  children: JSX.Element
}

interface IEdge {
  next?: {
    frontmatter: {
      title: string
      slug: string
    }
  }
  previous?: {
    frontmatter: {
      title: string
      slug: string
    }
  }
  node: {
    frontmatter: {
      slug: string
    }
  }
}

export default function PostDetail({ data, children }: IPostDetail) {
  const { post, nextAndPrevious } = data
  const edges = nextAndPrevious.edges as IEdge[]

  const edge = edges.find(
    (item) => item.node.frontmatter?.slug === post?.frontmatter?.slug,
  )

  const previous = edge?.previous
  const next = edge?.next
  return (
    <Layout>
      <div className={'xl:min-w-[900px] flex flex-col items-center w-4/6 pb-7'}>
        <PostHeader
          title={post?.frontmatter?.title || 'untitled'}
          date={post?.frontmatter?.date || 'untitled'}
          category={post?.frontmatter?.category || 'untitled'}
        />
        <MarkDownProvider>{children}</MarkDownProvider>
        <PostProfile />
        <PostNavigator previous={previous} next={next} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        author
        category
        date
        slug
        headerImg {
          childImageSharp {
            gatsbyImageData(height: 250, placeholder: BLURRED)
          }
        }
      }
      body
    }
    nextAndPrevious: allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        next {
          frontmatter {
            title
            slug
          }
        }
        previous {
          frontmatter {
            slug
            title
          }
        }
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title='post-detail' />
