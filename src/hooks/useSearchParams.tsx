import { useState, useEffect } from 'react'

interface IQueryParams {
  category?: string
  value?: string
}

export default function useSearchParams() {
  const [queryParams, setQueryParams] = useState<IQueryParams>({})

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const params: IQueryParams = {}
    for (const [key, value] of searchParams.entries()) {
      params[key as keyof IQueryParams] = value
      setQueryParams(params)
    }
  }, [window.location.search])
  return queryParams
}
