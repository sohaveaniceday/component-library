import { useState, useEffect } from 'react'

export const useInfiniteScroll = (callback: Function) => {
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    callback()
  }, [isFetching])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return
    setIsFetching(true)
  }

  return [isFetching, setIsFetching]
}
