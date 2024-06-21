import React from 'react'
import Layout from '../../components/common/Layout'
import Seo from '../../components/seo/Seo'
import Banner from '../../components/blog/Banner'
import { StaticImage } from 'gatsby-plugin-image'
import useSearchParams from '../../hooks/useSearchParams'
import CategoryHeader from '../../components/blog/category/CategoryHeader'
import Categories from '../../components/blog/category/Categories'

export default function Blog() {
  const { category } = useSearchParams()
  console.log(category)
  return (
    <Layout>
      <div className={'flex flex-col items-center'}>
        <Banner />

        <div className={'w-4/6 mt-9'}>
          {/* 카테고리 */}
          <CategoryHeader category={category} />

          <div className={'w-full flex justify-start py-4 overflow-x-scroll'}>
            <Categories category={category} />
          </div>

          {/*블로그 포스트 카드 리스트*/}
          <div className={'w-full flex flex-col items-center mt-4'}>
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <div
                  key={index}
                  className={'w-full h-44 flex mb-2 border-b-[1px] p-2'}
                >
                  <div className={'flex flex-col w-3/4 h-full justify-between'}>
                    <h1 className={'font-bold text-size-big-title'}>
                      제목{item}
                    </h1>
                    <p className={'text-size-body text-dark-gray-color'}>
                      본문의 내용에 대한 이야기입니다~~~~~~~~~~~~~~~~~~~~~~~~
                    </p>
                    <h5 className={'text-size-subbody text-dark-gray-color'}>
                      2024-06-16
                    </h5>
                    <div
                      className={
                        'w-fit bg-c-light-color text-center rounded-xl'
                      }
                    >
                      <h3
                        className={
                          'px-2 py-1 text-c-green-color text-size-subbody'
                        }
                      >
                        React
                      </h3>
                    </div>
                  </div>
                  <div className={'w-1/4 bg-slate-600 h-full'}>
                    <StaticImage
                      src='../../images/BlogBanner.jpg'
                      alt='post-image'
                      className={'object-cover w-full h-full'}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='Blog' />
