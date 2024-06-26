import React from 'react'
import PostCard from './PostCard'
import { IPost } from '../../../types'

interface IPostsListProps {
  posts: IPost[]
}

export default function PostsList({ posts }: IPostsListProps) {
  return (
    <div className={'w-full flex flex-col items-center mt-4'}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  )
}
