import React from 'react'
import Layout from '../components/common/Layout'
import Seo from '../components/seo/Seo'
import ProfileCard from '../components/profileCard/ProfileCard'

export default function Home() {
  return (
    <Layout>
      <div className='flex items-center max-w-screen-lg'>
        <ProfileCard />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />
