import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { IPost } from '../../../types'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

interface IPostsListProps {
  posts: IPost[]
}

export default function PostsList({ posts }: IPostsListProps) {
  const { page, loaderRef, isLoading } = useIntersectionObserver(posts.length)
  const [visiblePosts, setVisiblePosts] = useState<IPost[]>([])

  useEffect(() => {
    setVisiblePosts(posts.slice(0, page * 5))
  }, [posts, page])

  return (
    <div className={'w-full flex flex-col items-center mt-4'}>
      {visiblePosts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
      {isLoading && <div>Loading...</div>}
      <div ref={loaderRef}></div>
    </div>
  )
}
