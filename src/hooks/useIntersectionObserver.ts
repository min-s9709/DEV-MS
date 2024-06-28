import { useEffect, useRef, useState } from 'react'

export default function useIntersectionObserver(
  postsLength: number,
  itemsPerPage: number = 3,
) {
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true)
          setPage((prevPage) => {
            if (prevPage * itemsPerPage >= postsLength) {
              setIsLoading(false)
              return prevPage
            }
            return prevPage + 1
          })
        }
      },
      {
        threshold: 1.0,
      },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [loaderRef])

  useEffect(() => {
    if (page * itemsPerPage >= postsLength) {
      setIsLoading(false)
    }
  }, [page, postsLength, itemsPerPage])

  return { page, loaderRef, isLoading }
}
