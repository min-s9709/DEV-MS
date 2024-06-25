import React from 'react'
import Layout from '../../components/common/Layout'
import Seo from '../../components/seo/Seo'
import Banner from '../../components/blog/banner/Banner'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import useSearchParams from '../../hooks/useSearchParams'
import CategoryHeader from '../../components/blog/category/CategoryHeader'
import Categories from '../../components/blog/category/Categories'
import { PageProps, graphql } from 'gatsby'

export default function Blog({ data }: PageProps<Queries.PostListQuery>) {
  const { category } = useSearchParams()
  const posts = category
    ? data.allMdx.nodes.filter(
        (post) => post.frontmatter?.category === category,
      )
    : data.allMdx.nodes

  return (
    <Layout>
      <div className={'flex flex-col items-center'}>
        <Banner />

        <div className={'w-4/6 mt-9'}>
          {/* 카테고리 */}
          <CategoryHeader count={posts.length} category={category} />
          <Categories category={category} />

          {/*블로그 포스트 카드 리스트*/}
          <div className={'w-full flex flex-col items-center mt-4'}>
            {posts.map((post, index) => (
              <div
                key={index}
                className={'w-full h-44 flex mb-2 border-b-[1px] p-2'}
              >
                <div className={'flex flex-col w-3/4 h-full justify-between'}>
                  <h1 className={'font-bold text-size-big-title'}>
                    {post.frontmatter?.title}
                  </h1>
                  <p className={'text-size-body text-dark-gray-color'}>
                    {post.excerpt}
                  </p>
                  <h5 className={'text-size-subbody text-dark-gray-color'}>
                    {post.frontmatter?.date}
                  </h5>
                  <div
                    className={'w-fit bg-c-light-color text-center rounded-xl'}
                  >
                    <h3
                      className={
                        'px-2 py-1 text-c-green-color text-size-subbody'
                      }
                    >
                      {post.frontmatter?.category}
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
                      alt={post.frontmatter?.title || 'image'}
                      className={'object-cover w-full h-full'}
                    />
                  ) : (
                    <div className={'w-full h-full bg-light-gray-color'}></div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
