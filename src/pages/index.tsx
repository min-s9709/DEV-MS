import React from 'react'
import type { HeadFC } from 'gatsby'
import Layout from '../components/common/Layout'

export default function IndexPage() {
  return <Layout></Layout>
}

export const Head: HeadFC = () => <title>Home Page</title>
