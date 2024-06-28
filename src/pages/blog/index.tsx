import React from 'react'
import Layout from '../../components/common/Layout'
import Seo from '../../components/seo/Seo'
import Banner from '../../components/blog/banner/Banner'
import useSearchParams from '../../hooks/useSearchParams'
import CategoryHeader from '../../components/blog/category/CategoryHeader'
import Categories from '../../components/blog/category/Categories'
import { PageProps, graphql } from 'gatsby'
import PostsList from '../../components/blog/post/PostsList'
import { IPost } from '../../types'

export default function Blog({ data }: PageProps<Queries.PostListQuery>) {
  const { category } = useSearchParams()
  const allPosts = data.allMdx.nodes as readonly IPost[]
  const posts: IPost[] =
    category === 'All' || category === undefined
      ? (allPosts as IPost[])
      : (allPosts.filter(
          (post) => post.frontmatter?.category === category,
        ) as IPost[])
  return (
    <Layout>
      <div className={'flex flex-col items-center'}>
        <Banner />
        <div className={'w-4/6 mt-9 min-h-screen'}>
          <CategoryHeader count={posts.length} category={category} />
          <Categories category={category || 'All'} />
          <PostsList posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostList {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          author
          category
          date
          slug
          title
          headerImg {
            childImageSharp {
              gatsbyImageData(height: 176, placeholder: BLURRED)
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`

export const Head = () => <Seo title='Blog' />
