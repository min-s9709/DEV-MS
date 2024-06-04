import React from 'react'
import type { HeadFC } from 'gatsby'

export default function IndexPage() {
  return <h1>blog</h1>
}

export const Head: HeadFC = () => <title>Home Page</title>
