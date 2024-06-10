import React from 'react'
import Layout from '../../components/common/Layout'
import Seo from '../../components/seo/Seo'

export default function Blog() {
  return (
    <Layout>
      <div className={'lg:w-[1260px] '}></div>
    </Layout>
  )
}

export const Head = () => <Seo title-='Blog' />
