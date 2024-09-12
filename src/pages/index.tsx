import React from 'react'
import Layout from '../components/common/Layout'
import Seo from '../components/seo/Seo'
import ProfileCard from '../components/home/profileCard/ProfileCard'
import About from '../components/home/about/About'
import HomeProject from '../components/home/projects/HomeProject'
import HomeRecentPosts from '../components/home/posts/HomeRecentPosts'
import Section from '../components/home/section/Section'

export default function Home() {
  return (
    <Layout>
      <div className='w-full mx-auto'>
        <Section type='main'>
          <ProfileCard />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <HomeProject />
        </Section>
        <Section>
          <HomeRecentPosts />
        </Section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />
