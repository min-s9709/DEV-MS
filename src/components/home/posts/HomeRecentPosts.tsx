import React from 'react'
import Title from '../../common/Title'
import Navbutton from '../../common/Navbutton'
import RecentPostList from './RecentPostList'

export default function HomeRecentPosts() {
  return (
    <>
      <Title>Posts</Title>
      <Navbutton destination='/blog' content='다른 블로그 포스트 보러가기' />
      <RecentPostList />
    </>
  )
}
